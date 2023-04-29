<script context="module">export {};
</script>
<script>/** Styling */
export let cStyle = null;
export let cClass = null;
/** Attributes */
export let tabs;
export let active = tabs[0];
/** Id */
import genID from "./id";
const id = genID();
/** Functions */
const setActive = (tab) => {
    active = tab;
};
const getIndexOfId = (tabID) => {
    for (let i = 0; i < tabs.length; ++i) {
        if (tabID.match(id + tabs[i].key))
            return i;
    }
    return -1;
};
const setFocus = (offset) => {
    const focused = document.activeElement;
    if (!focused)
        return;
    const index = getIndexOfId(focused.id);
    if (index < 0)
        return;
    moveFocus(index + offset);
};
const moveFocus = (index) => {
    const nextIndex = index % tabs.length;
    const nextTab = tabs[nextIndex < 0 ? tabs.length - 1 : nextIndex];
    document.getElementById(id + nextTab.key).focus();
};
const onKeyEvent = (e) => {
    const tablist = document.getElementById(id);
    if (!tablist.contains(document.activeElement))
        return;
    switch (e.key) {
        case "ArrowLeft":
            setFocus(-1);
            e.preventDefault();
            break;
        case "ArrowRight":
            setFocus(+1);
            e.preventDefault();
            break;
        case "Home":
            moveFocus(0);
            e.preventDefault();
            break;
        case "End":
            moveFocus(tabs.length - 1);
            e.preventDefault();
            break;
    }
};
</script>

<svelte:window on:keydown={onKeyEvent} />
<div
  role="tablist"
  {id}
  class="tablist {cClass}"
  style={cStyle} >
  {#each tabs as tab}
    <button
      role="tab"
      aria-selected="{active.key === tab.key}"
      id="{id+tab.key}"
      class={active.key === tab.key ? "selected" : ""}
      on:click={() => setActive(tab)}>{tab.name}
    </button>
  {/each}
</div>