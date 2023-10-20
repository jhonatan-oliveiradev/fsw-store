"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import { ProductWithTotalPrice } from "@/helpers/product";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

const ProductInfo = ({
  product: { name, basePrice, totalPrice, discountPercentage, description },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleRatingChange = (newRating: number) => {
    console.log(`Nova classificação: ${newRating}`);
  };

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col px-5">
      <p className="text-sm text-muted-foreground/60">Novo | 10 vendidos</p>
      <h2 className="text-lg">{name}</h2>
      <div className="mt-2 flex flex-col justify-center gap-2">
        <p className="text-sm text-primary">Disponível em estoque</p>
        <div className="flex items-baseline gap-2">
          <Rating
            initialRating={4}
            maxRating={5}
            onRatingChange={handleRatingChange}
          />
          <span className="text-sm text-muted-foreground/60">
            (25 avaliações)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <h3 className="text-xl font-bold">
          R$ {totalPrice.toFixed(2).replace(".", ",")}
        </h3>
        {discountPercentage > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDownIcon size={14} /> {discountPercentage}%
          </Badge>
        )}
      </div>
      {discountPercentage > 0 && (
        <p className="text-sm text-muted-foreground/50 line-through">
          De: R$ {Number(basePrice).toFixed(2).replace(".", ",")}
        </p>
      )}

      <div className="flex items-center">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantityClick}
        >
          <ArrowLeftIcon size={16} />
        </Button>
        <span>{quantity}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-justify text-sm text-muted-foreground">
          {description}
        </p>
      </div>

      <Button className="mt-8 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold italic">FSPacket®</span>
            </p>
            <p className="text-xs text-primary">Envio para todo o Brasil</p>
          </div>
        </div>
        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
