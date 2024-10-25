import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Props */ labelExpand?: string | undefined;
        labelCollapse?: string | undefined;
        bClass?: string | undefined;
        bClassSummary?: string | undefined;
        bClassDetails?: string | undefined;
    };
    events: {
        keydown: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        summary: {};
        details: {};
    };
};
export type DetailsContainerProps = typeof __propDef.props;
export type DetailsContainerEvents = typeof __propDef.events;
export type DetailsContainerSlots = typeof __propDef.slots;
export default class DetailsContainer extends SvelteComponentTyped<DetailsContainerProps, DetailsContainerEvents, DetailsContainerSlots> {
}
export {};
