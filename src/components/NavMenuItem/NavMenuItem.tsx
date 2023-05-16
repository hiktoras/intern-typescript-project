import { NavMenuData } from "../../types";
import styles from "./NavMenuItem.module.css";
import { ReactComponent as ActivityIcon } from "../../assets/icons/activity.svg";
import { ReactComponent as AnalyticsIcon } from "../../assets/icons/analytics.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as InvoicesIcon } from "../../assets/icons/invoices.svg";
import { ReactComponent as MessagesIcon } from "../../assets/icons/messages.svg";
import { ReactComponent as MyWalletsIcon } from "../../assets/icons/my-wallets.svg";
import { ReactComponent as GetHelpIcon } from "../../assets/icons/get-help.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import { Fragment } from "react";

const Icon = (text: string) => {
  switch (text) {
    case "activity":
      return <ActivityIcon />;
    case "analytics":
      return <AnalyticsIcon />;
    case "dashboard":
      return <DashboardIcon />;
    case "messages":
      return <MessagesIcon />;
    case "invoices":
      return <InvoicesIcon />;
    case "my-wallets":
      return <MyWalletsIcon />;
    case "get-help":
      return <GetHelpIcon />;
    case "settings":
      return <SettingsIcon />;
  }
};

export interface NavMenuItemProps {
  navMenuData: NavMenuData;
}

const NavMenuItem = ({ navMenuData }: NavMenuItemProps) => {
  return (
    <>
      <li
        className={
          navMenuData.isSelected
            ? styles.selectedNavMenuItem
            : styles.navMenuItem
        }
      >
        <div className={styles.iconBox}>{Icon(navMenuData.iconName)}</div>

        <p className={styles.navText}>{navMenuData.name}</p>
      </li>
      <ul className={styles.subNav}>
        {navMenuData.subNavMenu.map((subNavMenu) => (
          <li>{subNavMenu}</li>
        ))}
      </ul>
    </>
  );
};

export default NavMenuItem;
