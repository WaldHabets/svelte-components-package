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

<div class={"details-container-wrapper " + (open ? "--expanded" : "") + bClass}>
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

<style></style>
