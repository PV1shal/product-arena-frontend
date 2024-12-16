import axios from "axios";

function BackendHttpServices() {
    function getProductComparison({ itemLink1, itemLink2 }) {
        console.log(itemLink1, itemLink2)
        return axios.post(process.env.NEXT_PUBLIC_BE_URI_COMPARE, {
            links: [itemLink1, itemLink2]
        });
    }

    function getProductComparisonNewApp({ prev_products, new_product }) {
        console.log(prev_products, new_product)
        return axios.post(process.env.NEXT_PUBLIC_BE_URI_NEW_COMPARE, {
            prev_products: prev_products,
            new_product: new_product
        });
    }    

    return {
        getProductComparison,
        getProductComparisonNewApp
    };
}

export default BackendHttpServices();