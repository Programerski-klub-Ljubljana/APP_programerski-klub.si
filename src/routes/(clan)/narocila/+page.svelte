<script>
  import {onMount} from 'svelte'
  import {api} from "../../../stores/apiStore";
  import {goto} from "$app/navigation";

  let narocila = []

  onMount(() => api.profil.narocila().then(data => {
    console.log(data)
    narocila = data
  }).catch(data => {
    console.log(data)
  }))

</script>

<div>
  <h1>Narocila</h1>
  {#each narocila as n}
    <ul>
      {#each Object.entries(n) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  {/each}
</div>
