<script context="module">
  export const prerender = true;
</script>

<script>export let breadcrumbs = [];
</script>

<nav class="breadcrumbs-container">
  <ul>
    {#each breadcrumbs as breadcrumb}
      <li class="breadcrumb">
        <a href={breadcrumb.href}>
          {breadcrumb.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>.breadcrumbs-container {
  padding: 4px;
  background: white;
  border: 1px solid #bbb;
  border-radius: 4px;
  box-shadow: 0 0 4px -1px rgba(0, 0, 0, 0.7);
}
.breadcrumbs-container *:not(:last-child)::after {
  content: "/";
}

.breadcrumb {
  height: 32px;
  display: inline-block;
  line-height: 32px;
  padding-left: 8px;
  padding-right: 8px;
}</style>
