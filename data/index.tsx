import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { MdDashboard, MdManageAccounts, MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill, RiShoppingCartLine } from "react-icons/ri";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";

export const menus = [
    {
      title: "Dashboard",
      icon: <MdDashboard />,
      href: "/admin/dashboard",
    },
    {
      title: "Products",
      icon: <RiShoppingCartLine />,
      href: "/admin/products",
    },
    {
      title: "Accounts",
      icon: <MdManageAccounts />,
      href: "#",
    },
    {
      title: "Transactions",
      icon: <GrTransaction />,
      href: "#",
    },
    {
      title: "Analytics",
      icon: <IoAnalytics />,
      href: "#",
    },
    {
      title: "Setting",
      icon: <IoSettings />,
      href: "#",
    },
  ];

  export const tableThead = [
    {title:"SR No."},
    {title:"Name"},
    {title:"Price"},
    {title:"Picture"},
    {title:"Actions"},
  ]

  export const featuresData =[
    {
      icon:<TbTruckDelivery className="text-4xl"/>,
      title:"Free Delivery",
      desc:"Orders from all items"
    },
    {
      icon:<RiRefund2Fill className="text-4xl"/>,
      title:"Return & Refund",
      desc:"Money back guarantee"
    },
    {
      icon:<TbDiscount className="text-4xl"/>,
      title:"Member Discount",
      desc:"On Order Over $99.00"
    },
    {
      icon:<MdSupportAgent className="text-4xl"/>,
      title:"Support 24/7",
      desc:"Contact us 24 hours a day"
    },
  ]