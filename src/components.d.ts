/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AbcAlert {
        "content": string;
        "open": () => Promise<void>;
        "opened": boolean;
        "title": string;
        "type": string;
    }
    interface AbcButton {
        "color": string;
    }
    interface AbcIcon {
        "icon": string;
        "position": string;
    }
    interface AbcModal {
        "close": () => Promise<void>;
        "open": () => Promise<void>;
        "opened": boolean;
    }
    interface AbcModalBody {
    }
    interface AbcModalFooter {
    }
    interface AbcModalHeader {
    }
    interface AbcParagraph {
        "color": string;
    }
    interface AbcTitle {
        "color": string;
    }
}
declare global {
    interface HTMLAbcAlertElement extends Components.AbcAlert, HTMLStencilElement {
    }
    var HTMLAbcAlertElement: {
        prototype: HTMLAbcAlertElement;
        new (): HTMLAbcAlertElement;
    };
    interface HTMLAbcButtonElement extends Components.AbcButton, HTMLStencilElement {
    }
    var HTMLAbcButtonElement: {
        prototype: HTMLAbcButtonElement;
        new (): HTMLAbcButtonElement;
    };
    interface HTMLAbcIconElement extends Components.AbcIcon, HTMLStencilElement {
    }
    var HTMLAbcIconElement: {
        prototype: HTMLAbcIconElement;
        new (): HTMLAbcIconElement;
    };
    interface HTMLAbcModalElement extends Components.AbcModal, HTMLStencilElement {
    }
    var HTMLAbcModalElement: {
        prototype: HTMLAbcModalElement;
        new (): HTMLAbcModalElement;
    };
    interface HTMLAbcModalBodyElement extends Components.AbcModalBody, HTMLStencilElement {
    }
    var HTMLAbcModalBodyElement: {
        prototype: HTMLAbcModalBodyElement;
        new (): HTMLAbcModalBodyElement;
    };
    interface HTMLAbcModalFooterElement extends Components.AbcModalFooter, HTMLStencilElement {
    }
    var HTMLAbcModalFooterElement: {
        prototype: HTMLAbcModalFooterElement;
        new (): HTMLAbcModalFooterElement;
    };
    interface HTMLAbcModalHeaderElement extends Components.AbcModalHeader, HTMLStencilElement {
    }
    var HTMLAbcModalHeaderElement: {
        prototype: HTMLAbcModalHeaderElement;
        new (): HTMLAbcModalHeaderElement;
    };
    interface HTMLAbcParagraphElement extends Components.AbcParagraph, HTMLStencilElement {
    }
    var HTMLAbcParagraphElement: {
        prototype: HTMLAbcParagraphElement;
        new (): HTMLAbcParagraphElement;
    };
    interface HTMLAbcTitleElement extends Components.AbcTitle, HTMLStencilElement {
    }
    var HTMLAbcTitleElement: {
        prototype: HTMLAbcTitleElement;
        new (): HTMLAbcTitleElement;
    };
    interface HTMLElementTagNameMap {
        "abc-alert": HTMLAbcAlertElement;
        "abc-button": HTMLAbcButtonElement;
        "abc-icon": HTMLAbcIconElement;
        "abc-modal": HTMLAbcModalElement;
        "abc-modal-body": HTMLAbcModalBodyElement;
        "abc-modal-footer": HTMLAbcModalFooterElement;
        "abc-modal-header": HTMLAbcModalHeaderElement;
        "abc-paragraph": HTMLAbcParagraphElement;
        "abc-title": HTMLAbcTitleElement;
    }
}
declare namespace LocalJSX {
    interface AbcAlert {
        "content"?: string;
        "opened"?: boolean;
        "title"?: string;
        "type"?: string;
    }
    interface AbcButton {
        "color"?: string;
    }
    interface AbcIcon {
        "icon"?: string;
        "position"?: string;
    }
    interface AbcModal {
        "opened"?: boolean;
    }
    interface AbcModalBody {
    }
    interface AbcModalFooter {
    }
    interface AbcModalHeader {
    }
    interface AbcParagraph {
        "color"?: string;
    }
    interface AbcTitle {
        "color"?: string;
    }
    interface IntrinsicElements {
        "abc-alert": AbcAlert;
        "abc-button": AbcButton;
        "abc-icon": AbcIcon;
        "abc-modal": AbcModal;
        "abc-modal-body": AbcModalBody;
        "abc-modal-footer": AbcModalFooter;
        "abc-modal-header": AbcModalHeader;
        "abc-paragraph": AbcParagraph;
        "abc-title": AbcTitle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "abc-alert": LocalJSX.AbcAlert & JSXBase.HTMLAttributes<HTMLAbcAlertElement>;
            "abc-button": LocalJSX.AbcButton & JSXBase.HTMLAttributes<HTMLAbcButtonElement>;
            "abc-icon": LocalJSX.AbcIcon & JSXBase.HTMLAttributes<HTMLAbcIconElement>;
            "abc-modal": LocalJSX.AbcModal & JSXBase.HTMLAttributes<HTMLAbcModalElement>;
            "abc-modal-body": LocalJSX.AbcModalBody & JSXBase.HTMLAttributes<HTMLAbcModalBodyElement>;
            "abc-modal-footer": LocalJSX.AbcModalFooter & JSXBase.HTMLAttributes<HTMLAbcModalFooterElement>;
            "abc-modal-header": LocalJSX.AbcModalHeader & JSXBase.HTMLAttributes<HTMLAbcModalHeaderElement>;
            "abc-paragraph": LocalJSX.AbcParagraph & JSXBase.HTMLAttributes<HTMLAbcParagraphElement>;
            "abc-title": LocalJSX.AbcTitle & JSXBase.HTMLAttributes<HTMLAbcTitleElement>;
        }
    }
}