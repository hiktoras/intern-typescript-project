import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RecipientPage from "./pages/RecipientPage/RecipientPage";
import TransactionPage from "./pages/TransactionPage/TransactionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TransactionPage />}>
          <Route index element={<TransactionPage />} />
          <Route path="transactions" element={<TransactionPage />} />
          <Route path="recipients" element={<RecipientPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
