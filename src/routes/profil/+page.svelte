<script>

  import axios from "axios";
  import {onMount} from "svelte";
  import {goto} from "$app/navigation";

  let response = {}

  onMount(async () => {
    console.log(`Bearer ${window.localStorage.getItem("token")}`)
    axios.get('http://localhost:8000/auth/whois', {
      headers: {
        "Authorization": `Bearer ${window.localStorage.getItem("token")}`
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
  <br><br>
  <textarea cols=64 rows="23">{JSON.stringify(response, null, 4)}</textarea>
</div>

<style></style>
