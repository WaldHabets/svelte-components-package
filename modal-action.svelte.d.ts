import { SvelteComponentTyped } from "svelte";
import type Modal from "./modal";
declare const __propDef: {
    props: {
        /** Properties */ title?: string | undefined;
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
export type ModalActionProps = typeof __propDef.props;
export type ModalActionEvents = typeof __propDef.events;
export type ModalActionSlots = typeof __propDef.slots;
export default class ModalAction extends SvelteComponentTyped<ModalActionProps, ModalActionEvents, ModalActionSlots> {
    get sheet(): Modal;
}
export {};
