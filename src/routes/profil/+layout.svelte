<script>
  import {onMount} from "svelte";
  import {api} from "../../stores/apiStore";
  import {goto} from "$app/navigation";

  let response = []

  onMount(async () => api.whois()
    .then(data => {
      response = data
      console.log(data)
    }).catch(() => {
      alert("You are not authorized redirected to prijava page...")
      goto("/prijava")
    })
  )
</script>

<div>
  <br><br>
  <a href="/profil/narocnine">Narocnine</a>
  <a href="/profil/narocila">Narocila</a>


  <div>
    <h1>Profil</h1>
    <textarea cols=64 rows="5">{JSON.stringify(response, null, 4)}</textarea>
  </div>

  <slot/>
</div>

<style></style>
