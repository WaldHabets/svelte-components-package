<script context="module">export {};
</script>
<script>import { mdiChevronRight } from "@mdi/js";
/** Styling */
export let cStyle = null;
export let cClass = null;
/** Attributes */
export let crumbs;
const head = crumbs.slice(0, crumbs.length - 1);
const tail = crumbs[crumbs.length - 1];
</script>

<div
  role="menuitem"
  class="breadcrumbs {cClass}"
  style={cStyle}>
  {#each head as crumb}
    <a href="{crumb.href}">
      {crumb.name}
    </a>
    <svg viewBox="0 0 24 24">
      <path d="{mdiChevronRight}" />
    </svg>
  {/each}
  <span class="selected">{tail.name}</span>
</div>