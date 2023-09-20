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
        default: {};
    };
};
export type OverlayProps = typeof __propDef.props;
export type OverlayEvents = typeof __propDef.events;
export type OverlaySlots = typeof __propDef.slots;
export default class Overlay extends SvelteComponentTyped<OverlayProps, OverlayEvents, OverlaySlots> {
    get show(): () => void;
    get hide(): () => void;
}
export {};
