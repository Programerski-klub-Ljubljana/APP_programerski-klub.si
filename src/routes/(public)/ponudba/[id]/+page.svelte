<script>
  import {onMount} from 'svelte'
  import {page} from "$app/stores";
  import {api} from "../../../../stores/apiStore";

  let produkti = []

  onMount(() => api.ponudba($page.params.id)
    .then(data => {
      produkti = data
    }).catch(data => {
      console.log(data)
    }))
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
