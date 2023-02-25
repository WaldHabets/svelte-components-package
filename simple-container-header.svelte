<script context="module">export let prerender = true;
export let ssr = true;
</script>
<script>export let title = "";
export let blurb = null;
</script>

<header class="container-header">
  <h2>{title}</h2>
  {#if blurb}
    <p>{blurb}</p>
  {/if}
</header>