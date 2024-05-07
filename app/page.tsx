"use client";
import {
  CaretDownOutlined,
  MenuOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import Link from "next/link";
import { useState } from "react";

import cart from "@/public/cart.png";
import logo from "@/public/logo.png";
import { AppstoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Input } from "antd";
import Image from "next/image";

const { Search } = Input;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "category",
    label: "Category",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "category_1",
        label: "Women & girls fashion",
        icon: <UserOutlined />,
      },
      { key: "category_2", label: "Watch’s Bags & Jewellery" },
      { key: "category_3", label: "Watch’s Bags & Jewellery" },
      { key: "category_4", label: "Watch’s Bags & Jewellery" },
      { key: "category_5", label: "Watch’s Bags & Jewellery" },
      { key: "category_6", label: "Watch’s Bags & Jewellery" },
    ],
  },
  {
    key: "home",
    label: "Home",
    icon: <UserOutlined />,
  },
  {
    key: "flash-sale",
    label: "Flash Sale",
    icon: <UserOutlined />,
  },
  {
    key: "hot-product",
    label: "Hot Product",
    icon: <UserOutlined />,
  },
  {
    key: "shop",
    label: "Shop",
    icon: <UserOutlined />,
  },
  {
    key: "contact",
    label: "Hotline: 01710-696950",
    icon: <PhoneOutlined />,
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const navbarMenu = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Flash Sell",
      href: "/flash-sell",
    },
    {
      title: "Hot Product",
      href: "/hot-product",
    },
    {
      title: "Shop",
      href: "/shop",
    },
    {
      title: (
        <p>
          <PhoneOutlined className="mr-[2px]" />
          <span className="font-normal text-base"> Hotline:</span> 01710-696950
        </p>
      ),
      href: "/contact",
    },
  ];
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* desktop first navbar */}
      <div className="max-w-screen-xl h-[90px] mx-auto items-center w-full md:px-8 lg:px-20 hidden md:flex bg-white text-black">
        <div className="flex gap-x-20 w-full h-full justify-between items-center">
          <div>
            <Image alt="logo of wownex" src={logo} />
          </div>
          <div className="flex-1 flex-grow">
            {/* Your search input */}
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
            />
          </div>
          <div>
            <Image alt="cart of wownex" src={cart} />
          </div>
        </div>
      </div>

      <nav className="max-w-screen-xl h-[50px] mx-auto bg-[#FF4747] text-white flex items-center">
        {/* mobile navbar */}
        <div className="md:hidden w-full h-full flex justify-end mr-2">
          <div className="flex justify-end items-center">
            <Button type="primary" className=" md:hidden" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </div>
          <Drawer
            className="bg-secondary text-white w-full"
            title="Menu"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <Menu
              className="bg-secondary text-white"
              mode="vertical"
              style={{ borderRight: 0 }}
              items={items}
            ></Menu>
          </Drawer>
        </div>

        {/* desktop main navbar */}
        <div className="items-center w-full h-full md:px-8 lg:px-20 hidden md:flex">
          <div className="font-semibold text-xl md:mr-6">
            All Categories <CaretDownOutlined className="text-white" />
          </div>
          <div className="flex-1 w-full h-full flex md:gap-3 lg:gap-4 lg:justify-evenly items-center">
            {navbarMenu.map((item) => (
              <div
                key={item?.href}
                className="font-semibold md:text-lg lg:text-xl"
              >
                <Link href={item.href}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
