import React, { useState } from "react";

function AddIncomeButton({showIncomeInput, setShowIncomeInput}) {

    
     // State to store the value entered in the income input field
     const [incomeValue, setIncomeValue] = useState("");


   

    const handleSaveIncome = () => {
        setShowIncomeInput(false);
    }

    return (
        <div className="button-container">
            {!showIncomeInput ? (
                <button className="myButton" onClick= { () => setShowIncomeInput(true)}>Add Income</button>
            ) : (
                <div>
                        <input 
                            type="number"
                            placeholder="Enter income amount"
                            value={incomeValue}
                            onChange={(e) => setIncomeValue(e.target.value)}
                        />
                        <button className="myButton" onClick={handleSaveIncome}>Save</button>
                </div>
            )}


        </div>
    )
}

export default AddIncomeButton;