import React from "react";
import styles from "./TransactionDetails.module.css";
import { ReactComponent as MaximizeIcon } from "../../assets/icons/maximize.svg";

export interface TransactionDetailsProps {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionDetails = ({ onClose, isOpen }: TransactionDetailsProps) => {
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

      <div className={styles.rightDrawerContent}></div>
    </div>
  );
};

export default TransactionDetails;
