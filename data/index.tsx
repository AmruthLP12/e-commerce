import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";

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