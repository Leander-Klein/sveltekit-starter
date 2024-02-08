<script>
  import { onMount } from 'svelte'
  import axios from 'axios'
  import { PUBLIC_CONTENTFUL_SPACE_ID, PUBLIC_CONTENTFUL_ACCESS_TOKEN } from '$env/static/public'
  const apiUrl = `https://cdn.contentful.com/spaces/${PUBLIC_CONTENTFUL_SPACE_ID}/entries?access_token=${PUBLIC_CONTENTFUL_ACCESS_TOKEN}`

  let data = []

  async function fetchData() {
    try {
      const response = await axios.get(apiUrl)
      data = response.data.items
      console.log(data[0].fields.text)
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
      <div>{entry.fields.text}</div>
    {/each}
  {:else}
    <p>Lade Daten...</p>
  {/if}
</main>
