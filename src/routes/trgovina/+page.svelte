<script>
  import { onMount } from 'svelte'
  let ponudbe = []
  onMount(async () => {
    ponudbe = await fetch('http://localhost:8000/ponudbe').then(x => x.json())
    console.log(ponudbe)
  })
</script>

<div>
  {#each ponudbe as p}
      <ul>
        <a href="/trgovina/{p._id}">Poglej</a>
        <li>Tip: {p.tip}</li>
        <li>Ime: {p.ime}</li>
        <li>Opis: {p.opis}</li>
      </ul>
  {/each}
</div>
