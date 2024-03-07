import React, { useState } from 'react';
import Header from "./Components/Header";
import CandyForm from './Components/CandyForm';
import CandyDetails from './Components/CandyDetails';

function App() {
    const [refreshCandyDetails, setRefreshCandyDetails] = useState(false);

    const toggleRefreshCandyDetails = () => {
        setRefreshCandyDetails(prevState => !prevState);
    };

    return (
        <div>
            <Header />
            <CandyForm onAddCandy={toggleRefreshCandyDetails} />
            <CandyDetails refresh={refreshCandyDetails} />
        </div>
    );
}

export default App;
