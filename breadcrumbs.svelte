<script context="module">export {};
</script>
<script>import { mdiChevronRight } from "@mdi/js";
/** Styling */
export let cStyle = null;
export let cClass = null;
/** Attributes */
export let crumbs;
export let ariaLabel = "breadcrumb navigation";
const head = crumbs.slice(0, crumbs.length - 1);
const tail = crumbs[crumbs.length - 1];
</script>

<nav
  class="breadcrumbs {cClass}"
  style={cStyle}
  aria-label="{ariaLabel}">
  {#each head as crumb}
    <a href="{crumb.href}">
      {crumb.name}
    </a>
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="{mdiChevronRight}" />
    </svg>
  {/each}
  <span class="selected">{tail.name}</span>
</nav>