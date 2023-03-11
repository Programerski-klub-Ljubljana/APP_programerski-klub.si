<script lang="ts">
  import {token} from "../../stores/tokenStore";
  import {api} from "../../stores/apiStore";
  import {formData} from "../../utils";

  let response: Object = {}

  async function poslji(e) {
    const form = formData(e)
    console.log(form)
    api.obrazec.prijava({
      username: form.username,
      password: form.password,
    }).then(data => {
      response = data
      token.set(data.token)
    }).catch(data => {
      response = data
    })
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
