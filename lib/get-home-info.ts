import { query } from "./strapi"

export function getHomeInfo(){
    return query ("home")
        .then(res => {
            return res.data
        })
}