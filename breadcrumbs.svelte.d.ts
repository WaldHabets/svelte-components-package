import { SvelteComponentTyped } from "svelte";
export interface Crumb {
    name: string;
    href: string;
}
declare const __propDef: {
    props: {
        /** Styling */ cStyle?: string | null | undefined;
        cClass?: string | null | undefined;
        /** Attributes */ crumbs: Crumb[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type BreadcrumbsProps = typeof __propDef.props;
export declare type BreadcrumbsEvents = typeof __propDef.events;
export declare type BreadcrumbsSlots = typeof __propDef.slots;
export default class Breadcrumbs extends SvelteComponentTyped<BreadcrumbsProps, BreadcrumbsEvents, BreadcrumbsSlots> {
}
export {};
