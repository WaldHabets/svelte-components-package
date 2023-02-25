import { SvelteComponentTyped } from "svelte";
/** Exports */
import type { SidebarContent } from "./sidebar-contents";
import { type Page } from "@sveltejs/kit";
import { type Readable } from "svelte/store";
declare const __propDef: {
    props: {
        sidebar?: SidebarContent | null | undefined;
        page: Readable<Page>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        main: {};
    };
};
export declare type PageLayoutProps = typeof __propDef.props;
export declare type PageLayoutEvents = typeof __propDef.events;
export declare type PageLayoutSlots = typeof __propDef.slots;
export default class PageLayout extends SvelteComponentTyped<PageLayoutProps, PageLayoutEvents, PageLayoutSlots> {
}
export {};
