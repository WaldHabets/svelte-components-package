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
      <button class="button --flex --medium" on:click={hide} on:keyup>
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
          on:keyup
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
  background-color: var(--pt-grey-3);
  border-right: 1px solid var(--pt-grey-4);
  height: 100vh;
  z-index: 100;
  box-sizing: border-box;
  padding: 8px;
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
  color: var(--pt-grey-8);
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
  border-bottom: 1px solid var(--pt-grey-4);
}
.sidebar .sidebar-group-items .sidebar-item {
  box-sizing: border-box;
  height: 48px;
  overflow: hidden;
  margin: 0;
}
.sidebar .sidebar-group-items .sidebar-item:not(:first-child) {
  margin-top: 8px;
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
  color: var(--pt-grey-8);
  background-color: var(--pt-grey-4);
  border-radius: 8px;
}
.sidebar .sidebar-group-items .sidebar-item.active {
  cursor: pointer;
  border-radius: 8px;
}
.sidebar .sidebar-group-items .sidebar-item.active a {
  height: 48px;
  box-sizing: border-box;
  color: var(--pt-grey-8);
  background: var(--pt-accent-1);
  border: 1px solid var(--pt-accent-4);
  background: linear-gradient(90deg, var(--pt-accent-1) 0%, var(--pt-accent-2) 100%);
  border-radius: 8px;
}</style>