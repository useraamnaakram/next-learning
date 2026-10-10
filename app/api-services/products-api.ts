import axios from 'axios';

 function getProducts() {
    
    let res = axios.get('https://dummyjson.com/products')
    .then(function (response) {
        return response.data.products;
    })

    return res;

    
}



export { getProducts }