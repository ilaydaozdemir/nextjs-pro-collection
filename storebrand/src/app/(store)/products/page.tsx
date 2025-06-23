import { categories, productsList } from "../../data/products";
import Image from "next/image";
import Link from "next/link";
export default function ProductsPage() {
  const getCategoryImage = (categorySlug: string): string => {
    const categoryProduct = productsList.find(
      (product) => product.category === categorySlug
    );
    return categoryProduct?.image || "/images/placeholder.png";
  };
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            href="/products"
            key={category.slug}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:translate-y[-5px] border-b-4 relative transition-all"
            style={{ borderColor: category.color }}
          >
            <div className="h-48 relative overflow-hidden bg-gray-100">
              <Image
                src={getCategoryImage(category.slug)}
                alt={category.name}
                fill
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,25vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
