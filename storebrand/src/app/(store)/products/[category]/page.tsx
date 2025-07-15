import { categories } from "@/app/data/products";
import Link from "next/link";
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category.toLocaleLowerCase();
  const categoryInfo = categories.find((cat) => cat.slug === categorySlug);
  const categoryName = categoryInfo?.name || resolvedParams.category;
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-[#003d5b] to-[#00798c] rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-3">{categoryName}</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Explore our selection of premium {categoryName.toLocaleLowerCase()}{" "}
            designed for exceptional performance
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>Products Card</div>
      </div>
      <div className="mt-12 pt-6 border-t border-gray-200">
        <Link
          href="/products"
          className="inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors"
        >
          <i className="bx bx-left-arrow-alt mr-2 text-xl">
            Back to All Categories
          </i>
        </Link>
      </div>
    </div>
  );
}
