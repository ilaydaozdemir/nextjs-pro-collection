"use client";

import { Product, productsList } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductPage({
  params,
}: {
  params: Promise<{ category: string; productId: string }>;
}) {
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      const foundProduct = productsList.find(
        (p) => p.id === resolvedParams.productId
      );
      if (
        !foundProduct ||
        foundProduct.category.toLocaleLowerCase() !==
          resolvedParams.category.toLocaleLowerCase()
      ) {
        return;
      }
      setProduct(foundProduct);
    };
    fetchParams();
  }, [params]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center animate-pulse">
          <div className="rounded-full bg-gray-200 size-12 mb-4"></div>
          <div className="rounded h-4 bg-gray-200 w-24 mb-6"></div>
          <div className="rounded h-2 bg-gray-200 w-16 "></div>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="md:w-1/2 bg-gray-50 p-8 flex items-center justify-center relative">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src={product?.image || "/images/placeholder.png"}
              alt={product?.name || "Product Image"}
              fill
              priority
              sizes="(max-width:768px) 100vw,50vw"
              className="object-contain"
            />
          </div>
        </div>
        <div className="md:w-1/2 p-8 md:p-12 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-[#003d5b] mb-2">
              {product.name}
            </h1>
            <p className="text-xl font-semibold mb-4 text-[#d1495b]">
              ${product.price}
            </p>
            <p className="text-[#30638e] leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="pt-6 border-t border-gray-100">
            <div className="mb-6">
              <label className="block text-[#003d5b] font-medium mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button className="size-10 rounded-l-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <i className="bx bx-minus text-gray-600 text-lg"></i>
                </button>
                <input
                  type="text"
                  value="1"
                  readOnly
                  className="w-14 h-10 border-t border-b border-gray-300 text-center text[#003d5b] font-medium outline-none"
                />
                <button className="size-10 rounded-r-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <i className="bx bx-plus text-gray-600 text-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-8 py-3 rounded-full flex items-center justify-center font-medium text-white cursor-pointer bg-[#d1495b]">
              <i className="bx bx-cart mr-2 text-2xl"></i>Add to Cart
            </button>
            <Link
              href="/cart"
              className="flex-1 px-8 py-3 bg-gray-100 hover:bg-gray-200 text-[#003d5b] rounded-full flex items-center justify-center font-medium transition-colors"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
