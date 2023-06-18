import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AccountDetail from "./components/AccountDetail/AccounDetail";
import AccountSetting from "./components/AccountSetting/AccountSetting";
import InvoiceTable from "./components/InvoiceTable/InvoiceTable";
import Layout from "./components/Layout/Layout";
import NewInvoice from "./components/NewInvoice/NewInvoice";
import RecipientTable from "./components/RecipientTable/RecipientTable";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import {
  InvoiceDataList,
  RecipientDataList,
  transactionDataList,
} from "./data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path=""
            element={
              <TransactionTable transactionDataList={transactionDataList} />
            }
          />
          <Route
            path="transactions"
            element={
              <TransactionTable transactionDataList={transactionDataList} />
            }
          />
          <Route
            path="recipients"
            element={<RecipientTable RecipientDataList={RecipientDataList} />}
          />
          <Route
            path="invoices"
            element={<InvoiceTable invoiceDataList={InvoiceDataList} />}
          />
          <Route path="account-settings" element={<AccountSetting />} />
          <Route path="account-details" element={<AccountDetail />} />
          <Route path="new-invoice" element={<NewInvoice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
