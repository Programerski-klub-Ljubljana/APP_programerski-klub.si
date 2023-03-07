<script>

  import axios from "axios";

  let response = {}

  async function poslji(e) {
    let formData = new FormData(e.target)
    let req = {}
    for (let [key, value] of formData) {
      req[key] = value
    }
    let body = {
      ime: req.ime,
      priimek: req.priimek,
      vsebina: req.vsebina,
      kontakti: [
        {data: req.telefon, tip: "TELEFON"},
        {data: req.email, tip: "EMAIL"}
      ]
    }
    let res = await axios.post('http://localhost:8000/obrazec/kontakt', body)
    response = await res.data
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
