/**
 * Sample operational seed data for the /admin Control Deck.
 * Structured to mirror planned Convex tables (`quoteRequests`, `projects`, `sampleScopes`).
 */

export const QUOTE_STATUSES = ['New', 'Site Walk', 'Estimate Sent', 'Booked']

export const INITIAL_QUOTES = [
  {
    id: 'QT-104',
    homeowner: 'Sample Lead — M. Carter',
    neighborhood: 'Virginia-Highland',
    trade: 'Kitchen',
    contact: '404-555-0142',
    status: 'New',
    submittedAt: 'Today, 2:15 PM',
    notes: 'Remove wall between kitchen and dining room, add 9ft island and pantry cabinets.',
  },
  {
    id: 'QT-103',
    homeowner: 'Sample Lead — D. Alvarez',
    neighborhood: 'Decatur',
    trade: 'Bath',
    contact: 'd.alvarez@example.com',
    status: 'Site Walk',
    submittedAt: 'Yesterday',
    notes: 'Primary bath curbless shower conversion + double vanity relocation.',
  },
  {
    id: 'QT-102',
    homeowner: 'Sample Lead — R. Patel',
    neighborhood: 'Kirkwood',
    trade: 'Addition',
    contact: '404-555-0198',
    status: 'Estimate Sent',
    submittedAt: '3 days ago',
    notes: 'Rear 480 sq ft family room + mudroom bump-out off back deck.',
  },
  {
    id: 'QT-101',
    homeowner: 'Sample Lead — K. Jenkins',
    neighborhood: 'Morningside',
    trade: 'Renovation',
    contact: 'k.jenkins@example.com',
    status: 'Booked',
    submittedAt: 'Last week',
    notes: 'Main-level hardwood refinish, trim package, and basement guest suite build-out.',
  },
]

export const INITIAL_PROJECTS = [
  {
    id: 'JOB-019',
    title: 'Sample Job — Inman Park Kitchen Opening',
    neighborhood: 'Inman Park',
    trade: 'Kitchen',
    phase: 'Rough-In',
    progress: 55,
    nextMilestone: 'Electrical & plumbing rough inspection — Thu',
  },
  {
    id: 'JOB-018',
    title: 'Sample Job — Grant Park Primary Wet-Room',
    neighborhood: 'Grant Park',
    trade: 'Bath',
    phase: 'Tile & Finish',
    progress: 78,
    nextMilestone: 'Frameless glass template measure — Fri',
  },
  {
    id: 'JOB-017',
    title: 'Sample Job — Candler Park Rear Addition',
    neighborhood: 'Candler Park',
    trade: 'Addition',
    phase: 'Framing',
    progress: 34,
    nextMilestone: 'Roofline tie-in & sheathing dry-in — Mon',
  },
]
