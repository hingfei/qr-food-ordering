import React from 'react';
import './TableNumberInputField.css';

function TableNumberInputField(props) {
    return (
        <div>
            <form>
                <label>
                    <p>Please Input Your Table Number:</p>
                    <input type="text" placeholder="Enter table number" /*value=tableNumber*/ />
                </label>
            </form>
        </div>
    );
}

export default TableNumberInputField;