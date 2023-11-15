import { SvelteComponentTyped } from "svelte";
export declare let prerender: boolean;
declare const __propDef: {
    props: {
        /** Exports */ outgoing?: boolean | undefined;
        iconStart?: string | false | undefined;
        href?: string | false | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ListItemLinkProps = typeof __propDef.props;
export type ListItemLinkEvents = typeof __propDef.events;
export type ListItemLinkSlots = typeof __propDef.slots;
export default class ListItemLink extends SvelteComponentTyped<ListItemLinkProps, ListItemLinkEvents, ListItemLinkSlots> {
}
export {};
