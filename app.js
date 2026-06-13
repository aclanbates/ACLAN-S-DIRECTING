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

const creativePrompts = [
  ["coreConcept", "Core concept", "What is the one sentence everyone must understand?"],
  ["visualWorld", "Visual world", "Realism, stylization, color, period, texture."],
  ["emotionalTemperature", "Emotional temperature", "What should the audience feel, and when?"],
  ["movementLanguage", "Movement language", "How bodies move in this production."],
  ["soundWorld", "Sound world", "Atmosphere, rhythm, silence, transitions."],
  ["references", "References", "Images, films, paintings, historical links, memories."],
  ["nonNegotiables", "Must never lose", "The soul of the production and what cannot be betrayed."]
];

const techReadinessItems = [
  "Set ready",
  "Props ready",
  "Costumes ready",
  "Sound ready",
  "Lights ready",
  "Scene changes ready",
  "Safety ready",
  "Emergency plans ready"
];

const survivalPrompts = [
  ["actorConflict", "Actor conflict", "What is happening, what calms it, what must not be said?"],
  ["designerConflict", "Designer conflict", "What is the disagreement and what decision path is fair?"],
  ["scriptProblem", "Script problem", "Where does the script resist the production?"],
  ["managementPressure", "Management pressure", "What pressure is coming from producers, venue, time, or money?"],
  ["replacementEmergency", "Emergency replacement", "Who can step in, what must be taught first, what can be simplified?"],
  ["badRehearsalDay", "Bad rehearsal day", "What needs repair before the room loses trust?"],
  ["morale", "Loss of morale", "What will restore energy, clarity, and seriousness?"],
  ["sayDontSay", "What to say / not say", "Language that helps, language that will damage the room."],
  ["calmActions", "Calm action suggestions", "The next practical thing to do."]
];

const westSideStoryStarterPack = {
  metaKey: "westSideStoryLibrettoV1",
  dailyDesk: {
    goal: "Keep every rehearsal tied to the central engine: young people trying to belong, then discovering how tribal loyalty destroys love, safety, and possibility.",
    scenes: "Prioritize Prologue/Jet Song, Dance at the Gym, Balcony/Tonight, War Council/Cool, One Hand One Heart, Tonight Quintet/Rumble, I Feel Pretty, Somewhere, Gee Officer Krupke, A Boy Like That/I Have a Love, Taunting Scene, Cellar, and Finale.",
    urgent: "Build safety around fight work, intimacy, racialized language, group violence, Anita's drugstore scene, knives/gun handling, and the final shooting.",
    notes: "Track whether every number has a clear story function, not only musical polish. Keep transitions cinematic and dangerous without losing emotional truth.",
    decisions: "Confirm casting/doubling, dialect and language approach, violence/intimacy protocols, weapon policy, and how realistic versus stylized the street world will be."
  },
  creative: {
    coreConcept: "A city pressure-cooker where belonging feels like survival until love exposes the cost of inherited hatred.",
    visualWorld: "Late-summer West Side streets: brick, fire escapes, alleys, playground edges, drugstore, bridal shop, gym, apartment, cellar, and highway shadows. The world should feel cramped, watchful, rhythmic, and ready to erupt.",
    emotionalTemperature: "Start restless and territorial, open into sudden romance, then tighten into dread. Act II should feel like hope trying to breathe inside a city that keeps closing in.",
    movementLanguage: "Movement must carry social identity: Jets sharp, hungry, street-claiming; Sharks proud, contained, heat under control; Tony and Maria gradually break the vocabulary into tenderness and reach.",
    soundWorld: "Percussive city energy, whistles, sirens, dance rhythms, romantic suspension, and sudden silence after violence. Sound transitions should make the neighborhood feel alive even when the stage is still.",
    references: "New York West Side late 1950s, Romeo and Juliet structure, urban renewal displacement, immigrant family pressure, youth gang territoriality, summer heat, dancehall social ritual.",
    nonNegotiables: "Never let the production become only beautiful choreography. The beauty must sharpen the danger; the danger must never flatten the love story."
  },
  survival: {
    actorConflict: "This story can stir identity, belonging, masculinity, and grief. Keep notes behavioral and specific; separate actor emotion from character aggression.",
    designerConflict: "If design beauty weakens danger or safety, return to the core rule: the audience must feel both seduction and threat in the same space.",
    scriptProblem: "Some language and cultural framing require responsible contextual handling. Decide what is historically placed, what needs dramaturgy, and what must be handled with care in rehearsal.",
    managementPressure: "Fight scenes, intimacy, dance, dialect, and music need time. If time is cut, reduce staging complexity before reducing safety or story clarity.",
    replacementEmergency: "For replacements, teach traffic, safety, music entrances, and emotional spine first. Add style and detail only after they can survive the scene safely.",
    badRehearsalDay: "If the room gets tense, return to exact objectives: who wants territory, who wants escape, who wants dignity, who wants love.",
    morale: "Alternate heavy work with visible wins. End hard rehearsals by naming what became clearer, not only what remains broken.",
    sayDontSay: "Say: 'Let us make the action specific.' Avoid: vague moral judgments about actors or communities. Notes must never shame identity.",
    calmActions: "When confusion rises, stop and map the scene: location, time, danger, objective, obstacle, physical rule, music cue, exit."
  },
  techReadiness: {
    "Set ready": {
      ready: false,
      notes: "Needs playable street levels, brick wall/fire escape logic, drugstore/cellar access, bridal shop, gym, apartment, highway/underpass, and fast shifts that preserve danger."
    },
    "Props ready": {
      ready: false,
      notes: "Track knives, gun, bridal shop items, Doc's drugstore items, stools/crates, Anita's shawl, Maria/Tony personal pieces, and any thrown or grabbed objects."
    },
    "Costumes ready": {
      ready: false,
      notes: "Costumes must support dance, fight, heat, quick movement, group identity, gym formality, bridal shop work, Maria's Act II change, and Anita's drugstore scene."
    },
    "Sound ready": {
      ready: false,
      notes: "Balance lyrics/dialogue with heavy dance and ensemble traffic. Plan sirens, whistles, gunshot, offstage calls, and underscoring transitions."
    },
    "Lights ready": {
      ready: false,
      notes: "Lighting must define street danger, dancehall glamour, balcony intimacy, rumble shadows, dream space in Somewhere, cellar isolation, and final dawn/aftermath."
    },
    "Scene changes ready": {
      ready: false,
      notes: "Major changes include neighborhood to yard, bridal shop, gym, alley, drugstore, rumble/highway, apartment, drugstore/cellar, and finale neighborhood."
    },
    "Safety ready": {
      ready: false,
      notes: "Fight captain/intimacy protocols required for gang violence, knife work, gun handling, lifts/catches, Anita taunting scene, and Tony's death."
    },
    "Emergency plans ready": {
      ready: false,
      notes: "Prepare covers for Tony, Maria, Riff, Bernardo, Anita, Chino, Action, Anybodys, Doc, Schrank/Krupke, and dance-heavy ensemble tracks."
    }
  },
  actors: [
    ["TBD actor - Tony", "Tony", "first", 18],
    ["TBD actor - Maria", "Maria", "first", 18],
    ["TBD actor - Riff", "Riff", "first", 14],
    ["TBD actor - Bernardo", "Bernardo", "first", 14],
    ["TBD actor - Anita", "Anita", "first", 16],
    ["TBD actor - Chino", "Chino", "first", 10],
    ["TBD actor - Doc", "Doc", "first", 8],
    ["TBD actor - Lt. Schrank", "Lt. Schrank", "first", 5],
    ["TBD actor - Officer Krupke", "Officer Krupke", "first", 6],
    ["TBD actor - Anybodys", "Anybodys", "first", 10],
    ["TBD actor - Action", "Action", "first", 12],
    ["TBD actor - A-Rab", "A-Rab", "first", 10],
    ["TBD actor - Baby John", "Baby John", "first", 10],
    ["TBD actor - Diesel", "Diesel", "first", 10],
    ["TBD actor - Snowboy", "Snowboy", "first", 8],
    ["TBD actor - Big Deal", "Big Deal", "first", 8],
    ["TBD actor - Consuelo", "Consuelo", "first", 8],
    ["TBD actor - Rosalia", "Rosalia", "first", 8],
    ["TBD actor - Graziella", "Graziella", "first", 8],
    ["TBD actor - Velma", "Velma", "first", 8],
    ["TBD actor - Jets Ensemble", "Jets Ensemble", "first", 16],
    ["TBD actor - Sharks Ensemble", "Sharks Ensemble", "first", 16]
  ],
  scenes: [
    {
      title: "Act I Prologue - The Neighborhood",
      characters: "Jets, Sharks, Riff, Bernardo, Baby John, A-Rab, Action, Schrank, Krupke",
      status: "Not started",
      purpose: "Establish the territory, the rival codes, the neighborhood pressure, and the physical language of conflict before the audience hears the story explained.",
      needs: "Dance-fight vocabulary, police interruption, gang identity, street map, playable brick wall/alley traffic, safety spacing.",
      problems: "Must be dangerous without becoming chaotic or unreadable. The audience needs to understand the power balance immediately.",
      notes: "Use the extracted synopsis timing: pre-story months condense into the street world."
    },
    {
      title: "Act I - Jet Song",
      characters: "Riff, Jets, Tony referenced",
      status: "Not started",
      purpose: "Define Jet brotherhood, loyalty, bravado, and the pressure placed on Tony to return to the gang.",
      needs: "Ensemble vocal blend, masculine rhythm, group architecture, sharp unison, clear status levels.",
      problems: "Avoid letting gang pride become cartoonish. It should be funny, thrilling, and worrying."
    },
    {
      title: "Act I Scene 2 - A Yard / Something's Coming",
      characters: "Tony, Riff",
      status: "Not started",
      purpose: "Reveal Tony's separation from gang identity and his sense that his life is about to change.",
      needs: "Private space after gang energy, Tony's vocal freedom, transition from pressure to hope.",
      problems: "Tony must not seem passive; he is actively reaching toward a different future."
    },
    {
      title: "Act I Scene 3 - Bridal Shop",
      characters: "Maria, Anita, Bernardo, Chino, bridal shop women",
      status: "Not started",
      purpose: "Introduce Maria's innocence, family pressure, Chino expectation, and Anita's practical warmth.",
      needs: "Costume shop activity, hems/scissors/fabric business, Spanish/English rhythm, clear relationship web.",
      problems: "Maria must be young without being empty; Anita must tease without losing intelligence."
    },
    {
      title: "Act I Scene 4 - Dance at the Gym",
      characters: "Jets, Sharks, Tony, Maria, Riff, Bernardo, Anita, Chino, girls",
      status: "Not started",
      purpose: "Place rival groups in forced social contact and create the first Tony/Maria recognition across tribal lines.",
      needs: "Mambo/social dance rules, Promenade, Meeting Scene, visible faction separation, instant romantic focus.",
      problems: "The room must stay socially legible while the lovers experience a private world."
    },
    {
      title: "Act I - Maria",
      characters: "Tony",
      status: "Not started",
      purpose: "Tony names the transformation after meeting Maria; the city becomes charged by one name.",
      needs: "Clean vocal line, isolated light, post-dance breath, simple staging that does not compete.",
      problems: "Protect sincerity. Irony or overacting will damage the love story."
    },
    {
      title: "Act I Scene 5 - Alley / Balcony Scene",
      characters: "Tony, Maria",
      status: "Not started",
      purpose: "The lovers move from shock to commitment while danger remains just outside the frame.",
      needs: "Fire escape/window logic, intimacy direction, distance-to-touch progression, quiet musical truth.",
      problems: "Needs believable urgency: they barely know each other, but the scene must make that feel inevitable."
    },
    {
      title: "Act I - America",
      characters: "Anita, Rosalia, Shark girls, Bernardo/Sharks depending staging",
      status: "Not started",
      purpose: "Expose competing views of America, migration, gender, desire, and belonging inside the Puerto Rican community.",
      needs: "Rhythmic precision, comedy with bite, cultural dramaturgy, group counterpoint.",
      problems: "Handle stereotypes with intelligence and context. The number must be alive, not decorative."
    },
    {
      title: "Act I Scene 6 - Drugstore / War Council / Cool",
      characters: "Riff, Bernardo, Tony, Jets, Sharks, Doc, girls, Schrank",
      status: "Not started",
      purpose: "Negotiate the rumble terms, show Tony trying to reduce harm, and reveal how fragile adult authority is.",
      needs: "Doc's drugstore geography, cellar access, gang seating/status, Schrank interruption, controlled tension.",
      problems: "The war council must feel like boys imitating diplomacy while moving toward disaster."
    },
    {
      title: "Act I Scene 7 - Bridal Shop / One Hand One Heart",
      characters: "Tony, Maria, Anita nearby",
      status: "Not started",
      purpose: "Tony and Maria create a private marriage ritual against the public conflict around them.",
      needs: "Intimacy protocol, bridal shop symbolism, sacred simplicity, Anita timing.",
      problems: "Do not sentimentalize away the danger; the scene is hopeful because it is impossible."
    },
    {
      title: "Act I - Tonight Quintet",
      characters: "Tony, Maria, Anita, Riff, Bernardo, Jets, Sharks",
      status: "Not started",
      purpose: "Layer incompatible expectations for the same night: love, fight, excitement, revenge, and anticipation.",
      needs: "Precise musical entrances, staging separation, clean narrative stakes for each group.",
      problems: "If one group dominates, the architecture collapses. Every strand needs a specific objective."
    },
    {
      title: "Act I - Rumble under the Highway",
      characters: "Tony, Riff, Bernardo, Chino nearby, Jets, Sharks",
      status: "Not started",
      purpose: "The attempt to stop violence fails; deaths of Riff and Bernardo turn rivalry into irreversible tragedy.",
      needs: "Fight choreography, knife safety, highway shadows, police pressure, Tony's intervention, clear fatal beats.",
      problems: "This scene requires rigorous safety and emotional preparation. No improvisation around weapons."
    },
    {
      title: "Act II Scene 1 - Apartment / I Feel Pretty",
      characters: "Maria, Consuelo, Rosalia, girls, Chino, Tony",
      status: "Not started",
      purpose: "Maria's joy collides with the news of Bernardo's death and Tony's guilt.",
      needs: "Apartment/bedroom layout, comic innocence turning sharply, Chino entrance, Tony window entry.",
      problems: "The tonal shift must be devastating but not abrupt in a sloppy way."
    },
    {
      title: "Act II - Somewhere Ballet / Dream Sequence",
      characters: "Tony, Maria, ensemble dream figures",
      status: "Not started",
      purpose: "Imagine a world beyond gang identity, then let reality fracture that hope.",
      needs: "Dream movement language, scenic transformation, lighting separation, procession/nightmare sequence.",
      problems: "Avoid making the dream vague. It should express exactly what the real world denies them."
    },
    {
      title: "Act II Scene 2 - Back Alley / Gee Officer Krupke",
      characters: "Jets, Action, A-Rab, Baby John, Snowboy, Anybodys, Krupke",
      status: "Not started",
      purpose: "Use satire to show how institutions label, pass, and fail these boys while danger continues outside.",
      needs: "Comic timing, role-switching clarity, police pressure, Anybodys' information about Chino.",
      problems: "Comedy must not erase the recent deaths; it should feel like coping and avoidance."
    },
    {
      title: "Act II Scene 3 - Apartment / A Boy Like That / I Have a Love",
      characters: "Maria, Anita, Schrank, Tony hidden/escaping",
      status: "Not started",
      purpose: "Anita confronts Maria with the cost of loving Tony; Maria answers with absolute emotional commitment.",
      needs: "Locked room tension, Anita's grief, Maria's conviction, Schrank interruption, message to Doc.",
      problems: "Both women must be right from their own wound. Do not stage Anita as merely harsh."
    },
    {
      title: "Act II Scene 4 - Drugstore / Taunting Scene",
      characters: "Anita, Jets, Doc, Action, A-Rab, Baby John, Anybodys",
      status: "Not started",
      purpose: "Anita's attempt to help is destroyed by abuse, creating the false message that sends Tony toward death.",
      needs: "Strong intimacy/staged aggression protocol, boundaries, Doc entrance, Anita's exit, false message.",
      problems: "Highest-care rehearsal. Must be terrifying and consequential without endangering or exploiting the actor."
    },
    {
      title: "Act II Scene 5 - Cellar",
      characters: "Tony, Doc",
      status: "Not started",
      purpose: "Tony receives the false report of Maria's death and abandons self-preservation.",
      needs: "Cellar isolation, Doc's moral fury, Tony's collapse, transition into the street.",
      problems: "The scene should feel like grief detonating, not melodrama."
    },
    {
      title: "Act II Scene 6 - Neighborhood / Finale",
      characters: "Tony, Maria, Chino, Jets, Sharks, Doc, adults",
      status: "Not started",
      purpose: "Tony is killed, Maria indicts the cycle of hatred, and the gangs finally carry the body together.",
      needs: "Gun safety, final traffic, Maria's stillness and explosion, shared carrying image, shawl/body handling.",
      problems: "No sentimental shortcut. The final unity must feel costly, not comforting."
    }
  ],
  notes: [
    ["Scene", "Prologue/Rumble", "Schedule fight captain work before choreography cleanup. Weapon timing and actor spacing are non-negotiable.", "Not given"],
    ["Music", "Tonight Quintet", "Map every group objective before musical staging; the number is dramatic counterpoint, not only ensemble singing.", "Not given"],
    ["Actor", "Tony", "Track the shift from ex-gang member to lover to desperate grieving man; each step needs a visible trigger.", "Not given"],
    ["Actor", "Maria", "Protect her spine: innocence, choice, grief, and final authority. She cannot be played as only fragile.", "Not given"],
    ["Actor", "Anita", "Her warmth, sexuality, grief, anger, and courage all need space. She is not a plot device.", "Not given"],
    ["Tech", "Drugstore taunting scene", "Create a closed rehearsal protocol: consent boundaries, exact choreography, stop word, no surprise contact.", "Not given"],
    ["Choreo", "Dance at the Gym", "Build social rules first: who watches, who challenges, who owns space, who crosses the line.", "Not given"]
  ],
  problems: [
    ["Weapon and fight safety", "Tech Crew and Safety", "critical", "Fight captain / Stage manager", "Knives and gun must be rehearsed with strict protocol before run-throughs."],
    ["Cultural and language care", "Script, Lyrics, Cuts, Dramaturgy", "critical", "Director / Dramaturg", "Prepare context notes and room agreements for ethnicity, migration, slurs, dialect, and stereotypes."],
    ["Dance stamina and injury risk", "Choreography and Physical Storytelling", "high", "Choreographer", "Track warmups, footwear, flooring, lifts, and recovery across dance-heavy ensemble calls."],
    ["Anita drugstore scene safety", "Acting and Discipline", "critical", "Director / Intimacy lead", "Stage exact behavior and emotional boundaries; no actor should be surprised by contact or language."],
    ["Tone whiplash in Act II", "Concept and Audience", "high", "Director", "Plan transitions from comedy to grief so the audience does not lose the tragedy's pressure."],
    ["Under-rehearsed ensemble traffic", "Set and Props", "high", "Stage manager", "Create traffic maps for neighborhood, gym, drugstore, rumble, and finale carrying sequence."]
  ],
  decisions: [
    ["Use a stylized-realistic street world: emotionally truthful, physically heightened.", "Director", "Design, choreography, lighting, acting", "2026-06-12"],
    ["Treat all violence, intimacy, and taunting as choreographed safety events.", "Director / Stage management", "Actors, fight, intimacy, tech", "2026-06-12"],
    ["Use role slots with TBD actor names until real performers are entered.", "Production", "Casting and rehearsal counting", "2026-06-12"],
    ["Keep red alerts only for safety, clashes, critical problems, and under-rehearsed actors.", "Production", "App use and production management", "2026-06-12"]
  ],
  runMaintenance: [
    ["Brush-up need", "Prologue, Dance at the Gym, Rumble, and Finale should receive weekly spacing/safety brush-ups.", "2026-06-12"],
    ["Vocal health", "Monitor Tony, Maria, Anita, Riff, Bernardo, and ensemble after heavy dance-and-sing days.", "2026-06-12"],
    ["Timing drift", "Watch comic pacing in Krupke and emotional pacing in Act II so neither stretches out of proportion.", "2026-06-12"],
    ["Prop/costume wear", "Inspect weapons, shoes, Maria/Anita costume pieces, shawl, and dance garments after each performance week.", "2026-06-12"]
  ]
};

const westSideStorySaveTheCatUpgrade = {
  metaKey: "westSideStorySaveTheCatV1",
  beats: [
    {
      beat: "Opening Image",
      turningPoint: "The neighborhood belongs to rival youth groups before any spoken explanation can soften it.",
      scriptMoment: "Act I Prologue - the Jets and Sharks claim, test, and violate street territory until police authority interrupts.",
      whyItMatters: "This is the production's first contract with the audience: the story is physical, tribal, rhythmic, and already unsafe. The opening image must show a city where belonging has become territorial combat.",
      directingFocus: "Stage the first minutes as readable social geography. Every shove, entrance, and retreat should tell us who owns space, who is losing it, and why the street itself is the prize."
    },
    {
      beat: "Theme Stated",
      turningPoint: "The musical asks whether loyalty to a group can survive love, and whether love can survive inherited hatred.",
      scriptMoment: "Early gang scenes and Tony's separation from the Jets make the central question visible before Tony meets Maria.",
      whyItMatters: "The theme is not abstract; it is a rehearsal rule. Every scene should test belonging versus freedom, group identity versus individual choice, revenge versus love.",
      directingFocus: "Ask actors to locate the sentence underneath each scene: 'Who am I loyal to right now, and what will that loyalty cost?'"
    },
    {
      beat: "Set-Up",
      turningPoint: "The audience learns the rules of the Jets, the Sharks, police pressure, Doc's adult concern, and Tony's distance from gang life.",
      scriptMoment: "Prologue, Jet Song, Tony/Riff yard scene, and Bridal Shop establish the social worlds before the gym.",
      whyItMatters: "The set-up must make the later tragedy feel inevitable but not predetermined. We need to understand every pressure system before love enters it.",
      directingFocus: "Keep the factions specific. Jets, Sharks, adults, women, and lovers must each have a different rhythm, status code, and survival strategy."
    },
    {
      beat: "Catalyst",
      turningPoint: "Tony and Maria see each other at the gym and the story changes direction instantly.",
      scriptMoment: "Dance at the Gym / Meeting Scene.",
      whyItMatters: "This is the inciting incident. Before it, the story is gang conflict; after it, the conflict becomes personal, romantic, and impossible to contain.",
      directingFocus: "Make the room fall away without stopping the room. The audience must believe that one glance interrupts an entire social machine."
    },
    {
      beat: "Debate",
      turningPoint: "The lovers test whether this impossible connection can become real while the gangs move toward the war council.",
      scriptMoment: "Maria, Balcony Scene, America, and the lead-in to the drugstore.",
      whyItMatters: "The question is: can they cross the line and still survive the world that drew it? The debate should feel urgent, not leisurely.",
      directingFocus: "Keep Tony and Maria's hope active against practical obstacles: family, gang identity, ethnicity, time, and physical separation."
    },
    {
      beat: "Break into Two",
      turningPoint: "Tony and Maria choose love as an action, not a feeling, and the plot moves into a new world of secret commitment.",
      scriptMoment: "Balcony/Tonight and the decision that Tony must try to stop the rumble.",
      whyItMatters: "The story crosses from attraction into consequence. Tony now acts because of Maria; Maria now risks obedience and family expectation because of Tony.",
      directingFocus: "Treat the balcony as a vow of direction: after this, every private choice has public consequences."
    },
    {
      beat: "B Story",
      turningPoint: "The love story becomes the emotional argument against the gang story.",
      scriptMoment: "Tony/Maria scenes, especially Balcony and One Hand One Heart; Anita/Maria later becomes the mature counterpoint.",
      whyItMatters: "The B story is not a side romance. It is the moral center that exposes the poverty of revenge and group hatred.",
      directingFocus: "Keep the lovers specific and brave. They should not float above the world; they should make choices while the world presses in."
    },
    {
      beat: "Fun and Games",
      turningPoint: "The musical delivers its promise: rival dances, romance, satire, gang ritual, and combustible theatrical energy.",
      scriptMoment: "Dance at the Gym, America, Cool, One Hand One Heart, and Tonight Quintet.",
      whyItMatters: "This is where the production's identity blooms. The audience should experience why the show is thrilling before the consequences fully land.",
      directingFocus: "Make style reveal story. Dance is politics, comedy is defense, romance is rebellion, and rhythm is pressure."
    },
    {
      beat: "Midpoint",
      turningPoint: "The rumble turns the story from dangerous possibility into irreversible tragedy.",
      scriptMoment: "Rumble under the Highway: Riff and Bernardo die after Tony's intervention fails.",
      whyItMatters: "This is the false victory/false defeat pivot. The lovers hoped to redirect violence; instead, Tony becomes tied to the violence he tried to stop.",
      directingFocus: "The midpoint must be exact. Fight choreography, lighting, sound, and actor psychology must make clear that one instant changes every relationship."
    },
    {
      beat: "Bad Guys Close In",
      turningPoint: "Grief, revenge, police pressure, Chino's pursuit, and group panic close around Tony and Maria.",
      scriptMoment: "Act II Apartment, Chino's news, Tony's return to Maria, Somewhere, and the Jets' search/protection activity.",
      whyItMatters: "The enemies are now external and internal: guilt, grief, prejudice, institutions, and the narrowing geography of the city.",
      directingFocus: "Let hope keep trying to appear. The tighter the danger becomes, the more precious each moment of tenderness feels."
    },
    {
      beat: "All Is Lost",
      turningPoint: "The attempted rescue message is destroyed; Anita is abused and sends the false message that Maria is dead.",
      scriptMoment: "Drugstore Taunting Scene and Anita's exit.",
      whyItMatters: "This is the emotional trapdoor. The last bridge between Maria and Tony is broken by the same hatred the story has been condemning.",
      directingFocus: "Handle this scene with maximum care and clarity. The audience must see exactly how cruelty creates the final catastrophe."
    },
    {
      beat: "Dark Night of the Soul",
      turningPoint: "Tony receives the false news and loses the will to live without Maria.",
      scriptMoment: "Cellar scene with Doc, leading Tony into the street calling for Chino.",
      whyItMatters: "The hero cannot imagine a future. Love, which gave him direction, seems erased; he walks toward death because the story's hope appears gone.",
      directingFocus: "Avoid melodrama. Play shock, disbelief, collapse, then fatal action. Doc's moral grief should anchor the scene."
    },
    {
      beat: "Break into Three",
      turningPoint: "Maria appears alive, creating one last possibility of escape before violence interrupts it.",
      scriptMoment: "Final neighborhood scene: Tony and Maria see each other and reach for a future.",
      whyItMatters: "The final act solution briefly appears: love could still choose escape over tribal death. That makes the gunshot more devastating.",
      directingFocus: "Let the audience breathe for one second. The hope must be real, not fake, or the ending loses force."
    },
    {
      beat: "Finale",
      turningPoint: "Tony dies, Maria confronts both gangs with the cost of hatred, and the body is carried by members of both sides.",
      scriptMoment: "Finale after Chino shoots Tony.",
      whyItMatters: "The story resolves through recognition, not triumph. The survivors finally see what their conflict has made, but too late to save Tony.",
      directingFocus: "Center Maria's authority. The final image should not comfort too quickly; shared carrying must feel like the first painful act of responsibility."
    },
    {
      beat: "Final Image",
      turningPoint: "The street is no longer the same territory from the opening; it has become a place of shared grief.",
      scriptMoment: "The final carrying away and Maria's last movement with the shawl/body image.",
      whyItMatters: "The closing image answers the opening image. The groups began by fighting over space; they end by having to carry the human cost through that space.",
      directingFocus: "Echo the opening geography but transform it. Stillness, distance, and who helps carry Tony should tell the audience what has changed."
    }
  ]
};

const defaultState = {
  checklist: {},
  events: [],
  actors: [],
  survivalNotes: "",
  dailyDesk: {
    date: new Date().toISOString().slice(0, 10),
    goal: "",
    scenes: "",
    urgent: "",
    notes: "",
    decisions: ""
  },
  scenes: [],
  notes: [],
  problems: [],
  creative: {},
  techReadiness: {},
  decisions: [],
  runMaintenance: [],
  storyBeats: [],
  survival: {},
  meta: {}
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
  if (!raw) return applyUpgrade2StoryBeats(applyWestSideStoryStarter(structuredClone(defaultState)));
  try {
    return applyUpgrade2StoryBeats(applyWestSideStoryStarter({ ...structuredClone(defaultState), ...JSON.parse(raw) }));
  } catch {
    return applyUpgrade2StoryBeats(applyWestSideStoryStarter(structuredClone(defaultState)));
  }
}

function applyWestSideStoryStarter(currentState) {
  if (currentState.meta?.[westSideStoryStarterPack.metaKey]) return currentState;

  const nextState = { ...currentState, meta: { ...(currentState.meta || {}) } };
  nextState.dailyDesk = {
    ...structuredClone(defaultState.dailyDesk),
    ...mergeTextDefaults(westSideStoryStarterPack.dailyDesk, currentState.dailyDesk || {})
  };
  nextState.creative = mergeTextDefaults(westSideStoryStarterPack.creative, currentState.creative || {});
  nextState.survival = mergeTextDefaults(westSideStoryStarterPack.survival, currentState.survival || {});
  nextState.techReadiness = { ...westSideStoryStarterPack.techReadiness, ...(currentState.techReadiness || {}) };

  const existingRoles = new Set((currentState.actors || []).map((actor) => actor.role));
  const starterActors = westSideStoryStarterPack.actors
    .filter(([, role]) => !existingRoles.has(role))
    .map(([name, role, tier, targetDays]) => ({
      id: crypto.randomUUID(),
      name,
      role,
      tier,
      targetDays,
      rehearsalCount: 0
    }));
  nextState.actors = [...(currentState.actors || []), ...starterActors];

  nextState.scenes = [...(currentState.scenes || []), ...westSideStoryStarterPack.scenes.map((scene) => ({
    id: crypto.randomUUID(),
    readyForTech: false,
    ...scene
  }))];
  nextState.notes = [...(currentState.notes || []), ...westSideStoryStarterPack.notes.map(([type, target, text, status]) => ({
    id: crypto.randomUUID(),
    type,
    target,
    text,
    status,
    created: new Date().toISOString().slice(0, 10)
  }))];
  nextState.problems = [...(currentState.problems || []), ...westSideStoryStarterPack.problems.map(([title, department, severity, owner, solution]) => ({
    id: crypto.randomUUID(),
    title,
    department,
    severity,
    owner,
    deadline: "",
    solution,
    status: "Open"
  }))];
  nextState.decisions = [...(currentState.decisions || []), ...westSideStoryStarterPack.decisions.map(([decision, approvedBy, affects, date]) => ({
    id: crypto.randomUUID(),
    decision,
    approvedBy,
    affects,
    date
  }))];
  nextState.runMaintenance = [...(currentState.runMaintenance || []), ...westSideStoryStarterPack.runMaintenance.map(([type, note, date]) => ({
    id: crypto.randomUUID(),
    date,
    type,
    note
  }))];
  nextState.meta[westSideStoryStarterPack.metaKey] = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  return nextState;
}

function applyUpgrade2StoryBeats(currentState) {
  if (currentState.meta?.[westSideStorySaveTheCatUpgrade.metaKey]) return currentState;
  const existingBeats = new Set((currentState.storyBeats || []).map((beat) => beat.beat));
  const starterBeats = westSideStorySaveTheCatUpgrade.beats
    .filter((beat) => !existingBeats.has(beat.beat))
    .map((beat) => ({ id: crypto.randomUUID(), checked: false, rehearsalNote: "", ...beat }));
  const nextState = {
    ...currentState,
    storyBeats: [...(currentState.storyBeats || []), ...starterBeats],
    meta: { ...(currentState.meta || {}), [westSideStorySaveTheCatUpgrade.metaKey]: true }
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  return nextState;
}

function mergeTextDefaults(defaults, current) {
  const merged = { ...defaults, ...current };
  Object.entries(defaults).forEach(([key, value]) => {
    if (!String(current[key] || "").trim()) merged[key] = value;
  });
  return merged;
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

  state.problems
    .filter((problem) => problem.status !== "Solved" && problem.severity === "critical")
    .forEach((problem) => {
      alerts.push({
        title: `Critical problem: ${problem.title}`,
        body: `${problem.department}${problem.owner ? ` · owner: ${problem.owner}` : ""}`
      });
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

function setupDailyDesk() {
  const fields = {
    dailyDate: "date",
    dailyGoal: "goal",
    dailyScenes: "scenes",
    dailyUrgent: "urgent",
    dailyNotes: "notes",
    dailyDecisions: "decisions"
  };
  Object.entries(fields).forEach(([id, key]) => {
    const field = $(`#${id}`);
    field.addEventListener("input", (event) => {
      state.dailyDesk[key] = event.currentTarget.value;
      saveState();
    });
  });
}

function setupForms() {
  const departmentOptions = departments.map((dept) => `<option value="${dept}">${dept}</option>`).join("");
  $("#departmentFilter").innerHTML = `<option value="">All departments</option>${departmentOptions}`;
  $("#scheduleForm select[name='department']").innerHTML = departmentOptions;
  $("#problemForm select[name='department']").innerHTML = departmentOptions;

  $("#checklistSearch").addEventListener("input", renderChecklist);
  $("#departmentFilter").addEventListener("change", renderChecklist);
  setupDailyDesk();

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
      targetDays: Number(data.targetDays || 0),
      rehearsalCount: 0
    });
    event.currentTarget.reset();
    $("#actorForm input[name='targetDays']").value = "8";
    saveState();
  });

  $("#sceneForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    state.scenes.push({
      id: crypto.randomUUID(),
      title: data.title.trim(),
      characters: data.characters.trim(),
      status: data.status,
      purpose: data.purpose.trim(),
      needs: "",
      problems: "",
      notes: "",
      readyForTech: data.status === "Ready for tech"
    });
    event.currentTarget.reset();
    saveState();
  });

  $("#noteForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    state.notes.push({
      id: crypto.randomUUID(),
      type: data.type,
      target: data.target.trim(),
      text: data.text.trim(),
      status: data.status,
      created: new Date().toISOString().slice(0, 10)
    });
    event.currentTarget.reset();
    saveState();
  });

  $("#problemForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    state.problems.push({
      id: crypto.randomUUID(),
      title: data.title.trim(),
      department: data.department,
      severity: data.severity,
      owner: data.owner.trim(),
      deadline: data.deadline,
      solution: data.solution.trim(),
      status: "Open"
    });
    event.currentTarget.reset();
    saveState();
  });

  $("#decisionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    state.decisions.push({
      id: crypto.randomUUID(),
      decision: data.decision.trim(),
      approvedBy: data.approvedBy.trim(),
      affects: data.affects.trim(),
      date: data.date || new Date().toISOString().slice(0, 10)
    });
    event.currentTarget.reset();
    saveState();
  });

  $("#runForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    state.runMaintenance.push({
      id: crypto.randomUUID(),
      date: data.date || new Date().toISOString().slice(0, 10),
      type: data.type,
      note: data.note.trim()
    });
    event.currentTarget.reset();
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
      const counted = Number(actor.rehearsalCount || 0);
      const card = document.createElement("article");
      card.className = `actor-card ${worked < target ? "under-target" : ""}`;
      card.innerHTML = `
        <button class="actor-count-button" type="button">${escapeHtml(actor.name)} <span>${counted}</span></button>
        <div class="actor-meta">${escapeHtml(actor.role)}</div>
        <div class="progress-track"><div class="progress-bar" style="width:${pct}%"></div></div>
        <div class="actor-meta">${worked}/${target} scheduled work days · ${counted} rehearsals counted</div>
        <button class="ghost-light-button decrement-button" type="button">Undo count</button>
        <button class="remove-button" type="button">Remove</button>
      `;
      $(".actor-count-button", card).addEventListener("click", () => {
        actor.rehearsalCount = Number(actor.rehearsalCount || 0) + 1;
        saveState();
      });
      $(".decrement-button", card).addEventListener("click", () => {
        actor.rehearsalCount = Math.max(0, Number(actor.rehearsalCount || 0) - 1);
        saveState();
      });
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

function renderDailyDesk() {
  $("#dailyDate").value = state.dailyDesk.date || new Date().toISOString().slice(0, 10);
  $("#dailyGoal").value = state.dailyDesk.goal || "";
  $("#dailyScenes").value = state.dailyDesk.scenes || "";
  $("#dailyUrgent").value = state.dailyDesk.urgent || "";
  $("#dailyNotes").value = state.dailyDesk.notes || "";
  $("#dailyDecisions").value = state.dailyDesk.decisions || "";

  const today = state.dailyDesk.date;
  const root = $("#todayCalls");
  root.innerHTML = "";
  state.events
    .filter((event) => today && event.start <= today && today <= event.end)
    .forEach((event) => {
      const item = document.createElement("div");
      item.className = "deadline-item";
      item.innerHTML = `<strong>${escapeHtml(event.title)}</strong><span>${escapeHtml(event.department)}</span><div>${event.start} to ${event.end}</div>`;
      root.append(item);
    });
  if (!root.children.length) root.append(emptyNode());
}

function renderScenes() {
  const root = $("#sceneList");
  root.innerHTML = "";
  state.scenes.forEach((scene) => {
    const card = document.createElement("article");
    card.className = `work-card ${scene.readyForTech ? "ready-card" : ""}`;
    card.innerHTML = `
      <div class="card-topline">
        <h3>${escapeHtml(scene.title)}</h3>
        <span>${escapeHtml(scene.status)}</span>
      </div>
      <div class="actor-meta">${escapeHtml(scene.characters || "No characters listed")}</div>
      <p>${escapeHtml(scene.purpose || "No dramatic purpose yet.")}</p>
      <label>Department needs <textarea data-field="needs">${escapeHtml(scene.needs || "")}</textarea></label>
      <label>Problems <textarea data-field="problems">${escapeHtml(scene.problems || "")}</textarea></label>
      <label>Director notes <textarea data-field="notes">${escapeHtml(scene.notes || "")}</textarea></label>
      <label class="inline-check"><input type="checkbox" ${scene.readyForTech ? "checked" : ""} /> Ready for tech</label>
      <button class="remove-button" type="button">Remove</button>
    `;
    $$("[data-field]", card).forEach((field) => {
      field.addEventListener("input", (event) => {
        scene[event.currentTarget.dataset.field] = event.currentTarget.value;
        saveState();
      });
    });
    $("input[type='checkbox']", card).addEventListener("change", (event) => {
      scene.readyForTech = event.currentTarget.checked;
      scene.status = event.currentTarget.checked ? "Ready for tech" : scene.status === "Ready for tech" ? "Polishing" : scene.status;
      saveState();
    });
    $(".remove-button", card).addEventListener("click", () => removeById("scenes", scene.id));
    root.append(card);
  });
  if (!root.children.length) root.append(emptyNode());
}

function renderStoryBeats() {
  const root = $("#beatList");
  root.innerHTML = "";
  state.storyBeats.forEach((beat, index) => {
    const card = document.createElement("article");
    card.className = `beat-card ${beat.checked ? "ready-card" : ""}`;
    card.innerHTML = `
      <div class="beat-number">${index + 1}</div>
      <div class="beat-content">
        <div class="card-topline">
          <h3>${escapeHtml(beat.beat)}</h3>
          <label class="inline-check"><input type="checkbox" ${beat.checked ? "checked" : ""} /> Clear turning point</label>
        </div>
        <strong>${escapeHtml(beat.turningPoint)}</strong>
        <p><b>Script moment:</b> ${escapeHtml(beat.scriptMoment)}</p>
        <p><b>Why it matters:</b> ${escapeHtml(beat.whyItMatters)}</p>
        <p><b>Directing focus:</b> ${escapeHtml(beat.directingFocus)}</p>
        <label>Rehearsal note <textarea data-field="rehearsalNote" placeholder="What must be clarified in rehearsal?">${escapeHtml(beat.rehearsalNote || "")}</textarea></label>
      </div>
    `;
    $("input[type='checkbox']", card).addEventListener("change", (event) => {
      beat.checked = event.currentTarget.checked;
      saveState();
    });
    $("textarea", card).addEventListener("input", (event) => {
      beat.rehearsalNote = event.currentTarget.value;
      saveState();
    });
    root.append(card);
  });
  if (!root.children.length) root.append(emptyNode());
}

function renderNotes() {
  const root = $("#noteList");
  root.innerHTML = "";
  state.notes.forEach((note) => {
    const card = document.createElement("article");
    card.className = "work-card";
    card.innerHTML = `
      <div class="card-topline">
        <h3>${escapeHtml(note.type)} note</h3>
        <span>${escapeHtml(note.status)}</span>
      </div>
      <div class="actor-meta">${escapeHtml(note.target || "No target")} · ${escapeHtml(note.created || "")}</div>
      <p>${escapeHtml(note.text)}</p>
      <div class="card-actions">
        <button class="ghost-light-button" data-status="Given" type="button">Mark given</button>
        <button class="ghost-light-button" data-status="Watching" type="button">Watching</button>
        <button class="remove-button" type="button">Remove</button>
      </div>
    `;
    $$("[data-status]", card).forEach((button) => {
      button.addEventListener("click", () => {
        note.status = button.dataset.status;
        saveState();
      });
    });
    $(".remove-button", card).addEventListener("click", () => removeById("notes", note.id));
    root.append(card);
  });
  if (!root.children.length) root.append(emptyNode());
}

function renderProblems() {
  const root = $("#problemList");
  root.innerHTML = "";
  state.problems.forEach((problem) => {
    const card = document.createElement("article");
    card.className = `work-card ${problem.severity === "critical" && problem.status !== "Solved" ? "problem-critical" : ""}`;
    card.innerHTML = `
      <div class="card-topline">
        <h3>${escapeHtml(problem.title)}</h3>
        <span class="importance ${problem.severity}">${escapeHtml(problem.severity)}</span>
      </div>
      <div class="actor-meta">${escapeHtml(problem.department)} · ${escapeHtml(problem.owner || "No owner")} · ${escapeHtml(problem.deadline || "No deadline")}</div>
      <p>${escapeHtml(problem.solution || "No suggested solution yet.")}</p>
      <div class="card-actions">
        <button class="ghost-light-button" data-status="Open" type="button">Open</button>
        <button class="ghost-light-button" data-status="Watching" type="button">Watching</button>
        <button class="ghost-light-button" data-status="Solved" type="button">Solved</button>
        <button class="remove-button" type="button">Remove</button>
      </div>
    `;
    $$("[data-status]", card).forEach((button) => {
      button.addEventListener("click", () => {
        problem.status = button.dataset.status;
        saveState();
      });
    });
    $(".remove-button", card).addEventListener("click", () => removeById("problems", problem.id));
    root.append(card);
  });
  if (!root.children.length) root.append(emptyNode());
}

function renderCreative() {
  const root = $("#creativeFields");
  root.innerHTML = "";
  creativePrompts.forEach(([key, title, placeholder]) => {
    const card = document.createElement("article");
    card.className = "panel";
    card.innerHTML = `<h3>${title}</h3><textarea placeholder="${escapeAttribute(placeholder)}">${escapeHtml(state.creative[key] || "")}</textarea>`;
    $("textarea", card).addEventListener("input", (event) => {
      state.creative[key] = event.currentTarget.value;
      saveState();
    });
    root.append(card);
  });
}

function renderTechReadiness() {
  const root = $("#techList");
  root.innerHTML = "";
  techReadinessItems.forEach((item) => {
    const saved = state.techReadiness[item] || {};
    const card = document.createElement("article");
    card.className = `readiness-card ${saved.ready ? "ready-card" : ""}`;
    card.innerHTML = `
      <label class="inline-check"><input type="checkbox" ${saved.ready ? "checked" : ""} /> ${escapeHtml(item)}</label>
      <textarea placeholder="Notes, missing pieces, owner, deadline">${escapeHtml(saved.notes || "")}</textarea>
    `;
    $("input", card).addEventListener("change", (event) => {
      state.techReadiness[item] = { ...saved, ready: event.currentTarget.checked };
      saveState();
    });
    $("textarea", card).addEventListener("input", (event) => {
      state.techReadiness[item] = { ...(state.techReadiness[item] || {}), notes: event.currentTarget.value };
      saveState();
    });
    root.append(card);
  });
}

function renderDecisions() {
  const root = $("#decisionList");
  root.innerHTML = "";
  state.decisions
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .forEach((decision) => {
      const card = document.createElement("article");
      card.className = "work-card";
      card.innerHTML = `
        <div class="card-topline">
          <h3>${escapeHtml(decision.decision)}</h3>
          <span>${escapeHtml(decision.date || "")}</span>
        </div>
        <div class="actor-meta">Approved by ${escapeHtml(decision.approvedBy || "not named")} · affects ${escapeHtml(decision.affects || "not listed")}</div>
        <button class="remove-button" type="button">Remove</button>
      `;
      $(".remove-button", card).addEventListener("click", () => removeById("decisions", decision.id));
      root.append(card);
    });
  if (!root.children.length) root.append(emptyNode());
}

function renderRunMaintenance() {
  const root = $("#runList");
  root.innerHTML = "";
  state.runMaintenance
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .forEach((item) => {
      const card = document.createElement("article");
      card.className = "work-card";
      card.innerHTML = `
        <div class="card-topline">
          <h3>${escapeHtml(item.type)}</h3>
          <span>${escapeHtml(item.date)}</span>
        </div>
        <p>${escapeHtml(item.note)}</p>
        <button class="remove-button" type="button">Remove</button>
      `;
      $(".remove-button", card).addEventListener("click", () => removeById("runMaintenance", item.id));
      root.append(card);
    });
  if (!root.children.length) root.append(emptyNode());
}

function renderSurvivalFields() {
  const root = $("#survivalFields");
  root.innerHTML = "";
  survivalPrompts.forEach(([key, title, placeholder]) => {
    const card = document.createElement("article");
    card.className = "panel";
    card.innerHTML = `<h3>${title}</h3><textarea placeholder="${escapeAttribute(placeholder)}">${escapeHtml(state.survival[key] || "")}</textarea>`;
    $("textarea", card).addEventListener("input", (event) => {
      state.survival[key] = event.currentTarget.value;
      saveState();
    });
    root.append(card);
  });
}

function removeById(collection, id) {
  state[collection] = state[collection].filter((item) => item.id !== id);
  saveState();
}

function renderOverview() {
  const totalQuestions = checklistSource.reduce((sum, section) => sum + section.questions.length, 0);
  const completed = Object.values(state.checklist).filter((item) => item.done).length;
  const completion = totalQuestions ? Math.round((completed / totalQuestions) * 100) : 0;
  const alerts = getAlerts();

  $("#completionMetric").textContent = `${completion}%`;
  $("#eventMetric").textContent = state.events.length;
  $("#castMetric").textContent = state.actors.length;
  $("#departmentMetric").textContent = state.scenes.length + state.problems.length + state.notes.length + state.storyBeats.length;

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
  renderDailyDesk();
  renderChecklist();
  renderScenes();
  renderStoryBeats();
  renderNotes();
  renderProblems();
  renderCreative();
  renderSchedule();
  renderCasts();
  renderTechReadiness();
  renderDecisions();
  renderRunMaintenance();
  renderSurvivalFields();
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
