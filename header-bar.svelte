<script>export let width = "wide";
export let title = "";
export let blurb = null;
export let raised = false;
</script>

<header class="{raised ? 'header-bar-raised' : 'header-bar'}">
  <div class="centering-{width}">
    <h1>{title}</h1>
    {#if blurb}
      <p>{blurb}</p>
    {/if}
  </div>
</header>