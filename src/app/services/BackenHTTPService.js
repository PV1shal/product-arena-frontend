import axios from "axios";

function BackendHttpServices() {
    function getProductComparison({ itemLink1, itemLink2 }) {
        console.log(itemLink1, itemLink2)
        return axios.post("http://localhost:8000/compare", {
            links: [itemLink1, itemLink2]
        });
    }

    return {
        getProductComparison,
    };
}

export default BackendHttpServices();