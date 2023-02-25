import { SvelteComponentTyped } from "svelte";
export interface Tab {
    name: string;
    key: string;
}
declare const __propDef: {
    props: {
        /** Styling */ cStyle?: string | null | undefined;
        cClass?: string | null | undefined;
        /** Attributes */ tabs: Tab[];
        active?: Tab | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TablistProps = typeof __propDef.props;
export declare type TablistEvents = typeof __propDef.events;
export declare type TablistSlots = typeof __propDef.slots;
export default class Tablist extends SvelteComponentTyped<TablistProps, TablistEvents, TablistSlots> {
}
export {};
