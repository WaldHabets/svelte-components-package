<script>/** Id */
import genID from "./id";
const id = `overlay-${genID()}`;
let dialog;
export function show() {
    dialog.showModal();
}
export function hide() {
    dialog.close();
}
</script>

<dialog {id} bind:this={dialog} class="overlay">
  <slot></slot>
</dialog>

<style>.overlay {
  background: var(--pt-body-bg);
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  border-color: var(--pt-body-bg);
}</style>