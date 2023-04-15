import { useEffect, useState } from "react";
import styles from "./App.module.css"

function App() {
  const [amount, setAmount] = useState()
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([]);

  const onChange = (event) => (setAmount(event.target.value));

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setLoading(false);
      setCoins(json);
    })
  }, []);

  return (
    <div>
      <h1>How much would you convert?</h1>
      <form>
        <input value={amount} onChange={onChange} type='number' placeholder='Please write amount' />
        <label htmlFor="usd"> USD</label>
      </form>

      {loading ? (<strong>Please wait...</strong>) : 
        <div>
          <h1>You can buy...</h1>
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}) : {amount/coin.quotes.USD.price} BTC
              </option>
            ))}
          </select>
        </div>}
    </div>
  );
}

export default App;
