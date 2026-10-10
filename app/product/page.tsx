
import FetchProduct from "../components/FetchProduct";




// import ProductsCard, { type Product } from "../components/ProductsCard";

// const products = [
//   {
//     name: "Everyday Carry Pack",
//     description: "A compact, durable pack designed for commutes and weekend plans.",
//     price: 84,
//     category: "Bags",
//     thumbnail: "/product.jpg",
//   },
//   {
//     name: "Field Notes Set",
//     description: "Three tactile notebooks for ideas, plans, and everything in between.",
//     price: 24,
//     category: "Stationery",
//     thumbnail: "/product1.jpg",
//   },
//   {
//     name: "Studio Bottle",
//     description: "A reusable stainless-steel bottle with a clean, minimal silhouette.",
//     price: 32,
//     category: "Outdoor",
//     thumbnail: "/product2.jpg",
//   },
//   {
//     name: "Office Bottle",
//     description: "A reusable stainless-steel bottle with a clean, minimal silhouette.",
//     price: 65,
//     category: "Outdoor",
//     thumbnail: "/product3.jpg",
//   },
// ];





export default function Product() {

    

    // async function fetchProducts() {
    //   try {
    //       let res = await axios.get('https://dummyjson.com/products');
    //       console.log('', res.data.products)
    //       setProducts(res.data.products)
    //   }
    //   catch (error) {
    //     console.log(error)
    //   }
    // }

    // fetchProducts()

  return (
    <main className="flex-1 bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">The collection</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Useful things, made well.</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">Thoughtful everyday goods with simple forms and room to become part of your routine.</p>
        </div>
        <FetchProduct />
        
      </div>
    </main>
  )
}
