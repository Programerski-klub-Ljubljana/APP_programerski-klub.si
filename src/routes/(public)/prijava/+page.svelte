<script>

  import axios from "axios";
  import {tokenStore} from "../../../stores/tokenStore.ts";

  let response = {}

  async function poslji(e) {
    let formData = new FormData(e.target)
    let req = {}
    for (let [key, value] of formData) {
      req[key] = value
    }
    let body = {
      username: req.username,
      password: req.password,
    }
    axios.post('http://localhost:8000/auth/login', body).then(async res => {
      response = await res.data
      tokenStore.set(response.token)
    }).catch(err => {
      response = err.response.data
    });
  }
</script>

<div>
  <form on:submit|preventDefault={poslji}>
    <br><br>
    <input name="username" type="text" placeholder="Username...">
    <input name="password" type="text" placeholder="Password...">
    <button type="submit">Poslji</button>
  </form>
  <br><br>
  <textarea cols=64 rows="23">{JSON.stringify(response, null, 4)}</textarea>
</div>
