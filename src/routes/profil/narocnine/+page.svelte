<script>
  import {onMount} from 'svelte'
  import {api} from "../../../stores/apiStore";

  let narocnine = []

  onMount(() => api.profil.narocnine().then(data => {
    console.log(data)
      narocnine = data
    }).catch(data => {
      console.log(data)
    }))

</script>

<div>
  <h1>Narocnine</h1>
  {#each narocnine as n}
    <ul>
      {#each Object.entries(n) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
      <li>Produkt:</li>
      <ul>
        {#each Object.entries(n.produkt) as [key, value]}
          <li>{key}: {value}</li>
        {/each}
      </ul>
    </ul>
  {/each}
</div>
