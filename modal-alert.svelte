<script>/** Transitions */
import { slide } from 'svelte/transition';
/** Icons */
import { mdiClose } from "@mdi/js";
/** Properties */
export let title = "";
export let showModal = false;
export let param = null;
export let cancelAction = false;
export let negativeAction = false;
export let positiveAction = false;
$: buttons = !cancelAction || !negativeAction || !positiveAction;
export const modal = {
    show() {
        showModal = true;
    },
    showWithData(data) {
        showModal = true;
        param = data;
    },
    hide() {
        showModal = false;
    }
};
/** events */
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
function onCancelAction() {
    modal.hide();
    dispatch('cancel', param);
}
function onNegativeAction() {
    modal.hide();
    dispatch('negative', param);
}
function onPositiveAction() {
    modal.hide();
    dispatch('positive', param);
}
</script>

{#if showModal}
  <div class="option-sheet-backdrop"  on:click|self={onCancelAction}>
    <div class="option-sheet" transition:slide>
      <header class="option-sheet-header">
        <h1>{title}</h1>
        <button class="flat-button option-sheet-cancel" on:click={onCancelAction}>
          <svg viewBox="0 0 24 24">
            <path d="{mdiClose}" />
          </svg>
        </button>
      </header>
      <div class="option-sheet-content">
        <slot></slot>
      </div>
      {#if buttons}
      <div class="option-sheet-buttons">
        {#if cancelAction}
          <button class="option-sheet-button button --big" on:click={onCancelAction}>
            {cancelAction}
          </button>
        {/if}
        {#if negativeAction}
          <button class="option-sheet-button button --alert --big" on:click={onNegativeAction}>
            {negativeAction}
          </button>
        {/if}
        {#if positiveAction}
          <button class="option-sheet-button button --themed --big" on:click={onPositiveAction}>
            {positiveAction}
          </button>
        {/if}
      </div>
      {/if}
    </div>
  </div>
{/if}

<style>.option-sheet-backdrop {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 100001;
  display: flex;
  align-items: center;
}
.option-sheet-backdrop .option-sheet {
  width: calc(100% - 32px);
  background: var(--pt-container-bg);
  border: 2px solid var(--pt-border);
  border-radius: 8px;
  box-sizing: border-box;
  max-height: calc(100vh - 64px);
  max-width: 566px;
  margin: 0 auto;
  height: min-content;
  box-shadow: 0 0 16px -8px black;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.option-sheet-backdrop .option-sheet .option-sheet-header {
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  padding: 16px 16px 8px 16px;
  overflow: hidden;
  flex-shrink: 0;
  /** font */
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.option-sheet-backdrop .option-sheet .option-sheet-header h1 {
  flex-grow: 1;
  margin-left: 40px;
}
.option-sheet-backdrop .option-sheet .option-sheet-header .option-sheet-cancel {
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 50%;
  border: none;
}
.option-sheet-backdrop .option-sheet .option-sheet-header .option-sheet-cancel:hover {
  cursor: pointer;
}
.option-sheet-backdrop .option-sheet .option-sheet-header .option-sheet-cancel svg {
  width: 24px;
  height: 24px;
  fill: var(--pt-text);
}
.option-sheet-backdrop .option-sheet .option-sheet-content {
  max-height: calc(100vh - 48px - 56px);
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 8px 16px 16px 16px;
  /** font */
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  text-align: center;
}
.option-sheet-backdrop .option-sheet .option-sheet-buttons {
  /** border */
  border-top: 2px solid var(--pt-border);
  /** layout */
  display: flex;
  justify-content: space-between;
  padding: 8px;
  gap: 8px;
  flex-shrink: 0;
}
.option-sheet-backdrop .option-sheet .option-sheet-buttons .option-sheet-button {
  flex-grow: 1;
  flex-basis: 0;
}
@media screen and (max-width: 598px) {
  .option-sheet-backdrop .option-sheet .option-sheet-buttons {
    flex-direction: column-reverse;
  }
  .option-sheet-backdrop .option-sheet .option-sheet-buttons .option-sheet-button {
    height: 48px;
    flex-basis: auto;
  }
}</style>