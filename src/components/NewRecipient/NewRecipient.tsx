import React from "react";
import styles from "./NewRecipient.module.css";
import USD from "../../assets/images/usd.jpg";
import { ReactComponent as IBN } from "../../assets/icons/IBN.svg";

export interface NewRecipientProps {
  onClose: () => void;
  currencyOptions: string[];
}

const NewRecipient = ({ onClose, currencyOptions }: NewRecipientProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.close} onClick={handleClose}>
          &times;
        </div>
        <form className={styles.recipientForm}>
          <h1>Add Recipient</h1>
          <p className={styles.inputName}>Currency</p>
          <select className={styles.inputBox} id="currency">
            <option key="USD" value="USD">
              <img src={USD} alt="usd" /> USD
            </option>
            <option key="EUR" value="EUR">
              EUR
            </option>
            <option key="TRY" value="TRY">
              TRY
            </option>
          </select>
          <p className={styles.inputName}>Recipient Type</p>
          <select className={styles.inputBox} id="recipient-type">
            <option key="Personal" value="Personal">
              Personal
            </option>
            <option key="Business" value="Business">
              Business
            </option>
          </select>
          <p className={styles.inputName}>Email</p>
          <input
            className={styles.inputBox}
            placeholder=""
            id="min-price"
            type="string"
            value=""
          />
          <p className={styles.inputName}>Full name of the account holder</p>
          <input
            className={styles.inputBox}
            placeholder=""
            id="min-price"
            type="string"
            value=""
          />
          <p>Bank Details</p>
          <h5 className={styles.ibnBorder}>
            IBN
            <IBN />
          </h5>
          <input
            className={styles.inputBox}
            placeholder="OV1286709756483"
            id="min-price"
            type="string"
            value=""
          />
          <button className={styles.confirm}> Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default NewRecipient;
