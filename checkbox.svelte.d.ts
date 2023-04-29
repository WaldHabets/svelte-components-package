import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id?: string | undefined;
        name?: string | undefined;
        title?: string | undefined;
        blurb?: string | null | undefined;
        value?: object | null | undefined;
        checked?: boolean | undefined;
        disabled?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type CheckboxProps = typeof __propDef.props;
export declare type CheckboxEvents = typeof __propDef.events;
export declare type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponentTyped<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
export {};
