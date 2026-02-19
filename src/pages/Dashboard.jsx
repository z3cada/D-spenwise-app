import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <header className="page-header">
                <div className="header-left">
                    <h1>Budget Dashboard</h1>
                    <p>Track your spending and AI predictions</p>
                </div>
                <button className="add-expense-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    Add Expense
                </button>
            </header>

            <div className="dashboard-grid">
                {/* Gauge Section */}
                <div className="card gauge-card">
                    <div className="gauge-container">
                        <svg viewBox="0 0 100 100" className="gauge">
                            <circle className="gauge-bg" cx="50" cy="50" r="45" />
                            <circle className="gauge-value" cx="50" cy="50" r="45" style={{ strokeDashoffset: 'calc(283 - (283 * 100) / 100)' }} />
                            <text x="50" y="45" className="gauge-percent">100%</text>
                            <text x="50" y="60" className="gauge-label">of budget</text>
                        </svg>
                    </div>
                    <div className="gauge-info">
                        <p className="info-label">Predicted vs Budget</p>
                        <span className="badge danger">High Risk</span>
                    </div>
                </div>

                {/* Summary Stats */}
                <div className="summary-stats">
                    <div className="card stat-card">
                        <div className="stat-content">
                            <p className="stat-label">Monthly Budget</p>
                            <h2 className="stat-value">$2,000.00</h2>
                        </div>
                        <div className="stat-icon budget-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>
                        </div>
                    </div>

                    <div className="card stat-card">
                        <div className="stat-content">
                            <p className="stat-label">Current Spending</p>
                            <h2 className="stat-value">$1,617.71</h2>
                        </div>
                        <div className="stat-icon spending-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                    </div>

                    <div className="card stat-card">
                        <div className="stat-content">
                            <p className="stat-label">Predicted Total</p>
                            <h2 className="stat-value">$2,431.78</h2>
                            <p className="stat-subtext">98% confidence</p>
                        </div>
                        <div className="stat-icon prediction-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 20-4-4h-3l2-2h3l2-2h-3l2-2h-3l2-2" /></svg>
                        </div>
                    </div>

                    <div className="card stat-card">
                        <div className="stat-content">
                            <p className="stat-label">Daily Limit</p>
                            <h2 className="stat-value">$42.48</h2>
                            <p className="stat-subtext">9 days remaining</p>
                        </div>
                        <div className="stat-icon daily-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                        </div>
                    </div>
                </div>

                {/* Charts */}
                <div className="card chart-card trajectory-chart">
                    <h3>Spending Trajectory</h3>
                    <p className="chart-subtitle">Actual vs predicted spending this month</p>
                    <div className="chart-placeholder">
                        <svg width="100%" height="200" viewBox="0 0 400 200">
                            {/* Grid Lines */}
                            <line x1="0" y1="20" x2="400" y2="20" stroke="#1f1f23" strokeWidth="1" />
                            <line x1="0" y1="60" x2="400" y2="60" stroke="#1f1f23" strokeWidth="1" />
                            <line x1="0" y1="100" x2="400" y2="100" stroke="#1f1f23" strokeWidth="1" />
                            <line x1="0" y1="140" x2="400" y2="140" stroke="#1f1f23" strokeWidth="1" />
                            <line x1="0" y1="180" x2="400" y2="180" stroke="#1f1f23" strokeWidth="1" />

                            {/* Predicted Line (Dashed) */}
                            <path d="M0 180 L100 150 L200 120 L300 90 L400 60" fill="none" stroke="rgba(113, 113, 122, 0.5)" strokeWidth="2" strokeDasharray="4" />

                            {/* Actual Line */}
                            <path d="M0 180 L50 175 L100 160 L150 145 L200 135 L250 110 L300 105" fill="none" stroke="var(--primary)" strokeWidth="3" />

                            {/* Budget Line (Red) */}
                            <line x1="0" y1="60" x2="400" y2="60" stroke="var(--danger)" strokeWidth="1" strokeDasharray="4" />
                        </svg>
                    </div>
                </div>

                <div className="card chart-card category-chart">
                    <h3>Top Spending Categories</h3>
                    <p className="chart-subtitle">Highest spending areas this month</p>
                    <div className="bar-list">
                        {[
                            { label: 'Food & Dining', amount: 720, max: 800 },
                            { label: 'Health', amount: 280, max: 800 },
                            { label: 'Shopping', amount: 260, max: 800 },
                            { label: 'Entertainment', amount: 220, max: 800 },
                            { label: 'Transport', amount: 180, max: 800 },
                            { label: 'Utilities', amount: 120, max: 800 },
                        ].map((cat, i) => (
                            <div key={i} className="bar-item">
                                <div className="bar-labels">
                                    <span className="bar-name">{cat.label}</span>
                                    <span className="bar-value">${cat.amount}</span>
                                </div>
                                <div className="bar-container">
                                    <div className="bar-fill" style={{ width: `${(cat.amount / cat.max) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Expenses */}
                <div className="card full-width">
                    <h3>Recent Expenses</h3>
                    <div className="table-container">
                        <table className="recent-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2/20/2026</td>
                                    <td>Grocery Store</td>
                                    <td><span className="category-pill">Food & Dining</span></td>
                                    <td className="amount">$26.13</td>
                                </tr>
                                <tr>
                                    <td>2/19/2026</td>
                                    <td>Dinner Out</td>
                                    <td><span className="category-pill">Food & Dining</span></td>
                                    <td className="amount">$13.62</td>
                                </tr>
                                <tr>
                                    <td>2/19/2026</td>
                                    <td>Clothing Store</td>
                                    <td><span className="category-pill">Shopping</span></td>
                                    <td className="amount">$83.45</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
