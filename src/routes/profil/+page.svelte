<script>

  import {onMount} from "svelte";
  import {goto} from "$app/navigation";
  import {api} from "../../stores/apiStore";
  import {token} from "../../stores/tokenStore";
  import {kosarica} from "../../stores/kosaricaStore";

  let response = {}

  onMount(async () => api.whois()
    .then(data => {
      response = data
    }).catch(() => {
      alert("You are not authorized redirected to prijava page...")
      goto("/prijava")
    })
  )
</script>

<div>
  <h1>Profil</h1>
  <br>{token.get()}<br>
  <textarea cols=64 rows="23">{JSON.stringify(response, null, 4)}</textarea>
</div>

<style></style>
