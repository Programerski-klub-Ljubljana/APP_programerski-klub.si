<script>
  import {onMount} from 'svelte'
  import {page} from "$app/stores";
  import * as kosaricaStore from "../../../../stores/kosaricaStore.ts";

  onMount(async () => {
    produkt = await fetch(`http://localhost:8000/produkti/${$page.params.id}`).then(x => x.json())
    console.log(produkt);
  })

  let produkt = {}
  let kolicina = 1

  let kupi = () => kosaricaStore.kupi({produkt_id: produkt._id, kolicina: kolicina})

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
