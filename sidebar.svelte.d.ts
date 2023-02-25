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
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type SidebarProps = typeof __propDef.props;
export declare type SidebarEvents = typeof __propDef.events;
export declare type SidebarSlots = typeof __propDef.slots;
export default class Sidebar extends SvelteComponentTyped<SidebarProps, SidebarEvents, SidebarSlots> {
}
export {};
