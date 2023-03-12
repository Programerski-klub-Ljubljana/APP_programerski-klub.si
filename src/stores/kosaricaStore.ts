import {persisted} from 'svelte-local-storage-store'
import {get} from "svelte/store";

export const kosarica = {
  store: persisted('kosaricaStore', []),
  vsebina: () => get(kosarica.store),
  dodaj: (ele: Object) => {
    kosarica.store.update(data => {
      for (const ke of data) {
        if (ke.produkt._id === ele.produkt._id) {
          ke.kolicina += ele.kolicina
          return data
        }
      }
      data.push(ele)
      return data
    })
  },
  odstrani: (produkt_id: Object) => {
    // @ts-ignore
    kosarica.store.update(data => data.filter(ele => produkt_id != ele.produkt.id))
  }
}
