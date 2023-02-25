<script context="module">export let prerender = true;
export let ssr = true;
</script>
<script>export let width = "wide";
</script>

<div class="menu-bar" role="menubar">
  <div class="centered-page {width}">
    <slot />
  </div>
</div>