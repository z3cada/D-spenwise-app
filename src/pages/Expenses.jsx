import React, { useState } from 'react';
import './Expenses.css';

const Expenses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All Categories');

    const expenses = [
        { id: 1, date: '2/28/2026', description: 'Grocery Store', category: 'Food & Dining', amount: 26.13 },
        { id: 2, date: '2/19/2026', description: 'Dinner Out', category: 'Food & Dining', amount: 13.62 },
        { id: 3, date: '2/19/2026', description: 'Clothing Store', category: 'Shopping', amount: 83.45 },
        { id: 4, date: '2/18/2026', description: 'Bus Pass', category: 'Transport', amount: 51.67 },
        { id: 5, date: '2/18/2026', description: 'Books', category: 'Entertainment', amount: 31.83 },
        { id: 6, date: '2/16/2026', description: 'Streaming Service', category: 'Entertainment', amount: 39.80 },
        { id: 7, date: '2/15/2026', description: 'Electric Bill', category: 'Utilities', amount: 76.12 },
    ];

    return (
        <div className="expenses-container">
            <header className="page-header">
                <div className="header-left">
                    <h1>Expenses</h1>
                    <p>Manage and track all your expenses</p>
                </div>
                <button className="add-expense-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    Add Expense
                </button>
            </header>

            <div className="expenses-stats">
                <div className="card stat-card">
                    <p className="stat-label">Total Expenses</p>
                    <h2 className="stat-value">40</h2>
                </div>
                <div className="card stat-card">
                    <p className="stat-label">Total Spent</p>
                    <h2 className="stat-value">$1,617.71</h2>
                </div>
                <div className="card stat-card">
                    <p className="stat-label">Filtered Total</p>
                    <h2 className="stat-value">$1,617.71</h2>
                </div>
            </div>

            <div className="card table-card">
                <div className="table-header">
                    <h3>Expense History</h3>
                    <p className="subtitle">40 transactions</p>

                    <div className="table-controls">
                        <div className="search-bar">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            <input
                                type="text"
                                placeholder="Search expenses..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select
                            className="category-select"
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            <option>All Categories</option>
                            <option>Food & Dining</option>
                            <option>Shopping</option>
                            <option>Transport</option>
                            <option>Entertainment</option>
                            <option>Utilities</option>
                        </select>
                    </div>
                </div>

                <div className="table-container">
                    <table className="expenses-table">
                        <thead>
                            <tr>
                                <th>Date <span className="sort-icon">⌄</span></th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th className="text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((exp) => (
                                <tr key={exp.id}>
                                    <td>{exp.date}</td>
                                    <td className="description">{exp.description}</td>
                                    <td><span className="category-pill">{exp.category}</span></td>
                                    <td className="amount">${exp.amount}</td>
                                    <td className="actions">
                                        <button className="delete-btn">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Expenses;
