export function formData(e: SubmitEvent) {
  // @ts-ignore
  const formData = new FormData(e.target)
  return Object.fromEntries(formData.entries())
}

export function dateISO(leto: File | string, mesec: File | string, dan: File | string) {
  try{
    return new Date(parseInt(leto), parseInt(mesec), parseInt(dan)).toISOString().split("T")[0]
  } catch (e) {
    return null
  }
}
