export function formData(e: SubmitEvent){
  // @ts-ignore
  const formData = new FormData(e.target)
  return Object.fromEntries(formData.entries())
}
