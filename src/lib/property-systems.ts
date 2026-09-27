export interface PropertySystem {
  id: string;
  label: string;
  watchFor: string[];
  question: string;
  description: string;
  ctaLabel: string;
  href: string;
}

export const propertySystems: PropertySystem[] = [
  {
    id: "cooling",
    label: "Cooling",
    watchFor: [
      "Unusual cooling performance",
      "Airflow changes",
      "Unusual sounds",
      "Water around indoor units",
      "Maintenance needs",
    ],
    question: "Has the AC performance changed recently?",
    description:
      "AC-related maintenance and issues — performance, airflow, unusual sounds and general condition.",
    ctaLabel: "Explore AC Repair",
    href: "/ac-repair/",
  },
  {
    id: "water",
    label: "Water",
    watchFor: [
      "Dripping fixtures",
      "Slow drainage",
      "Moisture marks",
      "Recurring leaks",
      "Unusual water pressure",
    ],
    question: "Any recurring leaks, dripping or moisture marks?",
    description: "Fixtures, drainage and visible plumbing concerns.",
    ctaLabel: "Explore Plumbing",
    href: "/plumbing-repair/",
  },
  {
    id: "electrical",
    label: "Electrical",
    watchFor: [
      "Switches behaving differently",
      "Lights flickering or out",
      "Sockets not working",
      "Breaker tripping",
    ],
    question: "Any switches, lights, sockets or breakers behaving differently?",
    description:
      "Household electrical fixtures and maintenance concerns within the actual service scope.",
    ctaLabel: "Explore Electrical Repair",
    href: "/electrical-repair/",
  },
  {
    id: "bathrooms",
    label: "Bathrooms",
    watchFor: [
      "Fixture issues",
      "Slow or blocked drains",
      "Tile or grout condition",
      "Water-related marks",
    ],
    question: "Any bathroom fixtures, drains or surfaces needing attention?",
    description: "Fixtures, surfaces, drainage and water-related concerns.",
    ctaLabel: "Explore Bathroom & Kitchen Repair",
    href: "/bathroom-kitchen-repair/",
  },
  {
    id: "kitchen",
    label: "Kitchen",
    watchFor: [
      "Cabinet or drawer issues",
      "Sink or tap condition",
      "Tile or surface wear",
      "Fitting problems",
    ],
    question: "Any kitchen cabinets, fixtures or fittings needing attention?",
    description: "Fixtures, cabinets, fittings and related repair needs.",
    ctaLabel: "Explore Bathroom & Kitchen Repair",
    href: "/bathroom-kitchen-repair/",
  },
  {
    id: "surfaces",
    label: "Walls & Surfaces",
    watchFor: [
      "Peeling paint",
      "New stains",
      "Cracks",
      "Damaged surfaces",
      "Moisture marks",
    ],
    question: "Any new cracks, peeling paint, stains or visible deterioration?",
    description: "Paint, minor wall damage and visible deterioration.",
    ctaLabel: "Explore Wall Repair",
    href: "/painting-wall-repair/",
  },
  {
    id: "doors",
    label: "Doors & Hardware",
    watchFor: [
      "Doors becoming difficult to close",
      "Loose handles",
      "Hinge noise",
      "Lock issues",
    ],
    question: "Any doors, locks, handles or cabinets becoming difficult to use?",
    description: "Handles, hinges, locks, doors and household hardware.",
    ctaLabel: "Explore Carpentry, Doors & Locks",
    href: "/carpentry-doors-locks/",
  },
  {
    id: "exterior",
    label: "Exterior / Utility",
    watchFor: [
      "Exterior surface condition",
      "Utility area fittings",
      "General wear",
      "Small practical issues",
    ],
    question: "Anything in the exterior or utility area worth a look?",
    description:
      "Small practical issues that don't belong neatly to one specialist category.",
    ctaLabel: "Explore General Home Repairs",
    href: "/general-home-repairs/",
  },
];
