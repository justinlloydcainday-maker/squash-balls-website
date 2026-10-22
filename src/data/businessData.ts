export interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  badge?: string;
  category: 'Executive' | 'Management' | 'Operations & Production';
  avatarInitials: string;
}

export interface ExpenseItem {
  name: string;
  category: 'Core Ingredient' | 'Seasoning & Dips' | 'Cooking & Supplies' | 'Equipment';
  cost: number;
  description: string;
  unit: string;
}

export interface DocumentationPhoto {
  id: string;
  title: string;
  category: 'testing' | 'cooking' | 'campus';
  imageUrl: string;
  description: string;
  caption: string;
  date?: string;
}

export const BUSINESS_INFO = {
  name: 'Squash Cheesy Balls',
  tagline: 'Crispy outside, Cheesy inside',
  secondaryTagline: 'Healthy Bites, Cheesy Delight',
  institution: 'Eastern Samar State University – Borongan',
  campus: 'ESSU Main Campus, Maypangdan, Borongan City, Eastern Samar',
  college: 'College of Computer Studies',
  department: 'Information Technology Department',
  classSection: 'BCSC- 2A',
  courseName: 'Entrepreneurial Mind (ELECTIVE. 211)',
  instructor: 'Ms. Alexis Oliver Caraga, LPT',
  pricePerPiece: 10,
  costPerPiece: 7.09,
  profitPerPiece: 2.91,
  markupRate: '41%',
  batchDailyCost: 700,
  batchQuantity: 100,
  sellingDays: 'Tuesdays & Thursdays (2 days/week)',
  pdfPath: '/mini_business_plan.pdf',
  facebookShareUrl: 'https://www.facebook.com/share/1EuG76VkFm/',
  permitNumber: '2026-BPLO-0094821',
  permitDate: 'January 15, 2026',
  permitAmount: 6400,
};

export const MISSION_STATEMENT =
  'To provide delicious, affordable, and quality squash cheesy balls that satisfy customers while promoting creativity, teamwork, and responsible entrepreneurship.';

export const OBJECTIVES = [
  {
    num: 1,
    title: 'Affordable & Delicious Snacks',
    desc: 'To offer affordable and delicious Squash Cheesy Balls to students, teachers, and the local community.',
  },
  {
    num: 2,
    title: 'Highest Food Standards',
    desc: 'To maintain the quality, taste, and cleanliness of the product through proper food preparation and safe hygiene practices.',
  },
  {
    num: 3,
    title: 'Effective Promotion & Friendly Service',
    desc: 'To promote the product through creative marketing strategies, active campus presence, and warm customer care.',
  },
  {
    num: 4,
    title: 'Practical Entrepreneurship Growth',
    desc: "To earn a reasonable profit while developing the student group's entrepreneurial, leadership, and financial management skills.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Sucatan, Jhelanz O.',
    role: 'Chief Executive Officer (CEO)',
    department: 'Executive Leadership',
    bio: 'Oversees the entire student enterprise, strategic planning, team coordination, and ensures alignment with enterprise goals.',
    badge: 'Executive Lead',
    category: 'Executive',
    avatarInitials: 'JS',
  },
  {
    name: 'Traboco, Nathalie C.',
    role: 'Marketing Head',
    department: 'Brand & Marketing',
    bio: 'Directs promotional campaigns, digital branding, social media presence, customer outreach, and product packaging design.',
    badge: 'Marketing',
    category: 'Management',
    avatarInitials: 'NT',
  },
  {
    name: 'Alvarez, Mae Cassandra',
    role: 'Sales Manager',
    department: 'Sales & Distribution',
    bio: 'Manages on-campus selling activities, tracks daily customer demand, monitors sales turnover, and customer satisfaction.',
    badge: 'Sales',
    category: 'Management',
    avatarInitials: 'MA',
  },
  {
    name: 'Lira, Cherrylou D.',
    role: 'IT & Website Manager',
    department: 'Information Technology',
    bio: 'Architects and maintains the business website, digital ordering system, online information architecture, and technical assets.',
    badge: 'IT & Tech',
    category: 'Management',
    avatarInitials: 'CL',
  },
  {
    name: 'Baula, John Michael E.',
    role: 'Administrative Manager',
    department: 'Administration',
    bio: 'Organizes enterprise records, operational schedules, daily logistics, vendor coordination, and procedural documentation.',
    badge: 'Admin',
    category: 'Management',
    avatarInitials: 'JB',
  },
  {
    name: 'Quilicol, Jennel B.',
    role: 'Accounting Manager',
    department: 'Finance & Accounts',
    bio: 'Oversees cash flow, cost accounting, daily expense tracking, sales revenues, profit calculations, and audit-ready reporting.',
    badge: 'Finance',
    category: 'Management',
    avatarInitials: 'JQ',
  },
  {
    name: 'Carrie Desuelao',
    role: 'Kitchen & Prep Specialist',
    department: 'Food Production',
    bio: 'Prepares raw squash, handles hygienic mashing, precise ingredient measurement, cooking, and food safety standards.',
    category: 'Operations & Production',
    avatarInitials: 'CD',
  },
  {
    name: 'Leo Cadalin',
    role: 'Cooking & Frying Specialist',
    department: 'Food Production',
    bio: 'Oversees temperature control during frying, achieves ideal crispiness and cheese core melting, and manages oil filtration.',
    category: 'Operations & Production',
    avatarInitials: 'LC',
  },
  {
    name: 'Necole Cebrero',
    role: 'Quality & Hygiene Officer',
    department: 'Quality Assurance',
    bio: 'Maintains sterile workstation sanitation, inspects golden crunch texture, verifies cheese sealing, and monitors packing hygiene.',
    category: 'Operations & Production',
    avatarInitials: 'NC',
  },
  {
    name: 'Elma B. Mabignay',
    role: 'Production & Inventory Assistant',
    department: 'Inventory & Supplies',
    bio: 'Manages pantry stock levels, inspects fresh produce delivery, assists in packaging, and arranges serving trays for fast sales.',
    category: 'Operations & Production',
    avatarInitials: 'EM',
  },
];

export const DAILY_EXPENSES: ExpenseItem[] = [
  { name: 'Fresh Squash (Kalabasa)', category: 'Core Ingredient', cost: 74, unit: 'Fresh farm yield', description: 'Selected ripe, golden squash rich in vitamins' },
  { name: 'All-Purpose Flour', category: 'Core Ingredient', cost: 30, unit: 'Pack / kg', description: 'Provides smooth binding and body to dough' },
  { name: 'Cornstarch', category: 'Core Ingredient', cost: 30, unit: 'Pack', description: 'Ensures a delicate, lightweight crispy texture' },
  { name: 'Golden Breadcrumbs', category: 'Core Ingredient', cost: 36, unit: 'Pack', description: 'Forms crunchy outer protective crust' },
  { name: 'Cheddar Cheese Blocks', category: 'Core Ingredient', cost: 22, unit: 'Bars', description: 'Savory center filling with melty pull' },
  { name: 'Pure Cooking Oil', category: 'Cooking & Supplies', cost: 200, unit: 'Liter supply', description: 'High-smoke-point oil for crisp, golden frying' },
  { name: 'Fresh Eggs', category: 'Core Ingredient', cost: 10, unit: 'Pieces', description: 'Binds batter and adheres breadcrumbs securely' },
  { name: 'Paprika Powder', category: 'Seasoning & Dips', cost: 20, unit: 'Shaker/Pack', description: 'Adds warm aroma, color, and gentle smokiness' },
  { name: 'Ground Black Pepper', category: 'Seasoning & Dips', cost: 15, unit: 'Shaker/Pack', description: 'Subtle peppery bite balancing sweetness' },
  { name: 'Iodized Salt', category: 'Seasoning & Dips', cost: 6, unit: 'Pack', description: 'Enhances natural vegetable and dairy flavors' },
  { name: 'Creamy Mayonnaise', category: 'Seasoning & Dips', cost: 34, unit: 'Pouch', description: 'Base for savory garlic-mayo house sauce' },
  { name: 'Tomato / Banana Ketchup', category: 'Seasoning & Dips', cost: 20, unit: 'Bottle', description: 'Zesty tang for signature dip mix' },
  { name: 'Savory Cheese Powder', category: 'Seasoning & Dips', cost: 22, unit: 'Pack', description: 'Optional extra cheese dusting for exterior' },
  { name: 'Butane Fuel Canister', category: 'Cooking & Supplies', cost: 50, unit: 'Canister', description: 'Portable stove fuel for on-demand frying' },
  { name: 'Bamboo Skewers / Sticks', category: 'Cooking & Supplies', cost: 30, unit: '100 pcs pack', description: 'Hygienic easy-to-eat street snack sticks' },
  { name: 'Sauce Squeeze Bottles', category: 'Equipment', cost: 30, unit: 'Reusable dispensers', description: 'Clean dispenser bottles for mayonnaise & ketchup' },
  { name: 'Stainless Peeler', category: 'Equipment', cost: 40, unit: 'Reusable tool', description: 'Swift squash skin peeling' },
  { name: 'Cooking Tongs', category: 'Equipment', cost: 40, unit: 'Reusable tool', description: 'Safe removal of fried balls from oil' },
];

export const PRODUCTION_STEPS = [
  {
    step: 1,
    title: 'Prepare the Squash',
    action: 'Wash, Peel & Steam',
    description:
      'Carefully wash farm-fresh local squash, remove seeds and outer skin, chop into uniform cubes, and steam or boil until fork-tender. Mash thoroughly to create a silky, smooth puree.',
    icon: 'Carrot',
  },
  {
    step: 2,
    title: 'Mix the Savory Dough',
    action: 'Combine & Season',
    description:
      'Blend the mashed squash with all-purpose flour, cornstarch, fresh egg, paprika, sea salt, and black pepper. Stir until a pliable, non-sticky dough forms.',
    icon: 'CookingPot',
  },
  {
    step: 3,
    title: 'Stuff with Cheese',
    action: 'Shape & Encase Core',
    description:
      'Portion the squash dough into bite-sized balls. Insert a hearty cube of real cheddar cheese right into the core, carefully rolling it to seal completely and prevent oil leakage.',
    icon: 'Sparkles',
  },
  {
    step: 4,
    title: 'Double Coat & Deep Fry',
    action: 'Crisp to Golden Amber',
    description:
      'Roll each ball in fine breadcrumbs for total coverage. Deep fry in clean, pre-heated oil at 175°C for 3-4 minutes until the exterior turns wonderfully golden brown and crunchy.',
    icon: 'Flame',
  },
  {
    step: 5,
    title: 'Drain & Serve Fresh',
    action: 'Garnish & Dip',
    description:
      'Transfer cooked balls onto paper towels to drain excess oil. Pack hot into serving cups with bamboo sticks and serve with creamy garlic mayo or tangy sweet chili ketchup.',
    icon: 'CheckCircle2',
  },
];

export const GALLERY_PHOTOS: DocumentationPhoto[] = [
  {
    id: 'test-plating',
    title: 'Freshly Plated Squash Cheesy Balls',
    category: 'testing',
    imageUrl: '/test_plating.png',
    description: 'Golden-fried Squash Cheesy Balls served with house dips, mayonnaise, and ketchup.',
    caption: 'Sensory evaluation & plating test during formulation stage.',
    date: 'Phase 1 - Product Development',
  },
  {
    id: 'test-tasting',
    title: 'Student Team Sensory Testing',
    category: 'testing',
    imageUrl: '/test_tasting.png',
    description: 'BCSC-2A team members evaluating the cheese pull, crispiness, and flavor balance.',
    caption: 'Team taste test ensuring perfect cheese stretch and crunchy crust.',
    date: 'Phase 1 - Quality Assurance',
  },
  {
    id: 'phase1-cooking',
    title: 'Golden Frying in Process',
    category: 'cooking',
    imageUrl: '/phase1_cooking.png',
    description: 'Squash balls immersed in deep frying oil, achieving uniform golden coloration.',
    caption: 'Frying at controlled temperature to guarantee melted cheese inside.',
    date: 'Batch 1 Production',
  },
  {
    id: 'phase2-campus',
    title: 'Campus Selling & Customer Engagement',
    category: 'campus',
    imageUrl: '/phase2_campus.png',
    description: 'Students selling Squash Cheesy Balls on ESSU Main Campus in Maypangdan.',
    caption: 'Live on-campus selling during student break hours.',
    date: 'Phase 2 - Commercial Rollout',
  },
  {
    id: 'phase1-stall',
    title: 'Production Setup & Product Testing Collage',
    category: 'testing',
    imageUrl: '/product_testing.png',
    description: 'Full documentation collage showing ingredients, mashing, and cooking validation.',
    caption: 'Documented evidence of product formulation in Elective 211.',
    date: 'Product Testing Record',
  },
  {
    id: 'phase2-rollout',
    title: 'Phase 1 & Phase 2 Full Rollout Collage',
    category: 'campus',
    imageUrl: '/phase_documentation.png',
    description: 'Comprehensive photographic log of production, ribbon cutting, and campus buyers.',
    caption: 'Complete Phase 1 & 2 documentation submitted to instructor Ms. Alexis Oliver Caraga.',
    date: 'Academic Business Portfolio',
  },
];

export const SWOT_DATA = {
  strengths: [
    {
      title: 'Nutritious & Unique Concept',
      desc: 'Distinctive fusion of healthy squash with universally loved melted cheddar cheese.',
    },
    {
      title: 'Pocket-Friendly ₱10 Price Point',
      desc: 'Highly accessible for students, faculty, and campus staff on daily budgets.',
    },
    {
      title: 'Simple, Agile Production',
      desc: 'Streamlined 5-step preparation process using readily available local ingredients.',
    },
    {
      title: 'Freshly Cooked Hot on Campus',
      desc: 'Prepared and served warm during peak school break hours for peak crispiness.',
    },
  ],
  weaknesses: [
    {
      title: 'Initial Single Product Focus',
      desc: 'Starting with one flagship snack format before introducing flavored coatings.',
    },
    {
      title: 'Ingredient Price Fluctuations',
      desc: 'Seasonal variations in vegetable and cooking oil prices require strict cost tracking.',
    },
    {
      title: 'Limited Initial Batch Capacity',
      desc: 'Production constrained by student schedules and portable equipment.',
    },
  ],
  opportunities: [
    {
      title: 'Strong Campus Demand for Warm Snacks',
      desc: 'High student traffic at ESSU Main Campus during morning and afternoon recesses.',
    },
    {
      title: 'Word-of-Mouth & Social Promotion',
      desc: 'Viral potential through student Facebook shares, group chats, and campus buzz.',
    },
    {
      title: 'Flavor & Size Line Extensions',
      desc: 'Future potential for spicy jalapeño, sweet corn cheese, and frozen ready-to-fry packs.',
    },
  ],
  threats: [
    {
      title: 'Direct Campus Canteen Alternatives',
      desc: 'Competition from nearby street vendors selling fishballs, kikiam, and pastries.',
    },
    {
      title: 'Squash & Oil Market Surges',
      desc: 'Sudden wholesale market price spikes that can compress unit profit margins.',
    },
    {
      title: 'Changing Academic Calendars',
      desc: 'Exam weeks, holidays, and weather conditions that temporarily reduce campus foot traffic.',
    },
  ],
};

export const REVENUE_FORECASTS = [
  {
    phase: 'Phase 1: Initial Rollout',
    sold: '200 pcs (100 pcs/day × 2 days)',
    sales: 2000.0,
    costPerUnit: 7.09,
    totalCost: 1418.0,
    grossProfit: 582.0,
    profitPerPiece: 2.91,
    status: 'Executed & Verified',
  },
  {
    phase: 'Phase 2: Product Innovation & Expansion',
    sold: '300 pcs (150 pcs/day × 2 days)',
    sales: 3000.0,
    costPerUnit: 7.09,
    totalCost: 2127.0,
    grossProfit: 873.0,
    profitPerPiece: 2.91,
    status: 'Projected Target',
  },
];

export const LEGAL_DOSSIER_ITEMS = [
  {
    code: 'DTI Registration',
    title: 'Business Name Registration',
    badge: 'Act 3883',
    desc: 'Registration as "Squash Cheesy Balls Food Enterprise" under Sole Proprietorship for formal trade name protection.',
  },
  {
    code: 'Mayor\'s Permit',
    title: 'City Business Permit & Licensing (BPLO)',
    badge: 'LGU Borongan',
    desc: 'Permit No. 2026-BPLO-0094821 issued for food retail and kiosk operations with all municipal fees recorded.',
  },
  {
    code: 'Food Safety Act',
    title: 'Food Safety Compliance & Storage',
    badge: 'RA 10611',
    desc: 'Strict cold storage of cheese below 4°C, hot oil held between 175°C-190°C, and daily ingredient safety audits.',
  },
  {
    code: 'Sanitation Code',
    title: 'Sanitary Clearance & Food Handlers',
    badge: 'PD 856',
    desc: 'Mandatory personnel food handler health cards, sterile gloves, hairnets, and annual sanitary permit.',
  },
  {
    code: 'Allergen Mandate',
    title: 'Mandatory Allergen Disclosure',
    badge: 'RA 7394',
    desc: 'Clear consumer notification: Contains Dairy (Cheese) and Gluten (Wheat Flour). Expiry & manufacturing labeling.',
  },
  {
    code: 'Environmental & Fire',
    title: 'Fire Safety & Waste Management',
    badge: 'RA 9514 & RA 9003',
    desc: 'Certified Class K fire extinguisher for deep frying; used oil captured and processed without public drainage discharge.',
  },
];
