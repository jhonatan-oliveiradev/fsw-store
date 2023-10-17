import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button variant="outline" size="icon">
        <MenuIcon />
      </Button>

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
