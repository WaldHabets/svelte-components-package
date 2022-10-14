import { SvelteComponentTyped } from "svelte";
export declare const prerender = true;
declare const __propDef: {
    props: {
        icon: string;
        href: string;
        title: string;
    };
    events: {
        click: MouseEvent;
        nav: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type SidebarTabProps = typeof __propDef.props;
export declare type SidebarTabEvents = typeof __propDef.events;
export declare type SidebarTabSlots = typeof __propDef.slots;
export default class SidebarTab extends SvelteComponentTyped<SidebarTabProps, SidebarTabEvents, SidebarTabSlots> {
}
export {};
