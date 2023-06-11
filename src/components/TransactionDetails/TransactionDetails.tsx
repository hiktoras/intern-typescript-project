import React from "react";
import styles from "./TransactionDetails.module.css";
import { ReactComponent as MaximizeIcon } from "../../assets/icons/maximize.svg";
import { ReactComponent as UI8Icon } from "../../assets/icons/UI8.svg";
import { TransactionData } from "../../types";
import { ReactComponent as StripeIcon } from "../../assets/icons/stripe.svg";
import { ReactComponent as BitcoinIcon } from "../../assets/icons/bitcoin.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as UpworkIcon } from "../../assets/icons/upwork.svg";
import { ReactComponent as RecipientIcon } from "../../assets/icons/recipient.svg";
import { ReactComponent as DateIcon } from "../../assets/icons/date.svg";
import { ReactComponent as TransactionFeeIcon } from "../../assets/icons/transaction-fee.svg";
import { ReactComponent as InvoiceIcon } from "../../assets/icons/invoice.svg";
import { ReactComponent as DotsVerticalIcon } from "../../assets/icons/dots-vertical.svg";

import Antonio from "../../assets/images/antonio.jpg";
import { ReactComponent as BankOfAmericaIcon } from "../../assets/icons/bank-of-america.svg";

const Icon = (text: string) => {
  switch (text) {
    case "stripe":
      return <StripeIcon className={styles.shownIcon} />;
    case "bitcoin":
      return <BitcoinIcon className={styles.shownIcon} />;
    case "facebook":
      return <FacebookIcon className={styles.shownIcon} />;
    case "upwork":
      return <UpworkIcon className={styles.shownIcon} />;
    case "antonio":
      return <img src={Antonio} alt="antonio" className={styles.shownIcon} />;
    case "bank":
      return <BankOfAmericaIcon className={styles.shownIcon} />;
    case "UI8":
      return <UI8Icon className={styles.shownIcon} />;
  }
};
const AmountFormat = (currency: string, amount: number) => {
  let prefix: string;

  switch (currency) {
    case "USD":
      prefix = "$";
      break;
    case "EUR":
      prefix = "€";
      break;
    default:
      prefix = "$";

      break;
  }
  if (amount < 0) {
    amount = -amount;
    prefix = "-" + prefix;
  }

  return prefix + amount.toFixed(2);
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

      <div className={styles.iconWrapper}>{Icon(nData.imageName)}</div>
      <p className={styles.iconAmount}>
        {AmountFormat(nData.currency, nData.amount)}
      </p>
      <p className={styles.iconBusiness}>{nData.business}</p>

      <div className={styles.detailRow}>
        <p className={styles.detailPropertyName}>
          <RecipientIcon className={styles.detailsIcon} />
          Recipient
        </p>
        <p className={styles.detailPropertyValue}>{nData.name}</p>
      </div>
      <div className={styles.detailRow}>
        <p className={styles.detailPropertyName}>
          <DateIcon className={styles.detailsIcon} />
          Date
        </p>
        <p className={styles.detailPropertyValue}>{nData.date}</p>
      </div>
      <div className={styles.detailRow}>
        <p className={styles.detailPropertyName}>
          <TransactionFeeIcon className={styles.detailsIcon} />
          Transaction fee
        </p>
        <p className={styles.detailPropertyValue}>{nData.amount}</p>
      </div>
      <div className={styles.detailRow}>
        <p className={styles.detailPropertyName}>
          <InvoiceIcon className={styles.detailsIcon} />
          Invoice
        </p>
        <p className={styles.detailPropertyValue}>{nData.invoiceId}</p>
      </div>

      <div className={styles.rightDrawerContent}></div>

      <div className={styles.spendingBox}>
        <div className={styles.totalSpend}>
          <div className={styles.totalSpendHead}>
            <p className={styles.totalSpendText}>Total Spend </p>
            <p> $1,250.00</p>
          </div>
          <DotsVerticalIcon className={styles.dotsVerticalIcon} />
        </div>
        <div className={styles.graphBox}>
          <div className={styles.firstColumn}></div>
          <div className={styles.secondColumn}></div>
          <div className={styles.thirdColumn}></div>
          <div className={styles.fourthColumn}></div>
          <div className={styles.fifthColumn}></div>
          <div className={styles.sixthColumn}></div>
        </div>
        <div className={styles.graphMonths}>
          <p>Aug</p>
          <p>Sep</p>
          <p>Oct</p>
          <p>Nov</p>
          <p>Dec</p>
          <p>Jan</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
