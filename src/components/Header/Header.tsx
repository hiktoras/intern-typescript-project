import React from "react";
import { UserData } from "../../types";
import styles from "./Header.module.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as NotificationsIcon } from "../../assets/icons/notifications.svg";
import { ReactComponent as VectorIcon } from "../../assets/icons/vector.svg";

import Alesia from "../../assets/images/alesia.jpg";
import { useLocation } from "react-router-dom";

const Image = (text: string) => {
  switch (text) {
    case "alesia":
      return <img src={Alesia} alt="alesia" />;
  }
};

const GetPageName = (path: string) => {
  switch (path) {
    case "/recipients":
      return "Recipients";

    default:
      return "Transactions";
  }
};

export interface HeaderProps {
  userData: UserData;
}

const Header = ({ userData }: HeaderProps) => {
  const location = useLocation();
  return (
    <div className={styles.header}>
      <p className={styles.pageName}>{GetPageName(location.pathname)}</p>
      <div className={styles.headerTools}>
        <SearchIcon />
        <NotificationsIcon />
        <div className={styles.userInfo}>
          {Image(userData.imageName)}
          {userData.userName}
          <VectorIcon className={styles.vector} />
        </div>
      </div>
    </div>
  );
};

export default Header;
