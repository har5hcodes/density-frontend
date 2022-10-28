 
import './App.css';
import LineGraph from './Components/LineGraph';
import MarketPriceDisplay from './Components/MarketPriceDisplay';
import OrderBook from './Components/OrderBook';
import PlaceOrder from './Components/PlaceOrder';
import TransactionHistory from './Components/TransactionHistory';
import UserPorfolio from './Components/UserPortfolio';

function App() {
  return (
     <>
       <MarketPriceDisplay/>
       <TransactionHistory/>
       <UserPorfolio/>
       <OrderBook/>
       <PlaceOrder/>
       <LineGraph/>
     </>
  );
}

export default App;
