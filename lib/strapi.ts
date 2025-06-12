const { STRAPI_HOST, STRAPI_TOKEN } = process.env

export function query (url: string) {
    return fetch ( `${STRAPI_HOST}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`
        }
    } ).then(res => res.json())
}

export function secondSection (url: string) {
    return fetch ( `${STRAPI_HOST}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`
        }
    } ).then(res => res.json())
}

export function thirdSection (url: string) {
    return fetch ( `${STRAPI_HOST}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`
        }
    } ).then(res => res.json())
}