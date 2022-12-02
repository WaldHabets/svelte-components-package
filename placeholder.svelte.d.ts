import { SvelteComponentTyped } from "svelte";
export declare const prerender = true;
declare const __propDef: {
    props: {
        icon: string;
        text: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PlaceholderProps = typeof __propDef.props;
export declare type PlaceholderEvents = typeof __propDef.events;
export declare type PlaceholderSlots = typeof __propDef.slots;
export default class Placeholder extends SvelteComponentTyped<PlaceholderProps, PlaceholderEvents, PlaceholderSlots> {
}
export {};
