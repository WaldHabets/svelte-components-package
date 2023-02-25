import { SvelteComponentTyped } from "svelte";
export declare let prerender: boolean;
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
export declare type HeaderBarProps = typeof __propDef.props;
export declare type HeaderBarEvents = typeof __propDef.events;
export declare type HeaderBarSlots = typeof __propDef.slots;
export default class HeaderBar extends SvelteComponentTyped<HeaderBarProps, HeaderBarEvents, HeaderBarSlots> {
}
export {};
