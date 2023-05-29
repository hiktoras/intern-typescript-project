import "./TransactionPage.module.css";
import styles from "./TransactionPage.module.css";
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

function TransactionPage() {
  return (
    <section className={styles.main}>
      <aside className={styles.sidebar}>
        <header className={styles.logo}>
          <CategoryIconNew />
        </header>
        <section>
          <NavMenu navMenuDataList={topNavMenuDataList} />
        </section>
        <footer className={styles.footer}>
          <NavMenu navMenuDataList={bottomNavMenuDataList} />
        </footer>
      </aside>
      <div className={styles.middle}>
        <header>
          <Header pageName="Transactions" userData={UserInfoData} />
        </header>
        <main>
          <TransactionTable transactionDataList={transactionDataList} />
        </main>
      </div>
    </section>
  );
}

export default TransactionPage;
