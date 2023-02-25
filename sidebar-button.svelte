<script>import { layout } from "./layout";
import { mdiMenu } from "@mdi/js";
export let cStyle = null;
export let cClass = null;
export let label;
</script>

<button
  role="menuitem"
  class="flat-button --flex {cClass}"
  style={cStyle}
  on:click={() => $layout.sidebar = true}>
  <svg viewBox="0 0 24 24">
    <path d="{mdiMenu}" />
  </svg>
  {label}
</button>