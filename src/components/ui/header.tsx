import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>
          <div className="mt-2 flex flex-col gap-2">
            <Button className="w-full justify-start gap-2" variant="outline">
              <LogInIcon size={18} />
              Fazer login
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <HomeIcon size={18} />
              Início
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <PercentIcon size={18} />
              Ofertas
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <ListOrderedIcon size={18} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h2 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h2>

      <Button variant="outline" size="icon">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
