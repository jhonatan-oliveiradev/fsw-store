"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

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
            {status === "authenticated" ? (
              <h3>Bem-vindo(a)!</h3>
            ) : (
              <h3>Menu</h3>
            )}
          </SheetHeader>

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>
                  {data.user.image ? (
                    <AvatarImage src={data.user.image} />
                  ) : (
                    <AvatarImage src="https://github.com/shadcn.png" />
                  )}
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-muted-foreground text-xs">Boas compras!</p>
                </div>
              </div>
              <Separator />
            </div>
          )}
          <div className="mt-2 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                className="w-full justify-start gap-2"
                variant="outline"
              >
                <LogInIcon size={16} />
                Fazer login
              </Button>
            )}
            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                className="w-full justify-start gap-2"
                variant="outline"
              >
                <LogOutIcon size={16} />
                Fazer logout
              </Button>
            )}
            <Button className="w-full justify-start gap-2" variant="outline">
              <HomeIcon size={16} />
              Início
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <PercentIcon size={16} />
              Ofertas
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <ListOrderedIcon size={16} />
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
