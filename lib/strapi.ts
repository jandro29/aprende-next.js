const { STRAPI_HOST, STRAPI_TOKEN } = process.env

export function query (url: string) {
    return fetch ( `${STRAPI_HOST}${url}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`
        }
    } ).then(res => res.json())
}