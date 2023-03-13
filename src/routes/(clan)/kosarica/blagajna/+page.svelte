<script lang="ts">
  import {onMount} from "svelte";
  import {kosarica} from "../../../../stores/kosaricaStore";
  import {api} from "../../../../stores/apiStore";
  import {dateISO, formData} from "../../../../utils";

  let izbire = []
  let response: Object = {}
  let prejemnik_obstaja = true

  onMount(() => izbire = kosarica.vsebina())

  function oddaj_narocilo(e) {
    const form = formData(e)

    let placnik: Object = {
      "ime": form.placnik_ime,
      "priimek": form.placnik_priimek,
      "rojen": dateISO(form.placnik_leto, form.placnik_mesec, form.placnik_dan),
      "naslov": {
        "drzava": form.placnik_drzava,
        "mesto": form.placnik_mesto,
        "ulica": form.placnik_ulica,
        "zip": parseInt(<string>form.placnik_zip),
        "dodatno": form.placnik_dodatno
      },
      "kontakti": [
        {"tip": "TELEFON", "data": form.placnik_telefon},
        {"tip": "EMAIL", "data": form.placnik_email}
      ]
    }

    let prejemnik: Object = {
      "ime": form.prejemnik_ime,
      "priimek": form.prejemnik_priimek,
      "rojen": dateISO(form.prejemnik_leto, form.prejemnik_mesec, form.prejemnik_dan),
      "naslov": {
        "drzava": form.prejemnik_drzava,
        "mesto": form.prejemnik_mesto,
        "ulica": form.prejemnik_ulica,
        "zip": parseInt(<string>form.prejemnik_zip),
        "dodatno": form.prejemnik_dodatno
      },
      "kontakti": [
        {"tip": "TELEFON", "data": form.prejemnik_telefon},
        {"tip": "EMAIL", "data": form.prejemnik_email}
      ]
    }

    // V primeru če prejemnik ne obstaja potem je prejemnik tisti ki bo tudi placal.
    if (!prejemnik_obstaja) {
      prejemnik = placnik
      placnik = null
    }

    let body = {
      "kosarica": kosarica.vsebina(),
      "placnik": placnik,
      "prejemnik": prejemnik
    }

    api.obrazec.narocilo(body)
      .then(data => response = data).catch(() => {
      alert("Narocilo ni bilo poslano.")
    })

  }
</script>

<div>

  <h1>Kosarica</h1>
  <table width=400px border="1">
    <tr>
      <td>Kolicina</td>
      <td>Id</td>
    </tr>
    {#each izbire as p}
      <tr>
        <td>{p.kolicina}</td>
        <td>{p.produkt._id}</td>
      </tr>
    {/each}
  </table>


  <form on:submit|preventDefault={oddaj_narocilo}>
    <h1>Kupec</h1>


    <table>
      <tr>
        <td>
          <p>Oseba:</p>
        </td>
        <td>
          <input placeholder="Ime..." type="text" name="placnik_ime">
          <input placeholder="Priimek..." type="text" name="placnik_priimek">
        </td>
      </tr>
      <tr>
        <td>
          <p>Rojen:</p>
        </td>
        <td>
          <input placeholder="Rojen dne..." type="number" name="placnik_dan">
          <input placeholder="Rojen mesca..." type="number" name="placnik_mesec">
          <input placeholder="Rojen leta..." type="number" name="placnik_leto">
        </td>
      </tr>
      <tr>
        <td>
          <p>Prebivalisce:</p>
        </td>
        <td>
          <input placeholder="Prebivalisce drzava..." type="text" name="placnik_drzava">
          <input placeholder="Prebivalisce mesto..." type="text" name="placnik_mesto">
          <input placeholder="Prebivalisce zip..." type="number" name="placnik_zip">
        </td>
      </tr>
      <tr>
        <td>
          <p>Lokacija:</p>
        </td>
        <td>
          <input placeholder="Prebivalisce ulica..." type="text" name="placnik_ulica">
          <input placeholder="Prebivalisce dodatno..." type="text" name="placnik_dodatno">
        </td>
      </tr>
      <tr>
        <td>
          <p>Kontakti:</p>
        </td>
        <td>
          <input placeholder="Telefon..." type="text" name="placnik_telefon">
          <input placeholder="Email..." type="text" name="placnik_email">
        </td>
      </tr>
    </table>

    <br>
    <input type=checkbox name="prejemnik" bind:checked={prejemnik_obstaja}>
    <span>Prejemnik je tudi kupec izdelkov.</span>

    {#if prejemnik_obstaja}
      <br>
      <br>
      <h1>Prejemnik</h1>

      <table>
        <tr>
          <td>
            <p>Oseba:</p>
          </td>
          <td>
            <input placeholder="Ime..." type="text" name="prejemnik_ime">
            <input placeholder="Priimek..." type="text" name="prejemnik_priimek">
          </td>
        </tr>
        <tr>
          <td>
            <p>Rojen:</p>
          </td>
          <td>
            <input placeholder="Rojen dne..." type="number" name="prejemnik_rojen_dan">
            <input placeholder="Rojen mesca..." type="number" name="prejemnik_rojen_mesec">
            <input placeholder="Rojen leta..." type="number" name="prejemnik_rojen_leto">
          </td>
        </tr>
        <tr>
          <td>
            <p>Prebivalisce:</p>
          </td>
          <td>
            <input placeholder="Prebivalisce drzava..." type="text" name="prejemnik_drzava">
            <input placeholder="Prebivalisce mesto..." type="text" name="prejemnik_mesto">
            <input placeholder="Prebivalisce zip..." type="number" name="prejemnik_zip">
          </td>
        </tr>
        <tr>
          <td>
            <p>Lokacija:</p>
          </td>
          <td>
            <input placeholder="Prebivalisce ulica..." type="text" name="prejemnik_ulica">
            <input placeholder="Prebivalisce dodatno..." type="text" name="prejemnik_dodatno">
          </td>
        </tr>
        <tr>
          <td>
            <p>Kontakti:</p>
          </td>
          <td>
            <input placeholder="Telefon..." type="text" name="prejemnik_telefon">
            <input placeholder="Email..." type="text" name="prejemnik_email">
          </td>
        </tr>
      </table>
    {/if}

    <br><br><br>
    <button on:click={oddaj_narocilo}>Oddaj narocilo</button>
  </form>

  <br><br><br>
  <textarea rows="60" cols="80">{JSON.stringify(response, null, 4)}</textarea>
</div>
