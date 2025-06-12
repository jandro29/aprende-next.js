export async function getSecondInfo() {
  try {
    const res = await fetch("https://backend-aprende.onrender.com/api/second-section");

    if (!res.ok) {
      console.error("Error en el fetch:", res.status);
      return null;
    }

    const json = await res.json();

    //En tu caso los campos están directamente en data, sin "attributes"
    return json.data ?? null;
  } catch (error) {
    console.error("Error al conectar con Strapi:", error);
    return null;
  }
}
