import React, { useState } from "react";

function AddExpenseButton() {

    const handleAddExpense = () => {
        console.log('Add Expense Clicked!');
    };

    return (
        
        <button className="myButton" onClick={handleAddExpense}>
            Add Expense
        </button>
    )
}

export default AddExpenseButton;