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
export type ModalBaseProps = typeof __propDef.props;
export type ModalBaseEvents = typeof __propDef.events;
export type ModalBaseSlots = typeof __propDef.slots;
export default class ModalBase extends SvelteComponentTyped<ModalBaseProps, ModalBaseEvents, ModalBaseSlots> {
}
export {};
