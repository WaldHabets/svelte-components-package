import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        show?: (() => void) | undefined;
        hide?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        content: {};
        buttons: {};
    };
};
export type DialogProps = typeof __propDef.props;
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponentTyped<DialogProps, DialogEvents, DialogSlots> {
    get show(): () => void;
    get hide(): () => void;
}
export {};
