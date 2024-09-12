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
import { useRouter } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/feature/userSlice";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useAppSelector((state) => state.user);
  const { selectedItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const { setUser } = useAuth();
  const router = useRouter();

  const menuItems = ["Products", "Dashboard", "Log Out"];

  const routeMap: Record<string, string> = {
    user: "/dashboard/my-orders",
    admin: "/dashboard/admin",
  };

  const handleLogout = () => {
    dispatch(logout());
    setUser(null);
    router.push("/");
  };

  return (
    <Navbar
      maxWidth="2xl"
      // isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">
            <Link href="/" aria-current="page">
              Gadget Hub
            </Link>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <p className="font-bold text-inherit">
            <Link href="/" aria-current="page">
              Gadget Hub
            </Link>
          </p>
        </NavbarBrand>

        <NavbarItem>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/product" aria-current="page">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          {user?.email && <Link href={routeMap[user.role] || "/"}>Dashboard</Link>}
        </NavbarItem>

        <NavbarItem>
          <Badge content={selectedItems} color="warning">
            <Link href="/cart">
              <ShoppingCart size={24} />
            </Link>
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {user?.email ? (
          <NavbarItem>
            <Button onClick={handleLogout} color="primary" variant="flat">
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Link href="/login">Login</Link>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Badge content={selectedItems} color="warning">
            <Link href="/cart">
              <ShoppingCart size={24} />
            </Link>
          </Badge>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href={
                item === "Products"
                  ? "/product"
                  : item === "Dashboard"
                  ? routeMap[user?.role] || "/"
                  : item === "Log Out"
                  ? "/logout"
                  : "/"
              }
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
