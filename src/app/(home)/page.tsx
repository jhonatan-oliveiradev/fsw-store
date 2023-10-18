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

  return (
    <div>
      <PromoBanner
        src="/banner-home-01.png"
        alt="até 55% de desconto só esse mês"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <CustomHeading title="Ofertas" />
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="até 55% de desconto em mouses!"
      />
      <div className="mt-8">
        <CustomHeading title="Teclados" />
        <ProductList products={keyboards} />
      </div>
    </div>
  );
}
