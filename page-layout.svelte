<script>/** Icons */
import { mdiMenu, mdiMenuOpen, mdiArrowLeft } from "@mdi/js";
/** Exports */
export let backNavigation = false;
export let backNavigationLabel = "Back";
/** Locals */
let sidebarState = 'expanded';
function toggleSidebar() {
    sidebarState = (sidebarState === 'expanded')
        ? 'collapsed'
        : 'expanded';
}
</script>

<div id="page" class={sidebarState}>
    <header id="page-header">
        <section id="page-header-sidebar" class={sidebarState}>
            {#if backNavigation}
                <a href={backNavigation} class="flat-button default-size icon flex">
                    <svg viewBox="0 0 24 24">
                        <path d={mdiArrowLeft} />
                    </svg>
                    {backNavigationLabel}
                </a>
            {/if}
            <button class="flat-button" on:click={toggleSidebar}>
                {#if sidebarState === 'collapsed'}
                    <svg viewBox="0 0 24 24">
                        <path d={mdiMenu} />
                    </svg>
                {:else}
                    <svg viewBox="0 0 24 24">
                        <path d={mdiMenuOpen} />
                    </svg>
                {/if}
            </button>
        </section>
        <section id="page-header-title">

        </section>
        <section id="page-header-actions">
            <slot name="header-end" />
        </section>
    </header>
    <div id="page-sidebar">
        <nav>
            <slot name="sidebar-nav" />
        </nav>
        <div>
            <slot name="sidebar-actions" />
        </div>
    </div>
    <main id="page-main">
        <slot name="main" />
    </main>
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
  background-color: #f0f3fa;
  display: grid;
  grid-template-areas: "header header" "sidebar main";
  grid-template-columns: min-content auto;
  grid-template-rows: 56px calc(100vh - 56px);
}
#page.expanded #page-header-sidebar,
#page.expanded #page-sidebar {
  width: 300px;
}
#page.collapsed #page-sidebar {
  width: 54px;
}
#page.collapsed #page-header-sidebar {
  min-width: 54px;
  width: max-content;
}
#page #page-header {
  grid-area: header;
  background-color: transparent;
  padding: 0;
  margin: 0;
  display: flex;
}
#page #page-header section {
  box-sizing: border-box;
  height: 56px;
  padding: 8px;
}
#page #page-header #page-header-sidebar {
  flex-shrink: 0;
}
#page #page-header #page-header-title {
  width: available;
  width: -moz-available;
  flex-grow: 1;
}
#page #page-header #page-header-actions {
  width: max-content;
  flex-shrink: 0;
}
#page #page-header a.flat-button {
  box-sizing: border-box;
}
#page #page-header button.flat-button {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  padding: 6px;
}
#page #page-header button.flat-button svg {
  width: 24px;
  height: 24px;
}
#page #page-header button.round {
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #bbb;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 7px;
  box-shadow: 0 0 4px -2px #333;
}
#page #page-header button.round svg {
  width: 24px;
  height: 24px;
}
#page #page-header button.round:hover {
  cursor: pointer;
  background-color: #bbb;
}
#page #page-header button.round:active {
  box-shadow: none;
  padding: 10px;
}
#page #page-header button.round:active svg {
  width: 28px;
  height: 28px;
}
#page #page-sidebar {
  grid-area: sidebar;
  background-color: transparent;
  height: 100%;
  transition: width 0.5s, visibility 0.5s;
}
#page #page-main {
  grid-area: main;
  overflow-y: scroll;
  background-color: #f8f8f8;
  border-top-left-radius: 16px;
  border-left: 2px solid #bbb;
  border-top: 2px solid #bbb;
}
@media screen and (max-width: 780px) {
  #page #page-header-sidebar {
    min-width: 54px;
    width: max-content;
  }
  #page #page-sidebar {
    border: none;
  }
  #page #page-main {
    border-left: none;
    border-radius: 0;
  }
  #page.expanded #page-sidebar {
    width: 100vw;
    visibility: visible;
  }
  #page.expanded #page-main {
    display: none;
  }
  #page.collapsed #page-sidebar {
    width: 0;
    visibility: hidden;
  }
  #page.collapsed #page-main {
    display: block;
  }
}</style>