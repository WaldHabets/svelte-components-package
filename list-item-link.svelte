<script context="module">
  export let prerender = true;
</script>

<script>/** Icons */
import { mdiArrowRight, mdiOpenInNew } from "@mdi/js";
/** events */
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
/** Exports */
export let outgoing = false;
export let iconStart = false;
export let href = false;
function clickHandler() {
    dispatch("navigate");
}
</script>

<li class="list-item active" on:click={clickHandler} on:keyup>
  <a {href}>
    {#if iconStart}
      <div class="label-group">
        <svg viewBox="0 0 24 24" class="icon-start">
          <path d={iconStart} />
        </svg>
        <p>
          <slot />
        </p>
      </div>
    {:else}
      <p>
        <slot />
      </p>
    {/if}
    <svg viewBox="0 0 24 24" class="icon-end">
      <path d={outgoing ? mdiOpenInNew : mdiArrowRight} />
    </svg>
  </a>
</li>

<style>.list-item.active a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-item.active .label-group {
  display: flex;
  align-items: center;
}
.list-item.active .icon-start,
.list-item.active .icon-end {
  width: 24px;
  height: 24px;
  padding: 4px;
  fill: #6f6f6f;
  flex-shrink: 0;
}</style>
