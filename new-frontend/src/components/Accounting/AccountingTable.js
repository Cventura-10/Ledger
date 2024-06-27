// Import necessary libraries and define the functional component AccountingTable
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AccountingTable.css'; // Import the CSS file for styles

const AccountingTable = () => {
    const [accountingData, setAccountingData] = useState([]);

    useEffect(() => {
        const fetchAccountingData = async () => {
            try {
                const response = await axios.get('/api/accountingData'); // Update with your actual API endpoint
                setAccountingData(response.data);
            } catch (error) {
                console.error('Error fetching accounting data:', error);
            }
        };

        fetchAccountingData();
    }, []);

    return (
        <div className="accounting-table-container">
            <h2>Accounting Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {accountingData.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.date}</td>
                            <td>{entry.description}</td>
                            <td>{entry.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccountingTable;
