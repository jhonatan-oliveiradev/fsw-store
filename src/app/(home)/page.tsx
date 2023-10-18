import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/product-list";
import { prismaClient } from "@/lib/prisma";
import CustomHeading from "@/components/ui/custom-heading";
import PromoBanner from "@/components/ui/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="até 55% de desconto só esse mês"
      />
      <div className=" px-5">
        <Categories />
      </div>
      <div>
        <CustomHeading title="Ofertas" />
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="até 55% de desconto em mouses!"
      />

      <div>
        <CustomHeading title="Teclados" />
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="até 20% de desconto em fones!"
      />

      <div>
        <CustomHeading title="Mouses" />
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
