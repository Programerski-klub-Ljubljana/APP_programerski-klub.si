<script>

  import axios from "axios";
  import {onMount} from "svelte";
  import {goto} from "$app/navigation";
  import {tokenStore} from "../../stores/tokenStore.ts";
  import {get} from "svelte/store";
  import {kosaricaStore} from "../../stores/kosaricaStore.ts";

  let response = {}

  onMount(async () => {
    axios.get('http://localhost:8000/auth/whois', {
      headers: {
        "Authorization": `Bearer ${get(tokenStore)}`
      }
    }).then(async res => {
      response = await res.data
      console.log(response)
    }).catch(err => {
      response = err.response.data
      console.log(response)
      alert("You are not authorized redirected to prijava page...")
      goto("/prijava")
    });
  })
</script>

<div>
  <h1>Profil</h1>
  <p>{$tokenStore}</p>
  <br><br>
  <textarea cols=64 rows="23">{JSON.stringify(response, null, 4)}</textarea>
  <h1>Kosarica</h1>
  <textarea cols="64 rows=23">{JSON.stringify(get(kosaricaStore))}</textarea>
</div>

<style></style>
