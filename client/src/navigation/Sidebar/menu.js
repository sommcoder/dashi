import { IoPricetagOutline } from "react-icons/io5";
import { BsCashCoin, BsCart3 } from "react-icons/bs";
import { FaRegClipboard, FaWineBottle, FaSearchDollar } from "react-icons/fa";
import { TbTruckDelivery, TbReportMoney, TbHammer } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { HiOutlineCash } from "react-icons/hi";
import { RiBillLine } from "react-icons/ri";
import { SlDirections } from "react-icons/sl";
import { BiError } from "react-icons/bi";
import { MdPendingActions } from "react-icons/md";
import { CiShop } from "react-icons/ci";

export const navMenuList = [
  // {
  //   menu: "Home",
  //   menuIcon: IoHomeOutline,
  // },
  {
    menu: "Sales",
    menuIcon: BsCashCoin,
    subMenus: [
      {
        subMenu: "Sales",
        subMenuIcon: HiOutlineCash,
        path: "/sales",
      },
      {
        subMenu: "Outlets",
        subMenuIcon: CiShop,
        path: "/outlets",
      },
    ],
  },

  {
    menu: "Product",
    menuIcon: FaRegClipboard,
    subMenus: [
      {
        subMenu: "Items",
        subMenuIcon: FaWineBottle,
        path: "/items",
      },
      {
        subMenu: "Vendors",
        subMenuIcon: TbTruckDelivery,
        path: "/vendors",
      },
      {
        subMenu: "Families",
        subMenuIcon: IoPricetagOutline,
        path: "/families",
      },
    ],
  },
  {
    menu: "Expenses",
    menuIcon: FaSearchDollar,
    subMenus: [
      {
        subMenu: "Expenses",
        subMenuIcon: AiOutlineDollar,
        path: "/expenses",
      },
      {
        subMenu: "Transfers",
        subMenuIcon: SlDirections,
        path: "/transfers",
      },
      {
        subMenu: "Depletions",
        subMenuIcon: BiError,
        path: "/depletions",
      },
      {
        subMenu: "Labour",
        subMenuIcon: TbHammer,
        path: "/labour",
      },
    ],
  },
  {
    menu: "Ordering",
    menuIcon: TbReportMoney,
    subMenus: [
      {
        subMenu: "Requisitions",
        subMenuIcon: MdPendingActions,
        path: "/requisitions",
      },
      {
        subMenu: "Orders",
        subMenuIcon: BsCart3,
        path: "/purchase-orders",
      },
      {
        subMenu: "Invoices",
        subMenuIcon: RiBillLine,
        path: "/invoices",
      },
    ],
  },
];
