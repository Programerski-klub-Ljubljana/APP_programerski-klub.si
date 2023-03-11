<script>
  import {onMount} from 'svelte'
  import {page} from "$app/stores";
  import {api} from "../../../../stores/apiStore";
  import {kosarica} from "../../../../stores/kosaricaStore";

  let produkt = {}
  let kolicina = 1

  onMount(async () => api.produkt($page.params.id).then(data => {
    produkt = data
  }).catch(data => {
    console.error(data)
  }))


  let kupi = () => kosarica.kupi({produkt_id: produkt._id, kolicina: kolicina})

</script>

<div>
  <h1>Produkt</h1>
  <input type="number" bind:value={kolicina}>
  <button on:click={kupi}>Buy</button>
  <div>
    <ul>
      {#each Object.entries(produkt) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  </div>
</div>
