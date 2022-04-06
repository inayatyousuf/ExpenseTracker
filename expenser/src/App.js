import Header from "./components/header/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import AddExpense from "./pages/AddExpense";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
         <Route path='/' exact element={<Home />} />
         <Route path='/AddExpense' element={<AddExpense />} />
      </Routes>
      {/* <div>Footer</div> */}
    </Router>
  );
}

export default App;
