import { SvelteComponentTyped } from "svelte";
import { type Page } from "@sveltejs/kit";
import { type Readable } from "svelte/store";
import type { SidebarContent } from "./sidebar-contents";
declare const __propDef: {
    props: {
        /** Exports */ backNavigation?: string | false | undefined;
        backNavigationLabel?: string | undefined;
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
