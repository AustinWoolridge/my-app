import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import AddExpenseButton from './components/AddExpenseButton';
import AddIncomeButton from './components/AddIncomeButton';


function App() {

    // State to track whether the "Add Income" button has been clicked
    const [showIncomeInput, setShowIncomeInput] = useState(false);
   
     // Function to handle the "Add Income" button click event
     const handleAddIncomeClick = () => {

        
        // When the "Add Income" button is clicked, show the input fields
        setShowIncomeInput(true);
        
    };

  return (
    <div className="App">
        <Header/>
        
        <AddIncomeButton showIncomeInput= {showIncomeInput} setShowIncomeInput={setShowIncomeInput} />
        <AddExpenseButton/>
        
        
    </div>
  );
}

export default App;
