import axios from 'axios';


const serUrl = axios.create({
    baseURL:"https://api.cat-shop.penkuoer.com/api/v2/proxy"
})


export function getCors(url,data, config) {
    return serUrl.post(url, data, config)
}



