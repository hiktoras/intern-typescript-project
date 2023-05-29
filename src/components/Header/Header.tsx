import React from "react";
import { UserData } from "../../types";
import styles from "./Header.module.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as NotificationsIcon } from "../../assets/icons/notifications.svg";
import { ReactComponent as VectorIcon } from "../../assets/icons/vector.svg";

import Alesia from "../../assets/images/alesia.jpg";

const Image = (text: string) => {
  switch (text) {
    case "alesia":
      return <img src={Alesia} alt="alesia" />;
  }
};

export interface HeaderProps {
  userData: UserData;
  pageName: string;
}

const Header = ({ userData, pageName }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <p className={styles.pageName}> {pageName}</p>
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
