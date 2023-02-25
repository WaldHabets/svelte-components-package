import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Properties */ title?: string | undefined;
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
export declare type ModalBaseProps = typeof __propDef.props;
export declare type ModalBaseEvents = typeof __propDef.events;
export declare type ModalBaseSlots = typeof __propDef.slots;
export default class ModalBase extends SvelteComponentTyped<ModalBaseProps, ModalBaseEvents, ModalBaseSlots> {
}
export {};
