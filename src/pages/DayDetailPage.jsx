import React, { useState } from 'react'
import { dayResources, dayDetails } from '../resources'
import './DayDetailPage.css'

function DayDetailPage({ day, onBack }) {
  const [expandedSections, setExpandedSections] = useState({})
  const dayData = dayDetails[day] || {}
  const dayInfo = dayResources[day] || {}

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  return (
    <div className="detail-container">
      <header className="detail-header">
        <button className="back-button" onClick={onBack}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Days
        </button>
        <div className="header-content">
          <div className="detail-badge">
            <span>DAY {String(day).padStart(2, '0')}</span>
            {dayData.date && (
              <>
                <span className="badge-dot"></span>
                <span>{dayData.date.toUpperCase()}</span>
              </>
            )}
          </div>
          <h1>{dayInfo.title || `Day ${day}`}</h1>
        </div>
      </header>

      <main className="detail-main">
        {dayData.sections && dayData.sections.length > 0 ? (
          <div className="sections">
            {dayData.sections.map((section, index) => (
              <section key={index} className="content-section">
                <button
                  className={`section-header ${expandedSections[index] ? 'expanded' : ''}`}
                  onClick={() => toggleSection(index)}
                >
                  <span className="section-title">{section.title}</span>
                  <span className="toggle-icon">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                      <path
                        d={expandedSections[index] ? "M4 10L8 6L12 10" : "M4 6L8 10L12 6"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {expandedSections[index] && (
                  <div className="section-content">
                    {section.description && (
                      <p className="description">{section.description}</p>
                    )}

                    {section.topics && (
                      <div className="topics">
                        {section.topics.map((topic, i) => (
                          <div key={i} className="topic-item">
                            <strong>{topic.name}</strong>
                            {topic.count && <span className="count">{topic.count}Q</span>}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.problems && (
                      <div className="problems">
                        {section.problems.map((problem, i) => (
                          <div key={i} className="problem">
                            <h4>{problem.title}</h4>
                            {problem.approach && (
                              <div className="approach">
                                <strong>Approach</strong>
                                <p>{problem.approach}</p>
                              </div>
                            )}
                            {problem.code && (
                              <div className="code-block">
                                <pre>
                                  <code>{problem.code}</code>
                                </pre>
                              </div>
                            )}
                            {problem.explanation && (
                              <div className="explanation">
                                <p>{problem.explanation}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {section.resources && section.resources.length > 0 && (
                      <div className="resources">
                        <h4>Resources</h4>
                        <div className="resource-list">
                          {section.resources.map((resource, i) => (
                            <a
                              key={i}
                              href={resource.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="resource-link"
                            >
                              <span>{resource.title}</span>
                              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path d="M5 3H13V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </section>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <p className="empty-title">Coming Soon</p>
            <p className="empty-sub">Content for Day {day} is being prepared</p>
          </div>
        )}
      </main>

      <footer className="detail-footer">
        <p>30 Days Internship Challenge</p>
      </footer>
    </div>
  )
}

export default DayDetailPage
