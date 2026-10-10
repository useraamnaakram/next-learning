"use client"
import { useState } from "react"
import ProductsCard from './ProductsCard'

import { getProducts } from "../api-services/products-api";
export default  function FetchProduct() {

    const [products, setProducts] = useState([])

    async function fetchProducts() {
        let res = await getProducts()
        // console.log('res', res)
        setProducts(res)
    }
    fetchProducts()


  return (
    <>
        <div className="text-black">Products</div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />  */}

          {
            products.map( function (product,index){
              // console.log(product)
              return <ProductsCard key={index} data={product} />

            })
          }
        </div>
    
    </>
  )
}
