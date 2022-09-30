import { SvelteComponentTyped } from "svelte";
export declare let prerender: boolean;
declare const __propDef: {
    props: {
        /** Exports */ iconStart?: string | false | undefined;
        iconEnd?: string | false | undefined;
        href?: string | false | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ListItemActiveProps = typeof __propDef.props;
export declare type ListItemActiveEvents = typeof __propDef.events;
export declare type ListItemActiveSlots = typeof __propDef.slots;
export default class ListItemActive extends SvelteComponentTyped<ListItemActiveProps, ListItemActiveEvents, ListItemActiveSlots> {
}
export {};
