import React, { useState } from 'react'
import { dayResources, dayDetails } from '../resources'
import './DayDetailPage.css'

const sectionIcons = {
  0: '💡',
  1: '📸',
  2: '👔',
  3: '👗',
  4: '🎨',
  5: '🔍',
  6: '🚀',
  7: '📝',
  8: '🎯',
}

function DayDetailPage({ day, onBack }) {
  const [expandedSections, setExpandedSections] = useState({ 0: true })
  const dayData = dayDetails[day] || {}
  const dayInfo = dayResources[day] || {}

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  const expandAll = () => {
    if (dayData.sections) {
      const all = {}
      dayData.sections.forEach((_, i) => { all[i] = true })
      setExpandedSections(all)
    }
  }

  const collapseAll = () => {
    setExpandedSections({})
  }

  return (
    <div className="detail-container">
      {/* Hero Header */}
      <header className="detail-hero">
        <button className="back-button" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Days
        </button>

        <div className="hero-inner">
          <div className="detail-badge">DAY {String(day).padStart(2, '0')}</div>
          <h1>{dayInfo.title || `Day ${day}`}</h1>
          <div className="hero-meta">
            {dayData.sections && (
              <span className="meta-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                {dayData.sections.length} Sections
              </span>
            )}
            <span className="meta-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              5 min read
            </span>
          </div>
        </div>

        {/* Progress dots */}
        <div className="day-nav">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => (
            <div key={d} className={`nav-dot ${d === day ? 'active' : ''} ${d < day ? 'done' : ''}`} title={`Day ${d}`} />
          ))}
        </div>
      </header>

      <main className="detail-main">
        {dayData.sections && dayData.sections.length > 0 ? (
          <>
            <div className="section-controls">
              <button className="control-btn" onClick={expandAll}>Expand All</button>
              <button className="control-btn" onClick={collapseAll}>Collapse All</button>
            </div>

            <div className="sections">
              {dayData.sections.map((section, index) => (
                <section key={index} className={`content-section ${expandedSections[index] ? 'is-open' : ''}`}>
                  <button
                    className="section-header"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="section-header-left">
                      <span className="section-icon">{sectionIcons[index] || '📌'}</span>
                      <div>
                        <span className="section-number">Section {String(index + 1).padStart(2, '0')}</span>
                        <span className="section-title">{section.title}</span>
                      </div>
                    </div>
                    <span className={`toggle-icon ${expandedSections[index] ? 'open' : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>

                  <div className={`section-body ${expandedSections[index] ? 'expanded' : ''}`}>
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
                            <div key={i} className="problem-card">
                              <div className="problem-header">
                                <span className="problem-index">{String(i + 1).padStart(2, '0')}</span>
                                <h4>{problem.title}</h4>
                              </div>
                              {problem.approach && (
                                <div className="approach">
                                  <div className="approach-label">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                      <path d="M8 1L10 6H15L11 9.5L12.5 15L8 11.5L3.5 15L5 9.5L1 6H6L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                                    </svg>
                                    Approach
                                  </div>
                                  <p>{problem.approach}</p>
                                </div>
                              )}
                              {problem.code && (
                                <div className="code-block">
                                  <div className="code-header">
                                    <div className="code-dots">
                                      <span></span><span></span><span></span>
                                    </div>
                                    <span className="code-label">PROMPT</span>
                                  </div>
                                  <pre><code>{problem.code}</code></pre>
                                </div>
                              )}
                              {problem.explanation && (
                                <div className="explanation">
                                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M8 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                    <circle cx="8" cy="5" r="0.75" fill="currentColor"/>
                                  </svg>
                                  <p>{problem.explanation}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {section.resources && section.resources.length > 0 && (
                        <div className="resources">
                          <div className="resources-header">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M2 3C2 2.44772 2.44772 2 3 2H6L8 4H13C13.5523 4 14 4.44772 14 5V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3Z" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                            Reference Profiles
                          </div>
                          <div className="resource-grid">
                            {section.resources.map((resource, i) => (
                              <a
                                key={i}
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resource-card"
                              >
                                <div className="resource-info">
                                  <span className="resource-num">{String(i + 1).padStart(2, '0')}</span>
                                  <span className="resource-title">{resource.title}</span>
                                </div>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M5 3H13V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="bottom-cta">
              <div className="cta-card">
                <span className="cta-icon">🎯</span>
                <div>
                  <h3>Completed Day {day}?</h3>
                  <p>Move on to the next day and keep the momentum going!</p>
                </div>
                {day < 30 && (
                  <button className="cta-button" onClick={() => { window.scrollTo(0, 0); }}>
                    Day {String(day + 1).padStart(2, '0')} →
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-glow"></div>
            <span className="empty-icon">🔒</span>
            <p className="empty-title">Coming Soon</p>
            <p className="empty-sub">Day {day} content is being prepared.<br />Check back soon!</p>
            <button className="back-btn-alt" onClick={onBack}>← Back to all days</button>
          </div>
        )}
      </main>

      <footer className="detail-footer">
        <div className="footer-logo">
          <span className="logo-name">Lakshmi</span>
          <span className="logo-builds">Builds</span>
        </div>
        <p>30 Days Internship Challenge</p>
      </footer>
    </div>
  )
}

export default DayDetailPage
