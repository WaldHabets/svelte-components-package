import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {};
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type SidebarGroupProps = typeof __propDef.props;
export declare type SidebarGroupEvents = typeof __propDef.events;
export declare type SidebarGroupSlots = typeof __propDef.slots;
export default class SidebarGroup extends SvelteComponentTyped<SidebarGroupProps, SidebarGroupEvents, SidebarGroupSlots> {
}
export {};
