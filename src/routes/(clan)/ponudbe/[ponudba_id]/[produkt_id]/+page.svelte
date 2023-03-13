<script>
  import {onMount} from 'svelte'
  import {page} from "$app/stores";
  import {api} from "../../../../../stores/apiStore.ts";
  import {kosarica} from "../../../../../stores/kosaricaStore.ts";

  let produkt = {}
  let kolicina = 1

  onMount(async () => api.produkt($page.params.produkt_id).then(data => {
    produkt = data
  }).catch(data => {
    console.error(data)
  }))


  let v_kosarico = () => kosarica.dodaj({
    produkt: produkt,
    kolicina: kolicina
  })

</script>

<div>
  <h1>Produkt</h1>
  <input type="number" bind:value={kolicina}>
  <button on:click={v_kosarico}>V kosarico</button>
  <div>
    <ul>
      {#each Object.entries(produkt) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  </div>
</div>
