export async function loadConfig(url) {

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("Failed to load site config")
  }

  return res.json()
}