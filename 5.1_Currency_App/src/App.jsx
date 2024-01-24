/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { InputBox } from '../components';
import useCurrencyInfo from '../hooks/useCurrencyInfo';
// import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converedAmount, setConveredAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  console.log(currencyInfo);

  const currencyOptions = Object.keys(currencyInfo);

  const convert = () => {
    setConveredAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConveredAmount(amount);
    setAmount(converedAmount);
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            
            <div className="w-full mb-1">
              <InputBox 
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={currencyOptions}
                selectCurrency={from}
              />
            </div>
            {/* <div className="relative w-full h-0.5">
              <button
              type='button'
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"     
              onClick={swap}
              >
                swap
              </button>
            </div> */}
            <div className="w-full mt-2 mb-4">
              <InputBox 
                label="To"
                amount={converedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOptions={currencyOptions}
                selectCurrency={to}
                amountDisabled
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
