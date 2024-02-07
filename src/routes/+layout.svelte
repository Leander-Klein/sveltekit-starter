<script>
  import { onMount } from 'svelte'
  import axios from 'axios'
  const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = import.meta.env
  const apiUrl = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}`

  let data = []

  async function fetchData() {
    try {
      const response = await axios.get(apiUrl)
      data = response.data.items // Annehmen, dass Ihre Daten unter 'items' liegen
    } catch (error) {
      console.error('Fehler beim Abrufen der Daten von Contentful:', error)
    }
  }
  onMount(() => {
    fetchData()
  })
</script>

<h1 class="text-bold underline bg-blue-500">Hallo</h1>
<slot />

<main>
  {#if data.length > 0}
    {#each data as entry (entry.sys.id)}
      <div>{entry.fields.title}</div>
    {/each}
  {:else}
    <p>Lade Daten...</p>
  {/if}
</main>
