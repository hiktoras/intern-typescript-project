import "./RecipientPage.module.css";
import styles from "./RecipientPage.module.css";
import NavMenu from "../../components/NavMenu/NavMenu";
import { ReactComponent as CategoryIconNew } from "../../assets/images/Logo.svg";
import RecipientTable from "../../components/RecipientTable/RecipientTable";
import Header from "../../components/Header/Header";
import {
  bottomNavMenuDataList,
  RecipientDataList,
  topNavMenuDataList,
  UserInfoData,
} from "../../data";

function RecipientPage() {
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
      <div>
        <header>
          <Header pageName="Recipients" userData={UserInfoData} />
        </header>
        <main>
          <RecipientTable RecipientDataList={RecipientDataList} />
        </main>
      </div>
    </section>
  );
}

export default RecipientPage;
