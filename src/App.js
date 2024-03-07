import React, { useState } from 'react';
import Header from "./Components/Header";
import CandyForm from './Components/CandyForm';
import CandyDetails from './Components/CandyDetails';
import CartProvider from './store/CartProvider';
import Cart from './Components/Cart';

function App() {
    const [refreshCandyDetails, setRefreshCandyDetails] = useState(false);
    const [showCart,setShowCart]=useState(false);

    const toggleRefreshCandyDetails = () => {
        setRefreshCandyDetails(prevState => !prevState);
    };
    const handleCart=()=>{
        setShowCart(prev=> !prev);
    };

    return (
      <CartProvider>
        <div>
            <Header handleCart={handleCart}/>
            <CandyForm onAddCandy={toggleRefreshCandyDetails} />
            <CandyDetails refresh={refreshCandyDetails} />
            {showCart && <Cart/>}
        </div>
      </CartProvider>
    );
}

export default App;
