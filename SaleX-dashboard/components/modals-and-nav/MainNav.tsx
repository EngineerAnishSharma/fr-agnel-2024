"use client";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";


const MainNav = ({
  className
}: React.HtmlHTMLAttributes<HTMLElement>) => {
  const params = useParams();
  const pathname = usePathname();

  const routes = [
    {
      href: `/${params.StoreId}`,
      label: "Dashboard",
      active: pathname === `/${params.StoreId}`,
    },
    {
      href: `/${params.StoreId}/categories`,
      label: "Categories",
      active: pathname === `/${params.StoreId}/categories`,
    },
    {
      href: `/${params.StoreId}/capturespace`,
      label: "Capture Space",
      active: pathname === `/${params.StoreId}/capturespace`,
    },
    {
      href: `/${params.StoreId}/analysis`,
      label: "Analysis",
      active: pathname === `/${params.StoreId}/analysis`,
    },
    {
      href: `/${params.StoreId}/colors`,
      label: "Colors",
      active: pathname === `/${params.StoreId}/colors`,
    },
    {
      href: `/${params.StoreId}/sizes`,
      label: "Weights",
      active: pathname === `/${params.StoreId}/sizes`,
    },
    {
      href: `/${params.StoreId}/products`,
      label: "Products",
      active: pathname === `/${params.StoreId}/products`,
    },
    {
      href: `/${params.StoreId}/orders`,
      label: "Orders",
      active: pathname === `/${params.StoreId}/orders`,
    },
    {
      href: `/${params.StoreId}/inventory`,
      label: "Inventory",
      active: pathname === `/${params.StoreId}/inventory`,
    },
    {
      href: `/${params.StoreId}/settings`,
      label: "Settings",
      active: pathname === `/${params.StoreId}/settings`,
    },
  ];
  return (
    <>
      <ul className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
        {routes.map((route) => (
          <Link
            key={route.href}
            className={cn(
              "font-medium text-sm transition-colors hover:text-primary dark:text-white ",
              route.active
                ? "text-black dark:text-white"
                : "text-muted-foreground"
            )}
            href={route.href}
            id={route.href}
          >
            {route.label}
          </Link>
        ))}
      </ul>
    </>
  );
};
export default MainNav;

// Add the missing closing curly brace


