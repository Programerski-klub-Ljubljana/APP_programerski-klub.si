<script lang="ts">

  import {api} from "../../../stores/apiStore";
  import {formData} from "../../../utils";

  let response: Object = {}

  async function poslji(e: SubmitEvent) {
    const form = formData(e)
    api.obrazec.kontakt({
      ime: form.ime,
      priimek: form.priimek,
      vsebina: form.vsebina,
      kontakti: [
        {data: form.telefon, tip: "TELEFON"},
        {data: form.email, tip: "EMAIL"}
      ]
    }).then(data => {
      response = data
    }).catch(data => {
      response = data
    })
  }
</script>

<div>
  <form on:submit|preventDefault={poslji}>
    <br><br>
    <input name="ime" type="text" placeholder="Ime...">
    <input name="priimek" type="text" placeholder="Priimek...">
    <br><br>
    <input name="telefon" type="tel" placeholder="Telefon...">
    <input name="email" type="email" placeholder="Email...">
    <br><br>
    <textarea name="vsebina" cols=64 rows="10" placeholder="Vsebina..."></textarea>
    <br><br>
    <button type="submit">Poslji</button>
  </form>
  <br><br>
  <textarea cols=64 rows="23">{JSON.stringify(response, null, 4)}</textarea>
</div>
