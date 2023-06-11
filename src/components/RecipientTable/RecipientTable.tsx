import { RecipientData } from "../../types";
import styles from "./RecipientTable.module.css";
import { useState } from "react";
import { ReactComponent as ArrowsIcon } from "../../assets/icons/arrows.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import Guy from "../../assets/images/guy.jpg";
import Roselle from "../../assets/images/roselle.jpg";
import Marielle from "../../assets/images/marielle.jpg";
import Cyndy from "../../assets/images/cyndy.jpg";
import Darcel from "../../assets/images/darcel.jpg";
import Tanner from "../../assets/images/tanner.jpg";
import Francene from "../../assets/images/francene.jpg";
import Elmer from "../../assets/images/elmer.jpg";
import NewRecipient from "../NewRecipient/NewRecipient";
import USD from "../../assets/images/usd.jpg";
import EUR from "../../assets/images/eur.jpg";
import GBP from "../../assets/images/gbp.jpg";

const Icon = (text: string) => {
  switch (text) {
    case "guy":
      return <img src={Guy} alt="guy" />;
    case "roselle":
      return <img src={Roselle} alt="antonio" />;
    case "marielle":
      return <img src={Marielle} alt="antonio" />;
    case "cyndy":
      return <img src={Cyndy} alt="antonio" />;
    case "darcel":
      return <img src={Darcel} alt="antonio" />;
    case "tanner":
      return <img src={Tanner} alt="antonio" />;
    case "francene":
      return <img src={Francene} alt="antonio" />;
    case "elmer":
      return <img src={Elmer} alt="antonio" />;
  }
};

const CurIcon = (text: string) => {
  switch (text) {
    case "EUR":
      return <img src={EUR} alt="guy" />;
    case "USD":
      return <img src={USD} alt="antonio" />;
    case "GBP":
      return <img src={GBP} alt="antonio" />;
  }
};

export interface RecipientProps {
  RecipientDataList: RecipientData[];
}

const RecipientTable = ({ RecipientDataList }: RecipientProps) => {
  const [recipientData, setRecipientData] = useState(RecipientDataList);
  const [filterText, setFilterText] = useState("");
  const [filterAccountType, setFilterAccountType] =
    useState("All Account Types");
  const [isFiltersButtonSelected, setIsFiltersButtonSelected] = useState(false);
  const [filterCurrency, setFilterCurrency] = useState("All Currencies");
  const [sortName, setSortName] = useState("inactive");
  const [sortAmount, setSortAmount] = useState("inactive");
  const [sortStatus, setSortStatus] = useState("inactive");
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const filteredList = recipientData.filter((item) => {
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
      {isModalOpen && (
        <NewRecipient
          currencyOptions={currencyOptions}
          onClose={handleCloseModal}
        />
      )}

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
        <button className={styles.addNew} onClick={handleOpenModal}>
          + Add New
        </button>
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
            <p className={styles.tableHeadButton}>Account Type</p>
            <select
              className={styles.filterSelect}
              value={filterAccountType}
              onChange={handleChangeAccountType}
            >
              {typeOptions.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className={styles.tableHeadButton}>Currency</p>
            <select
              className={styles.filterSelect}
              value={filterCurrency}
              onChange={handleFilterCurrencyChange}
            >
              {currencyOptions.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeadRow}>
            <th className={styles.tableHead}>
              <button className={styles.tableHeadButton}>
                Name/Business <ArrowsIcon />
              </button>
            </th>

            <th className={styles.tableHead}>
              <button className={styles.tableHeadButton}>
                Email <ArrowsIcon />
              </button>
            </th>
            <th className={styles.tableHead}>
              <button className={styles.tableHeadButton}>
                Account Type
                <ArrowsIcon />
              </button>
            </th>
            <th className={styles.tableHead}>
              <button className={styles.tableHeadButton}>
                Currency <ArrowsIcon />
              </button>
            </th>

            <th className={styles.tableHead}>
              <button className={styles.tableHeadButton}>
                Date
                <ArrowsIcon />
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredList.map((nData) => (
            <tr className={styles.tableRow}>
              <td>
                <div className={styles.nameColumn}>
                  <div className={styles.iconBox}>{Icon(nData.imageName)}</div>
                  <p className={styles.name}>{nData.name}</p>
                </div>
              </td>
              <td>
                <p className={styles.secondaryText}>{nData.email}</p>
              </td>
              <td>
                <p className={styles.secondaryText}>{nData.accountType}</p>
              </td>
              <td>
                <div className={styles.secondaryText}>
                  {CurIcon(nData.currency)} {nData.currency}
                </div>
              </td>
              <td>
                <p className={styles.secondaryText}>{nData.date}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RecipientTable;
