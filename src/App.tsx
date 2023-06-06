import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import RecipientTable from "./components/RecipientTable/RecipientTable";
import TransactionTable from "./components/TransactionTable/TransactionTable";
import { RecipientDataList, transactionDataList } from "./data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
