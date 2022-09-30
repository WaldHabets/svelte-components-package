<script context="module">
    export const prerender = true;
</script>

<script>import { page } from "$app/stores";
export let icon;
export let href;
export let title;
$: active = $page.url.pathname === href;
</script>

<li {title} class={active ? 'active' : ''}>
   <a {href}>
       <svg viewBox="0 0 24 24">
           <path d={icon} />
       </svg>
       <span>
           {title}
       </span>
   </a>
</li>

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
li {
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
li:hover, li.active {
  cursor: pointer;
  color: #042100;
  background-color: #d5ebcb;
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