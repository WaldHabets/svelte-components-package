import { SvelteComponentTyped } from "svelte";
export interface CheckboxOption {
    value: string;
    title: string;
    blurb: string | null;
    disabled: boolean;
}
declare const __propDef: {
    props: {
        cClass?: string | undefined;
        name?: string | undefined;
        options?: CheckboxOption[] | undefined;
        checked?: string[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CheckboxGroupProps = typeof __propDef.props;
export type CheckboxGroupEvents = typeof __propDef.events;
export type CheckboxGroupSlots = typeof __propDef.slots;
export default class CheckboxGroup extends SvelteComponentTyped<CheckboxGroupProps, CheckboxGroupEvents, CheckboxGroupSlots> {
}
export {};
