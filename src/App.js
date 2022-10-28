import { Routes, Route } from "react-router-dom"; 
import './App.css'; 
import OrderBook from './Components/OrderBook';
import PlaceOrder from './Components/PlaceOrder';
import TransactionHistory from './Components/TransactionHistory'; 
import Dashboard from './pages/Dashboard';

function App() {
  return (
     <>  
       <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/transaction-history" element={<TransactionHistory/>} />
        <Route path="/order-book" element={<OrderBook/>} />
        <Route path="/place-order" element={<PlaceOrder/>} /> 
      </Routes>
     </>
  );
}

export default App;
