import styles from "./Layout.module.css";
import NavMenu from "../../components/NavMenu/NavMenu";
import { ReactComponent as CategoryIconNew } from "../../assets/images/Logo.svg";
import Header from "../../components/Header/Header";
import {
  bottomNavMenuDataList,
  topNavMenuDataList,
  UserInfoData,
} from "../../data";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <section className={styles.main}>
      <aside className={styles.sidebar}>
        <section className={styles.logo}>
          <CategoryIconNew />
        </section>
        <section>
          <NavMenu navMenuDataList={topNavMenuDataList} />
        </section>
        <section className={styles.footer}>
          <NavMenu navMenuDataList={bottomNavMenuDataList} />
        </section>
      </aside>
      <div className={styles.middle}>
        <header>
          <Header userData={UserInfoData} />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </section>
  );
}

export default Layout;
