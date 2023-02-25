import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        cStyle?: string | null | undefined;
        cClass?: string | null | undefined;
        label: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type SidebarButtonProps = typeof __propDef.props;
export declare type SidebarButtonEvents = typeof __propDef.events;
export declare type SidebarButtonSlots = typeof __propDef.slots;
export default class SidebarButton extends SvelteComponentTyped<SidebarButtonProps, SidebarButtonEvents, SidebarButtonSlots> {
}
export {};
