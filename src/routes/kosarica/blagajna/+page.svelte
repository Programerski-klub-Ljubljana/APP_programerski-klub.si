<script lang="ts">
  import {onMount} from "svelte";
  import {kosarica} from "../../../stores/kosaricaStore";

  let ponudba = []

  onMount(() => ponudba = kosarica.vsebina())

  function oddaj_narocilo() {
    console.log("oddaj narocilo")
  }
</script>

<div>
  <br><br>
  <button on:click={oddaj_narocilo}>Oddaj narocilo</button>
  <br><br>
  {#each ponudba as p}
    <ul>
      {#each Object.entries(p) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  {/each}
</div>
