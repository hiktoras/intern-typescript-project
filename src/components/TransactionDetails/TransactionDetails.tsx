import React from "react";
import styles from "./TransactionDetails.module.css";
import { ReactComponent as MaximizeIcon } from "../../assets/icons/maximize.svg";
import { ReactComponent as UI8Icon } from "../../assets/icons/UI8.svg";
import { TransactionData } from "../../types";
import { ReactComponent as StripeIcon } from "../../assets/icons/stripe.svg";
import { ReactComponent as BitcoinIcon } from "../../assets/icons/bitcoin.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as UpworkIcon } from "../../assets/icons/upwork.svg";
import Antonio from "../../assets/images/antonio.jpg";
import { ReactComponent as BankOfAmericaIcon } from "../../assets/icons/bank-of-america.svg";

const Icon = (text: string) => {
  switch (text) {
    case "stripe":
      return <StripeIcon />;
    case "bitcoin":
      return <BitcoinIcon />;
    case "facebook":
      return <FacebookIcon />;
    case "upwork":
      return <UpworkIcon />;
    case "antonio":
      return <img src={Antonio} alt="antonio" />;
    case "bank":
      return <BankOfAmericaIcon />;
    case "UI8":
      return <UI8Icon />;
  }
};

export interface TransactionDetailsProps {
  isOpen: boolean;
  nData: TransactionData;
  onClose: () => void;
}

const TransactionDetails = ({
  onClose,
  isOpen,
  nData,
}: TransactionDetailsProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={isOpen ? styles.openRightDrawer : styles.closeRightDrawer}>
      <div className={styles.topRow}>
        <span className={styles.close} onClick={handleClose}>
          &times;
        </span>
        <p className={styles.detailsHeader}>Payment Details</p>
        <MaximizeIcon className={styles.topRowRight} />
      </div>
      <div>{Icon(nData.imageName)}</div>
      <p>{nData.name}</p>

      <div className={styles.rightDrawerContent}></div>
    </div>
  );
};

export default TransactionDetails;
