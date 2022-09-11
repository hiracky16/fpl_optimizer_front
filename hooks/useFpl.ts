export async function useFpl() {
  const res = await fetch("http://localhost:3000/api/teams");
  const obj = await res.json()
  return obj;
}
