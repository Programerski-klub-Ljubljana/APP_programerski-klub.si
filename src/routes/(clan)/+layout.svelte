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
  <br>
  <br>
  <textarea cols=64 rows="5">{JSON.stringify(response, null, 4)}</textarea>
  <br><br>
  <a href="/narocnine">Narocnine</a>
  <a href="/narocila">Narocila</a>
  <a href="/kosarica">Kosarica</a>
  <a href="/ponudbe">Ponudbe</a>
  <slot/>
</div>

<style></style>
