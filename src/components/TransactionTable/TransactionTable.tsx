import { TransactionData } from "../../types";
import styles from "./TransactionTable.module.css";
import { useState } from "react";
import { ReactComponent as ArrowsIcon } from "../../assets/icons/arrows.svg";
import { ReactComponent as StripeIcon } from "../../assets/icons/stripe.svg";
import { ReactComponent as BitcoinIcon } from "../../assets/icons/bitcoin.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as UpworkIcon } from "../../assets/icons/upwork.svg";
import Antonio from "../../assets/images/antonio.jpg";
import { ReactComponent as BankOfAmericaIcon } from "../../assets/icons/bank-of-america.svg";
import { ReactComponent as UI8Icon } from "../../assets/icons/UI8.svg";
import TransactionDetails from "../TransactionDetails/TransactionDetails";

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

export interface TransactionProps {
  transactionDataList: TransactionData[];
}

const TransactionTable = ({ transactionDataList }: TransactionProps) => {
  const [filterText, setFilterText] = useState(""); //
  const [filterTransactionType, setFilterTransactionType] =
    useState("All Transactions");
  const [filterStatus, setFilterStatus] = useState("All Statuses");
  const [isFiltersButtonSelected, setIsFiltersButtonSelected] = useState(false);
  const [isExportsButtonSelected, setIsExportsButtonSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filterCurrency, setFilterCurrency] = useState("All Currencies");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isAmountFiltered, setIsAmountFiltered] = useState(false);
  const [sortName, setSortName] = useState("inactive");
  const [sortAmount, setSortAmount] = useState("inactive");
  const [sortStatus, setSortStatus] = useState("inactive");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const typeOptions = [
    "All Transactions",
    "Witdraw",
    "Deposit",
    "Payment",
    "Advertising",
    "Business",
    "Transfer",
  ];

  const statusOptions = ["All Statuses", "Pending", "Success", "Failed"];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(filterText, event.target.value);
    setFilterText(event.target.value);
  };

  const handleChangeTransactionType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterTransactionType(event.target.value);
  };

  const handleChangeFilterStatus = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterStatus(event.target.value);
  };

  const handleFiltersButtonClick = () => {
    setIsFiltersButtonSelected(!isFiltersButtonSelected);
  };

  const handleExportsButtonClick = () => {
    setIsExportsButtonSelected(!isExportsButtonSelected);
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

    // const filteredData = data.filter((item) => {
    //   const itemPrice = parseFloat(item.price.toString());
    //   const minPriceValue = minPrice ? parseFloat(minPrice) : 0;
    //   const maxPriceValue = maxPrice ? parseFloat(maxPrice) : Infinity;

    //   return (
    //     (!currency || item.currency === currency) &&
    //     itemPrice >= minPriceValue &&
    //     itemPrice <= maxPriceValue
    //   );
    // });

    // setData(filteredData);
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

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const filteredList = transactionDataList
    .filter((item) => {
      if (filterTransactionType !== "All Transactions") {
        return item.business === filterTransactionType;
      }
      if (filterStatus !== "All Statuses") {
        return item.status === filterStatus;
      }

      if (isAmountFiltered === true) {
        const itemPrice = item.amount;
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
        return a.amount >= b.amount ? 1 : -1;
      }
      if (sortAmount === "desc") {
        return a.amount >= b.amount ? -1 : 1;
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
        <input
          className={styles.searchBox}
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
        <button
          onClick={handleExportsButtonClick}
          className={
            isExportsButtonSelected
              ? styles.selectedButton
              : styles.unselectedButton
          }
        >
          Exports
        </button>
      </div>
      {isFiltersButtonSelected && (
        <div className={styles.tablefilter}>
          <select
            value={filterTransactionType}
            onChange={handleChangeTransactionType}
          >
            {typeOptions.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <select value={filterStatus} onChange={handleChangeFilterStatus}>
            {statusOptions.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          <div className={styles.priceFilter}>
            <button onClick={handleFilterClick}>Filtrele</button>
            {isOpen && (
              <div className={styles.priceFilterDropdownContainer}>
                <div className={styles.priceFilterDropdown}>
                  <div>
                    <label htmlFor="currency">Para Birimi</label>
                    <select id="currency" onChange={handleFilterCurrencyChange}>
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
                      placeholder="Minimum"
                      id="min-price"
                      type="number"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                    />
                  </div>
                  <div>
                    <input
                      placeholder="Maks"
                      id="max-price"
                      type="number"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                  <button onClick={handleFilterApply}>Filtrele</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeadRow}>
            <th className={styles.tableHead}>
              <button
                className={styles.tableHeadButton}
                onClick={handleSortName}
              >
                Name/Business <ArrowsIcon />
              </button>
            </th>
            <th className={styles.tableHead}>
              <button className={styles.tableHeadButton}>
                Date <ArrowsIcon />
              </button>
            </th>
            <th className={styles.tableHead}>
              <button className={styles.tableHeadButton}>
                Invoice ID <ArrowsIcon />
              </button>
            </th>
            <th className={styles.tableHead}>
              <button
                className={styles.tableHeadButton}
                onClick={handleSortAmount}
              >
                Amount <ArrowsIcon />
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
                <div className={styles.tableElement}>
                  <div className={styles.iconBox}>{Icon(nData.imageName)}</div>
                  <div>
                    <p className={styles.name}>{nData.name}</p>
                    <p className={styles.business}>{nData.business}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className={styles.date}>{nData.date}</p>
                <p className={styles.time}>{nData.time}</p>
              </td>
              <td className={styles.invoiceId}>{nData.invoiceId}</td>
              <td className={styles.amount}>{nData.amount}</td>
              <td
                className={
                  nData.status === "Success"
                    ? styles.successStatusBox
                    : nData.status === "Failed"
                    ? styles.failedStatusBox
                    : styles.pendingStatusBox
                }
              >
                <p className={styles.status}>{nData.status}</p>
              </td>
              <td>
                <button onClick={handleDrawerOpen} className={styles.details}>
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TransactionDetails isOpen={isDrawerOpen} onClose={handleDrawerClose} />
    </>
  );
};

export default TransactionTable;
