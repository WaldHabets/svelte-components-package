import { SvelteComponentTyped } from "svelte";
import type Modal from "./modal";
declare const __propDef: {
    props: {
        /** Properties */ title?: string | undefined;
        showSheet?: boolean | undefined;
        sheet?: Modal | undefined;
    };
    events: {
        keyup: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ModalActionProps = typeof __propDef.props;
export declare type ModalActionEvents = typeof __propDef.events;
export declare type ModalActionSlots = typeof __propDef.slots;
export default class ModalAction extends SvelteComponentTyped<ModalActionProps, ModalActionEvents, ModalActionSlots> {
    get sheet(): Modal;
}
export {};
