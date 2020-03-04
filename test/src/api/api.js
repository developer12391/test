import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://demo4233545.mockable.io/',
})

export const productsAPI = {
    getProducts() {
        return instance.get(`products`).
        then(response=>response.data)
    }
}