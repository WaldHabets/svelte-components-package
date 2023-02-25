<script context="module">export const prerender = true;
</script>

<script>export let icon;
export let text;
</script>

<div class="placeholder">
  <svg viewBox="0 0 24 24">
    <path d={icon} />
  </svg>
  <p>{text}</p>
</div>

<style>.placeholder {
  color: var(--pt-text);
  opacity: 0.4;
}
.placeholder svg {
  display: block;
  color: inherit;
  max-width: 512px;
  max-height: 256px;
  width: 100%;
  margin: auto;
  fill: currentColor;
}
.placeholder p {
  color: inherit;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}</style>
