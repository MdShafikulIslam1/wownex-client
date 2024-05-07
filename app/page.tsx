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

import cart from "@/app/assests/images/cart.png";
import logo from "@/app/assests/images/logo.png";
import { AppstoreOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Input } from "antd";
import Image from "next/image";

import ContactHeading from "@/components/contactHeading";
import FooterPage from "@/components/Footer";
import "swiper/css";
import "swiper/css/navigation";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

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
    <div className="max-w-screen-xl mx-auto md:px-8 lg:px-20">
      {/* desktop first navbar */}
      <div className=" h-[90px] mx-auto items-center w-full md:px-8 lg:px-20 hidden md:flex bg-white text-black">
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
      {/* banner section */}
      <div className="max-w-screen-xl mx-auto  w-full py-4 md:px-8 lg:px-20  bg-[#D9D9D9]">
        <div className="flex gap-4">
          <div className="banner-left hidden md:block md:w-[297px] h-[301px] bg-[#E7E8EC] rounded-[15px]">
            <div className="banner-text pt-3  text-[#666666] text-justify ps-5 flex flex-col justify-start">
              <p className="py-1"> Women and general fashion</p>
              <p className="py-1">Watch’s Bags & Jewellery</p>
              <p className="py-1">Kid’s & Men’s Fashion</p>
              <p className="py-1">Kitchen Products</p>
              <p className="py-1">Household & Outdoor</p>
              <p className="py-1">TC & Home Appliences</p>
              <p className="py-1">Electronic Accessories </p>
              <p>Gadget & Accessories</p>
            </div>
          </div>
          {/* swiper card */}
          {/* <Carousel arrows infinite={false}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel> */}
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto bg-white px-20">
        <ContactHeading />
      </div>
      <div className="w-full h-full bg-[#E7E8EC] px-20">
        <FooterPage />
      </div>
    </div>
  );
}
