import { Language, ServiceItem } from '../types';

/** Company details shown across the site — change them here only. */
export const COMPANY = {
  name: 'Skandivexa konsult AB',
  orgNumber: '559496-3935',
  email: 'info@skandivexa.se',
  phone: '010-808 67 33',
  phoneHref: 'tel:0108086733',
};

export const UI_TEXT = {
  nav: {
    home: { sv: 'Hem', en: 'Home' },
    services: { sv: 'Verksamhetsområden', en: 'Core Divisions' },
    maintenance: { sv: 'Bygg & Underhåll', en: 'Building & Maintenance' },
    realEstate: { sv: 'Fastigheter', en: 'Real Estate' },
    staffing: { sv: 'Bemanning', en: 'Staffing' },
    trade: { sv: 'Handel & Maskiner', en: 'Trade & Equipment' },
    rot: { sv: 'ROT-Kalkylator', en: 'ROT Tax Relief' },
    about: { sv: 'Om Bolaget', en: 'About Us' },
    contact: { sv: 'Kontakt', en: 'Contact' },
    requestQuote: { sv: 'Begär Offert', en: 'Request a Quote' },
  },
  hero: {
    tagline: {
      sv: 'Svensk Byggentreprenad • Fastighetsunderhåll • Totalrenovering',
      en: 'Swedish Construction • Facility Maintenance • Turnkey Renovation',
    },
    title: {
      sv: 'Kvalitetsbygg, Planerat Fastighetsunderhåll & Totalentreprenad',
      en: 'Quality Construction, Facility Maintenance & Turnkey Contracting',
    },
    description: {
      sv: 'Skandivexa konsult AB levererar robusta helhetslösningar inom bygg-, konsult- och underhållsverksamhet. Vi samordnar certifierade entreprenörer inom bygg, VVS, ventilation, måleri och snickeri, kombinerat med strategisk teknisk rådgivning, fastighetsförvaltning och professionell bemanning.',
      en: 'Skandivexa konsult AB delivers comprehensive turnkey solutions across construction, engineering consulting, and facility maintenance. We coordinate certified specialists across building, plumbing, HVAC, painting, and carpentry, coupled with strategic property management and professional staffing.',
    },
    ctaPrimary: { sv: 'Begär Kostnadsfri Offert', en: 'Request Free Quote' },
    ctaSecondary: { sv: 'Utforska Våra Tjänster', en: 'Explore Services' },
    stat1Label: { sv: 'Fullständigt Certifierade', en: 'Fully Certified' },
    stat1Sub: { sv: 'ID06 • F-Skatt • Säker Vatten', en: 'ID06 • F-Skatt • Water Safety' },
    stat2Label: { sv: 'ROT-Avdrag Direkt', en: 'ROT Tax Deduction' },
    stat2Sub: { sv: 'Upp till 30% på arbetskostnaden', en: 'Up to 30% on labor cost' },
    stat3Label: { sv: 'Förebyggande Underhåll', en: 'Preventive Maintenance' },
    stat3Sub: { sv: 'Underhållsplaner & Driftavtal', en: 'Maintenance Plans & Upkeep' },
    stat4Label: { sv: 'Totalentreprenad', en: 'Turnkey Contracts' },
    stat4Sub: { sv: 'Från projektering till slutbesiktning', en: 'From planning to final inspection' },
  },
  verksamhetSection: {
    eyebrow: { sv: 'VÅR VERKSAMHET', en: 'OUR SCOPE OF WORK' },
    title: { sv: 'Komplett bygg- och underhållskompetens för alla fastigheter', en: 'Complete building & maintenance expertise for all properties' },
    description: {
      sv: 'Från akuta reparationer och planerat fastighetsunderhåll till storskalig nybyggnation, VVS-installationer, bemanning och maskinhandel.',
      en: 'From emergency building repairs and scheduled facility maintenance to turnkey new builds, plumbing installations, staffing, and machinery trade.',
    },
    filterAll: { sv: 'Alla Verksamheter', en: 'All Divisions' },
    filterConstruction: { sv: 'Bygg & Renovering', en: 'Building & Renovation' },
    filterMaintenance: { sv: 'Underhåll & Installation', en: 'Maintenance & Trades' },
    filterRealEstate: { sv: 'Fastigheter & Drift', en: 'Real Estate & Facility' },
    filterStaffingTrade: { sv: 'Bemanning & Handel', en: 'Staffing & Trade' },
  },
  maintenanceSpotlight: {
    eyebrow: { sv: 'PLANERAT & FÖREBYGGANDE FASTIGHETSUNDERHÅLL', en: 'PLANNED & PREVENTIVE FACILITY MAINTENANCE' },
    title: {
      sv: 'Säkra fastighetens värde och drift med proaktivt underhåll',
      en: 'Preserve property value and reliable operations with proactive maintenance',
    },
    lead: {
      sv: 'Regelbundet och systematiskt fastighetsunderhåll är den mest kostnadseffektiva investeringen en fastighetsägare eller bostadsrättsförening kan göra.',
      en: 'Regular and systematic building maintenance is the most cost-effective investment a property owner or housing cooperative can make.',
    },
    p1: {
      sv: 'Skandivexa konsult AB erbjuder kompletta underhållsavtal som omfattar regelbunden teknisk tillsyn, fasad- och taköversyn, stambyten, fönsterunderhåll, energieffektivisering och felavhjälpande jour. Vi upprättar skräddarsydda 5- till 10-åriga underhållsplaner så att ni slipper kostsamma akuta överraskningar.',
      en: 'Skandivexa konsult AB provides comprehensive maintenance contracts covering routine technical inspections, facade and roof overhauls, plumbing upgrades, window upkeep, energy efficiency, and emergency response. We develop tailored 5- to 10-year maintenance roadmaps to eliminate costly surprises.',
    },
    p2: {
      sv: 'Våra certifierade hantverkare och arbetsledare säkerställer att alla åtgärder utförs enligt gällande svenska branschregler – från fuktskydd och ventilation till bärande stommar och ytskikt.',
      en: 'Our certified builders and site supervisors ensure all maintenance measures comply strictly with Swedish building codes—from moisture barriers and ventilation to structural framing and surface finishes.',
    },
    points: [
      {
        title: { sv: 'Underhållsplaner & Besiktning', en: 'Maintenance Plans & Surveys' },
        desc: {
          sv: 'Grundlig statusbesiktning och fleråriga åtgärdsplaner med budget- och tidsramar.',
          en: 'Thorough condition surveys and multi-year maintenance schedules with budget estimates.',
        },
      },
      {
        title: { sv: 'Fasader, Tak & Skal', en: 'Facades, Roofs & Building Envelopes' },
        desc: {
          sv: 'Taktäckning, fasadputs, tilläggsisolering och fönsterrenovering som sänker driftskostnader.',
          en: 'Roof repairs, facade rendering, thermal insulation, and window maintenance to cut energy costs.',
        },
      },
      {
        title: { sv: 'VVS, Ventilation & Installation', en: 'Plumbing, HVAC & Installations' },
        desc: {
          sv: 'Stambyten, relining, OVK-åtgärder och injustering av värmesystem för optimalt inomhusklimat.',
          en: 'Plumbing overhauls, airflow balancing, OVK compliance, and heating system optimization.',
        },
      },
    ],
  },
  rotCalculator: {
    badge: { sv: 'FÖR PRIVATPERSONER I SVERIGE', en: 'FOR PRIVATE HOMEOWNERS' },
    title: { sv: 'Beräkna ditt ROT-avdrag (30%)', en: 'Calculate Your ROT Tax Deduction (30%)' },
    description: {
      sv: 'Som privatperson kan du dra av 30% av arbetskostnaden för renovering, ombyggnad och underhåll (upp till 50 000 kr per person och år). Vi på Skandivexa konsult AB sköter all administration direkt med Skatteverket.',
      en: 'Private homeowners in Sweden can deduct 30% of labor costs for renovation, extensions, and home maintenance (up to SEK 50,000 per person/year). Skandivexa konsult AB manages the entire reporting with the Swedish Tax Agency directly on your invoice.',
    },
    sliderLabel: { sv: 'Uppskattad total arbetskostnad (inkl. moms):', en: 'Estimated labor cost (incl. VAT):' },
    rotDeductionLabel: { sv: 'Ditt preliminära ROT-avdrag:', en: 'Your preliminary ROT deduction:' },
    youPayLabel: { sv: 'Du betalar för arbetet (efter avdrag):', en: 'You pay for labor (after deduction):' },
    infoText: {
      sv: 'Tips: Är ni två delägare i samma bostad kan ni tillsammans nyttja upp till 100 000 kr i ROT-avdrag per kalenderår.',
      en: 'Tip: If two co-owners share the property, you can combine deductions up to SEK 100,000 per calendar year.',
    },
    cta: { sv: 'Få specificerad offert med ROT', en: 'Get itemized quote with ROT' },
  },
  quoteModal: {
    title: { sv: 'Begär Offert & Projektrådgivning', en: 'Request Quote & Consultation' },
    subtitle: {
      sv: 'Beskriv ditt projekt – när du skickar öppnas ett färdigt e-postmeddelande till oss i ditt e-postprogram.',
      en: 'Describe your project – when you submit, a ready-made email to us opens in your email program.',
    },
    clientTypeLabel: { sv: 'Vem är du?', en: 'Client Category' },
    types: {
      private: { sv: 'Privatperson (Villa/Bostadsrätt)', en: 'Private Homeowner' },
      company: { sv: 'Företag / Entreprenör', en: 'Commercial Business' },
      brf: { sv: 'Bostadsrättsförening (BRF)', en: 'Housing Co-op (BRF)' },
      public: { sv: 'Fastighetsbolag / Offentlig', en: 'Property Co / Public' },
    },
    servicesLabel: { sv: 'Vilka områden berör projektet?', en: 'Which services are needed?' },
    name: { sv: 'Namn / Kontaktperson', en: 'Full Name / Contact Person' },
    company: { sv: 'Företagsnamn / BRF (om tillämpligt)', en: 'Company / BRF (if applicable)' },
    phone: { sv: 'Telefonnummer', en: 'Phone Number' },
    email: { sv: 'E-postadress', en: 'Email Address' },
    city: { sv: 'Ort / Kommun', en: 'City / Municipality' },
    address: { sv: 'Fastighetsadress / Fastighetsbeteckning', en: 'Property Address / Designation' },
    description: {
      sv: 'Beskrivning av arbetet (omfattning, underhållsbehov, ritningar)',
      en: 'Project description (scope, maintenance requirements, blueprints)',
    },
    rotQuestion: { sv: 'Önskas ROT-avdrag på arbetskostnaden?', en: 'Do you wish to apply for ROT tax deduction?' },
    timeframeLabel: { sv: 'Önskad tidsram för start:', en: 'Preferred project start:' },
    timeframes: {
      urgent: { sv: 'Omgående / Akut (Inom 2 veckor)', en: 'Immediate / Urgent (Within 2 weeks)' },
      '1-3months': { sv: 'Inom 1–3 månader', en: 'Within 1–3 months' },
      '3-6months': { sv: 'Inom 3–6 månader', en: 'Within 3–6 months' },
      future: { sv: 'Längre fram / Planeringsfas', en: 'Future / Planning stage' },
    },
    submitButton: { sv: 'Skapa e-post med förfrågan', en: 'Create Email with Request' },
    submitting: { sv: 'Skickar...', en: 'Sending...' },
    successTitle: { sv: 'Nästan klart – skicka e-postmeddelandet', en: 'Almost done – send the email' },
    successMsg: {
      sv: 'Ett e-postmeddelande med din förfrågan har öppnats i ditt e-postprogram. Tryck på Skicka där så når förfrågan oss. Öppnades inget? Använd knappen nedan eller mejla oss direkt på info@skandivexa.se.',
      en: 'An email with your request has opened in your email program. Press Send there and it will reach us. Nothing opened? Use the button below or email us directly at info@skandivexa.se.',
    },
    close: { sv: 'Stäng', en: 'Close' },
  },
  about: {
    eyebrow: { sv: 'OM SKANDIVEXA KONSULT AB', en: 'ABOUT SKANDIVEXA KONSULT AB' },
    title: { sv: 'En komplett partner för byggnation, underhåll och teknisk konsultation', en: 'A complete partner for construction, maintenance & engineering consulting' },
    legalNotice: {
      sv: 'Officiell verksamhetsbeskrivning registrerad hos Bolagsverket:',
      en: 'Official company activity registered with the Swedish Companies Registration Office (Bolagsverket):',
    },
    verksamhetText: `Bolaget ska bedriva bygg-, underhålls- och renoveringsverksamhet, inklusive teknisk konsultation, VVS-, ventilations-, måleri- och snickeriarbeten, restaurering av kulturhistoriska byggnader samt tillverkning och reproduktion av byggnads- och inredningsdetaljer. Bolaget ska även bedriva köp, försäljning, uthyrning och förvaltning av fastigheter, bemanning och personaluthyrning inom olika branscher, import, export och handel med byggmaterial, inredning, maskiner och tillhörande produkter, äga och förvalta aktier och andelar samt bedriva därmed förenlig verksamhet.`,
    verksamhetTextEn: `The company shall conduct building, maintenance, and renovation operations, including engineering consulting, plumbing (HVAC/VVS), ventilation, painting, and carpentry work, restoration of cultural heritage buildings, as well as architectural detailing. The company shall also conduct property management, leasing, staffing across various industries, trade in machinery and building materials, and engage in compatible operations.`,
    values: [
      {
        title: { sv: 'Byggteknisk Precision & Hantverk', en: 'Construction Engineering & Craft' },
        desc: {
          sv: 'Yrkesstolta snickare, montörer och projektledare som arbetar enligt svenska byggnormer och Boverkets byggregler (BBR).',
          en: 'Dedicated carpenters, technicians, and project managers working strictly under Swedish building codes and regulations.',
        },
      },
      {
        title: { sv: 'Trygghet, Garanti & Avtal', en: 'Security, Guarantees & Contracts' },
        desc: {
          sv: 'Full ansvarsförsäkring, F-skatt, ID06 och skriftliga avtal enligt Hantverkarformuläret, AB04 och ABT06.',
          en: 'Comprehensive liability insurance, F-skatt tax certification, ID06 safety badges, and standardized construction contracts.',
        },
      },
      {
        title: { sv: 'Långsiktigt Fastighetsvärde', en: 'Long-Term Property Asset Value' },
        desc: {
          sv: 'Vi prioriterar hållbara kvalitetsmaterial, energieffektiva ventilationslösningar och förebyggande underhåll som lönar sig över tid.',
          en: 'We prioritize durable building supplies, energy-efficient HVAC, and proactive maintenance that pays dividends over decades.',
        },
      },
    ],
  },
  contact: {
    eyebrow: { sv: 'KONTAKT & RÅDGIVNING', en: 'GET IN TOUCH' },
    title: { sv: 'Låt oss diskutera ditt nästa bygg- eller underhållsprojekt', en: 'Let us discuss your next building or maintenance project' },
    desc: {
      sv: 'Oavsett om du söker en pålitlig totalentreprenör, ett löpande fastighetsunderhållsavtal, VVS-åtgärder, bemanning eller maskinleverans finns vi här för dig.',
      en: 'Whether you need a reliable general contractor, a long-term building maintenance contract, plumbing services, staffing, or machinery distribution, we are here to assist.',
    },
    addressLabel: { sv: 'Huvudkontor & Verkstad', en: 'Headquarters & Workshop' },
    addressVal: 'Stockholm / Mälardalen, Sverige',
    phoneLabel: { sv: 'Telefon', en: 'Phone' },
    phoneVal: '010-808 67 33',
    emailLabel: { sv: 'E-post', en: 'Email' },
    emailVal: 'info@skandivexa.se',
    hoursLabel: { sv: 'Öppettider Kontor', en: 'Office Hours' },
    hoursVal: { sv: 'Måndag – Fredag: 07:00 – 17:00', en: 'Monday – Friday: 07:00 – 17:00' },
    orgLabel: { sv: 'Organisationsform', en: 'Company Registration' },
    orgVal: 'Skandivexa konsult AB • Org.nr 559496-3935 • Godkänd för F-skatt • Momsregistrerad',
  },
  footer: {
    rights: { sv: 'Alla rättigheter förbehållna.', en: 'All rights reserved.' },
    privacy: { sv: 'Integritetspolicy', en: 'Privacy Policy' },
    tagline: {
      sv: 'Skandivexa konsult AB – Bygg-, underhålls- och renoveringsverksamhet, VVS, fastigheter, bemanning & konsultation i Sverige.',
      en: 'Skandivexa konsult AB – Construction, Facility Maintenance, Renovation, HVAC, Real Estate, Staffing & Consulting in Sweden.',
    },
    quickLinks: { sv: 'Snabblänkar', en: 'Quick Links' },
    certifications: { sv: 'Kvalitet & Certifieringar', en: 'Quality & Certifications' },
    cert1: 'Godkänd för F-skatt (Skatteverket)',
    cert2: 'Säker Vatten-auktoriserat VVS',
    cert3: 'ID06 Registrerad Arbetsplats',
    cert4: 'Byggföretagens Kollektivavtal',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'bygg-renovering',
    category: 'construction',
    title: {
      sv: 'Bygg-, Ombyggnads- och Renoveringsentreprenad',
      en: 'Building, Refurbishment & Renovation Contracting',
    },
    subtitle: {
      sv: 'Totalentreprenad, nyproduktion och precisionsrenovering',
      en: 'Turnkey general contracting, new construction, and precision renovations',
    },
    description: {
      sv: 'Vi genomför nybyggnation, tillbyggnader, kontorsanpassningar, stomresning och storskalig renovering med samordnad projektledning från bygglov till godkänd slutbesiktning.',
      en: 'We deliver new construction, residential extensions, commercial tenant improvements, structural framing, and comprehensive renovations with turnkey project oversight.',
    },
    details: {
      sv: [
        'Totalentreprenad för villor, flerbostadshus och kommersiella fastigheter',
        'Stomresning, tillbyggnader, taklyft och altanbyggnationer',
        'Grundläggning, mur- och betongarbeten samt fasadisolering',
        'Totalansvar med besiktningsprotokoll och garantier enligt ABT06/AB04',
      ],
      en: [
        'Turnkey general contracting for residential estates, multi-family & commercial buildings',
        'Structural framing, extensions, additional floors, and premium decking',
        'Foundation works, masonry, concrete structures, and thermal insulation',
        'Full turnkey responsibility with inspection protocols and ABT06/AB04 warranties',
      ],
    },
    icon: 'Hammer',
    badge: { sv: 'Totalentreprenad', en: 'General Contractor' },
  },
  {
    id: 'fastighetsunderhall-teknisk',
    category: 'installations',
    title: {
      sv: 'Planerat Fastighetsunderhåll & Teknisk Service',
      en: 'Planned Facility Maintenance & Technical Upkeep',
    },
    subtitle: {
      sv: 'Förebyggande underhåll, fasad, tak och löpande tillsyn',
      en: 'Preventive upkeep, facade, roofing, and continuous building inspection',
    },
    description: {
      sv: 'Ett välplanerat underhåll förlänger byggnadens livslängd och minimerar driftstörningar. Vi upprättar underhållsplaner och utför periodiskt underhåll av tak, fasader, fönster och gemensamma utrymmen.',
      en: 'Well-planned maintenance extends building longevity and prevents disruptions. We establish multi-year maintenance schedules and execute periodic maintenance on roofs, facades, windows, and common areas.',
    },
    details: {
      sv: [
        'Upprättande och uppföljning av 5–10 åriga underhållsplaner',
        'Taktäckning, taksäkerhet, snöskottning och hängrännerensning',
        'Fasadrenovering, omfogning, putsreparationer och fasadtvätt',
        'Fönsterunderhåll, kittning, tätningslister och glasarbeten',
      ],
      en: [
        'Formulation and tracking of 5- to 10-year facility maintenance roadmaps',
        'Roof replacements, safety equipment, snow clearing, and gutter maintenance',
        'Facade repairs, brick repointing, render refurbishment, and facade washing',
        'Window maintenance, putty reglazing, thermal sealing, and glass replacement',
      ],
    },
    icon: 'Wrench',
    badge: { sv: 'Underhållsavtal', en: 'Maintenance Contracts' },
  },
  {
    id: 'vvs-ventilation-klimat',
    category: 'installations',
    title: {
      sv: 'VVS- och Ventilationsarbeten (Säker Vatten & OVK)',
      en: 'Plumbing (HVAC) & Ventilation Operations (Water Safety & OVK)',
    },
    subtitle: {
      sv: 'Auktoriserade rörinstallationer och energieffektiv ventilation',
      en: 'Certified plumbing installations and energy-efficient ventilation systems',
    },
    description: {
      sv: 'Vi utför kompletta rör- och ventilationslösningar: stambyten, badrumsrenoveringar, installation av energieffektiva värmepumpar, FTX-ventilationssystem och obligatorisk ventilationskontroll (OVK).',
      en: 'We provide comprehensive pipework and ventilation solutions: plumbing overhauls, bathroom renovations, heat pumps, heat recovery ventilation (FTX), and mandatory ventilation inspections (OVK).',
    },
    details: {
      sv: [
        'VVS-arbeten enligt Säker Vatten, stambyten och tappvatteninstallationer',
        'Värmepumpar, fjärrvärmecentraler och golvvärmesystem',
        'FTX-ventilation, kanalrensning, luftflödesinjustering och OVK-åtgärder',
        'Energideklarationer och åtgärder för minskad energiförbrukning',
      ],
      en: [
        'Certified plumbing adhering strictly to Swedish Water Safety regulations',
        'Heat pumps, district heating substations, and hydronic floor heating',
        'FTX ventilation systems, duct cleaning, airflow balancing, and OVK compliance',
        'Energy audits and retrofit solutions to reduce facility operating costs',
      ],
    },
    icon: 'Wrench',
    badge: { sv: 'Säker Vatten & OVK', en: 'Certified HVAC' },
  },
  {
    id: 'maleri-snickeri-ytskikt',
    category: 'construction',
    title: {
      sv: 'Måleri- och Snickeriarbeten',
      en: 'Painting & Carpentry Operations',
    },
    subtitle: {
      sv: 'Invändigt och utvändigt måleri, ytskikt och professionellt snickeri',
      en: 'Interior and exterior painting, surface finishes, and structural carpentry',
    },
    description: {
      sv: 'Våra yrkesmålare och snickare utför allt från fasadmålning och trapphusrenoveringar till platsbyggda snickerier, golvläggning, undertak och vägguppsättningar.',
      en: 'Our skilled painters and carpenters perform everything from building exterior painting and stairwell renovations to bespoke joinery, floor laying, acoustic ceilings, and partition walls.',
    },
    details: {
      sv: [
        'Utvändigt fasadmåleri med hållbara fasadsystem för svenskt klimat',
        'Invändigt måleri, spackling, tapetsering och våtrumsmålning',
        'Golvläggning (trägolv, parkett, klinkers) och golvslipning',
        'Byggnadssnickeri, montering av innerdörrar, lister, kök och garderober',
      ],
      en: [
        'Exterior facade painting with durable paint systems engineered for Nordic climate',
        'Interior painting, skim coating, wallpapering, and certified wet-room painting',
        'Flooring installation (hardwood, parquet, tiles) and floor sanding',
        'Carpentry, installation of internal doors, moldings, bespoke kitchens, and wardrobes',
      ],
    },
    icon: 'Sparkles',
    badge: { sv: 'Ytskikt & Hantverk', en: 'Finishes & Joinery' },
  },
  {
    id: 'fastighetsforvaltning-drift',
    category: 'realestate',
    title: {
      sv: 'Köp, Försäljning, Uthyrning & Fastighetsförvaltning',
      en: 'Real Estate Acquisition, Leasing & Asset Management',
    },
    subtitle: {
      sv: 'Värdeskapande fastighetsförvaltning och kommersiell utveckling',
      en: 'Value-creating property asset management and development',
    },
    description: {
      sv: 'Vi förvaltar, utvecklar, hyr ut och förvärvar bostads- och kommersiella fastigheter. Vi erbjuder fastighetsägare och BRF:er heltäckande teknisk och ekonomisk förvaltning.',
      en: 'We manage, develop, lease, and acquire residential and commercial properties. We offer landlords and housing cooperatives comprehensive technical and financial management.',
    },
    details: {
      sv: [
        'Löpande fastighetsdrift, teknisk tillsyn och felavhjälpande underhåll',
        'Uthyrning av bostadslägenheter, kontor och kommersiella lokaler',
        'Strategisk fastighetsutveckling och förvärvsanalys',
        'Upprättande av underhållsplaner och energieffektivisering',
      ],
      en: [
        'Continuous facility operations, routine inspection, and repair services',
        'Leasing of residential flats, modern offices, and commercial spaces',
        'Strategic real estate development and acquisition diligence',
        'Long-term maintenance plans and energy optimization roadmaps',
      ],
    },
    icon: 'Building2',
    badge: { sv: 'Fastighetsdrift', en: 'Property Asset Mgmt' },
  },
  {
    id: 'bemanning-personaluthyrning',
    category: 'staffing',
    title: {
      sv: 'Bemanning & Personaluthyrning',
      en: 'Staffing & Personnel Solutions',
    },
    subtitle: {
      sv: 'Kvalificerad arbetskraft och flexibla bemanningslösningar',
      en: 'Qualified workforce and flexible human resource leasing',
    },
    description: {
      sv: 'Vi bistår byggföretag, industrier och fastighetsbolag med certifierad, pålitlig och yrkeskunnig personal för kortare eller längre projekt.',
      en: 'We supply construction contractors, industrial facilities, and property companies with certified, dependable personnel for short-term surges or long-term projects.',
    },
    details: {
      sv: [
        'Uthyrning av certifierade snickare, målare, VVS-montörer och anläggningsarbetare',
        'Arbetsledare, platschefer och projektkoordinatorer',
        'Fullt ID06-registrerad personal med gällande kollektivavtal',
        'Skalbara bemanningslösningar vid produktionstoppar',
      ],
      en: [
        'Staffing of certified carpenters, painters, HVAC specialists, and groundworkers',
        'Site supervisors, construction managers, and project coordinators',
        'Strictly ID06-registered workforce operating under valid collective agreements',
        'Scalable workforce augmentation during peak construction phases',
      ],
    },
    icon: 'Users',
    badge: { sv: 'ID06-Auktoriserad', en: 'Certified Personnel' },
  },
  {
    id: 'handel-maskiner-material',
    category: 'trade',
    title: {
      sv: 'Handel med Byggmaterial, Inredning & Maskiner',
      en: 'Trade in Building Materials, Interior & Machinery',
    },
    subtitle: {
      sv: 'Import, export och uthyrning av entreprenadmaskiner',
      en: 'Import, export, and rental of heavy equipment & premium materials',
    },
    description: {
      sv: 'Vi bedriver handel, import och export av högkvalitativa byggmaterial, inredningsprodukter samt maskiner och tillhörande verktyg för professionella entreprenader.',
      en: 'We conduct international trade, import, and export of premium building supplies, interior fittings, and contracting machinery for professional builders.',
    },
    details: {
      sv: [
        'Import och grossisthandel med byggvirke, skivmaterial, isolering och stål',
        'Handel med moderna entreprenadmaskiner, ställningar och liftar',
        'Uthyrning av byggmaskiner, avfuktare, containers och specialutrustning',
        'Direktleveranser till byggarbetsplatser i hela Sverige',
      ],
      en: [
        'Import and wholesale supply of structural timber, sheet materials, insulation, and steel',
        'Trade in modern construction machinery, scaffolding systems, and boom lifts',
        'Rental of heavy construction equipment, industrial dehumidifiers, and containers',
        'Direct site delivery to construction projects across Sweden',
      ],
    },
    icon: 'Truck',
    badge: { sv: 'Import & Maskiner', en: 'Equipment & Trade' },
  },
];
