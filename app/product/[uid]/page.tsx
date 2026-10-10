import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  sku: string;
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
};

async function getProduct(uid: string): Promise<Product | null> {
  try {
    const response = await fetch(`https://dummyjson.com/products/${encodeURIComponent(uid)}`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return null;
    return (await response.json()) as Product;
  } catch {
    return null;
  }
}

export default async function ProductDetailPage({ params }: PageProps<"/product/[uid]">) {
  const { uid } = await params;
  const product = await getProduct(uid);
  if (!product || !product.id) notFound();

  const images = product.images?.length ? product.images : [product.thumbnail];
  const price = product.price * (1 - (product.discountPercentage || 0) / 100);

  return (
    <main className="min-h-screen flex-1 bg-[#f8f8f6] px-4 py-8 text-slate-900 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/product" className="transition hover:text-teal-700">Shop</Link>
          <span aria-hidden="true">/</span>
          <span className="capitalize">{product.category.replaceAll("-", " ")}</span>
          <span aria-hidden="true">/</span>
          <span className="max-w-52 truncate text-slate-800">{product.title}</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="grid gap-4 sm:grid-cols-[88px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">
              {images.slice(0, 4).map((image, index) => (
                <div key={`${image}-${index}`} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white sm:h-[88px] sm:w-[88px]">
                  <Image src={image} alt={`${product.title} view ${index + 1}`} fill sizes="88px" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="relative order-1 aspect-square overflow-hidden rounded-3xl bg-[#f0eee9] sm:order-2 sm:aspect-[4/4.5]">
              <Image src={images[0]} alt={product.title} fill priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 640px" className="object-contain p-8 mix-blend-multiply sm:p-12" />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-teal-800 shadow-sm">{product.brand || "Featured"}</span>
            </div>
          </div>

          <div className="flex flex-col py-2 lg:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">{product.category.replaceAll("-", " ")}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{product.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <span className="text-amber-500" aria-label={`${product.rating} out of 5 stars`}>★★★★★</span>
              <span className="font-medium text-slate-700">{product.rating.toFixed(1)}</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-500">SKU {product.sku}</span>
            </div>

            <div className="mt-7 flex items-baseline gap-3">
              <p className="text-3xl font-semibold tracking-tight">${price.toFixed(2)}</p>
              {product.discountPercentage > 0 && <><span className="text-lg text-slate-400 line-through">${product.price.toFixed(2)}</span><span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-700">Save {Math.round(product.discountPercentage)}%</span></>}
            </div>
            <p className="mt-6 max-w-xl leading-7 text-slate-600">{product.description}</p>

            <div className="mt-7 flex items-center gap-2 text-sm">
              <span className={`h-2.5 w-2.5 rounded-full ${product.stock > 0 ? "bg-emerald-500" : "bg-rose-500"}`} />
              <span className="font-medium">{product.stock > 0 ? `In stock · ${product.stock} available` : "Currently unavailable"}</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" disabled={product.stock <= 0} className="min-h-14 flex-1 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">Add to cart <span aria-hidden="true">→</span></button>
              <button type="button" aria-label="Add to wishlist" className="min-h-14 rounded-full border border-slate-300 px-6 text-sm font-semibold text-slate-800 transition hover:border-slate-950 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2">♡ <span className="sm:hidden">Save</span></button>
            </div>

            <div className="mt-9 grid gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:grid-cols-2">
              <div><p className="font-semibold text-slate-900">Shipping</p><p className="mt-1">{product.shippingInformation || "Carefully packed and shipped to your door."}</p></div>
              <div><p className="font-semibold text-slate-900">Returns</p><p className="mt-1">{product.returnPolicy || "Easy returns within 30 days."}</p></div>
              {product.warrantyInformation && <div className="sm:col-span-2"><p className="font-semibold text-slate-900">Warranty</p><p className="mt-1">{product.warrantyInformation}</p></div>}
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-slate-200 py-10 sm:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Good to know</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Made for everyday use.</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">A closer look at the details, materials, and thoughtful touches that make {product.title.toLowerCase()} a great addition to your routine.</p>
          <Link href="/product" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-teal-700">← Back to all products</Link>
        </section>
      </div>
    </main>
  );
}
