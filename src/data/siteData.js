export const CONTACT = {
  phoneDisplay: '205-863-7564',
  phoneHref: 'tel:+12058637564',
  email: 'fields@sitegoons.com',
  emailHref: 'mailto:fields@sitegoons.com',
  area: 'Atlanta Metro, GA',
}

export const PROJECT_TYPES = [
  { id: 'Kitchen', label: 'Kitchen' },
  { id: 'Bath', label: 'Bath' },
  { id: 'Addition', label: 'Addition' },
  { id: 'Renovation', label: 'Renovation' },
]

export const SERVICES = [
  {
    code: '01',
    id: 'Kitchen',
    title: 'Kitchens',
    ctaLabel: 'Quote a Kitchen',
    summary:
      'Layout openings, custom cabinetry, stone countertops, lighting, and durable flooring built for daily Atlanta family life.',
    trades: ['Load-bearing wall removal', 'Cabinetry & islands', 'Plumbing, gas & electrical'],
    typicalWindow: 'Typical build: 6–10 wks (illustrative)',
  },
  {
    code: '02',
    id: 'Bath',
    title: 'Bathrooms',
    ctaLabel: 'Quote a Bath',
    summary:
      'Watertight tile showers, wet rooms, double vanities, and crisp ventilation — built from the studs out with zero shortcuts.',
    trades: ['Waterproofing & tile', 'Custom vanities & glass', 'Heated floors & fixtures'],
    typicalWindow: 'Typical build: 4–6 wks (illustrative)',
  },
  {
    code: '03',
    id: 'Addition',
    title: 'Home Additions',
    ctaLabel: 'Quote an Addition',
    summary:
      'Primary suites, rear family rooms, mudrooms, and sunrooms framed and tied into your existing roofline cleanly.',
    trades: ['Footings & framing', 'Roofline tie-in & siding', 'Full MEP rough-in & finish'],
    typicalWindow: 'Typical build: 12–20 wks (illustrative)',
  },
  {
    code: '04',
    id: 'Renovation',
    title: 'Custom Renovations',
    ctaLabel: 'Quote a Renovation',
    summary:
      'Whole-home refreshes, basement build-outs, structural reconfigurations, and millwork upgrades tailored to older Atlanta homes.',
    trades: ['Structural beam work', 'Trim, doors & hardwoods', 'Paint & finish carpentry'],
    typicalWindow: 'Typical build: 8–16 wks (illustrative)',
  },
]

export const SAMPLE_PROJECTS = [
  {
    id: 'sample-vh-kitchen',
    badge: 'SAMPLE SCOPE · ILLUSTRATIVE',
    neighborhood: 'Virginia-Highland, Atlanta',
    title: '1930s Bungalow Kitchen & Pantry Opening',
    trade: 'Kitchen',
    area: '340 SQ FT',
    duration: '8 WKS EST.',
    summary:
      'Example scope showing how we open a closed-off intown kitchen into the dining room with a flush structural beam, white-oak island, honed counters, and walk-in scullery.',
    deliverables: [
      'Flush LVL header beam to remove dividing wall',
      'Full electrical panel upgrade + under-cabinet circuits',
      'Inset perimeter cabinetry with custom range hood',
      'Refinished red-oak flooring feathered into dining room',
    ],
  },
  {
    id: 'sample-decatur-bath',
    badge: 'SAMPLE SCOPE · ILLUSTRATIVE',
    neighborhood: 'Decatur, GA',
    title: 'Primary Bath Wet-Room & Double Vanity',
    trade: 'Bath',
    area: '145 SQ FT',
    duration: '5 WKS EST.',
    summary:
      'Example scope converting a cramped 1980s primary bath into a curbless tiled wet-room with freestanding tub, recessed niches, and custom rift-cut vanity.',
    deliverables: [
      'Subfloor framing drop for true curbless shower pan',
      'Continuous sheet waterproofing membrane & zellige tile',
      'Relocated supply/drain lines + dedicated exhaust fan',
    ],
  },
  {
    id: 'sample-kirkwood-addition',
    badge: 'SAMPLE SCOPE · ILLUSTRATIVE',
    neighborhood: 'Kirkwood, Atlanta',
    title: 'Rear Family Room & Mudroom Addition',
    trade: 'Addition',
    area: '520 SQ FT',
    duration: '14 WKS EST.',
    summary:
      'Example scope adding a bright vaulted rear living room, built-in mudroom lockers, and covered back porch matched to the home’s original siding and trim.',
    deliverables: [
      'Poured crawlspace foundation & engineered floor joists',
      'Matched gable roofline, Hardie siding & aluminum-clad windows',
      'Integrated HVAC zone, recessed lighting & custom bench millwork',
    ],
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Site Walk & Measure',
    detail:
      'We walk your Atlanta home in person, take real measurements, talk through priorities, and spot structural or mechanical constraints early.',
  },
  {
    step: '02',
    title: 'Line-Item Cut Plan',
    detail:
      'You get a clear written scope, realistic schedule, and transparent allowances — no vague lump sums or surprise add-ons mid-demo.',
  },
  {
    step: '03',
    title: 'Build & Weekly Check-Ins',
    detail:
      'Our crew keeps the jobsite clean, protects lived-in rooms, coordinates every trade, and sends straight weekly updates.',
  },
  {
    step: '04',
    title: 'Level Check & Handoff',
    detail:
      'We walk every corner, cabinet door, and paint edge together with a punch list until everything sits dead-level and ready to live in.',
  },
]

export const ATLANTA_AREAS = [
  'Virginia-Highland',
  'Inman Park',
  'Decatur',
  'Kirkwood',
  'Morningside',
  'Grant Park',
  'Buckhead',
  'Candler Park',
  'Smyrna',
  'Marietta',
]
