<script>import { fly } from "svelte/transition";
import { quintOut } from "svelte/easing";
/** Components */
import ListItemLink from "./list-item-link.svelte";
/** Exports */
export let backNavigation = false;
export let backNavigationLabel = "Back";
export let sidebar = [];
/** Icons */
import { mdiArrowLeft, mdiMenu } from "@mdi/js";
//import { SidebarGroup } from "./sidebar-contents";
import {} from "@sveltejs/kit";
import {} from "svelte/store";
export let page;
/** Locals */
let sidebarState = "--collapsed";
let width;
$: formfactor = width > 780 ? "--wide" : "--small";
$: wide = formfactor === "--wide";
$: expanded = sidebarState === "--expanded";
function toggleSidebar() {
    sidebarState = sidebarState === "--expanded" ? "--collapsed" : "--expanded";
}
function swipeHandler(event) { }
</script>

<div id="page" class={sidebarState + " " + formfactor} bind:clientWidth={width}>
  <header id="page-header">
    {#if !wide && !expanded && !backNavigation}
      <button class="" id="nav-back-button" on:click={toggleSidebar}>
        <svg viewBox="0 0 24 24">
          <path d={mdiMenu} />
        </svg>
      </button>
    {:else if backNavigation}
      <a
        class=""
        id="nav-back-button"
        href={backNavigation}
        on:click={toggleSidebar}
      >
        <svg viewBox="0 0 24 24">
          <path d={mdiArrowLeft} />
        </svg>
      </a>
    {/if}
  </header>
  {#if wide}
    <div
      id="page-sidebar"
      transition:fly={{
        x: 100,
        y: 0,
        delay: 150,
        duration: 500,
        easing: quintOut,
      }}
    >
      <nav>
        {#each sidebar as sidebarGroup}
          <ul class="sidebar-group">
            {#each sidebarGroup.items as sidebarItem}
              <li
                title={sidebarItem.text}
                class={$page.url.pathname === sidebarItem.href
                  ? "active sidebar-item"
                  : "sidebar-item"}
                on:click={toggleSidebar}
              >
                <a href={sidebarItem.href}>
                  <svg viewBox="0 0 24 24">
                    <path d={sidebarItem.icon} />
                  </svg>
                  <span>
                    {sidebarItem.text}
                  </span>
                </a>
              </li>
            {/each}
          </ul>
        {/each}
      </nav>
      <div>
        <slot name="sidebar-actions" />
      </div>
    </div>
  {:else if expanded}
    <div id="page-sidebar-container" on:click|self={toggleSidebar}>
      <nav
        id="page-sidebar"
        transition:fly={{
          x: -100,
          y: 0,
          delay: 150,
          duration: 500,
          easing: quintOut,
        }}
      >
        {#each sidebar as sidebarGroup}
          <section class="container-wrapper">
            <ul class="list-box">
              {#each sidebarGroup.items as sidebarItem}
                <ListItemLink
                  href={sidebarItem.href}
                  iconStart={sidebarItem.icon}
                  on:navigate={toggleSidebar}
                >
                  {sidebarItem.text}
                </ListItemLink>
              {/each}
            </ul>
          </section>
        {/each}
      </nav>
      <div>
        <slot name="sidebar-actions" />
      </div>
    </div>
  {/if}
  <!--{#if (wide || !expanded)}-->
  <main
    id="page-main"
    transition:fly={{
      x: -100,
      y: 0,
      delay: 150,
      duration: 500,
      easing: quintOut,
    }}
  >
    <slot name="main" />
  </main>
  <!--{/if}-->
</div>

<style>/** Theme Colours                       */
/** ----------------------------------- */
/**
 * Color to be shown on $theme-primary
 * Should be readable when used on top of $theme-primary
 */
/**
  * Primary theme colour
  * Should be readable when used on top of $theme-light
  */
/**
  * Used as background for certain hover effects and active control elements.
  * Content and border should be coloured with $theme-primary or $theme-on-primary
  */
/**
  * Can be used as container backgrounds, for example headers.
  * In this case it should use $theme-on-primary as border colour.
  */
:root {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  background-color: #f8f8f8;
}
:root body {
  margin: 0;
  height: 100%;
}

#page {
  background-color: var(--pt-container-bg);
  box-shadow: var(--pt-shadow-container);
  display: grid;
  height: 100vh;
}
#page.--small {
  grid-template-areas: "header" "content";
  grid-template-columns: auto;
}
#page.--small #page-header {
  grid-area: header;
  background-color: var(--pt-body-bg);
}
#page.--small #page-sidebar-container {
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  height: 100vh;
}
#page.--small #page-sidebar {
  border: none;
  position: absolute;
  box-sizing: border-box;
  background-color: var(--pt-body-bg);
  max-width: calc(100% - 96px);
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-shadow: 1px 0 4px -2px;
}
#page.--small #page-main {
  grid-area: content;
}
#page.--small #nav-back-button {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  padding: 6px;
  background: none;
  border: none;
  border-radius: 8px;
}
#page.--small #nav-back-button:hover {
  background: rgba(0, 0, 0, 0.05);
}
#page.--small #nav-back-button:active {
  background: rgba(0, 0, 0, 0.1);
}
#page.--small #nav-back-button svg {
  width: 24px;
  height: 24px;
  fill: var(--pt-text);
}
#page.--small #page-header {
  padding: 8px 16px;
  margin: 0;
}
#page.--small #page-sidebar {
  height: 100%;
}
#page.--small #page-main {
  overflow-y: scroll;
  background-color: var(--pt-body-bg);
}
#page.--wide {
  grid-template-areas: "sidebar main";
  grid-template-columns: 300px auto;
}
#page.--wide #page-header {
  display: none;
}
#page.--wide #page-sidebar {
  grid-area: sidebar;
  background-color: transparent;
}
#page.--wide #page-sidebar .sidebar-group {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}
#page.--wide #page-sidebar .sidebar-group:not(:first-child) {
  border-top: 1px solid var(--pt-border);
}
#page.--wide #page-sidebar .sidebar-group .sidebar-item {
  box-sizing: border-box;
  height: 48px;
  overflow: hidden;
  margin: 0 8px;
}
#page.--wide #page-sidebar .sidebar-group .sidebar-item a {
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-wrap: nowrap;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  padding: 8px;
}
#page.--wide #page-sidebar .sidebar-group .sidebar-item a svg {
  box-sizing: border-box;
  vertical-align: middle;
  flex-shrink: 0;
  color: inherit;
  height: 32px;
  width: 32px;
  padding: 4px;
  margin: 0 4px;
}
#page.--wide #page-sidebar .sidebar-group .sidebar-item a svg path {
  fill: currentColor;
}
#page.--wide #page-sidebar .sidebar-group .sidebar-item a span {
  display: inline-block;
  line-height: 32px;
  font-size: 16px;
  overflow: hidden;
  color: inherit;
}
#page.--wide #page-sidebar .sidebar-group .sidebar-item:hover, #page.--wide #page-sidebar .sidebar-group .sidebar-item.active {
  cursor: pointer;
  color: var(--pt-theme-on-soft);
  background-color: var(--pt-theme-soft);
  border-radius: 32px;
}
#page.--wide #page-main {
  grid-area: main;
  border-left: 2px solid var(--pt-border);
}
#page.--wide #nav-back-button {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  padding: 6px;
  background: none;
  border: none;
  border-radius: 8px;
}
#page.--wide #nav-back-button:hover {
  background: rgba(0, 0, 0, 0.05);
}
#page.--wide #nav-back-button:active {
  background: rgba(0, 0, 0, 0.1);
}
#page.--wide #nav-back-button svg {
  width: 24px;
  height: 24px;
  fill: var(--pt-text);
}
#page.--wide #page-header {
  padding: 8px 16px;
  margin: 0;
}
#page.--wide #page-sidebar {
  height: 100%;
}
#page.--wide #page-main {
  overflow-y: scroll;
  background-color: var(--pt-body-bg);
}</style>
