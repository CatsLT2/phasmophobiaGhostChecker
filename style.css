
:root {
  --bg-primary: #0a0c10;
  --bg-card: #141822;
  --bg-hover: #1f2636;
  --text-main: #e2e8f0;
  --text-muted: #94a3b8;
  --accent-blue: #38bdf8;
  --accent-green: #22c55e;
  --accent-red: #ef4444;
  --accent-yellow: #eab308;
  --border-color: #1e293b;
  --radius: 8px;
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family);
  background-color: var(--bg-primary);
  color: var(--text-main);
  line-height: 1.5;
  padding: 15px;
}

/* Header */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-card);
  padding: 15px 20px;
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
  margin-bottom: 15px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-left h1 {
  font-size: 1.4rem;
  color: var(--accent-blue);
  display: flex;
  align-items: center;
  gap: 8px;
}

.badge {
  background: #0284c7;
  color: white;
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: bold;
}

.header-controls {
  display: flex;
  gap: 10px;
}

/* Buttons */
.btn {
  background: #1e293b;
  color: var(--text-main);
  border: 1px solid var(--border-color);
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.btn:hover {
  background: var(--bg-hover);
}

.btn-primary { background: #0284c7; border-color: #0369a1; color: white; }
.btn-primary:hover { background: #0369a1; }
.btn-danger { background: #b91c1c; border-color: #991b1b; color: white; }
.btn-danger:hover { background: #991b1b; }
.btn-success { background: #15803d; border-color: #166534; color: white; }
.btn-success:hover { background: #166534; }
.btn-warning { background: #b45309; border-color: #92400e; color: white; }
.btn-warning:hover { background: #92400e; }

/* Navigation Tabs */
.nav-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.nav-btn {
  flex: 1;
  background: var(--bg-card);
  color: var(--text-muted);
  border: 1px solid var(--border-color);
  padding: 12px;
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  color: var(--text-main);
  background: var(--bg-hover);
}

.nav-btn.active {
  color: var(--accent-blue);
  border-color: var(--accent-blue);
  background: var(--bg-hover);
}

/* Cards & Layout */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 18px;
}

.journal-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 15px;
  margin-bottom: 15px;
}

@media (max-width: 900px) {
  .journal-layout {
    grid-template-columns: 1fr;
  }
}

.card-header {
  margin-bottom: 14px;
}

.card-header h2 {
  font-size: 1.1rem;
  color: var(--accent-blue);
}

.card-header small {
  color: var(--text-muted);
}

/* 3-State Evidence Grid */
.evidence-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
}

.ev-btn {
  background: #0f172a;
  border: 2px solid #334155;
  border-radius: 6px;
  padding: 12px 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6px;
  color: var(--text-main);
  transition: all 0.2s ease;
  user-select: none;
}

.ev-btn i {
  font-size: 1.4rem;
  color: var(--text-muted);
}

.ev-btn .ev-key {
  font-size: 0.7rem;
  background: #1e293b;
  padding: 1px 6px;
  border-radius: 4px;
  color: var(--text-muted);
}

/* State Styling */
.ev-btn.state-found {
  background: rgba(34, 197, 94, 0.15);
  border-color: var(--accent-green);
  color: #4ade80;
}
.ev-btn.state-found i { color: #4ade80; }

.ev-btn.state-ruled {
  background: rgba(239, 68, 68, 0.15);
  border-color: var(--accent-red);
  color: #f87171;
  text-decoration: line-through;
}
.ev-btn.state-ruled i { color: #f87171; }

/* Filters Panel */
.filter-group {
  margin-bottom: 12px;
}

.filter-group label {
  display: block;
  font-size: 0.85rem;
  margin-bottom: 5px;
  color: var(--text-muted);
}

.form-control {
  width: 100%;
  background: #0f172a;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 8px 12px;
  border-radius: 6px;
  outline: none;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: var(--text-main) !important;
}

/* Results & Ghost Grid */
.results-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.warning-banner {
  background: rgba(234, 179, 8, 0.2);
  border: 1px solid var(--accent-yellow);
  color: var(--accent-yellow);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
}

.ghosts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 15px;
}

/* Ghost Card */
.ghost-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 14px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.ghost-card.ruled-out {
  opacity: 0.35;
  filter: grayscale(80%);
}

.ghost-card.matched {
  border-color: var(--accent-blue);
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.15);
}

.ghost-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.ghost-header h4 {
  font-size: 1.1rem;
  color: var(--accent-blue);
}

.ghost-ev-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
}

.ghost-ev-tag {
  font-size: 0.75rem;
  padding: 3px 8px;
  border-radius: 4px;
  background: #1e293b;
  color: var(--text-muted);
}

.ghost-ev-tag.ev-found {
  background: rgba(34, 197, 94, 0.2);
  color: #4ade80;
  border: 1px solid var(--accent-green);
}

.ghost-ev-tag.ev-ruled {
  background: rgba(239, 68, 68, 0.2);
  color: #f87171;
  text-decoration: line-through;
}

.ghost-ev-tag.fake-orb {
  background: rgba(234, 179, 8, 0.2);
  color: var(--accent-yellow);
  border: 1px dashed var(--accent-yellow);
}

.ghost-details {
  font-size: 0.85rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border-color);
  padding-top: 8px;
}

.ghost-details p {
  margin-bottom: 4px;
}

/* Tab Management */
.tab-content {
  display: none;
}
.tab-content.active {
  display: block;
}

/* Tools Tab */
.tools-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
@media (max-width: 800px) {
  .tools-layout { grid-template-columns: 1fr; }
}

.tapper-display {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin: 15px 0;
}

.tap-button {
  width: 100%;
  padding: 30px;
  background: #1e293b;
  border: 2px dashed var(--accent-blue);
  color: var(--accent-blue);
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: background 0.1s;
}

.tap-button:active {
  background: var(--accent-blue);
  color: white;
}

.speed-metrics {
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-around;
}

.metric {
  text-align: center;
}

.metric-label {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.metric-value {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--accent-green);
}

.timer-display {
  text-align: center;
  margin: 20px 0;
}

.timer-clock {
  font-size: 3rem;
  font-family: monospace;
  color: var(--accent-blue);
  margin-bottom: 15px;
}

.timer-milestones {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.milestone-box {
  background: #0f172a;
  padding: 10px;
  border-radius: 6px;
  border-left: 4px solid var(--border-color);
  font-size: 0.85rem;
}

.milestone-box.reached {
  border-left-color: var(--accent-green);
  background: rgba(34, 197, 94, 0.1);
}

/* Guides Grid */
.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 15px;
  margin-top: 10px;
}

.guide-item {
  background: #0f172a;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid var(--border-color);
}

.guide-item h4 {
  color: var(--accent-blue);
  margin-bottom: 6px;
}

.mt-20 { margin-top: 20px; }
.hidden { display: none !important; }

/* Modals */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  width: 90%;
  max-width: 450px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.btn-close {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.5rem;
  cursor: pointer;
}

.hotkey-list {
  list-style: none;
}

.hotkey-list li {
  padding: 6px 0;
  border-bottom: 1px solid var(--border-color);
  font-size: 0.9rem;
}

kbd {
  background: #334155;
  color: var(--accent-blue);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}
