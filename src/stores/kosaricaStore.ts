import {persisted} from 'svelte-local-storage-store'

export interface ElementKosarice {
  produkt_id: String,
  kolicina: Number
}

export const kosaricaStore = persisted('kosaricaStore', [])

export function kupi(ele: ElementKosarice) {
  kosaricaStore.update(kosarica => {
    for (const ke of kosarica) {
      // @ts-ignore
      if (ke.produkt_id === ele.produkt_id) {
        // @ts-ignore
        ke.kolicina += ele.kolicina
        return kosarica
      }
    }
    // @ts-ignore
    kosarica.push({kolicina: ele.kolicina, produkt_id: ele.produkt_id})
    return kosarica
  })
}
