export async function useFpl() {
  const res = await fetch("/api/teams");
  const obj = await res.json()
  return obj;
}
