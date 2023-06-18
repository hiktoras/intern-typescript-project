import styles from "./NewInvoice.module.css";
import { ReactComponent as OverlayIcon } from "../../assets/icons/overlay.svg";
import { ReactComponent as BiffcoIcon } from "../../assets/icons/biffco.svg";
import { ReactComponent as EmailBoxIcon } from "../../assets/icons/emailBox.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as ItemIcon } from "../../assets/icons/item.svg";
import { ReactComponent as DateIcon } from "../../assets/icons/due-date.svg";
import { ReactComponent as USDIcon } from "../../assets/icons/united-states.svg";
import { ReactComponent as ToggleIcon } from "../../assets/icons/toggle.svg";
import { ReactComponent as PreviewIcon } from "../../assets/icons/eye.svg";
import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg";

import { NewInvoiceDataList } from "../../data";
import { Fragment } from "react";

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
export interface NewInvoiceProps {}

const NewInvoice = ({}: NewInvoiceProps) => {
  return (
    <div>
      <div className={styles.layout}>
        <main className={styles.main}>
          <p className={styles.pageName}>New Invoices: INV111XXX</p>
          <div className={styles.containerText}>
            <div className={styles.leftContainer}>
              <p className={styles.from}>From:</p>
              <div className={styles.container}>
                <OverlayIcon />
                <div className={styles.overlay}>
                  <p className={styles.overlayText}>Overlay Design</p>
                  <p className={styles.overlayId}>OVN1290785</p>
                </div>
              </div>
              <div>
                <p className={styles.boxText}>Email</p>
                <div className={styles.inputBox}>
                  <EmailBoxIcon />
                  <input
                    className={styles.input}
                    value="alesiakarapova@mail.com"
                  />
                </div>
              </div>
              <p className={styles.boxText}>Address</p>
              <div className={styles.inputBox}>
                <LocationIcon />
                <input
                  className={styles.input}
                  value="6391 Elgin St. Celina, Delaware 10299"
                />
              </div>
            </div>
            <div className={styles.rightContainer}>
              <p className={styles.billTo}>Bill to</p>
              <div className={styles.container}>
                <BiffcoIcon />
                <div className={styles.biffco}>
                  <p className={styles.biffcoText}>Biffco Enterprise</p>
                  <p className={styles.biffcoId}>OVN1290785</p>
                </div>
              </div>
              <div>
                <p className={styles.boxText}>Email</p>
                <div className={styles.inputBox}>
                  <EmailBoxIcon />
                  <input className={styles.input} placeholder="Email" />
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

          <table className={styles.table}>
            <thead>
              <tr className={styles.tableHead}>
                <th className={styles.itemHead}>
                  <div className={styles.item}>
                    <ItemIcon />
                    <> ITEM</>
                  </div>
                </th>
                <th className={styles.qtyHead}>
                  <p>QTY</p>
                </th>
                <th className={styles.hoursHead}>
                  <p>HOURS</p>
                </th>
                <th className={styles.rateHead}>
                  <p>RATE</p>
                </th>
                <th className={styles.totalHead}>
                  <p>TOTAL</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {NewInvoiceDataList.map((data, index) => (
                <tr key={index} className={styles.tableRowBox}>
                  <td className={styles.tableDimension}>
                    <p>{data.item}</p>
                  </td>
                  <td className={styles.tableDimension}>
                    <p>{data.qty}</p>
                  </td>
                  <td className={styles.tableDimension}>
                    <p>{data.hours}</p>
                  </td>
                  <td className={styles.tableDimension}>
                    <p>{data.rate}</p>
                  </td>
                  <td className={styles.tableDimension}>
                    <p> {AmountFormat(data.currency, data.total)}</p>
                  </td>
                </tr>
              ))}
              <tr>
                <td className={styles.tableDimension}>
                  <input
                    placeholder="Description"
                    className={styles.itemInput}
                  />
                </td>
                <td className={styles.tableDimension}>
                  <input placeholder="0" className={styles.qtyInput} />
                </td>
                <td className={styles.tableDimension}>
                  <input placeholder="0" className={styles.hoursInput} />
                </td>
                <td className={styles.tableDimension}>
                  <input placeholder="0" className={styles.rateInput} />
                </td>
                <td className={styles.tableDimension}>
                  <p>$0.00</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.summary}>
            <div className={styles.addItem}>
              <p className={styles.linkText}>Add Item</p>
            </div>
            <div className={styles.summaryDetails}>
              <div className={styles.summaryRow}>
                <p className={styles.summaryName}>Subtotal</p>
                <p className={styles.summaryValue}> $8,856.00</p>
              </div>
              <div className={styles.summaryRow}>
                <p className={styles.summaryName}>Discount</p>
                <p className={styles.linkText}>Add</p>
              </div>
              <div className={styles.summaryRow}>
                <p className={styles.summaryName}>Tax</p>
                <p className={styles.linkText}>Add</p>
              </div>
              <div className={styles.totalRow}>
                <p className={styles.totalName}>Total</p>
                <p className={styles.totalValue}>$8,856.00</p>
              </div>
            </div>
          </div>
        </main>
        <aside className={styles.aside}>
          <button className={styles.draftButton}>Save Draft</button>
          <div className={styles.basicInfoContainer}>
            <h3>Basic Info</h3>
            <div>
              <p className={styles.boxText}>Invoice Number</p>
              <div className={styles.inputBox}>
                <input className={styles.input} value="INV111XXX" />
              </div>
            </div>
            <div>
              <p className={styles.boxText}>Invoice Date</p>
              <div className={styles.inputBox}>
                <input className={styles.input} value="Jan 10, 2022" />
                <DateIcon />
              </div>
            </div>
            <div>
              <p className={styles.boxText}>Due Date</p>
              <div className={styles.inputBox}>
                <input className={styles.input} value="Jan 10, 2022" />
                <DateIcon />
              </div>
            </div>
            <div>
              <p className={styles.boxText}>Currency</p>
              <div className={styles.inputBox}>
                <USDIcon />
                <select className={styles.input}>
                  <option>US(United States Dollar)</option>
                </select>
              </div>
            </div>
            <div className={styles.invoiceOptions}>
              <div>
                <p>Payment Method</p>
                <p>Late Fees</p>
                <p>Notes</p>
              </div>
              <div className={styles.optionIcons}>
                <ToggleIcon />
                <ToggleIcon />
                <ToggleIcon />
              </div>
            </div>
          </div>
          <button className={styles.sendButton}>Send Invoice</button>
          <div className={styles.previewDownloadBox}>
            <button className={styles.secondaryButton}>
              <PreviewIcon />
              Preview
            </button>

            <button className={styles.secondaryButton}>
              <DownloadIcon />
              Download
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
export default NewInvoice;
