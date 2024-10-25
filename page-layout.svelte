<script>import { fly } from "svelte/transition";
import { quintOut } from "svelte/easing";
import { layout } from "./layout";
import Sidebar from "./sidebar.svelte";
export let sidebar = null;
import {} from "@sveltejs/kit";
import {} from "svelte/store";
export let page;
/** Locals */
let sidebarState = "--collapsed";
let width;
$: $layout.mobile = width < 780;
$: expanded = sidebarState === "--expanded";
function toggleSidebar() {
    $layout.sidebar = !$layout.sidebar;
}
function onKeyEvent(e) {
    if (sidebar && e.key === "Escape") {
        $layout.sidebar = false;
        e.preventDefault();
    }
}
</script>

<svelte:window on:keydown={onKeyEvent} />
<div id="page" class="{$layout.mobile ? '--mobile' : '--desktop'}" bind:clientWidth={width}>
  {#if $layout.mobile}
    {#if sidebar && $layout.sidebar}
      <div class="backdrop"
        on:click|self={toggleSidebar}>
        <div
          role="dialog"
          aria-modal="true"
          class="sidebar"
          transition:fly={{
            x: -width,
            y: 0,
            duration: 600,
            easing: quintOut,
          }}>
          <Sidebar content={sidebar} {page} detached/>
        </div>
      </div>
    {/if}
  {:else}
    <div class="sidebar">
        {#if sidebar}
          <Sidebar content={sidebar} {page} />
        {/if}
    </div>
  {/if}
  <main class="content">
    <slot name="main" />
  </main>
</div>

<style>#page {
  background-color: var(--pt-grey-1);
  box-shadow: var(--pt-shadow-container);
  display: grid;
  height: 100vh;
}
#page .content {
  overflow-y: scroll;
  background-color: var(--pt-grey-1);
}
#page.--mobile .backdrop {
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
}
#page.--mobile .backdrop .sidebar {
  height: 100vh;
  width: 80vw;
}
#page.--desktop {
  grid-template-areas: "sidebar main";
  grid-template-columns: 300px auto;
}
#page.--desktop .sidebar {
  grid-area: sidebar;
}
#page.--desktop .content {
  grid-area: main;
}</style>
