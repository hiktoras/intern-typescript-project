import "./App.css";
import NavMenu from "./components/NavMenu/NavMenu";
import { NavMenuData, TransactionData } from "./types";
import { ReactComponent as CategoryIconNew } from "./assets/images/Logo.svg";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import Header from "./components/Header/Header";

const topNavMenuDataList: NavMenuData[] = [
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
    subNavMenu: ["Transactions", "Recipients"],
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

const bottomNavMenuDataList: NavMenuData[] = [
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

const transactionDataList: TransactionData[] = [
  {
    name: "Stripe",
    imageName: "",
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
    imageName: "",
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
    imageName: "",
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
    imageName: "",
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
    imageName: "",
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
    imageName: "",
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
    imageName: "",
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
    imageName: "",
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

function App() {
  return (
    <section className="main">
      <aside className="sidebar">
        <header className="logo">
          <CategoryIconNew />
        </header>
        <section>
          <NavMenu navMenuDataList={topNavMenuDataList} />
        </section>
        <footer className="footer">
          <NavMenu navMenuDataList={bottomNavMenuDataList} />
        </footer>
      </aside>
      <header>
        <Header />
      </header>
      <main>
        <TransactionTable transactionDataList={transactionDataList} />
      </main>
    </section>
  );
}

export default App;
