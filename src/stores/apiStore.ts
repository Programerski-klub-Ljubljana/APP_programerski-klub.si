import {Axios} from "axios";

const CLIENT = new Axios({
  baseURL: "http://localhost:8000/",
  headers: {
    'Content-Type': 'application/json'
  }
})

function GET(url: string) {
  return () => new Promise((resolve, reject) => {
    CLIENT.get(url).then(res => {
      console.log(res.data)
      resolve(JSON.parse(res.data));
    }).catch(err => {
      reject(err.response.data)
    })
  })
}

export const api = {
  narocnine: GET("ponudbe?tip=NAROCNINA"),
  tecaji: GET("ponudbe?tip=TECAJ"),
  trgovina: GET("ponudbe?tip=PRODUKT"),
  produkti: (id: string) => GET(`ponudbe/${id}/produkti`)(),
}
