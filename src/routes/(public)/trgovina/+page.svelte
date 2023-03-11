<script>
  import {onMount} from 'svelte'
  import {api} from "../../../stores/apiStore.ts";

  let ponudba = []

  onMount(async () => api.trgovina().then(data => {
    ponudba = data
  }).catch(data => {
    console.log(data)
  }))

</script>

<div>
  <h1>Trgovina</h1>
  {#each ponudba as p}
    <ul>
      <a href="/ponudba/{p._id}">Poglej</a>
      {#each Object.entries(p) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  {/each}
</div>
