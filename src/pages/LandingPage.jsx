import React from 'react'
import { dayResources } from '../resources'
import './LandingPage.css'

function LandingPage({ onDaySelect }) {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-name">Lakshmi</span>
          <span className="logo-builds">Builds</span>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-badge">
          <span>30 DAYS</span>
          <span className="badge-dot"></span>
          <span>INTERNSHIP CHALLENGE</span>
        </div>
        <h1>Stop Applying Blindly.<br />Get Your Internship in <span className="accent">30 Days</span></h1>
        <p className="hero-subtitle">
          A step-by-step roadmap to optimize your LinkedIn, build a killer resume
          & portfolio, cold DM founders, and land your dream internship
          — by <span className="brand">Lakshmi Builds</span>
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">30</span>
            <span className="stat-label">Days</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">100+</span>
            <span className="stat-label">Resources</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">Free</span>
            <span className="stat-label">Forever</span>
          </div>
        </div>
      </header>

      <main className="landing-main">
        <div className="section-label">
          <span className="label-line"></span>
          <span className="label-text">SELECT A DAY TO BEGIN</span>
          <span className="label-line"></span>
        </div>

        <div className="days-grid">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
            <button
              key={day}
              className="day-card"
              onClick={() => onDaySelect(day)}
            >
              <div className="day-card-top">
                <span className="day-label">DAY</span>
                <span className="day-num">{String(day).padStart(2, '0')}</span>
              </div>
              {dayResources[day] && (
                <span className="day-title">{dayResources[day].title}</span>
              )}
              <div className="day-card-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </main>

      <footer className="landing-footer">
        <div className="logo" style={{ justifyContent: 'center', marginBottom: '0.5rem' }}>
          <span className="logo-name">Lakshmi</span>
          <span className="logo-builds">Builds</span>
        </div>
        <p>Your internship journey starts here.</p>
      </footer>
    </div>
  )
}

export default LandingPage
