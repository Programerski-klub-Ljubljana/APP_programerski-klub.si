<script lang="ts">
  import {kosarica} from "../../../stores/kosaricaStore";
  import {onMount} from "svelte";

  let ponudba = []

  onMount(() => ponudba = kosarica.vsebina())

  function odstrani(id) {
    kosarica.odstrani(id)
    ponudba = kosarica.vsebina()
  }
</script>

<div>
  <br><br>
  {#each ponudba as p}
    <button on:click={() => odstrani(p.produkt_id)}>Odstrani</button>
    <ul>
      {#each Object.entries(p) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  {/each}
</div>
