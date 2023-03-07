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
        <a href="/produkt/{p._id}">Poglej</a>
        {#each Object.entries(p) as [key, value]}
          <li>{key}: {value}</li>
        {/each}
      </ul>
    </div>
  {/each}
</div>
