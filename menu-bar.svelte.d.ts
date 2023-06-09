import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        width?: "small" | "wide" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type MenuBarProps = typeof __propDef.props;
export type MenuBarEvents = typeof __propDef.events;
export type MenuBarSlots = typeof __propDef.slots;
export default class MenuBar extends SvelteComponentTyped<MenuBarProps, MenuBarEvents, MenuBarSlots> {
}
export {};
