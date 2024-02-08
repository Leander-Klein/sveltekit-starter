<script>
  import '../app.css'
  export let data
</script>

<h1 class="text-bold underline bg-blue-500">Hallo</h1>

<main>
  {#each data.items as entry}
    <div class="pl-10 mx-auto">{entry.fields.title}</div>
  {/each}

  <slot />
</main>
