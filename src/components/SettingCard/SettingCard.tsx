import { NavMenuData } from "../../types";
import styles from "./SettingCard.module.css";
import { ReactComponent as BusinessInfoIcon } from "../../assets/icons/briefcase.svg";
import { ReactComponent as MoneyBankIcon } from "../../assets/icons/dollar-circle.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as AccountIcon } from "../../assets/icons/user.svg";
import { ReactComponent as PaymentIcon } from "../../assets/icons/card.svg";
import { ReactComponent as AutoConvIcon } from "../../assets/icons/auto.svg";
import { ReactComponent as StatementIcon } from "../../assets/icons/file-text.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as ShieldIcon } from "../../assets/icons/shield.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";

import { useLocation } from "react-router-dom";

const Icon = (text: string, isSelected: boolean) => {
  let color: string = isSelected ? "white" : "#718096";
  switch (text) {
    case "business-info":
      return <BusinessInfoIcon className={styles.icon} stroke={color} />;
    case "money-bank":
      return <MoneyBankIcon className={styles.icon} stroke={color} />;
    case "notification":
      return <NotificationIcon className={styles.icon} stroke={color} />;
    case "account":
      return <AccountIcon className={styles.icon} stroke={color} />;
    case "payment":
      return <PaymentIcon className={styles.icon} stroke={color} />;
    case "auto-conversion":
      return <AutoConvIcon className={styles.icon} stroke={color} />;
    case "statement":
      return <StatementIcon className={styles.icon} stroke={color} />;
    case "calendar":
      return <CalendarIcon className={styles.icon} stroke={color} />;
    case "shield":
      return <ShieldIcon className={styles.icon} stroke={color} />;
    case "lock":
      return <LockIcon className={styles.icon} stroke={color} />;
  }
};

export interface SettingCardProps {
  iconName: string;
  name: string;
  description: string;
  isSelected: boolean;
}

const SettingCard = ({
  iconName,
  name,
  description,
  isSelected,
}: SettingCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconBox}>{Icon(iconName, isSelected)}</div>
      <div>
        <p className={styles.title}>{name}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default SettingCard;
