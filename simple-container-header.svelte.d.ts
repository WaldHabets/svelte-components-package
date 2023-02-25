import { SvelteComponentTyped } from "svelte";
export declare let prerender: boolean;
export declare let ssr: boolean;
declare const __propDef: {
    props: {
        title?: string | undefined;
        blurb?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type SimpleContainerHeaderProps = typeof __propDef.props;
export declare type SimpleContainerHeaderEvents = typeof __propDef.events;
export declare type SimpleContainerHeaderSlots = typeof __propDef.slots;
export default class SimpleContainerHeader extends SvelteComponentTyped<SimpleContainerHeaderProps, SimpleContainerHeaderEvents, SimpleContainerHeaderSlots> {
}
export {};
