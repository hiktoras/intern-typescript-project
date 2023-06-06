import styles from "./Layout.module.css";
import NavMenu from "../../components/NavMenu/NavMenu";
import { NavMenuData, TransactionData } from "../../types";
import { ReactComponent as CategoryIconNew } from "../../assets/images/Logo.svg";
import TransactionTable from "../../components/TransactionTable/TransactionTable";
import Header from "../../components/Header/Header";
import {
  bottomNavMenuDataList,
  topNavMenuDataList,
  transactionDataList,
  UserInfoData,
} from "../../data";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <section className={styles.main}>
      <aside className={styles.sidebar}>
        <header className={styles.logo}>
          <CategoryIconNew />
        </header>
        <section>
          <NavMenu navMenuDataList={topNavMenuDataList} />
        </section>
      </aside>
      <div className={styles.middle}>
        <header>
          <Header userData={UserInfoData} />
        </header>
        <main>
          <Outlet />
        </main>
        <footer className={styles.footer}>
          <NavMenu navMenuDataList={bottomNavMenuDataList} />
        </footer>
      </div>
    </section>
  );
}

export default Layout;
