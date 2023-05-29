import { NavMenuData, RecipientData, TransactionData, UserData } from "./types";

export const topNavMenuDataList: NavMenuData[] = [
  {
    name: "Dashboard",
    subNavMenu: [],
    iconName: "dashboard",
    isSelected: false,
  },
  {
    name: "Invoices",
    subNavMenu: [],
    iconName: "invoices",
    isSelected: false,
  },
  {
    name: "Messages",
    subNavMenu: [],
    iconName: "messages",
    isSelected: false,
  },
  {
    name: "My Wallets",
    subNavMenu: [],
    iconName: "my-wallets",
    isSelected: false,
  },
  {
    name: "Activity",
    subNavMenu: [
      {
        name: "Recipients",
        address: "/recipients",
      },
      { name: "Transactions", address: "/transactions" },
    ],
    iconName: "activity",
    isSelected: true,
  },
  {
    name: "Analytics",
    subNavMenu: [],
    iconName: "analytics",
    isSelected: false,
  },
];

export const bottomNavMenuDataList: NavMenuData[] = [
  {
    name: "Get Help",
    subNavMenu: [],
    iconName: "get-help",
    isSelected: false,
  },
  {
    name: "Settings",
    subNavMenu: [],
    iconName: "settings",
    isSelected: false,
  },
];

export const transactionDataList: TransactionData[] = [
  {
    name: "Stripe",
    imageName: "stripe",
    business: "Witdraw",
    date: "Jan 29,2022",
    time: "at 8.00 PM",
    invoiceId: "PMX09812",
    amount: +300.0,
    currency: "USD",
    status: "Pending",
    actions: "Details",
  },

  {
    name: "Bitcoin transaction",
    imageName: "bitcoin",
    business: "Deposit",
    date: "Jan 25,2022",
    time: "at 9.15 AM",
    invoiceId: "PMX0979",
    amount: -890.15,
    currency: "USD",
    status: "Success",
    actions: "Details",
  },

  {
    name: "Facebook charge",
    imageName: "facebook",
    business: "Advertising",
    date: "Jan 25,2022",
    time: "at 6.45 AM",
    invoiceId: "OVF19244",
    amount: -600.0,
    currency: "USD",
    status: "Success",
    actions: "Details",
  },

  {
    name: "Upwork",
    imageName: "upwork",
    business: "Business",
    date: "Jan 23,2022",
    time: "at 9.00 PM",
    invoiceId: "AMX09871",
    amount: +1243.0,
    currency: "USD",
    status: "Pending",
    actions: "Details",
  },

  {
    name: "Send to Antonio",
    imageName: "antonio",
    business: "Transfer",
    date: "Jan 15,2022",
    time: "at 10.15 AM",
    invoiceId: "PMX09873",
    amount: -123.0,
    currency: "USD",
    status: "Failed",
    actions: "Details",
  },

  {
    name: "UI8.net",
    imageName: "UI8",
    business: "Payment",
    date: "Jan 15,2022",
    time: "at 09.00 AM",
    invoiceId: "AMX89786",
    amount: -190.0,
    currency: "USD",
    status: "Success",
    actions: "Details",
  },
  {
    name: "Bank of America",
    imageName: "bank",
    business: "Witdraw",
    date: "Jan 15,2022",
    time: "at 07.00 AM",
    invoiceId: "AMX89785",
    amount: -1565.99,
    currency: "USD",
    status: "Success",
    actions: "Details",
  },

  {
    name: "UI8.net",
    imageName: "UI8",
    business: "Payment",
    date: "Jan 11,2022",
    time: "at 09.00 PM",
    invoiceId: "AMX76543",
    amount: -10.0,
    currency: "USD",
    status: "Success",
    actions: "Details",
  },
];

export const RecipientDataList: RecipientData[] = [
  {
    name: "Guy Hawkins",
    imageName: "",
    email: "guy.hawkins@mail.com",
    accountType: "Business",
    currency: "USD",
    date: "20 Jan 2022, 09.00 PM",
  },
  {
    name: "Roselle Ehrman",
    imageName: "",
    email: "roselleehrman@mail.com",
    accountType: "Personal",
    currency: "GBP",
    date: "20 Jan 2022, 07.00 PM",
  },
  {
    name: "Mariel Wiging",
    imageName: "",
    email: "wiging_marie@mail.com",
    accountType: "Personal",
    currency: "EUR",
    date: "20 Jan 2022, 06.00 PM",
  },
  {
    name: "Cyndy Lillibridge",
    imageName: "",
    email: "cindylilibridge@mail.com",
    accountType: "Business",
    currency: "EUR",
    date: "17 Jan 2022, 10.00 PM",
  },
  {
    name: "Darcel Ballentine",
    imageName: "",
    email: "darcelballenti@mail.com",
    accountType: "Personal",
    currency: "EUR",
    date: "15 Jan 2022, 04.00 PM",
  },
  {
    name: "Tanner Stafford",
    imageName: "",
    email: "stafford.tenn@mail.com",
    accountType: "Business",
    currency: "GBP",
    date: "15 Jan 2022, 09.00 PM",
  },
  {
    name: "Francene Vandyne",
    imageName: "",
    email: "vandyne0090@mail.com",
    accountType: "Business",
    currency: "USD",
    date: "13 Jan 2022, 08.00 PM",
  },
  {
    name: "Elmer Laverty",
    imageName: "",
    email: "guy.hawkins@mail.com",
    accountType: "Personal",
    currency: "GBP",
    date: "12 Jan 2022, 11.00 PM",
  },
];

export const UserInfoData: UserData = {
  userName: "Alesia",
  imageName: "alesia",
};
