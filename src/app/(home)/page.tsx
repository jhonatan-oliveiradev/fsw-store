import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div>
      <Image
        src="/banner-home-01.png"
        alt="até 55% de desconto só esse mês"
        width={0}
        height={0}
        className="h-auto w-full px-5"
        sizes="100vw"
        priority
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-5 px-5">
        <ProductList products={deals} />
      </div>
    </div>
  );
}
