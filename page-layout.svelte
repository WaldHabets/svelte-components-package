<script>import { fly } from "svelte/transition";
import { quintOut } from "svelte/easing";
import { layout } from "./layout";
/** Components */
import ListItemLink from "./list-item-link.svelte";
/** Exports */
export let backNavigation = false;
export let backNavigationLabel = "Back";
export let sidebar = null;
/** Icons */
import { mdiArrowLeft, mdiMenu } from "@mdi/js";
//import { SidebarGroup } from "./sidebar-contents";
import {} from "@sveltejs/kit";
import {} from "svelte/store";
export let page;
/** Locals */
let sidebarState = "--collapsed";
let width;
$: $layout.mobile = width < 780;
$: formfactor = width > 780 ? "--wide" : "--small";
$: wide = formfactor === "--wide";
$: expanded = sidebarState === "--expanded";
function toggleSidebar() {
    $layout.sidebar = !$layout.sidebar;
}
function swipeHandler(event) { }
</script>

<div id="page" class="{$layout.mobile ? '--mobile' : '--desktop'}" bind:clientWidth={width}>
  {#if $layout.mobile}
    {#if sidebar && $layout.sidebar}
      <main
        class="grow sidebar"
        transition:fly={{
          x: -width,
          y: 0,
          duration: 600,
          easing: quintOut,
        }}>
        <header class="page-title">
          <div>
            {#if sidebar.back}
              <a href={sidebar.back.href} class="flat-button --small">
                <svg viewBox="0 0 24 24">
                  <path d={sidebar.back.icon} />
                </svg>
                <span>{sidebar.back.text}</span>
              </a>
            {/if}
            <h1>{sidebar.title}</h1>
          </div>
        </header>
        <nav>
          {#each sidebar.items as sidebarGroup}
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
      </main
      >
    {/if}
    <main class="grow content">
      <slot name="main" />
    </main>
  {:else}
    <div class="sidebar">
      <nav>
        {#if sidebar}
          {#if sidebar.back}
            <div class="standalone-item">
              <a href={sidebar.back.href}>
                <svg viewBox="0 0 24 24">
                  <path d={sidebar.back.icon} />
                </svg>
                <span>
                    {sidebar.back.text}
                  </span>
              </a>
            </div>
          {/if}
        {#each sidebar.items as sidebarGroup}
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
        {/if}
      </nav>
    </div>
    <main class="content">
      <slot name="main" />
    </main>
  {/if}
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
  background-color: var(--pt-body-bg);
  box-shadow: var(--pt-shadow-container);
  display: grid;
  height: 100vh;
}
#page #nav-back-button {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  padding: 6px;
  background: none;
  border: none;
  border-radius: 8px;
}
#page #nav-back-button:hover {
  background: rgba(0, 0, 0, 0.05);
}
#page #nav-back-button:active {
  background: rgba(0, 0, 0, 0.1);
}
#page #nav-back-button svg {
  width: 24px;
  height: 24px;
  fill: var(--pt-text);
}
#page #page-header {
  padding: 8px 16px;
  margin: 0;
}
#page .sidebar {
  background-color: var(--pt-body-bg);
  height: 100%;
  z-index: 100;
}
#page .sidebar .sidebar-group {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}
#page .sidebar .sidebar-group:not(:first-child) {
  border-top: 1px solid var(--pt-border);
}
#page .sidebar .sidebar-group .sidebar-item {
  box-sizing: border-box;
  height: 48px;
  overflow: hidden;
  margin: 0 8px;
}
#page .sidebar .sidebar-group .sidebar-item a {
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-wrap: nowrap;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  padding: 8px;
}
#page .sidebar .sidebar-group .sidebar-item a svg {
  box-sizing: border-box;
  vertical-align: middle;
  flex-shrink: 0;
  color: inherit;
  height: 32px;
  width: 32px;
  padding: 4px;
  margin: 0 4px;
}
#page .sidebar .sidebar-group .sidebar-item a svg path {
  fill: currentColor;
}
#page .sidebar .sidebar-group .sidebar-item a span {
  display: inline-block;
  line-height: 32px;
  font-size: 16px;
  overflow: hidden;
  color: inherit;
}
#page .sidebar .sidebar-group .sidebar-item:hover, #page .sidebar .sidebar-group .sidebar-item.active {
  cursor: pointer;
  color: var(--pt-theme-on-soft);
  background-color: var(--pt-theme-soft);
  border-radius: 32px;
}
#page .sidebar .standalone-item {
  box-sizing: border-box;
  height: 48px;
  overflow: hidden;
  margin: 0 8px;
}
#page .sidebar .standalone-item a {
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-wrap: nowrap;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  padding: 8px;
}
#page .sidebar .standalone-item a svg {
  box-sizing: border-box;
  vertical-align: middle;
  flex-shrink: 0;
  color: inherit;
  height: 32px;
  width: 32px;
  padding: 4px;
  margin: 0 4px;
}
#page .sidebar .standalone-item a svg path {
  fill: currentColor;
}
#page .sidebar .standalone-item a span {
  display: inline-block;
  line-height: 32px;
  font-size: 16px;
  overflow: hidden;
  color: inherit;
}
#page .sidebar .standalone-item:hover, #page .sidebar .standalone-item.active {
  cursor: pointer;
  color: var(--pt-theme-on-soft);
  background-color: var(--pt-theme-soft);
  border-radius: 32px;
}
#page .content {
  overflow-y: scroll;
  background-color: var(--pt-body-bg);
}
#page.--mobile .sidebar {
  position: absolute;
  height: 100vh;
  width: 100vw;
}
#page.--desktop {
  grid-template-areas: "sidebar main";
  grid-template-columns: 300px auto;
}
#page.--desktop .sidebar {
  grid-area: sidebar;
  background-color: var(--pt-container-bg);
  border-right: 1px solid var(--pt-border);
  box-shadow: var(--pt-shadow-container);
}
#page.--desktop .sidebar .sidebar-group {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}
#page.--desktop .sidebar .sidebar-group:not(:first-child) {
  border-top: 1px solid var(--pt-border);
}
#page.--desktop .sidebar .sidebar-group .sidebar-item {
  box-sizing: border-box;
  height: 48px;
  overflow: hidden;
  margin: 0 8px;
}
#page.--desktop .sidebar .sidebar-group .sidebar-item a {
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-wrap: nowrap;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  padding: 8px;
}
#page.--desktop .sidebar .sidebar-group .sidebar-item a svg {
  box-sizing: border-box;
  vertical-align: middle;
  flex-shrink: 0;
  color: inherit;
  height: 32px;
  width: 32px;
  padding: 4px;
  margin: 0 4px;
}
#page.--desktop .sidebar .sidebar-group .sidebar-item a svg path {
  fill: currentColor;
}
#page.--desktop .sidebar .sidebar-group .sidebar-item a span {
  display: inline-block;
  line-height: 32px;
  font-size: 16px;
  overflow: hidden;
  color: inherit;
}
#page.--desktop .sidebar .sidebar-group .sidebar-item:hover, #page.--desktop .sidebar .sidebar-group .sidebar-item.active {
  cursor: pointer;
  color: var(--pt-theme-on-soft);
  background-color: var(--pt-theme-soft);
  border-radius: 32px;
}
#page.--desktop .sidebar .standalone-item {
  box-sizing: border-box;
  height: 48px;
  overflow: hidden;
  margin: 0 8px;
}
#page.--desktop .sidebar .standalone-item a {
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-wrap: nowrap;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  padding: 8px;
}
#page.--desktop .sidebar .standalone-item a svg {
  box-sizing: border-box;
  vertical-align: middle;
  flex-shrink: 0;
  color: inherit;
  height: 32px;
  width: 32px;
  padding: 4px;
  margin: 0 4px;
}
#page.--desktop .sidebar .standalone-item a svg path {
  fill: currentColor;
}
#page.--desktop .sidebar .standalone-item a span {
  display: inline-block;
  line-height: 32px;
  font-size: 16px;
  overflow: hidden;
  color: inherit;
}
#page.--desktop .sidebar .standalone-item:hover, #page.--desktop .sidebar .standalone-item.active {
  cursor: pointer;
  color: var(--pt-theme-on-soft);
  background-color: var(--pt-theme-soft);
  border-radius: 32px;
}
#page.--desktop .content {
  grid-area: main;
}</style>
