<script>export let width = "wide";
export let ariaLabel = "menubar";
</script>

<section class="menu-bar" aria-label="{ariaLabel}">
  <div class="centering-{width}">
    <slot />
  </div>
</section>