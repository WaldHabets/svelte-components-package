import { SvelteComponentTyped } from "svelte";
import type Modal from "./modal";
declare const __propDef: {
    props: {
        /** Properties */ title?: string | undefined;
        showModal?: boolean | undefined;
        param?: object | undefined;
        cancelAction?: string | undefined;
        selectAction?: string | undefined;
        modal?: Modal | undefined;
    };
    events: {
        cancel: CustomEvent<any>;
        select: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ModalPickerProps = typeof __propDef.props;
export declare type ModalPickerEvents = typeof __propDef.events;
export declare type ModalPickerSlots = typeof __propDef.slots;
export default class ModalPicker extends SvelteComponentTyped<ModalPickerProps, ModalPickerEvents, ModalPickerSlots> {
    get modal(): Modal;
}
export {};
