import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountingComponent = () => {
    const [accountingData, setAccountingData] = useState([]);

    useEffect(() => {
        const fetchAccountingData = async () => {
            try {
                const response = await axios.get('/api/accountingData'); // Update the endpoint with your actual API endpoint
                setAccountingData(response.data);
            } catch (error) {
                console.error('Error fetching accounting data:', error);
            }
        };

        fetchAccountingData();
    }, []);

    return (
        <div>
            <h2>Accounting Data</h2>
            <ul>
                {accountingData.map((entry, index) => (
                    <li key={index}>
                        <p>Date: {entry.date}</p>
                        <p>Amount: {entry.amount}</p>
                        <p>Description: {entry.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccountingComponent;
