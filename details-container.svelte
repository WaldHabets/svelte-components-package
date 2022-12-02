<script>/** Icons */
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
/** Props */
export let labelExpand = "";
export let labelCollapse = "";
export let bClass = "";
export let bClassSummary = "";
export let bClassDetails = "";
let open = false;
function clickHandler() {
    open = !open;
}
</script>

<div class={"details-container-wrapper container " + bClass}>
  <div class={"summary-container " + bClassSummary}>
    <div class="summary">
      <slot name="summary" />
    </div>
    <button class="expand-button" on:click={clickHandler}>
      <span>{open ? labelCollapse : labelExpand}</span>
      <svg viewBox="0 0 24 24">
        <path d={open ? mdiChevronUp : mdiChevronDown} />
      </svg>
    </button>
  </div>
  {#if open}
    <div class={"details-container " + bClassDetails}>
      <div class="details">
        <slot name="details" />
      </div>
      <button class="expand-button" on:click={clickHandler}>
        <span>{labelCollapse}</span>
        <svg viewBox="0 0 24 24">
          <path d={open ? mdiChevronUp : mdiChevronDown} />
        </svg>
      </button>
    </div>
  {/if}
</div>

<style>.details-container-wrapper {
  padding: 0;
}
.details-container-wrapper .summary-container {
  padding: 4px;
}
.details-container-wrapper .summary-container .summary {
  padding: 12px;
}
.details-container-wrapper .details-container {
  border-top: 1px solid #bbb;
  background: rgba(0, 0, 0, 0.05);
  padding: 4px;
}
.details-container-wrapper .details-container .details {
  padding: 12px;
}
.details-container-wrapper .expand-button {
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: none;
  width: 100%;
  background: none;
  box-sizing: border-box;
}
.details-container-wrapper .expand-button * {
  display: block;
}
.details-container-wrapper .expand-button svg {
  width: 24px;
  height: 24px;
}
.details-container-wrapper .expand-button:hover {
  background: rgba(0, 0, 0, 0.1);
}
.details-container-wrapper .expand-button:active {
  background: rgba(0, 0, 0, 0.3);
}</style>
