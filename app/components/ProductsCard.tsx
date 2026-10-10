import Image from "next/image";
import Link from "next/link";

type ProductCardData = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
};

export default function ProductsCard({ data }: { data: ProductCardData }) {
  return (
    <Link
      href={`/product/${data.id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={data.thumbnail}
          alt={data.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">{data.category.replaceAll("-", " ")}</p>
          <h2 className="text-xl font-semibold text-slate-950">{data.title}</h2>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{data.description}</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-2xl font-bold text-slate-950">${data.price}</p>
          <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-teal-700">View details <span aria-hidden="true">&rarr;</span></span>
        </div>
      </div>
    </Link>
  );
}
