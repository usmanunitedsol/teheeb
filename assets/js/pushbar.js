document.addEventListener('DOMContentLoaded', function(){
    class Pushbar {
        constructor(config = { overlay: true, blur: false }) {
            this.activeId = null;
            this.activeElement = null;
            this.overlayElement = null;
            this.config = config;

            if (config.blur) {
                this.applyBlurEffect();
            }
            this.bindEvents();
        }

        applyBlurEffect() {
            const mainContent = document.querySelector('.pushbar_main_content');
            if (mainContent) {
                mainContent.classList.add('pushbar_blur');
            }
        }

        createOverlayElement() {
            if (this.config.overlay && !this.overlayElement) {
                this.overlayElement = document.createElement('div');
                this.overlayElement.classList.add('pushbar_overlay');
                document.querySelector('header').appendChild(this.overlayElement);
                this.overlayElement.addEventListener('click', e => this.handleCloseEvent(e), false);
            }
        }

        removeOverlayElement() {
            if (this.overlayElement) {
                this.overlayElement.removeEventListener('click', e => this.handleCloseEvent(e), false);
                this.overlayElement.remove();
                this.overlayElement = null;
            }
        }

        emitOpening() {
            const event = new CustomEvent('pushbar_opening', { bubbles: true, detail: { element: this.activeElement, id: this.activeId } });
            this.activeElement.dispatchEvent(event);
        }

        emitClosing() {
            const event = new CustomEvent('pushbar_closing', { bubbles: true, detail: { element: this.activeElement, id: this.activeId } });
            this.activeElement.dispatchEvent(event);
        }

        handleOpenEvent(e) {
            e.preventDefault();
            const pushbarId = e.currentTarget.getAttribute('data-pushbar-target');
            this.open(pushbarId);
        }

        handleCloseEvent(e) {
            e.preventDefault();
            this.close();
        }

        handleKeyEvent(e) {
            if (e.keyCode === 27) this.close();
        }

        bindEvents() {
            const triggers = document.querySelectorAll('[data-pushbar-target]');
            const closers = document.querySelectorAll('[data-pushbar-close]');
            triggers.forEach(trigger => trigger.addEventListener('click', e => this.handleOpenEvent(e), false));
            closers.forEach(closer => closer.addEventListener('click', e => this.handleCloseEvent(e), false));
            document.addEventListener('keyup', e => this.handleKeyEvent(e));
        }

        open(pushbarId) {
            if (this.activeId === String(pushbarId) || !pushbarId) return;
            if (this.activeId && this.activeId !== String(pushbarId)) this.close();
            this.activeId = pushbarId;
            this.activeElement = document.querySelector(`[data-pushbar-id="${this.activeId}"]`);
            if (!this.activeElement) return;
            this.createOverlayElement();
            this.emitOpening();
            this.activeElement.classList.add('opened');
            const pageRootElement = document.querySelector('html');
            pageRootElement.classList.add('pushbar_locked');
            pageRootElement.setAttribute('pushbar', pushbarId);
        }

        close() {
            if (!this.activeId) return;
            this.emitClosing();
            this.activeElement.classList.remove('opened');
            const pageRootElement = document.querySelector('html');
            pageRootElement.classList.remove('pushbar_locked');
            pageRootElement.removeAttribute('pushbar');
            this.activeId = null;
            this.activeElement = null;
            this.removeOverlayElement();
        }
    }

    const pushbar = new Pushbar({
        blur: true,
        overlay: true,
    });
});
