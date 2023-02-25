<script>import {} from "./sidebar-contents";
export let content = null;
export let detached = false;
import {} from "@sveltejs/kit";
import {} from "svelte/store";
export let page;
import { layout } from "./layout";
import { mdiClose } from "@mdi/js";
function hide() {
    $layout.sidebar = false;
}
</script>

<nav class="sidebar">
  {#if detached}
    <div class="detached-header">
      <p>{content.title}</p>
      <button class="button --flex --medium" on:click={hide}>
        <svg viewBox="0 0 24 24">
          <path d="{mdiClose}"/>
        </svg>
        <span>close</span>
      </button>
    </div>
  {/if}
  {#each content.items as sidebarGroup}
    {#if sidebarGroup.name}
      <p class="sidebar-group-title">{sidebarGroup.name}</p>
    {/if}
    <ul class="sidebar-group-items">
      {#each sidebarGroup.items as sidebarItem}
        <li
          title={sidebarItem.text}
          class={$page.url.pathname === sidebarItem.href
                  ? "active sidebar-item"
                  : "sidebar-item"}
          on:click={hide}
        >
          <a href={sidebarItem.href}>
            <svg viewBox="0 0 24 24">
              <path d={sidebarItem.icon} />
            </svg>
            <span>{sidebarItem.text}</span>
          </a>
        </li>
      {/each}
    </ul>
  {/each}
</nav>

<style>.sidebar {
  background-color: var(--pt-container-bg);
  border-right: 1px solid var(--pt-border);
  box-shadow: var(--pt-shadow-container);
  height: 100vh;
  z-index: 100;
  overflow-y: scroll;
}
.sidebar .detached-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
}
.sidebar .detached-header p {
  font-size: 2rem;
}
.sidebar .sidebar-group-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: var(--pt-theme-primary-standalone);
  margin-top: 16px;
  margin-bottom: 4px;
  margin-inline: 16px;
}
.sidebar .sidebar-group-items {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}
.sidebar .sidebar-group-items:not(:last-child) {
  border-bottom: 1px solid var(--pt-border);
}
.sidebar .sidebar-group-items .sidebar-item {
  box-sizing: border-box;
  height: 48px;
  overflow: hidden;
  margin: 0 8px;
}
.sidebar .sidebar-group-items .sidebar-item a {
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-wrap: nowrap;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  padding: 8px;
}
.sidebar .sidebar-group-items .sidebar-item a svg {
  box-sizing: border-box;
  vertical-align: middle;
  flex-shrink: 0;
  color: inherit;
  height: 32px;
  width: 32px;
  padding: 4px;
  margin: 0 4px;
}
.sidebar .sidebar-group-items .sidebar-item a svg path {
  fill: currentColor;
}
.sidebar .sidebar-group-items .sidebar-item a span {
  display: inline-block;
  line-height: 32px;
  font-size: 16px;
  overflow: hidden;
  color: inherit;
}
.sidebar .sidebar-group-items .sidebar-item a:focus {
  outline: none;
}
.sidebar .sidebar-group-items .sidebar-item a:hover, .sidebar .sidebar-group-items .sidebar-item a:focus-visible {
  color: var(--pt-theme-on-soft);
  background-color: var(--pt-theme-soft);
  border-radius: 32px;
}
.sidebar .sidebar-group-items .sidebar-item.active {
  cursor: pointer;
}
.sidebar .sidebar-group-items .sidebar-item.active a {
  color: var(--pt-theme-on-primary);
  background-color: var(--pt-theme-primary);
  border-radius: 32px;
}</style>