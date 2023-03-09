<script>
  import { onMount } from 'svelte'
  let ponudba = []
  onMount(async () => {
    ponudba = await fetch('http://localhost:8000/ponudbe?tip=NAROCNINA').then(x => x.json())
    console.log(ponudba)
  })
</script>

<div>
  <h1>Narocnine</h1>
  {#each ponudba as p}
    <ul>
      <a href="/ponudba/{p._id}">Poglej</a>
      {#each Object.entries(p) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  {/each}
</div>
