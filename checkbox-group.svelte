<script context="module">export {};
</script>
<script>import genID from "./id";
const id = genID();
export let cClass = "";
export let name = "";
export let options = [];
export let checked = [];
</script>

<ul class={cClass}>
  {#each options as option}
    <li>
      <label for="{id+option.value}" class="radio-item {option.disabled ? 'disabled' : ''}">
        <input type="checkbox"
               id="{id+option.value}"
               name={name} bind:group={checked} value={option.value} disabled={option.disabled} />
        <span class="radio-label">
          <span class="radio-title">{option.title}</span>
          {#if option.blurb}
          <span class="radio-blurb">{option.blurb}</span>
          {/if}
        </span>
      </label>
    </li>
  {/each}
</ul>