<script context="module">
  export const prerender = true;
</script>

<script>/** events */
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
import { page } from "$app/stores";
export let icon;
export let href;
export let title;
$: active = $page.url.pathname === href;
function notify() {
    dispatch("nav");
}
</script>

<li {title} class={active ? "active" : ""}>
  <a {href} on:click>
    <svg viewBox="0 0 24 24">
      <path d={icon} />
    </svg>
    <span>
      {title}
    </span>
  </a>
</li>

<style>li {
  box-sizing: border-box;
  height: 48px;
  overflow: hidden;
}
li a {
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-wrap: nowrap;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  padding: 8px;
}
li a svg {
  box-sizing: border-box;
  vertical-align: middle;
  flex-shrink: 0;
  color: inherit;
  height: 32px;
  width: 32px;
  padding: 4px;
  margin: 0 4px;
}
li a svg path {
  fill: currentColor;
}
li a span {
  display: inline-block;
  line-height: 32px;
  font-size: 16px;
  overflow: hidden;
  color: inherit;
}
li a:focus-visible {
  outline: 3px solid var(--pt-theme-primary);
}
li:hover, li.active {
  cursor: pointer;
  color: var(--pt-grey-8);
  background-color: var(--pt-theme-soft);
  border-radius: 32px;
}
li.expanded {
  display: inline;
}
li.collapsed {
  display: none;
}

:global(.collapsed) li a span {
  display: none;
}</style>
