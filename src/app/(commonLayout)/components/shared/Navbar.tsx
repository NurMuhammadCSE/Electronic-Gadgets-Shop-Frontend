/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  Badge,
} from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import { useAuth } from "@/lib/AuthProviders";
import { logOut } from "../../action/userInfo";
import { useRouter } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Link from "next/link";
// import { useAppSelector } from "@/store/hooks"; // Assuming you're using Redux

export default function NavBar({ user }: any) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  //   const cartItemCount = useAppSelector((state) => state.cart.items.length); // Assuming cart state is managed in Redux

  const menuItems = ["Profile", "Dashboard", "Log Out"];

  const { setUser } = useAuth();
  const router = useRouter();

  const routeMap: Record<string, string> = {
    user: "/dashboard",
    admin: "/dashboard/admin",
  };

  const handleLogOut = async () => {
    await logOut();
    setUser(null);
    router.push("/");
  };

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Gadget Hub</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <p className="font-bold text-inherit">Gadget Hub</p>
        </NavbarBrand>

        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          {user && <Link href={routeMap[user?.role]}>Dashboard</Link>}
        </NavbarItem>

        <NavbarItem>
          <Badge content={10} color="warning">
            <Link href="/cart">
              <ShoppingCart size={24} />
            </Link>
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {user ? (
          <NavbarItem>
            <Button onClick={handleLogOut} color="primary" variant="flat">
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem>
          <Badge content={10} color="warning">
            <Link href="/cart">
              <ShoppingCart size={24} />
            </Link>
          </Badge>
        </NavbarItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              //   size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
