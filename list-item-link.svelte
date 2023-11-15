<script context="module">export let prerender = true;
</script>

<script>/** Icons */
import { mdiArrowRight, mdiOpenInNew } from "@mdi/js";
/** events */
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
/** Exports */
export let outgoing = false;
export let iconStart = false;
export let iconAriaLabel = "";
export let href = false;
</script>

<li class="list-item active">
  <a {href}>
    {#if iconStart}
      <div class="label-group">
        <svg viewBox="0 0 24 24" class="icon-start" aria-label="{iconAriaLabel}" >
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
    <svg viewBox="0 0 24 24" class="icon-end" aria-hidden="true">
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
