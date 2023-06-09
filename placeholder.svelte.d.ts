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
export type PlaceholderProps = typeof __propDef.props;
export type PlaceholderEvents = typeof __propDef.events;
export type PlaceholderSlots = typeof __propDef.slots;
export default class Placeholder extends SvelteComponentTyped<PlaceholderProps, PlaceholderEvents, PlaceholderSlots> {
}
export {};
