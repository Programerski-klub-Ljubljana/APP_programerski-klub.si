<script>
  import {onMount} from 'svelte'

  let produkt = {}
  onMount(async () => {
    produkt = await fetch(`http://localhost:8000/produkti/${$page.params.id}`).then(x => x.json())
    console.log(produkt);
  })
  import {page} from "$app/stores";
</script>

<div>
  <h1>Produkti</h1>
  <div>
    <ul>
      {#each Object.entries(produkt) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  </div>
</div>
