import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Exports */ backNavigation?: string | false | undefined;
        backNavigationLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'header-end': {};
        'sidebar-nav': {};
        'sidebar-actions': {};
        main: {};
    };
};
export declare type PageLayoutProps = typeof __propDef.props;
export declare type PageLayoutEvents = typeof __propDef.events;
export declare type PageLayoutSlots = typeof __propDef.slots;
export default class PageLayout extends SvelteComponentTyped<PageLayoutProps, PageLayoutEvents, PageLayoutSlots> {
}
export {};
