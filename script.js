// Database of all 24 Phasmophobia Ghosts
const GHOSTS_DB = [
  { name: "Spirit", evidence: ["EMF Level 5", "Spirit Box", "Ghost Writing"], speed: "normal", sanity: 50, details: "Smudging prevents hunt for 180s (instead of 90s)." },
  { name: "Wraith", evidence: ["EMF Level 5", "Spirit Box", "DOTS Projector"], speed: "normal", sanity: 50, details: "Never steps in salt. Can teleport directly to players." },
  { name: "Phantom", evidence: ["Spirit Box", "Fingerprints", "DOTS Projector"], speed: "normal", sanity: 50, details: "Disappears when photographed. Drains sanity fast during LOS." },
  { name: "Poltergeist", evidence: ["Spirit Box", "Fingerprints", "Ghost Writing"], speed: "normal", sanity: 50, details: "Throws multiple items simultaneously causing heavy sanity drop." },
  { name: "Banshee", evidence: ["Ghost Orb", "Fingerprints", "DOTS Projector"], speed: "normal", sanity: 50, details: "Targets one player at a time. Distinct Parabolic Microphone scream." },
  { name: "Jinn", evidence: ["EMF Level 5", "Freezing Temperatures", "Fingerprints"], speed: "fast", sanity: 50, details: "Moves faster when fuse box is ON and player is far." },
  { name: "Mare", evidence: ["Ghost Orb", "Spirit Box", "Ghost Writing"], speed: "normal", sanity: 60, details: "Hunts at 60% in dark, 45% in light. Turns off lights immediately." },
  { name: "Revenant", evidence: ["Ghost Orb", "Ghost Writing", "Freezing Temperatures"], speed: "variable", sanity: 50, details: "Extremely fast when seeing a player (3.0m/s); extremely slow otherwise." },
  { name: "Shade", evidence: ["EMF Level 5", "Ghost Writing", "Freezing Temperatures"], speed: "normal", sanity: 35, details: "Shy ghost. Will not hunt if multiple people are in the room." },
  { name: "Demon", evidence: ["Fingerprints", "Ghost Writing", "Freezing Temperatures"], speed: "normal", sanity: 70, details: "Can hunt at any sanity using ability. Smudge lasts only 60s." },
  { name: "Yurei", evidence: ["Ghost Orb", "Freezing Temperatures", "DOTS Projector"], speed: "normal", sanity: 50, details: "Smudging traps it in room. Can shut fully open doors causing sanity drain." },
  { name: "Oni", evidence: ["EMF Level 5", "Freezing Temperatures", "DOTS Projector"], speed: "normal", sanity: 50, details: "More active near groups. Visible for longer durations during hunts." },
  { name: "Hantu", evidence: ["Fingerprints", "Ghost Orb", "Freezing Temperatures"], speed: "variable", sanity: 50, details: "Faster in cold rooms, slower in warm rooms. Freezing breath during hunt." },
  { name: "Goryo", evidence: ["EMF Level 5", "Fingerprints", "DOTS Projector"], speed: "normal", sanity: 50, details: "DOTS visible ONLY through video camera when no one is in room." },
  { name: "Myling", evidence: ["EMF Level 5", "Fingerprints", "Ghost Writing"], speed: "normal", sanity: 50, details: "Quieter footsteps during hunt. Frequent parabolic mic vocalizations." },
  { name: "Onryo", evidence: ["Spirit Box", "Ghost Orb", "Freezing Temperatures"], speed: "normal", sanity: 60, details: "Extinguishing candles can trigger a hunt at any sanity." },
  { name: "The Twins", evidence: ["EMF Level 5", "Spirit Box", "Freezing Temperatures"], speed: "variable", sanity: 50, details: "Either main ghost (slow) or twin (fast) initiates hunt from different spots." },
  { name: "Raiju", evidence: ["EMF Level 5", "Ghost Orb", "DOTS Projector"], speed: "fast", sanity: 65, details: "Hunts early (65%) and runs fast near active player electronics." },
  { name: "Obake", evidence: ["EMF Level 5", "Ghost Orb", "Fingerprints"], speed: "normal", sanity: 50, details: "6-fingered prints chance. Briefly changes shape during hunt." },
  { name: "The Mimic", evidence: ["Spirit Box", "Fingerprints", "Freezing Temperatures"], speed: "variable", sanity: 50, details: "Always displays fake Ghost Orbs as a 4th evidence piece!" },
  { name: "Moroi", evidence: ["Spirit Box", "Ghost Writing", "Freezing Temperatures"], speed: "fast", sanity: 50, details: "Faster as overall team sanity drops. Curses player via Spirit Box." },
  { name: "Deogen", evidence: ["Spirit Box", "Ghost Writing", "DOTS Projector"], speed: "variable", sanity: 40, details: "Always knows where you hide. Fast far away, slows down when close." },
  { name: "Thaye", evidence: ["Ghost Orb", "Ghost Writing", "DOTS Projector"], speed: "variable", sanity: 75, details: "Starts extremely fast and aggressive, gets slower and quieter over time." }
];

const EVIDENCE_LIST = [
  { id: "EMF Level 5", icon: "fa-bolt", key: "1" },
  { id: "Spirit Box", icon: "fa-radio", key: "2" },
  { id: "Fingerprints", icon: "fa-hand", key: "3" },
  { id: "Ghost Orb", icon: "fa-eye", key: "4" },
  { id: "Ghost Writing", icon: "fa-book", key: "5" },
  { id: "Freezing Temperatures", icon: "fa-snowflake", key: "6" },
  { id: "DOTS Projector", icon: "fa-atom", key: "7" }
];

// State Management: 0 = Unset, 1 = Found, 2 = Ruled Out
let evidenceState = {};
EVIDENCE_LIST.forEach(e => evidenceState[e.id] = 0);

// Broadcast Channel for Syncing with PiP / External Windows
const syncChannel = new BroadcastChannel('phasmo_journal_sync');

document.addEventListener("DOMContentLoaded", () => {
  initUI();
  renderEvidenceGrid();
  renderGhostCards();
  setupEventListeners();
  setupSync();
});

function initUI() {
  // Navigation Tabs
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  // Hotkey Modal
  document.getElementById('hotkey-toggle-btn').onclick = () => toggleModal(true);
  document.getElementById('close-hotkey-modal').onclick = () => toggleModal(false);
}

function toggleModal(show) {
  const modal = document.getElementById('hotkey-modal');
  if (show) modal.classList.remove('hidden');
  else modal.classList.add('hidden');
}

function renderEvidenceGrid() {
  const container = document.getElementById('evidence-grid');
  container.innerHTML = '';

  EVIDENCE_LIST.forEach(ev => {
    const btn = document.createElement('div');
    const state = evidenceState[ev.id];
    let stateClass = '';
    if (state === 1) stateClass = 'state-found';
    if (state === 2) stateClass = 'state-ruled';

    btn.className = `ev-btn ${stateClass}`;
    btn.innerHTML = `
      <i class="fa-solid ${ev.icon}"></i>
      <span>${ev.id}</span>
      <span class="ev-key">Hotkey: ${ev.key}</span>
    `;

    btn.onclick = () => toggleEvidence(ev.id);
    container.appendChild(btn);
  });
}

function toggleEvidence(id) {
  evidenceState[id] = (evidenceState[id] + 1) % 3;
  broadcastState();
  updateLogic();
}

function updateLogic() {
  renderEvidenceGrid();
  renderGhostCards();
}

function renderGhostCards() {
  const container = document.getElementById('ghosts-grid');
  container.innerHTML = '';

  const foundEv = Object.keys(evidenceState).filter(k => evidenceState[k] === 1);
  const ruledEv = Object.keys(evidenceState).filter(k => evidenceState[k] === 2);
  const speedFilter = document.getElementById('filter-speed').value;
  const sanityFilter = document.getElementById('filter-sanity').value;
  const includeMimicOrbs = document.getElementById('filter-mimic-orbs').checked;

  let matchCount = 0;

  GHOSTS_DB.forEach(ghost => {
    let isPossible = true;

    // Check evidence matches
    foundEv.forEach(ev => {
      if (!ghost.evidence.includes(ev)) {
        if (!(ghost.name === "The Mimic" && ev === "Ghost Orb" && includeMimicOrbs)) {
          isPossible = false;
        }
      }
    });

    ruledEv.forEach(ev => {
      if (ghost.evidence.includes(ev)) isPossible = false;
    });

    // Check speed filter
    if (speedFilter !== 'all' && ghost.speed !== speedFilter) isPossible = false;

    // Check sanity filter
    if (sanityFilter === 'early' && ghost.sanity <= 50) isPossible = false;
    if (sanityFilter === 'late' && ghost.sanity >= 50) isPossible = false;
    if (sanityFilter === 'standard' && ghost.sanity !== 50) isPossible = false;

    if (isPossible) matchCount++;

    // Create Card UI
    const card = document.createElement('div');
    card.className = `ghost-card ${isPossible ? 'matched' : 'ruled-out'}`;

    const evTags = ghost.evidence.map(e => {
      let tagClass = '';
      if (evidenceState[e] === 1) tagClass = 'ev-found';
      if (evidenceState[e] === 2) tagClass = 'ev-ruled';
      return `<span class="ghost-ev-tag ${tagClass}">${e}</span>`;
    }).join('');

    const mimicTag = ghost.name === "The Mimic" ? `<span class="ghost-ev-tag fake-orb">Fake Orb</span>` : '';

    card.innerHTML = `
      <div class="ghost-header">
        <h4>${ghost.name}</h4>
        <small>${ghost.sanity}% Hunt Threshold</small>
      </div>
      <div class="ghost-ev-list">
        ${evTags} ${mimicTag}
      </div>
      <div class="ghost-details">
        <p><strong>Trait:</strong> ${ghost.details}</p>
      </div>
    `;

    container.appendChild(card);
  });

  document.getElementById('match-count').innerText = matchCount;
  document.getElementById('conflict-warning').classList.toggle('hidden', matchCount > 0 || (foundEv.length === 0 && ruledEv.length === 0));
}

// Multi-window / Picture-in-Picture State Sync
function setupSync() {
  syncChannel.onmessage = (event) => {
    if (event.data.type === 'STATE_UPDATE') {
      evidenceState = event.data.state;
      updateLogic();
    }
  };
}

function broadcastState() {
  syncChannel.postMessage({ type: 'STATE_UPDATE', state: evidenceState });
}

// Reset Function
document.getElementById('reset-btn').onclick = () => {
  EVIDENCE_LIST.forEach(e => evidenceState[e.id] = 0);
  document.getElementById('filter-speed').value = 'all';
  document.getElementById('filter-sanity').value = 'all';
  broadcastState();
  updateLogic();
};

// Document Picture-in-Picture (PiP) Window Popout
document.getElementById('pip-btn').onclick = async () => {
  if ('documentPictureInPicture' in window) {
    try {
      const pipWindow = await window.documentPictureInPicture.requestWindow({
        width: 360,
        height: 600
      });

      // Copy styles
      [...document.styleSheets].forEach(styleSheet => {
        try {
          const cssRules = [...styleSheet.cssRules].map(rule => rule.cssText).join('');
          const style = document.createElement('style');
          style.textContent = cssRules;
          pipWindow.document.head.appendChild(style);
        } catch (e) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = styleSheet.href;
          pipWindow.document.head.appendChild(link);
        }
      });

      // Render clone into PiP
      pipWindow.document.body.innerHTML = `
        <div style="padding: 10px;">
          <h3 style="color:#38bdf8; margin-bottom: 10px;">Phasmo Companion (PiP)</h3>
          <div id="pip-evidence" class="evidence-grid"></div>
          <div id="pip-ghosts" style="margin-top: 15px;"></div>
        </div>
      `;

      // Simplified rendering loop for PiP
      const updatePip = () => {
        const evGrid = pipWindow.document.getElementById('pip-evidence');
        evGrid.innerHTML = document.getElementById('evidence-grid').innerHTML;
        
        // Rebind click handlers inside PiP window
        [...evGrid.children].forEach((child, idx) => {
          child.onclick = () => {
            toggleEvidence(EVIDENCE_LIST[idx].id);
            updatePip();
          };
        });
      };

      updatePip();

    } catch (err) {
      alert("PiP Overlay Failed: " + err.message);
    }
  } else {
    alert("Document Picture-in-Picture is only fully supported in Chrome/Edge. Standard popup window opened instead.");
    window.open(window.location.href, '_blank', 'width=400,height=600');
  }
};

// Keybind Handling
window.addEventListener('keydown', (e) => {
  if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

  if (e.key >= '1' && e.key <= '7') {
    const ev = EVIDENCE_LIST[parseInt(e.key) - 1];
    if (ev) toggleEvidence(ev.id);
  } else if (e.key.toLowerCase() === 'r') {
    document.getElementById('reset-btn').click();
  } else if (e.key.toLowerCase() === 's') {
    toggleSmudgeTimer();
  } else if (e.code === 'Space') {
    e.preventDefault();
    tapSpeed();
  } else if (e.key === '?' || e.key.toLowerCase() === 'h') {
    toggleModal(true);
  }
});

// Metronome / Speed Tapper Tool
let tapTimes = [];
function tapSpeed() {
  const now = performance.now();
  tapTimes.push(now);

  if (tapTimes.length > 8) tapTimes.shift();

  if (tapTimes.length > 1) {
    const intervals = [];
    for (let i = 1; i < tapTimes.length; i++) {
      intervals.push(tapTimes[i] - tapTimes[i - 1]);
    }

    const avgIntervalMs = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    const bpm = Math.round(60000 / avgIntervalMs);
    
    // Estimate m/s from BPM (Approx calculation: 140 BPM ~ 1.7 m/s)
    const speedMs = (bpm / 140 * 1.7).toFixed(2);

    document.getElementById('speed-result-bpm').innerText = bpm;
    document.getElementById('speed-result-ms').innerHTML = `${speedMs} <small>m/s</small>`;
  }
}

document.getElementById('tap-btn').onclick = tapSpeed;

// Smudge Timer Logic
let timerInterval = null;
let timerSeconds = 0;

function toggleSmudgeTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  } else {
    const startTime = Date.now() - (timerSeconds * 1000);
    timerInterval = setInterval(() => {
      timerSeconds = (Date.now() - startTime) / 1000;
      updateTimerDisplay();
    }, 100);
  }
}

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
  const secs = (timerSeconds % 60).toFixed(1).padStart(4, '0');
  document.getElementById('smudge-timer').innerText = `${mins}:${secs}`;

  document.getElementById('ms-60').classList.toggle('reached', timerSeconds >= 60);
  document.getElementById('ms-90').classList.toggle('reached', timerSeconds >= 90);
  document.getElementById('ms-180').classList.toggle('reached', timerSeconds >= 180);
}

document.getElementById('timer-start').onclick = toggleSmudgeTimer;
document.getElementById('timer-pause').onclick = toggleSmudgeTimer;
document.getElementById('timer-reset').onclick = () => {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 0;
  updateTimerDisplay();
};
