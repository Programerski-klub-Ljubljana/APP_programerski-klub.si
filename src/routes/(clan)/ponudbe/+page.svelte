<script>
  import {onMount} from 'svelte'
  import {api} from "../../../stores/apiStore.ts";

  let ponudba = []

  onMount(() => api.ponudbe().then(data => {
      ponudba = data
    }).catch(data => {
      console.log(data)
    }))

</script>

<div>
  <h1>Ponudbe</h1>
  {#each ponudba as p}
    <ul>
      <a href="/ponudbe/{p._id}">Poglej</a>
      {#each Object.entries(p) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  {/each}
</div>
