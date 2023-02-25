import { SvelteComponentTyped } from "svelte";
import type Modal from "./modal";
declare const __propDef: {
    props: {
        /** Properties */ title?: string | undefined;
        param?: object | null | undefined;
        cancelAction?: string | false | undefined;
        negativeAction?: string | false | undefined;
        positiveAction?: string | false | undefined;
        modal?: Modal | undefined;
    };
    events: {
        keyup: KeyboardEvent;
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
