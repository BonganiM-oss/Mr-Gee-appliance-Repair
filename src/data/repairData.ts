import { ServiceItem } from '../types';

export const COVERAGE_AREAS = [
  'Johannesburg - Sandton, Rosebank & Bryanston',
  'Johannesburg - Randburg, Northcliff & Fourways',
  'Johannesburg - Midrand & Sunninghill',
  'Johannesburg - CBD, Bedfordview & JHB South',
  'Soweto - Diepkloof, Dobsonville & Orlando',
  'West Rand - Kagiso, Krugersdorp & Chamdor',
  'West Rand - Roodepoort, Florida & Constantia Kloof',
  'West Rand - Randfontein & Mohlakeng',
  'East Rand - Boksburg, Benoni & Springs',
  'East Rand - Kempton Park, Edenvale & Germiston',
  'East Rand - Alberton, Bedfordview & Glenvista',
  'Pretoria & Centurion - Centurion & Midstream',
  'Pretoria - Pretoria East, Menlyn & Garsfontein',
  'Pretoria - Pretoria Central, Hatfield & Moot',
  'Vaal Triangle - Vereeniging & Vanderbijlpark'
];

export const POPULAR_BRANDS = [
  'Defy', 'Samsung', 'LG', 'Hisense', 'Bosch', 
  'Whirlpool', 'KIC', 'Kelvinator', 'Smeg', 'Beko', 'Russell Hobbs', 'Miele', 'Siemens'
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'refrigeration',
    title: 'Fridge & Freezer Repairs',
    category: 'Refrigeration',
    tagline: 'Keep your food fresh with fast cooling diagnostics',
    description: 'Specialist repair for domestic double-door, side-by-side, bottom-freezer, and bar fridges across Gauteng. We solve cooling loss, gas leaks, faulty thermostats, inverter compressor faults, and defrost element failures.',
    commonIssues: [
      'Fridge warm but freezer cold',
      'Gas leak & regassing (R134a / R600a)',
      'Water pooling under crisper drawers',
      'Constant humming or clicking sound',
      'Excessive ice frost build-up in evaporator'
    ],
    brands: ['Defy', 'Samsung', 'LG', 'Hisense', 'KIC', 'Kelvinator', 'Bosch'],
    estTime: '1 - 2 hours on-site',
    priceRange: 'R450 – R1,250 + parts',
    warranty: '6 Months Workmanship & Parts Guarantee',
    iconName: 'Refrigerator',
    popular: true
  },
  {
    id: 'washing-machines',
    title: 'Washing Machines & Dryers',
    category: 'Laundry',
    tagline: 'Fixing spin cycles, drainage pumps, and drum bearings',
    description: 'Expert repairs on front-loader and top-loader washing machines, plus tumble dryers throughout Gauteng. We carry genuine drive belts, drain pumps, water inlet valves, and motor carbon brushes.',
    commonIssues: [
      'Machine not draining or error code (OE, E20, 5E)',
      'Loud screeching or rumbling during spin cycle',
      'Drum not turning or belt snapped',
      'Water leaking from door seal gasket',
      'Machine shaking violently or tripping electricity'
    ],
    brands: ['Defy', 'LG Inverter Direct Drive', 'Samsung EcoBubble', 'Bosch', 'Whirlpool'],
    estTime: '45 - 90 minutes',
    priceRange: 'R400 – R980 + parts',
    warranty: '6 Months Warranty',
    iconName: 'WashingMachine',
    popular: true
  },
  {
    id: 'ovens-stoves',
    title: 'Ovens, Stoves & Cookers',
    category: 'Cooking',
    tagline: 'Safe electrical diagnostics for baking & cooking elements',
    description: 'Full electrical repairs on freestanding stoves, built-in thermo-fan ovens, glass ceramic hobs, and induction plates. Certified electrical checks ensuring safe household operation across Gauteng.',
    commonIssues: [
      'Bake element not heating up or burnt out',
      'Oven tripping the main distribution board DB',
      'Ceramic hob plate switch not regulating heat',
      'Thermostat not regulating baking temperature',
      'Oven fan rattling or stopped spinning'
    ],
    brands: ['Defy Slimline / Gemini', 'Bosch', 'Smeg', 'Kelvinator', 'Hisense'],
    estTime: '1 hour on-site',
    priceRange: 'R450 – R850 + parts',
    warranty: '6 Months Warranty',
    iconName: 'Flame',
    popular: true
  },
  {
    id: 'televisions',
    title: 'LED, QLED & Smart TVs',
    category: 'Electronics',
    tagline: 'Component-level board repair & LED strip backlights',
    description: 'Don\'t throw away your screen! We fix sound-with-no-picture LED backlight failures, blown power supply boards from load-shedding surges, and faulty main motherboards for Gauteng homes.',
    commonIssues: [
      'Sound working but black screen (LED Backlight issue)',
      'Red standby light blinking, won\'t switch on',
      'Power supply surge damage after load shedding',
      'HDMI input ports not detecting signal',
      'Flickering screen or dark shadow patches'
    ],
    brands: ['Samsung', 'LG', 'Hisense', 'Sony Bravia', 'TCL', 'Sinotec'],
    estTime: 'Same-day or 24-hr turnaround',
    priceRange: 'R600 – R1,450 + parts',
    warranty: '6 Months Warranty',
    iconName: 'Tv',
    popular: true
  },
  {
    id: 'microwaves',
    title: 'Microwave & Convection Ovens',
    category: 'Cooking',
    tagline: 'High-voltage transformer & magnetron specialists',
    description: 'Prompt repairs for tabletop and built-in microwave ovens. We test magnetrons, high-voltage diodes, door safety interlock switches, and capacitive touch membranes.',
    commonIssues: [
      'Turntable turns and light is on, but food stays cold',
      'Sparking or loud buzzing inside cooking chamber',
      'Tripping power breaker when pressing Start',
      'Touchpad buttons unresponsive',
      'Door latch broken or loose safety switch'
    ],
    brands: ['Defy', 'Samsung', 'LG NeoChef', 'Russell Hobbs', 'Sharp'],
    estTime: '45 mins',
    priceRange: 'R350 – R650 + parts',
    warranty: '6 Months Warranty',
    iconName: 'Zap'
  },
  {
    id: 'commercial-coldrooms',
    title: 'Commercial Cold Rooms & Chillers',
    category: 'Commercial',
    tagline: 'Heavy-duty refrigeration for Gauteng butcheries & retailers',
    description: 'Emergency commercial refrigeration support for butcheries, supermarkets, taverns, and restaurants across all Gauteng regions (Johannesburg, Pretoria, West Rand, East Rand). Fast refrigerant leak detection and compressor overhauls.',
    commonIssues: [
      'Compressor overheating or kicking off on overload',
      'Evaporator coil frozen into solid block of ice',
      'Chiller temperature rising above safe threshold',
      'Refrigerant gas leak in line set',
      'Faulty digital Carel / Eliwell temperature controller'
    ],
    brands: ['Copeland', 'Tecumseh', 'Bitzer', 'Embraco', 'Danfoss'],
    estTime: 'Same-day emergency response',
    priceRange: 'R850 – R2,500 + parts',
    warranty: '6 Months Guarantee on work & components',
    iconName: 'Snowflake'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sipho Ndlovu',
    location: 'Kagiso, West Rand',
    comment: 'MR Gee arrived within 2 hours after my Defy double-door fridge stopped cooling on a Saturday. He replaced the defrost timer and regassed it right in my kitchen. Very honest and saved all my groceries!',
    rating: 5,
    date: '3 days ago',
    appliance: 'Defy Side-by-Side Fridge'
  },
  {
    name: 'Kgomotso Moroka',
    location: 'Sandton, Johannesburg',
    comment: 'Quick and professional. Our Bosch washing machine stopped spinning and was throwing error codes. MR Gee brought the exact replacement pump and tested it before leaving. Exceptional Gauteng-wide service.',
    rating: 5,
    date: '5 days ago',
    appliance: 'Bosch Series 6 Washing Machine'
  },
  {
    name: 'Annatjie Van Der Merwe',
    location: 'Centurion, Pretoria',
    comment: 'My Samsung front loader made a terrible noise during the spin cycle and wouldn’t drain. MR Gee diagnosed the drum bearing and pump blockage upfront with no surprise costs. Outstanding workmanship.',
    rating: 5,
    date: '1 week ago',
    appliance: 'Samsung EcoBubble Washing Machine'
  },
  {
    name: 'Thabo Mokoena',
    location: 'Kempton Park, East Rand',
    comment: 'Our restaurant beverage chiller stopped working on Friday afternoon. MR Gee came through with the right parts, fixed the electrical relay, and saved our weekend business. Highly recommended for commercial jobs.',
    rating: 5,
    date: '2 weeks ago',
    appliance: 'Commercial Cold Chiller'
  },
  {
    name: 'Lerato Khumalo',
    location: 'Randfontein / Krugersdorp',
    comment: 'Our 55-inch Hisense smart TV had sound but completely black screen after a power surge. MR Gee replaced the LED backlights with original strips. Screen looks brand new and price was very fair.',
    rating: 5,
    date: '3 weeks ago',
    appliance: 'Hisense 55" 4K Smart TV'
  }
];

export const PRICING_TABLE = [
  {
    category: 'Diagnostic & Call-out',
    service: 'On-site Inspection & Fault Finding (Anywhere in Gauteng)',
    cost: 'R350 (Credited towards repair cost if you proceed)',
    time: '30 - 45 mins'
  },
  {
    category: 'Refrigeration',
    service: 'Fridge / Freezer Gas Regas (R134a / R600a Eco-safe)',
    cost: 'From R550 – R850',
    time: '1 hour'
  },
  {
    category: 'Refrigeration',
    service: 'Thermostat / Defrost Sensor / Timer Replacement',
    cost: 'From R450 – R750 + part',
    time: '45 mins'
  },
  {
    category: 'Laundry',
    service: 'Washing Machine Drain Pump Unblock / Replacement',
    cost: 'From R400 – R650 + part',
    time: '45 mins'
  },
  {
    category: 'Laundry',
    service: 'Drum Bearings & Seal Overhaul (Front Loader)',
    cost: 'From R750 – R1,200',
    time: '2 - 3 hours'
  },
  {
    category: 'Cooking',
    service: 'Oven Bake Element / Thermostat Replacement',
    cost: 'From R450 – R700 + part',
    time: '45 mins'
  },
  {
    category: 'Cooking',
    service: 'Microwave Magnetron or High Voltage Diode Fix',
    cost: 'From R350 – R600 + part',
    time: '45 mins'
  },
  {
    category: 'Electronics',
    service: 'Smart TV LED Backlight Replacement (Full Strip Set)',
    cost: 'From R650 – R1,400',
    time: 'Same day / 24h'
  },
  {
    category: 'Electronics',
    service: 'TV Power Supply Board Surge Repair (Load shedding damage)',
    cost: 'From R550 – R950',
    time: 'Same day'
  }
];
