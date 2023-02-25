<script context="module">export let prerender = true;
</script>

<script>/** Exports */
export let iconStart = false;
export let iconEnd = false;
export let href = false;
</script>

<li class="list-item active">
  {#if iconStart}
    <div class="label-group">
      <svg viewBox="0 0 24 24" class="icon-start">
        <path d={iconStart} />
      </svg>
      <p>
        <slot />
      </p>
    </div>
  {:else}
    <p>
      <slot />
    </p>
  {/if}
  {#if iconEnd}
    <svg viewBox="0 0 24 24" class="icon-end">
      <path d={iconEnd} />
    </svg>
  {/if}
</li>

<style>.list-item.active {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-item.active a {
  color: inherit;
  text-decoration: none;
}
.list-item.active .label-group {
  display: flex;
  align-items: center;
}
.list-item.active .icon-start,
.list-item.active .icon-end {
  width: 24px;
  height: 24px;
  padding: 4px;
  fill: #6f6f6f;
  flex-shrink: 0;
}</style>
