import { InvoiceData } from "../../types";
import styles from "./InvoiceTable.module.css";
import { useState } from "react";
import { ReactComponent as ArrowsIcon } from "../../assets/icons/arrows.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as InvoiceIcon } from "../../assets/icons/invoice-page.svg";
import { ReactComponent as DotsHorizontalIcon } from "../../assets/icons/dots-horizontal.svg";
import { ReactComponent as CheckBoxIcon } from "../../assets/icons/checkbox.svg";
import { ReactComponent as CheckedBoxIcon } from "../../assets/icons/checked-box.svg";
import { ReactComponent as CreateInvoiceIcon } from "../../assets/icons/create-invoice.svg";

import { ReactComponent as CopyIcon } from "../../assets/icons/copy.svg";
import { ReactComponent as PrinterIcon } from "../../assets/icons/printer.svg";
import { ReactComponent as DownloadIcon } from "../../assets/icons/file-download.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/share-to.svg";
import { ReactComponent as ArchiveIcon } from "../../assets/icons/archive.svg";




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
export interface InvoiceTableProps {
  invoiceDataList: InvoiceData[];
}

const InvoiceTable = ({ invoiceDataList }: InvoiceTableProps) => {
  const [filterText, setFilterText] = useState(""); //

  const [filterStatus, setFilterStatus] = useState("All Statuses");
  const [isFiltersButtonSelected, setIsFiltersButtonSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filterCurrency, setFilterCurrency] = useState("All Currencies");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isAmountFiltered, setIsAmountFiltered] = useState(false);
  const [sortName, setSortName] = useState("inactive");
  const [sortAmount, setSortAmount] = useState("inactive");
  const [sortStatus, setSortStatus] = useState("inactive");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [actionsRow, setActionsRow] = useState(0);


  const handleSetActionsRow = (id: number) => {
    if (id === actionsRow) {
      setActionsRow(0);
    } else {
      setActionsRow(id);
    }

  };

  const toggleRowSelection = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };
  const statusOptions = ["All Statuses", "Pending", "Success", "Failed"];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(filterText, event.target.value);
    setFilterText(event.target.value);
  };

  const handleChangeFilterStatus = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterStatus(event.target.value);
  };

  const handleFiltersButtonClick = () => {
    setIsFiltersButtonSelected(!isFiltersButtonSelected);
  };

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterCurrency(e.target.value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };
  const handleFilterApply = () => {
    setIsAmountFiltered(!isAmountFiltered);

    setIsOpen(false);
  };

  const handleSortName = () => {
    switch (sortName) {
      case "asc":
        setSortName("desc");
        break;

      case "desc":
        setSortName("inactive");
        break;

      case "inactive":
        setSortName("asc");
        break;
    }
  };

  const handleSortAmount = () => {
    switch (sortAmount) {
      case "asc":
        setSortAmount("desc");
        break;

      case "desc":
        setSortAmount("inactive");
        break;

      case "inactive":
        setSortAmount("asc");
        break;
    }
  };

  const handleSortStatus = () => {
    switch (sortStatus) {
      case "asc":
        setSortStatus("desc");
        break;

      case "desc":
        setSortStatus("inactive");
        break;

      case "inactive":
        setSortStatus("asc");
        break;
    }
  };

  const filteredList = invoiceDataList
    .filter((item) => {
      if (filterStatus !== "All Statuses") {
        return item.status === filterStatus;
      }

      if (isAmountFiltered === true) {
        const itemPrice = item.price;
        const minPriceValue = minPrice ? parseFloat(minPrice) : -Infinity;
        const maxPriceValue = maxPrice ? parseFloat(maxPrice) : Infinity;
        return (
          item.currency === filterCurrency &&
          itemPrice >= minPriceValue &&
          itemPrice <= maxPriceValue
        );
      }
      return item.name.toLowerCase().includes(filterText.toLowerCase());
    })
    .sort((a, b) => {
      if (sortName === "asc") {
        return a.name >= b.name ? 1 : -1;
      }
      if (sortName === "desc") {
        return a.name >= b.name ? -1 : 1;
      }

      return 0;
    })
    .sort((a, b) => {
      if (sortAmount === "asc") {
        return a.price >= b.price ? 1 : -1;
      }
      if (sortAmount === "desc") {
        return a.price >= b.price ? -1 : 1;
      }

      return 0;
    })
    .sort((a, b) => {
      if (sortStatus === "asc") {
        return a.status >= b.status ? 1 : -1;
      }
      if (sortStatus === "desc") {
        return a.status >= b.status ? -1 : 1;
      }

      return 0;
    });

  return (
    <>
      <div className={styles.searchFilters}>
        <div className={styles.searchInput}>
          <SearchIcon />
          <input
            className={styles.searchBox}
            type="text"
            value={filterText}
            onChange={handleChange}
            placeholder="Search for transactions..."
          />
        </div>
        <div className={styles.createInvoiceBox}>
          <CreateInvoiceIcon className={styles.createInvoiceIcon} />
          <a href="new-invoice" className={styles.selectedButton}>
            Create Invoice
          </a>
        </div>

        <button
          onClick={handleFiltersButtonClick}
          className={
            isFiltersButtonSelected
              ? styles.selectedButton
              : styles.unselectedButton
          }
        >
          <FilterIcon />
          Filters
        </button>
      </div>
      {isFiltersButtonSelected && (
        <div className={styles.tableFilter}>
          <div>
            <p className={styles.tableHeadButton}>Status</p>

            <select
              className={styles.filterSelect}
              value={filterStatus}
              onChange={handleChangeFilterStatus}
            >
              {statusOptions.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.priceFilter}>
            <p className={styles.tableHeadButton}>Amount & Currencies</p>

            <button className={styles.filterSelect} onClick={handleFilterClick}>
              {filterCurrency}
            </button>
            {isOpen && (
              <div>
                <div className={styles.priceFilterDropdownContainer}>
                  <div>
                    <select
                      className={styles.currencySelect}
                      id="currency"
                      onChange={handleFilterCurrencyChange}
                    >
                      <option key="All Currencies" value="All Currencies">
                        All Currencies
                      </option>
                      <option key="USD" value="USD">
                        USD
                      </option>
                      <option key="EUR" value="EUR">
                        EUR
                      </option>
                      <option key="TRY" value="TRY">
                        TRY
                      </option>
                    </select>
                  </div>
                  <div>
                    <input
                      className={styles.priceFilterDropdown}
                      placeholder="Minimum"
                      id="min-price"
                      type="number"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                    />
                  </div>
                  <div>
                    <input
                      className={styles.priceFilterDropdown}
                      placeholder="Maximum"
                      id="max-price"
                      type="number"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                  <button
                    className={styles.applyButton}
                    onClick={handleFilterApply}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeadRow}>
            <th className={styles.tableFirstHead}>
              <CheckBoxIcon />
            </th>
            <th className={styles.tableHead}>
              <button
                className={styles.tableHeadButton}
                onClick={handleSortName}
              >
                Name <ArrowsIcon />
              </button>
            </th>
            <th className={styles.tableHead}>
              <button className={styles.tableHeadButton}>
                Date <ArrowsIcon />
              </button>
            </th>
            <th className={styles.tableHead}>
              <button className={styles.tableHeadButton}>
                Client <ArrowsIcon />
              </button>
            </th>
            <th className={styles.tableHead}>
              <button
                className={styles.tableHeadButton}
                onClick={handleSortAmount}
              >
                Price
                <ArrowsIcon />
              </button>
            </th>

            <th className={styles.tableHead}>
              <button
                className={styles.tableHeadButton}
                onClick={handleSortStatus}
              >
                Status
                <ArrowsIcon />
              </button>
            </th>
            <th className={styles.tableHead}>
              <button className={styles.tableHeadButton}>Actions</button>
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredList.map((nData) => (
            <tr className={styles.tableRowBox}>
              <td>
                {selectedRows.includes(nData.id) ? (
                  <CheckedBoxIcon onClick={() => toggleRowSelection(nData.id)} />
                ) : (
                  <CheckBoxIcon
                    onClick={() => toggleRowSelection(nData.id)}
                  />
                )}
              </td>
              <td>
                <div className={styles.tableElement}>
                  <div className={styles.iconBox}>
                    <InvoiceIcon />
                  </div>

                  <div>
                    <p className={styles.name}>{nData.name}</p>
                    <p className={styles.business}>{nData.invoiceId}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className={styles.date}>{nData.date}</p>
              </td>
              <td>
                <p className={styles.invoiceId}>{nData.client}</p>
              </td>
              <td className={styles.amount}>
                {AmountFormat(nData.currency, nData.price)}
              </td>
              <td>
                <div
                  className={
                    nData.status === "Unpaid"
                      ? styles.unpaidStatusBox
                      : nData.status === "Pending"
                        ? styles.pendingStatusBox
                        : nData.status === "Refund"
                          ? styles.refundStatusBox
                          : nData.status === "Success"
                            ? styles.successStatusBox
                            : styles.paidStatusBox

                  }
                >
                  <p className={styles.status}>{nData.status}</p>
                </div>
              </td>
              <td>
                <button onClick={() => handleSetActionsRow(nData.id)} className={styles.details}>
                  <DotsHorizontalIcon />
                </button>
                {actionsRow == nData.id && (
                  <div>

                    <div className={styles.actionOptions}>
                      <div className={styles.actionOptionItem}>
                        <CopyIcon />
                        <a href="account-details">Copy</a>
                      </div>
                      <div className={styles.actionOptionItem}>
                        <PrinterIcon/> 
                        <a href="account-settings">Print</a></div>
                      <div className={styles.actionOptionItem}>
                        <DownloadIcon/>
                        <a href="account-settings">Download PDF</a>
                        </div>
                      <div className={styles.actionOptionItem}>
                        <ShareIcon/>
                        <a href="account-settings">Share Link</a>
                        </div>
                      <div className={styles.actionOptionItem}>
                        <ArchiveIcon/>
                        <a href="account-settings">Archive</a>
                        </div>

                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default InvoiceTable;
