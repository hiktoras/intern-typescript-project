import styles from "./NewInvoice.module.css";
import { ReactComponent as OverlayIcon } from "../../assets/icons/overlay.svg";
import { ReactComponent as BiffcoIcon } from "../../assets/icons/biffco.svg";
import { ReactComponent as EmailBoxIcon } from "../../assets/icons/emailBox.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";

export interface NewInvoiceProps {}

const NewInvoice = ({}: NewInvoiceProps) => {
  return (
    <div>
      <h3>New Invoices: INV111XXX</h3>
      <div className={styles.containerText}>
        <p className={styles.from}>From:</p>
        <p className={styles.billTo}>Bill to</p>
      </div>
      <div className={styles.containers}>
        <div className={styles.container}>
          <OverlayIcon />
          <div className={styles.overlay}>
            <p className={styles.overlayText}>Overlay Design</p>
            <p className={styles.overlayId}>OVN1290785</p>
          </div>
        </div>

        <div className={styles.container}>
          <BiffcoIcon />
          <div className={styles.biffco}>
            <p className={styles.biffcoText}>Biffco Enterprise</p>
            <p className={styles.biffcoId}>OVN1290785</p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.email}>
          <div>
            <p className={styles.boxText}>Email</p>
            <div className={styles.inputBox}>
              <EmailBoxIcon />
              <input className={styles.input} value="alesiakarapova@mail.com" />
            </div>
          </div>

          <div>
            <p className={styles.boxText}>Email</p>
            <div className={styles.inputBox}>
              <EmailBoxIcon />
              <input className={styles.input} placeholder="Email" />
            </div>
          </div>
        </div>
        <div className={styles.address}>
          <div>
            <p className={styles.boxText}>Address</p>
            <div className={styles.inputBox}>
              <LocationIcon />
              <input
                className={styles.input}
                value="6391 Elgin St. Celina, Delaware 10299"
              />
            </div>
          </div>

          <div>
            <p className={styles.boxText}>Address</p>
            <div className={styles.inputBox}>
              <LocationIcon />
              <input className={styles.input} placeholder="Address" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInvoice;
