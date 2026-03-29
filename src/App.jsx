import React, { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import DayDetailPage from './pages/DayDetailPage'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [selectedDay, setSelectedDay] = useState(null)

  const handleDaySelect = (day) => {
    setSelectedDay(day)
    setCurrentPage('detail')
  }

  const handleBackToLanding = () => {
    setCurrentPage('landing')
    setSelectedDay(null)
  }

  return (
    <div className="app">
      {currentPage === 'landing' ? (
        <LandingPage onDaySelect={handleDaySelect} />
      ) : (
        <DayDetailPage day={selectedDay} onBack={handleBackToLanding} />
      )}
    </div>
  )
}

export default App
