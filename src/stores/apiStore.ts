import {token} from "./tokenStore.js";

const DOMAIN = "http://localhost:8000"

export function GET(url: string) {
  console.log(`Authorization Bearer ${token.get()}`)
  return () => new Promise(async (resolve, reject) => {
    fetch(`${DOMAIN}/${url}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token.get()}`
      }
    }).then(async res => {
      if (!res.ok) reject()
      res.json()
        .then(data => resolve(data))
        .catch(err => reject())
    }).catch(err => reject())
  })
}

export function POST(url: string, body: object) {
  return new Promise(async (resolve, reject) => {
    fetch(`${DOMAIN}/${url}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.get()}`
      },
      body: JSON.stringify(body)
    }).then(async res => {
      if (!res.ok) reject()
      res.json()
        .then(data => resolve(data))
        .catch(err => reject())
    }).catch(err => reject())
  })
}

export const api = {
  narocnine: GET("ponudbe?tip=NAROCNINA"),
  tecaji: GET("ponudbe?tip=TECAJ"),
  trgovina: GET("ponudbe?tip=PRODUKT"),
  ponudba: (id: string) => GET(`ponudbe/${id}/produkti`)(),
  produkt: (id: string) => GET(`produkti/${id}`)(),

  obrazec: {
    kontakt: (body: object) => POST("obrazec/kontakt", body),
    prijava: (body: object) => POST("auth/prijava", body),
    narocilo: (body: object) => POST("narocila", body)
  },

  profil: {
    narocnine: GET(`profil/narocnine`),
    narocila: GET(`profil/narocila`)
  },

  whois: GET("auth/whois"),
}
