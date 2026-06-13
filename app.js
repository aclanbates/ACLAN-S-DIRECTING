const departments = [
  "Production Calendar",
  "Script, Lyrics, Cuts, Dramaturgy",
  "Concept and Audience",
  "Music and Vocal",
  "Choreography and Physical Storytelling",
  "Acting and Discipline",
  "Set and Props",
  "Lighting",
  "Sound and Microphones",
  "Costumes and Wardrobe",
  "Tech Crew and Safety",
  "Rehearsal Room Setup",
  "Tech Week and Stress",
  "Communication and Etiquette",
  "Marketing and Press",
  "Audience and Front of House",
  "Long-Run Questions"
];

const checklistSource = [
  {
    title: "Original 9-Line Rule",
    department: "Production Calendar",
    questions: [
      ["Who owns it? One person must be accountable, even when many people contribute.", "critical"],
      ["What is the exact deliverable: drawing, cue sheet, track, prop list, costume plot, safety plan, or other artifact?", "critical"],
      ["When is it due: date, rehearsal milestone, or production milestone?", "critical"],
      ["Who approves it: director, music director, maestro, choreographer, designer, stage manager, or all of the above?", "high"],
      ["What can block it: missing music, late costume, dance availability, unfinished set, unsafe traffic, or missing backup?", "critical"],
      ["How will performers learn it, repeat it, and maintain it through the run?", "high"]
    ]
  },
  {
    title: "Production Calendar and Schedule Governance",
    department: "Production Calendar",
    questions: [
      ["Create the first-day-to-opening calendar, including days off, holidays, sitzprobe, cue-to-cue, dress rehearsals, photo call, previews, and opening.", "critical"],
      ["Mark which dates are immovable and which dates can still change.", "critical"],
      ["Name who has final authority to change the schedule.", "high"],
      ["Choose the communication channel: email, call board, WhatsApp group, Google calendar, or daily report.", "high"],
      ["Build a scene-by-scene rehearsal breakdown and define the goal of each call.", "high"],
      ["Create an absence escalation path for repeated lateness or absence.", "critical"],
      ["Keep a weekly shared document with current decisions and open items.", "normal"]
    ]
  },
  {
    title: "Script, Lyrics, Cuts, and Dramaturgy",
    department: "Script, Lyrics, Cuts, Dramaturgy",
    questions: [
      ["Confirm whether script, libretto, and score cuts or edits are possible.", "critical"],
      ["Flag pronunciation, cultural references, jokes, idioms, rhythm, and repeated dialogue.", "high"],
      ["Make sure all departments use the same script and score version.", "critical"],
      ["Prepare paperwork for targeted local adaptation when needed.", "high"],
      ["Keep a version packet for actors, vocal books, prompt book, orchestra materials, and show bible.", "critical"],
      ["Document period, source, accents, character relationships, history, intimacy, violence, weapons, and rigging protocols.", "critical"],
      ["Decide the text freeze date.", "critical"]
    ]
  },
  {
    title: "Concept and Audience Alignment",
    department: "Concept and Audience",
    questions: [
      ["Write the one-sentence concept and make sure every department can repeat it.", "high"],
      ["Define the audience feeling minute by minute: comedy, tension, intimacy, release, or spectacle.", "high"],
      ["Define the visual world: realism, stylized, color, pace, period, and texture.", "normal"],
      ["Name non-negotiables that must be achieved and things that should never be betrayed.", "critical"],
      ["Agree on the emotional language for ensemble, principal roles, and transitions.", "high"],
      ["List the three biggest audience-risk moments and the plan for each.", "critical"],
      ["Record decisions so new team members join the same production language.", "normal"]
    ]
  },
  {
    title: "Music and Vocal System",
    department: "Music and Vocal",
    questions: [
      ["Confirm accompaniment expectations: piano, keyboard programming, click, percussion, guitar, tracks, or live band.", "critical"],
      ["Agree on tempos, keys, song-through line, and accuracy requirements.", "critical"],
      ["Schedule ensemble warmups and individual vocal work.", "high"],
      ["Track pitch, breath, diction, stamina, blend, and harmony learning method.", "high"],
      ["Define microphone and sound-level expectations early.", "critical"],
      ["Set vocal health rules and an escalation path if a performer requires adjustment.", "high"]
    ]
  },
  {
    title: "Choreography and Physical Storytelling",
    department: "Choreography and Physical Storytelling",
    questions: [
      ["Define the physical architecture of the story and the hours needed to build it.", "critical"],
      ["Check space, safety, period style, vocabulary, athletic demand, ritual, romance, and ensemble support.", "critical"],
      ["Identify steps that can be simplified without losing meaning.", "high"],
      ["Confirm platform, ramp, slipping surface, or quick-change movement risks.", "critical"],
      ["Create video notes and brush-up calls for conflict or long gaps.", "high"]
    ]
  },
  {
    title: "Acting and Discipline",
    department: "Acting and Discipline",
    questions: [
      ["State the acting principles and objectives for public moments, private moments, and transitions.", "high"],
      ["Set rules for notes: who gives them, when they are given, and how they are tracked.", "critical"],
      ["Plan immediate correction for line, cue, size, focus, or discipline problems.", "high"],
      ["Define ensemble synchronization, replacement plans, and damage control.", "critical"],
      ["Keep emotional safety and professional seriousness visible without fear-based rehearsal culture.", "high"]
    ]
  },
  {
    title: "Set and Props",
    department: "Set and Props",
    questions: [
      ["Confirm set sketch, model, dimensions, build schedule, load-in, exits, windows, flown units, and backstage traffic.", "critical"],
      ["Mark blackout needs, scene-change paths, and actor traffic on the plan.", "critical"],
      ["Identify props, takeaways, food or drink, hand-to-hand objects, duplicates, and dangerous items.", "critical"],
      ["Flag anything noisy, too slow, visually messy, or difficult for tech.", "high"]
    ]
  },
  {
    title: "Lighting",
    department: "Lighting",
    questions: [
      ["Define visibility, silhouette, focus, floor paths, cue philosophy, and psychological beats.", "critical"],
      ["Agree on follow spots, footlights, gobos, haze, cue length, and special looks.", "high"],
      ["Make sure camera, photo, and archival needs are not fighting the stage picture.", "normal"]
    ]
  },
  {
    title: "Sound and Microphones",
    department: "Sound and Microphones",
    questions: [
      ["Define atmosphere beyond amplification: world, transitions, effects, and room feeling.", "high"],
      ["Assign wireless microphones, swaps, emergency mic failure behavior, and backstage routine.", "critical"],
      ["Build cue sheets for music, sound, broken lyrics, and preview updates.", "critical"]
    ]
  },
  {
    title: "Costumes and Wardrobe",
    department: "Costumes and Wardrobe",
    questions: [
      ["Track shoes, knees, gloves, hats, jewelry, special items, and movement restrictions.", "critical"],
      ["Confirm laundry, repair, quick-change, duplicates, and emergency costume procedures.", "critical"],
      ["Schedule fittings early enough for choreography, microphones, and safety.", "high"]
    ]
  },
  {
    title: "Tech Crew and Safety",
    department: "Tech Crew and Safety",
    questions: [
      ["Identify deck crew, automation, fly, sound, lighting, smoke, haze, and pyro-adjacent responsibilities.", "critical"],
      ["Set stop-call rules for injury, stuck scenery, failed equipment, and unsafe traffic.", "critical"],
      ["Run safety tests before color, timing, or aesthetic notes dominate the day.", "high"],
      ["Confirm illness, injury, and replacement policies.", "critical"]
    ]
  },
  {
    title: "Rehearsal Room Setup",
    department: "Rehearsal Room Setup",
    questions: [
      ["Prepare tape marks, furniture, mirrors, music stand, call board, and room flow.", "high"],
      ["Watch for exhaustion, morale, and room temperature or crowding problems.", "high"],
      ["Reduce wasted time by pre-setting props, music, and scripts before calls.", "normal"]
    ]
  },
  {
    title: "Tech Week and Stress",
    department: "Tech Week and Stress",
    questions: [
      ["Plan dry tech, cue-to-cue, invited dress, preview, and note sessions.", "critical"],
      ["Watch fatigue day by day and avoid no-sleep decision-making.", "critical"],
      ["Protect meal breaks, medical needs, quiet zones, and emotional reset time.", "high"]
    ]
  },
  {
    title: "Communication and Etiquette",
    department: "Communication and Etiquette",
    questions: [
      ["Establish who speaks to whom, what goes into daily reports, and what belongs in private notes.", "high"],
      ["Make the note culture clear: direct, kind, artistic, serious, and useful.", "high"],
      ["Prevent surprise decisions by logging changes before they spread informally.", "critical"]
    ]
  },
  {
    title: "Marketing and Press",
    department: "Marketing and Press",
    questions: [
      ["Confirm title treatment, logos, one-line hook, photos, copyright, music excerpts, bios, and credits.", "high"],
      ["Approve what the public should know and what surprise details should stay hidden.", "high"],
      ["Prepare advisories, program notes, press language, and archive material.", "normal"]
    ]
  },
  {
    title: "Audience and Front of House Flow",
    department: "Audience and Front of House",
    questions: [
      ["Plan lobby displays, accessibility, front-of-house staff, late seating, loud talkers, and gala flow.", "high"],
      ["Choose who handles audience problems and weak points in the experience.", "critical"],
      ["Coordinate stage management and front-of-house communication.", "critical"]
    ]
  },
  {
    title: "Long-Run Questions",
    department: "Long-Run Questions",
    questions: [
      ["Decide how often brush-up calls happen and who leads them.", "high"],
      ["Track wear and tear on costumes, props, set pieces, voices, bodies, and morale.", "critical"],
      ["Run a postmortem: what helped, what froze, what worked, and which decisions should be carried forward.", "normal"]
    ]
  }
];

const defaultState = {
  checklist: {},
  events: [],
  actors: [],
  survivalNotes: ""
};

const STORAGE_KEY = "aclanWorksMusicalApp.v2";
const SYNC_CODE_KEY = "aclanWorksMusicalApp.syncCode";
const FIREBASE_SDK_VERSION = "10.12.5";
let state = loadState();
let syncState = {
  app: null,
  auth: null,
  db: null,
  docRef: null,
  unsubscribe: null,
  connected: false,
  applyingRemote: false,
  saveTimer: null,
  code: localStorage.getItem(SYNC_CODE_KEY) || ""
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);
  try {
    return { ...structuredClone(defaultState), ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  scheduleRemoteSave();
  render();
}

function questionKey(sectionIndex, questionIndex) {
  return `${sectionIndex}-${questionIndex}`;
}

function daySpan(start, end) {
  const first = new Date(`${start}T00:00:00`);
  const last = new Date(`${end}T00:00:00`);
  if (Number.isNaN(first.valueOf()) || Number.isNaN(last.valueOf())) return 0;
  return Math.max(0, Math.round((last - first) / 86400000) + 1);
}

function rangesOverlap(a, b) {
  return a.start <= b.end && b.start <= a.end;
}

function actorWorkDays(actorId) {
  const days = new Set();
  state.events
    .filter((event) => event.actorId === actorId)
    .forEach((event) => {
      const start = new Date(`${event.start}T00:00:00`);
      const total = daySpan(event.start, event.end);
      for (let i = 0; i < total; i += 1) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        days.add(d.toISOString().slice(0, 10));
      }
    });
  return days.size;
}

function actorName(actorId) {
  const actor = state.actors.find((item) => item.id === actorId);
  return actor ? `${actor.name} as ${actor.role}` : "Unassigned actor";
}

function getAlerts() {
  const alerts = [];

  state.events.forEach((event) => {
    if (event.end < event.start) {
      alerts.push({
        title: `${event.title}: date error`,
        body: "End date is before start date."
      });
    }

    const scheduledDays = daySpan(event.start, event.end);
    const minPrep = Number(event.minPrep || 0);
    if (scheduledDays > 0 && scheduledDays < minPrep) {
      alerts.push({
        title: `${event.title}: not enough time`,
        body: `${event.department} has ${scheduledDays} day(s), but needs at least ${minPrep}.`
      });
    }
  });

  for (let i = 0; i < state.events.length; i += 1) {
    for (let j = i + 1; j < state.events.length; j += 1) {
      const a = state.events[i];
      const b = state.events[j];
      if (!rangesOverlap(a, b)) continue;
      if (a.department === b.department) {
        alerts.push({
          title: `Department clash: ${a.department}`,
          body: `${a.title} overlaps with ${b.title}.`
        });
      }
      if (a.actorId && a.actorId === b.actorId) {
        alerts.push({
          title: `Actor clash: ${actorName(a.actorId)}`,
          body: `${a.title} overlaps with ${b.title}.`
        });
      }
    }
  }

  state.actors.forEach((actor) => {
    const worked = actorWorkDays(actor.id);
    const target = Number(actor.targetDays || 0);
    if (worked < target) {
      alerts.push({
        title: `${actor.name} is under target`,
        body: `${actor.role}, ${actor.tier} cast: ${worked}/${target} scheduled work days.`
      });
    }
  });

  return alerts;
}

function setupNavigation() {
  $$(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".nav-tab").forEach((item) => item.classList.toggle("active", item === button));
      $$(".view").forEach((view) => view.classList.toggle("active-view", view.id === button.dataset.view));
    });
  });
}

function setupForms() {
  const departmentOptions = departments.map((dept) => `<option value="${dept}">${dept}</option>`).join("");
  $("#departmentFilter").innerHTML = `<option value="">All departments</option>${departmentOptions}`;
  $("#scheduleForm select[name='department']").innerHTML = departmentOptions;

  $("#checklistSearch").addEventListener("input", renderChecklist);
  $("#departmentFilter").addEventListener("change", renderChecklist);

  $("#scheduleForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    state.events.push({
      id: crypto.randomUUID(),
      title: data.title.trim(),
      department: data.department,
      start: data.start,
      end: data.end,
      minPrep: Number(data.minPrep || 0),
      importance: data.importance,
      castTier: data.castTier,
      actorId: data.actorId
    });
    event.currentTarget.reset();
    $("#scheduleForm input[name='minPrep']").value = "1";
    saveState();
  });

  $("#actorForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    state.actors.push({
      id: crypto.randomUUID(),
      name: data.name.trim(),
      role: data.role.trim(),
      tier: data.tier,
      targetDays: Number(data.targetDays || 0)
    });
    event.currentTarget.reset();
    $("#actorForm input[name='targetDays']").value = "8";
    saveState();
  });

  $("#survivalNotes").addEventListener("input", (event) => {
    state.survivalNotes = event.currentTarget.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    scheduleRemoteSave();
  });

  $("#exportData").addEventListener("click", exportData);
  $("#importData").addEventListener("change", importData);
  $("#resetData").addEventListener("click", () => {
    if (!confirm("Reset all app data saved in this browser?")) return;
    state = structuredClone(defaultState);
    saveState();
  });

  $("#createSyncCode").addEventListener("click", () => {
    const code = generateSyncCode();
    $("#syncCodeInput").value = code;
    connectSync(code);
  });
  $("#connectSync").addEventListener("click", () => {
    connectSync($("#syncCodeInput").value);
  });
  $("#disconnectSync").addEventListener("click", disconnectSync);
  $("#syncCodeInput").addEventListener("input", (event) => {
    event.currentTarget.value = formatSyncCode(event.currentTarget.value);
  });
}

function renderChecklist() {
  const root = $("#checklistSections");
  const query = $("#checklistSearch").value.trim().toLowerCase();
  const department = $("#departmentFilter").value;
  root.innerHTML = "";

  checklistSource.forEach((section, sectionIndex) => {
    if (department && section.department !== department) return;
    const matchingQuestions = section.questions
      .map((question, questionIndex) => ({ question, questionIndex }))
      .filter(({ question }) => !query || question[0].toLowerCase().includes(query) || section.title.toLowerCase().includes(query));
    if (!matchingQuestions.length) return;

    const completed = matchingQuestions.filter(({ questionIndex }) => state.checklist[questionKey(sectionIndex, questionIndex)]?.done).length;
    const wrapper = document.createElement("article");
    wrapper.className = "checklist-section";
    wrapper.innerHTML = `
      <div class="section-header">
        <div>
          <h3>${section.title}</h3>
          <span>${section.department}</span>
        </div>
        <strong>${completed}/${matchingQuestions.length}</strong>
      </div>
      <div class="questions"></div>
    `;

    const questionsRoot = $(".questions", wrapper);
    matchingQuestions.forEach(({ question, questionIndex }) => {
      const key = questionKey(sectionIndex, questionIndex);
      const item = state.checklist[key] || {};
      const row = document.createElement("div");
      row.className = "question-row";
      row.innerHTML = `
        <input type="checkbox" ${item.done ? "checked" : ""} aria-label="Complete item" />
        <div class="question-text">${question[0]}<br><span class="importance ${question[1]}">${question[1]}</span></div>
        <input data-field="owner" placeholder="Owner" value="${escapeAttribute(item.owner || "")}" />
        <input data-field="due" type="date" value="${escapeAttribute(item.due || "")}" />
        <textarea data-field="notes" placeholder="Deliverable / notes">${escapeHtml(item.notes || "")}</textarea>
      `;
      $("input[type='checkbox']", row).addEventListener("change", (event) => updateChecklist(key, "done", event.currentTarget.checked));
      $$("[data-field]", row).forEach((field) => {
        field.addEventListener("input", (event) => updateChecklist(key, event.currentTarget.dataset.field, event.currentTarget.value));
      });
      questionsRoot.append(row);
    });
    root.append(wrapper);
  });

  if (!root.children.length) root.append(emptyNode());
}

function updateChecklist(key, field, value) {
  state.checklist[key] = { ...(state.checklist[key] || {}), [field]: value };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  scheduleRemoteSave();
  renderOverview();
}

function renderSchedule() {
  const actorOptions = ['<option value="">No specific actor</option>']
    .concat(state.actors.map((actor) => `<option value="${actor.id}">${actor.name} - ${actor.role} (${actor.tier})</option>`))
    .join("");
  $("#scheduleForm select[name='actorId']").innerHTML = actorOptions;

  const alerts = getAlerts();
  const root = $("#scheduleList");
  root.innerHTML = "";

  [...state.events]
    .sort((a, b) => a.start.localeCompare(b.start))
    .forEach((event) => {
      const eventAlert = alerts.some((alert) => alert.title.includes(event.title) || alert.body.includes(event.title));
      const actor = event.actorId ? actorName(event.actorId) : event.castTier ? `${event.castTier} cast` : "No actor assigned";
      const row = document.createElement("article");
      row.className = `event-row ${eventAlert ? "warning" : ""}`;
      row.innerHTML = `
        <div>
          <div class="event-title">${escapeHtml(event.title)}</div>
          <div class="event-meta">${event.department} · ${actor}</div>
        </div>
        <span class="importance ${event.importance}">${event.importance}</span>
        <div class="event-meta">${event.start} to ${event.end}</div>
        <div class="event-meta">${daySpan(event.start, event.end)} day(s), min ${event.minPrep}</div>
        <button class="remove-button" type="button">Remove</button>
      `;
      $(".remove-button", row).addEventListener("click", () => {
        state.events = state.events.filter((item) => item.id !== event.id);
        saveState();
      });
      root.append(row);
    });

  if (!root.children.length) root.append(emptyNode());
}

function renderCasts() {
  const root = $("#castBoards");
  root.innerHTML = "";
  [
    ["first", "First Cast"],
    ["second", "Second Cast"],
    ["third", "Third Cast"]
  ].forEach(([tier, label]) => {
    const board = document.createElement("section");
    board.className = "cast-board";
    board.innerHTML = `<h3>${label}</h3>`;
    const actors = state.actors.filter((actor) => actor.tier === tier);
    actors.forEach((actor) => {
      const worked = actorWorkDays(actor.id);
      const target = Number(actor.targetDays || 0);
      const pct = target ? Math.min(100, Math.round((worked / target) * 100)) : 100;
      const card = document.createElement("article");
      card.className = `actor-card ${worked < target ? "under-target" : ""}`;
      card.innerHTML = `
        <strong>${escapeHtml(actor.name)}</strong>
        <div class="actor-meta">${escapeHtml(actor.role)}</div>
        <div class="progress-track"><div class="progress-bar" style="width:${pct}%"></div></div>
        <div class="actor-meta">${worked}/${target} scheduled work days</div>
        <button class="remove-button" type="button">Remove</button>
      `;
      $(".remove-button", card).addEventListener("click", () => {
        state.actors = state.actors.filter((item) => item.id !== actor.id);
        state.events = state.events.map((event) => (event.actorId === actor.id ? { ...event, actorId: "" } : event));
        saveState();
      });
      board.append(card);
    });
    if (!actors.length) board.append(emptyNode());
    root.append(board);
  });
}

function renderOverview() {
  const totalQuestions = checklistSource.reduce((sum, section) => sum + section.questions.length, 0);
  const completed = Object.values(state.checklist).filter((item) => item.done).length;
  const completion = totalQuestions ? Math.round((completed / totalQuestions) * 100) : 0;
  const alerts = getAlerts();

  $("#completionMetric").textContent = `${completion}%`;
  $("#eventMetric").textContent = state.events.length;
  $("#castMetric").textContent = state.actors.length;
  $("#departmentMetric").textContent = new Set(state.events.map((event) => event.department)).size || departments.length;

  const badge = $("#alertBadge");
  badge.hidden = !alerts.length;
  badge.textContent = `${alerts.length} active alert${alerts.length === 1 ? "" : "s"}`;
  $("#alertCountLabel").textContent = alerts.length ? `${alerts.length} active alert${alerts.length === 1 ? "" : "s"}` : "Schedule is clear";

  const alertRoot = $("#alertsList");
  alertRoot.innerHTML = "";
  alerts.slice(0, 8).forEach((alert) => {
    const item = document.createElement("div");
    item.className = "alert-item";
    item.innerHTML = `<strong>${escapeHtml(alert.title)}</strong><span>${escapeHtml(alert.body)}</span>`;
    alertRoot.append(item);
  });
  if (!alertRoot.children.length) alertRoot.append(emptyNode());

  const deadlineRoot = $("#deadlineList");
  deadlineRoot.innerHTML = "";
  const deadlines = [];
  checklistSource.forEach((section, sectionIndex) => {
    section.questions.forEach((question, questionIndex) => {
      const item = state.checklist[questionKey(sectionIndex, questionIndex)];
      if (item?.due) deadlines.push({ ...item, section: section.title, question: question[0] });
    });
  });
  deadlines
    .sort((a, b) => a.due.localeCompare(b.due))
    .slice(0, 8)
    .forEach((item) => {
      const row = document.createElement("div");
      row.className = "deadline-item";
      row.innerHTML = `
        <strong>${escapeHtml(item.due)} · ${escapeHtml(item.owner || "No owner")}</strong>
        <span>${escapeHtml(item.section)}</span>
        <div>${escapeHtml(item.question)}</div>
      `;
      deadlineRoot.append(row);
    });
  if (!deadlineRoot.children.length) deadlineRoot.append(emptyNode());
}

function render() {
  $("#survivalNotes").value = state.survivalNotes || "";
  $("#syncCodeInput").value = syncState.code || "";
  renderOverview();
  renderChecklist();
  renderSchedule();
  renderCasts();
  renderSync();
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "aclan-works-musical-project.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.currentTarget.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      state = { ...structuredClone(defaultState), ...JSON.parse(reader.result) };
      saveState();
    } catch {
      alert("That JSON file could not be imported.");
    }
  });
  reader.readAsText(file);
  event.currentTarget.value = "";
}

function hasFirebaseConfig() {
  const config = window.ACLAN_FIREBASE_CONFIG;
  return Boolean(config?.apiKey && config?.projectId && config?.appId);
}

async function loadFirebase() {
  if (!window.ACLAN_FIREBASE_CONFIG) {
    await import(`./firebase-config.js?v=${Date.now()}`);
  }
  if (!hasFirebaseConfig()) {
    setSyncStatus("Firebase is not configured yet. Add your project settings to firebase-config.js.", "offline");
    return false;
  }
  if (syncState.db) return true;

  setSyncStatus("Loading Firebase...", "working");
  try {
    const appModule = await import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-app.js`);
    const authModule = await import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-auth.js`);
    const firestoreModule = await import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-firestore.js`);

    syncState.firebase = { ...appModule, ...authModule, ...firestoreModule };
    syncState.app = appModule.initializeApp(window.ACLAN_FIREBASE_CONFIG);
    syncState.auth = authModule.getAuth(syncState.app);
    syncState.db = firestoreModule.getFirestore(syncState.app);
    await authModule.signInAnonymously(syncState.auth);
    return true;
  } catch (error) {
    setSyncStatus(`Firebase could not start: ${error.message}`, "offline");
    return false;
  }
}

async function connectSync(rawCode) {
  const code = formatSyncCode(rawCode);
  if (!isValidSyncCode(code)) {
    setSyncStatus("Enter a code in this format: Q7KM-42TX-9PDA.", "offline");
    return;
  }
  if (!(await loadFirebase())) return;

  if (syncState.unsubscribe) syncState.unsubscribe();
  const fb = syncState.firebase;
  syncState.code = code;
  syncState.connected = false;
  localStorage.setItem(SYNC_CODE_KEY, code);
  $("#syncCodeInput").value = code;
  setSyncStatus("Connecting to sync room...", "working");

  syncState.docRef = fb.doc(syncState.db, "syncRooms", code);
  const snapshot = await fb.getDoc(syncState.docRef);
  if (!snapshot.exists()) {
    await writeRemoteState();
  } else {
    const remoteState = snapshot.data()?.data;
    if (remoteState && hasLocalData() && !confirm("This sync code already has data. Replace this device's local data with the synced version?")) {
      await writeRemoteState();
    } else if (remoteState) {
      applyRemoteState(remoteState);
    }
  }

  syncState.unsubscribe = fb.onSnapshot(syncState.docRef, (docSnap) => {
    if (!docSnap.exists()) return;
    const remoteState = docSnap.data()?.data;
    if (remoteState) applyRemoteState(remoteState);
    setSyncStatus(`Connected with code ${syncState.code}. Changes sync automatically.`, "online");
  }, (error) => {
    setSyncStatus(`Sync stopped: ${error.message}`, "offline");
  });
  syncState.connected = true;
  setSyncStatus(`Connected with code ${syncState.code}. Changes sync automatically.`, "online");
  renderSync();
}

function disconnectSync() {
  if (syncState.unsubscribe) syncState.unsubscribe();
  syncState.unsubscribe = null;
  syncState.docRef = null;
  syncState.connected = false;
  syncState.code = "";
  localStorage.removeItem(SYNC_CODE_KEY);
  setSyncStatus("Disconnected on this device. Local data is still saved here.", "offline");
  renderSync();
}

function applyRemoteState(remoteState) {
  syncState.applyingRemote = true;
  state = { ...structuredClone(defaultState), ...remoteState };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  syncState.applyingRemote = false;
  render();
}

function scheduleRemoteSave() {
  if (!syncState.connected || !syncState.docRef || syncState.applyingRemote) return;
  clearTimeout(syncState.saveTimer);
  syncState.saveTimer = setTimeout(writeRemoteState, 450);
}

async function writeRemoteState() {
  if (!syncState.docRef || !syncState.firebase) return;
  const fb = syncState.firebase;
  await fb.setDoc(syncState.docRef, {
    data: state,
    updatedAt: fb.serverTimestamp(),
    updatedAtMs: Date.now(),
    version: 1
  }, { merge: true });
}

function renderSync() {
  const configured = hasFirebaseConfig();
  const badge = $("#syncBadge");
  if (!badge) return;
  badge.textContent = syncState.connected ? "Sync connected" : configured ? "Ready to connect" : "Needs Firebase config";
  badge.className = `sync-badge ${syncState.connected ? "online" : configured ? "ready" : ""}`;
  if (!$("#syncStatus").textContent) {
    setSyncStatus(configured ? "Firebase config found. Create or enter a sync code." : "Firebase is not configured yet.", configured ? "working" : "offline");
  }
}

function setSyncStatus(message, status) {
  const statusNode = $("#syncStatus");
  const badge = $("#syncBadge");
  if (statusNode) {
    statusNode.textContent = message;
    statusNode.dataset.status = status;
  }
  if (badge) {
    badge.textContent = status === "online" ? "Sync connected" : status === "working" ? "Sync ready" : "Not connected";
    badge.className = `sync-badge ${status === "online" ? "online" : status === "working" ? "ready" : ""}`;
  }
}

function generateSyncCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(12);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => chars[byte % chars.length])
    .join("")
    .replace(/(.{4})(?=.)/g, "$1-");
}

function formatSyncCode(value) {
  return String(value)
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 12)
    .replace(/(.{4})(?=.)/g, "$1-");
}

function isValidSyncCode(code) {
  return /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code);
}

function hasLocalData() {
  return Boolean(Object.keys(state.checklist).length || state.events.length || state.actors.length || state.survivalNotes);
}

function emptyNode() {
  return $("#emptyTemplate").content.firstElementChild.cloneNode(true);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

setupNavigation();
setupForms();
render();
if (syncState.code) connectSync(syncState.code);
