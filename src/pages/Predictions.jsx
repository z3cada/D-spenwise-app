import React from 'react';
import './Predictions.css';

const Predictions = () => {
    return (
        <div className="predictions-container">
            <header className="page-header">
                <div className="header-left">
                    <h1>ML Predictions</h1>
                    <p>AI-powered spending forecast and recommendations</p>
                </div>
            </header>

            <div className="alert-banner risk">
                <div className="alert-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div className="alert-content">
                    <div className="alert-title">
                        High Risk of Overspending
                        <span className="badge danger">High Risk</span>
                    </div>
                    <p className="alert-desc">At the current rate, you're projected to exceed your budget. Immediate action is recommended to reduce spending.</p>
                </div>
            </div>

            <div className="predictions-grid">
                <div className="card gauge-card">
                    <div className="gauge-container">
                        <svg viewBox="0 0 100 100" className="gauge">
                            <circle className="gauge-bg" cx="50" cy="50" r="45" />
                            <circle className="gauge-value" cx="50" cy="50" r="45" style={{ strokeDashoffset: 'calc(283 - (283 * 100) / 100)' }} />
                            <text x="50" y="45" className="gauge-percent">100%</text>
                            <text x="50" y="60" className="gauge-label">of budget</text>
                        </svg>
                    </div>
                </div>

                <div className="card prediction-card">
                    <div className="card-header">
                        <p className="card-label">Predicted Total</p>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trend-icon"><path d="m21 16-4-4" /><path d="M3 19a10 10 0 1 1 17.32 0" /></svg>
                    </div>
                    <h2 className="card-value">$2,431.78</h2>
                    <p className="card-subtext danger">$431.78 over budget</p>
                </div>

                <div className="card prediction-card">
                    <div className="card-header">
                        <p className="card-label">Suggested Daily</p>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trend-icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    </div>
                    <h2 className="card-value">$42.48</h2>
                    <p className="card-subtext">for 9 remaining days</p>
                </div>

                <div className="card prediction-card">
                    <div className="card-header">
                        <p className="card-label">Model Confidence</p>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="trend-icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <h2 className="card-value">98%</h2>
                    <p className="card-subtext">R-squared accuracy</p>
                </div>
            </div>

            <div className="card trajectory-section">
                <div className="section-header">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="section-icon"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                    <h3>Spending Trajectory</h3>
                </div>
                <p className="subtitle">Day-by-day projected spending with actual data overlay</p>

                <div className="chart-area">
                    <svg width="100%" height="300" viewBox="0 0 800 300">
                        {/* Grid lines and labels */}
                        {[0, 1, 2, 3, 4].map(i => (
                            <g key={i}>
                                <line x1="50" y1={250 - i * 50} x2="750" y2={250 - i * 50} stroke="#1f1f23" />
                                <text x="40" y={250 - i * 50 + 5} textAnchor="end" fontSize="10" fill="#71717a">
                                    ${i * 650}
                                </text>
                            </g>
                        ))}

                        {/* X-axis days */}
                        {[1, 5, 10, 15, 20, 25, 30].map(d => (
                            <text key={d} x={50 + (d * 700 / 30)} y="270" textAnchor="middle" fontSize="10" fill="#71717a">
                                {d}
                            </text>
                        ))}

                        {/* Budget line */}
                        <line x1="50" y1="100" x2="750" y2="100" stroke="var(--danger)" strokeWidth="1" strokeDasharray="4" />

                        {/* Predicted path */}
                        <path d="M50 250 L750 50" fill="none" stroke="#71717a" strokeWidth="1" strokeDasharray="4" />

                        {/* Actual path with ripple/area effect if possible, but keeping it simple */}
                        <path d="M50 250 L100 240 L150 235 L200 210 L250 200 L300 160 L350 150 L400 130" fill="none" stroke="var(--primary)" strokeWidth="2" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Predictions;
