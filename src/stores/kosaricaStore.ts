import {persisted} from 'svelte-local-storage-store'
import {get} from "svelte/store";

export const kosarica = {
  store: persisted('kosaricaStore', []),
  vsebina: () => get(kosarica.store),
  kupi: (ele: Object) => {
    kosarica.store.update(data => {
      for (const ke of data) {
        if (ke.produkt_id === ele.produkt_id) {
          ke.kolicina += ele.kolicina
          return data
        }
      }
      data.push({kolicina: ele.kolicina, produkt_id: ele.produkt_id})
      return data
    })
  },
  odstrani: (produkt_id: Object) => {
    kosarica.store.update(data => data.filter(ele => produkt_id != ele.produkt_id))
  }
}
