import { SvelteComponentTyped } from "svelte";
import { type SidebarContent } from "./sidebar-contents";
import { type Page } from "@sveltejs/kit";
import { type Readable } from "svelte/store";
declare const __propDef: {
    props: {
        content?: SidebarContent | null | undefined;
        detached?: boolean | undefined;
        page: Readable<Page>;
    };
    events: {
        keyup: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SidebarProps = typeof __propDef.props;
export type SidebarEvents = typeof __propDef.events;
export type SidebarSlots = typeof __propDef.slots;
export default class Sidebar extends SvelteComponentTyped<SidebarProps, SidebarEvents, SidebarSlots> {
}
export {};
