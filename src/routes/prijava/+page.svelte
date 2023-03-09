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
      username: req.username,
      password: req.password,
    }
    let res = await axios.post('http://localhost:8000/auth/login', body).catch(err => err.response);
      response = await res.data
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
