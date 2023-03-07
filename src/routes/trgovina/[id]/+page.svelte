<script>
  import { onMount } from 'svelte'
  let produkti = []
  onMount(async () => {
    produkti = await fetch(`http://localhost:8000/ponudbe/${$page.params.id}/produkti`).then(x => x.json())
    console.log(produkti);
  })
import {page} from "$app/stores";
</script>

<div>
  <h1>Produkti</h1>
  {#each produkti as p}
    <div>
      <ul>
        <li>Status: {p.status}</li>
        <li>Ime: {p.ime}</li>
        <li>Enota: {p.enota}</li>
        <li>Cena: {p.cena}</li>
      </ul>
    </div>
  {/each}
</div>
