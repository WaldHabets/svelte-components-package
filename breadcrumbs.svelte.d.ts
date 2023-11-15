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
        ariaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BreadcrumbsProps = typeof __propDef.props;
export type BreadcrumbsEvents = typeof __propDef.events;
export type BreadcrumbsSlots = typeof __propDef.slots;
export default class Breadcrumbs extends SvelteComponentTyped<BreadcrumbsProps, BreadcrumbsEvents, BreadcrumbsSlots> {
}
export {};
