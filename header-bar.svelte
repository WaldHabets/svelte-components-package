<script context="module">export let prerender = true;
</script>
<script>export let width = "wide";
export let title = "";
export let blurb = null;
export let standalone = false;
</script>

<header class="header-bar {standalone ? '--standalone' : ''}">
  <div class="centered-page {width}">
    <h1>{title}</h1>
    {#if blurb}
      <p>{blurb}</p>
    {/if}
  </div>
</header>