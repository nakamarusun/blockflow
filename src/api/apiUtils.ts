export async function handleResponse(res: Response): Promise {
  if (res.ok) return res.json()
  if (res.status === 400) {
    throw new Error(await res.text());
  }
  throw new Error("API Response error");
}