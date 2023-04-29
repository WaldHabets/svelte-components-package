<script>export let id = "";
export let name = "";
export let title = "";
export let blurb = null;
export let value = null;
export let checked = false;
export let disabled = false;
</script>

<label for="{id}" class="radio-group {disabled ? 'disabled' : ''}">
    <input type="checkbox" {id} {name} {value} bind:checked={checked} {disabled} />
  <span class="radio-label">
    <span class="radio-title">{title}</span>
    {#if blurb}
    <span class="radio-blurb">{blurb}</span>
    {/if}
  </span>
</label>

<style>.radio-group {
  display: flex;
  padding: 8px;
  accent-color: var(--pt-theme-primary);
  font-size: 1rem;
  font-weight: normal;
  align-items: center;
}
.radio-group:hover:not(.disabled) {
  background: var(--pt-container-bg-highlight);
  border-radius: 8px;
}
.radio-group:focus-within:focus-visible {
  outline: 4px solid var(--pt-theme-info);
}
.radio-group:focus-within:focus-visible input {
  outline: none;
}
.radio-group input {
  margin-right: 8px;
  width: 20px;
  height: 20px;
}
.radio-group:not(:last-child) {
  border-bottom: 1px solid #bbb;
}
.radio-group .radio-label {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
}
.radio-group .radio-label .radio-title {
  font-size: 1rem;
  font-weight: normal;
}
.radio-group .radio-label .radio-blurb {
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 1;
}
.radio-group.disabled .radio-label {
  opacity: 0.75;
}
.radio-group.disabled .radio-label .radio-title,
.radio-group.disabled .radio-label .radio-blurb {
  text-decoration: line-through;
}</style>