import { SvelteComponentTyped } from "svelte";
import type Modal from "./modal";
declare const __propDef: {
    props: {
        /** Properties */ title?: string | undefined;
        showModal?: boolean | undefined;
        param?: object | undefined;
        cancelAction?: string | undefined;
        negativeAction?: string | false | undefined;
        positiveAction?: string | false | undefined;
        modal?: Modal | undefined;
    };
    events: {
        cancel: CustomEvent<any>;
        negative: CustomEvent<any>;
        positive: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ModalAlertProps = typeof __propDef.props;
export declare type ModalAlertEvents = typeof __propDef.events;
export declare type ModalAlertSlots = typeof __propDef.slots;
export default class ModalAlert extends SvelteComponentTyped<ModalAlertProps, ModalAlertEvents, ModalAlertSlots> {
    get modal(): Modal;
}
export {};
