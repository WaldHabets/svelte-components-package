import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        width?: "small" | "wide" | undefined;
        title?: string | undefined;
        blurb?: string | null | undefined;
        standalone?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HeaderBarProps = typeof __propDef.props;
export type HeaderBarEvents = typeof __propDef.events;
export type HeaderBarSlots = typeof __propDef.slots;
export default class HeaderBar extends SvelteComponentTyped<HeaderBarProps, HeaderBarEvents, HeaderBarSlots> {
}
export {};
