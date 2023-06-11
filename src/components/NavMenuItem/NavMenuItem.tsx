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
import { ReactComponent as UpVectorIcon } from "../../assets/icons/upvector.svg";
import { useLocation } from "react-router-dom";

const Icon = (text: string, isSelected: boolean) => {
  let color: string = isSelected ? "white" : "#718096";
  switch (text) {
    case "activity":
      return <ActivityIcon stroke={color} />;
    case "analytics":
      return <AnalyticsIcon stroke={color} />;
    case "dashboard":
      return <DashboardIcon stroke={color} />;
    case "messages":
      return <MessagesIcon stroke={color} />;
    case "invoices":
      return <InvoicesIcon stroke={color} />;
    case "my-wallets":
      return <MyWalletsIcon stroke={color} />;
    case "get-help":
      return <GetHelpIcon stroke={color} />;
    case "settings":
      return <SettingsIcon />;
  }
};

export interface NavMenuItemProps {
  navMenuData: NavMenuData;
}
const IsSelected = (path: string, addressList: string[]) => {
  for (let i = 0; i < addressList.length; i++) {
    let address: string = addressList[i];
    if (address === path) {
      return true;
    }
  }
  return false;
};
const NavMenuItem = ({ navMenuData }: NavMenuItemProps) => {
  const location = useLocation();

  return (
    <>
      <li
        className={
          IsSelected(location.pathname, navMenuData.addresses)
            ? styles.selectedNavMenuItem
            : styles.navMenuItem
        }
      >
        <div className={styles.iconBox}>
          {Icon(
            navMenuData.iconName,
            IsSelected(location.pathname, navMenuData.addresses)
          )}
        </div>
        <a
          href={navMenuData.addresses[0]}
          className={
            IsSelected(location.pathname, navMenuData.addresses)
              ? styles.selectedNavText
              : styles.unSelectedNavText
          }
        >
          {navMenuData.name}
        </a>
        {navMenuData.name === "Messages" && (
          <div className={styles.messageCount}>5</div>
        )}
        {navMenuData.subNavMenu.length > 0 && <UpVectorIcon />}
      </li>
      {IsSelected(location.pathname, navMenuData.addresses) && (
        <ul className={styles.subNav}>
          {navMenuData.subNavMenu.map((subNavMenu) => (
            <li>
              <a className={styles.subNavLink} href={subNavMenu.address}>
                {subNavMenu.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NavMenuItem;
