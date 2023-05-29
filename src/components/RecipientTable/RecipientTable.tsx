import { RecipientData } from "../../types";
import styles from "./RecipientTable.module.css";
import { useState, useEffect } from "react";
import { ReactComponent as ArrowsIcon } from "../../assets/icons/arrows.svg";
import { accessSync } from "fs";

export interface RecipientProps {
  RecipientDataList: RecipientData[];
}

const RecipientTable = ({ RecipientDataList }: RecipientProps) => {
  const [filterText, setFilterText] = useState("");
  const [filterAccountType, setFilterAccountType] =
    useState("All Account Types");
  const [isFiltersButtonSelected, setIsFiltersButtonSelected] = useState(false);
  const [filterCurrency, setFilterCurrency] = useState("All Currencies");
  const [sortName, setSortName] = useState("inactive");
  const [sortAmount, setSortAmount] = useState("inactive");
  const [sortStatus, setSortStatus] = useState("inactive");

  const typeOptions = ["All Account Types", "Personal", "Business"];

  const currencyOptions = ["USD", "EUR", "GBP"];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(filterText, event.target.value);
    setFilterText(event.target.value);
  };

  const handleChangeAccountType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterAccountType(event.target.value);
  };

  const handleFiltersButtonClick = () => {
    setIsFiltersButtonSelected(!isFiltersButtonSelected);
  };

  const handleFilterCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterCurrency(e.target.value);
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

  const filteredList = RecipientDataList.filter((item) => {
    if (filterAccountType !== "All Account Types") {
      return item.accountType === filterAccountType;
    }
    console.log(filterCurrency, item.currency);
    if (filterCurrency !== "All Currencies") {
      return item.currency === filterCurrency;
    }

    return item.name.includes(filterText);
  });

  return (
    <>
      <div className={styles.header}>
        <input
          type="text"
          value={filterText}
          onChange={handleChange}
          placeholder="Search for transactions..."
        />
        <button
          onClick={handleFiltersButtonClick}
          className={
            isFiltersButtonSelected
              ? styles.selectedButton
              : styles.unselectedButton
          }
        >
          Filters
        </button>
        <button className={styles.unselectedButton}>Exports</button>
      </div>
      {isFiltersButtonSelected && (
        <div className={styles.tablefilter}>
          <select value={filterAccountType} onChange={handleChangeAccountType}>
            {typeOptions.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <select value={filterCurrency} onChange={handleFilterCurrencyChange}>
            {currencyOptions.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
      )}

      <table>
        <thead>
          <tr className={styles.tableHeadRow}>
            <th className={styles.tableHead}>
              <button onClick={handleSortName}>
                Name/Business <ArrowsIcon />
              </button>
            </th>

            <th className={styles.tableHead}>
              <button>
                Email <ArrowsIcon />
              </button>
            </th>
            <th className={styles.tableHead}>
              <button>
                Account Type
                <ArrowsIcon />
              </button>
            </th>
            <th className={styles.tableHead}>
              <button onClick={handleSortAmount}>
                Currency <ArrowsIcon />
              </button>
            </th>

            <th className={styles.tableHead}>
              <button onClick={handleSortStatus}>
                Date
                <ArrowsIcon />
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredList.map((nData) => (
            <tr>
              <td>
                <p className={styles.name}>{nData.name}</p>
              </td>
              <td>
                <p className={styles.date}>{nData.email}</p>
              </td>
              <td className={styles.invoiceId}>{nData.accountType}</td>
              <td className={styles.amount}>{nData.currency}</td>
              <td className={styles.statusBox}>
                <p className={styles.status}>{nData.date}</p>
              </td>
              <td>
                <button className={styles.details}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RecipientTable;
