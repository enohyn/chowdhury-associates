"use client";

import {
  ArrowUpRight,
  ChevronDown,
  Gavel,
  MapPin,
  Menu,
  MessageCircle,
  Scale,
  X,
} from "lucide-react";
import { useState } from "react";

type Language = "en" | "bn";

const translations = {
  en: {
    brand: "CHOWDHURY ABDULLAH MONOWAR",
    title: "ADVOCATE · DHAKA",
    nav: ["Profile", "Practice", "Selected matters", "Contact"],
    heroEyebrow: "Advocate of the Supreme Court of Bangladesh",
    heroTitle: (
      <>
        A considered voice
        <br />
        <em>for the law.</em>
      </>
    ),
    heroIntro:
      "Chowdhury Abdullah Monowar is a Dhaka-based advocate appearing before the Supreme Court of Bangladesh and courts of subordinate jurisdiction.",
    profileCta: "View professional profile",
    startCta: "Start a conversation",
    location: "Dhaka, Bangladesh",
    enrollment: "Enrollment no. B-00000",
    portraitAlt: "Portrait of Advocate Chowdhury Abdullah Monowar",
    quote: "“Law is reason, free from passion.”",
    quoteAuthor: "— Aristotle",
    profileKicker: "Professional profile",
    profileTitle: (
      <>
        Precise counsel.
        <br />
        <em>Grounded practice.</em>
      </>
    ),
    profileCopy: [
      "With more than a decade of practice, Chowdhury Abdullah Monowar advises and represents individuals, businesses and institutions across a range of civil, criminal and commercial matters.",
      "His work is guided by preparation, discretion and a clear understanding of the law as it applies to each individual circumstance.",
    ],
    credentials: [
      "LL.B. (Hons.)|University of Dhaka",
      "Called to the Bar|Bangladesh Bar Council · 2010",
      "Courts of appearance|Supreme Court · District Courts",
    ],
    practiceKicker: "Areas of practice",
    practiceTitle: (
      <>
        Fields of <em>practice</em>
      </>
    ),
    practiceIntro: "Factual, focused legal advice across the matters below.",
    mattersKicker: "Selected matters",
    mattersTitle: (
      <>
        Work, presented
        <br />
        <em>with discretion.</em>
      </>
    ),
    mattersIntro:
      "Illustrative matters are anonymized to preserve client confidentiality.",
    contactKicker: "Private enquiries",
    contactTitle: (
      <>
        Begin with a<br />
        <em>conversation.</em>
      </>
    ),
    contactCopy:
      "For a confidential initial enquiry, please contact the chamber directly. You initiate the conversation; messages are never sent automatically.",
    chamber: "Chamber",
    address: (
      <>
        House 14, Road 7<br />
        Dhanmondi, Dhaka 1205
      </>
    ),
    hours: "Visiting hours",
    schedule: (
      <>
        Sunday — Thursday
        <br />
        5:00 PM — 8:00 PM
      </>
    ),
    whatsapp: "Message on WhatsApp",
    footer: "Informational portfolio · Not legal advice",
    whatsappMessage:
      "Hello Chowdhury Abdullah Monowar, I found your profile through your website. I would like to discuss a matter concerning ",
  },
  bn: {
    brand: "চৌধুরী আবদুল্লাহ মনোয়ার",
    title: "অ্যাডভোকেট · ঢাকা",
    nav: ["প্রোফাইল", "প্র্যাকটিস", "নির্বাচিত মামলা", "যোগাযোগ"],
    heroEyebrow: "বাংলাদেশ সুপ্রিম কোর্টের অ্যাডভোকেট",
    heroTitle: (
      <>
        আইনের জন্য
        <br />
        <em>একটি বিবেচিত কণ্ঠস্বর।</em>
      </>
    ),
    heroIntro:
      "চৌধুরী আবদুল্লাহ মনোয়ার ঢাকাভিত্তিক একজন অ্যাডভোকেট, যিনি বাংলাদেশ সুপ্রিম কোর্ট এবং অধস্তন আদালতে মামলা পরিচালনা করেন।",
    profileCta: "পেশাগত প্রোফাইল দেখুন",
    startCta: "আলোচনা শুরু করুন",
    location: "ঢাকা, বাংলাদেশ",
    enrollment: "এনরোলমেন্ট নং বি-০০০০০",
    portraitAlt: "অ্যাডভোকেট চৌধুরী আবদুল্লাহ মনোয়ারের প্রতিকৃতি",
    quote: "“আইন হলো আবেগমুক্ত যুক্তি।”",
    quoteAuthor: "— অ্যারিস্টটল",
    profileKicker: "পেশাগত প্রোফাইল",
    profileTitle: (
      <>
        সুনির্দিষ্ট পরামর্শ।
        <br />
        <em>অভিজ্ঞতায় ভিত্তি।</em>
      </>
    ),
    profileCopy: [
      "এক দশকেরও বেশি সময়ের অভিজ্ঞতায় চৌধুরী আবদুল্লাহ মনোয়ার দেওয়ানি, ফৌজদারি ও বাণিজ্যিক বিষয়ে ব্যক্তি, ব্যবসা প্রতিষ্ঠান এবং সংস্থাকে পরামর্শ ও প্রতিনিধিত্ব প্রদান করেন।",
      "প্রস্তুতি, গোপনীয়তা এবং প্রতিটি পরিস্থিতিতে প্রযোজ্য আইনের সুস্পষ্ট বোঝাপড়া তাঁর কাজের ভিত্তি।",
    ],
    credentials: [
      "এলএল.বি. (অনার্স)|ঢাকা বিশ্ববিদ্যালয়",
      "বারে অন্তর্ভুক্ত|বাংলাদেশ বার কাউন্সিল · ২০১০",
      "আদালতে উপস্থিতি|সুপ্রিম কোর্ট · জেলা আদালতসমূহ",
    ],
    practiceKicker: "আইনচর্চার ক্ষেত্র",
    practiceTitle: (
      <>
        আইনচর্চার <em>ক্ষেত্রসমূহ</em>
      </>
    ),
    practiceIntro: "নিচের বিষয়গুলোতে তথ্যভিত্তিক ও মনোযোগী আইনি পরামর্শ।",
    mattersKicker: "নির্বাচিত মামলা",
    mattersTitle: (
      <>
        কাজ, উপস্থাপিত
        <br />
        <em>সর্বোচ্চ গোপনীয়তায়।</em>
      </>
    ),
    mattersIntro:
      "মক্কেলের গোপনীয়তা রক্ষায় উদাহরণধর্মী মামলাগুলো পরিচয় গোপন রেখে উপস্থাপন করা হয়েছে।",
    contactKicker: "ব্যক্তিগত যোগাযোগ",
    contactTitle: (
      <>
        শুরু হোক একটি
        <br />
        <em>আলোচনা।</em>
      </>
    ),
    contactCopy:
      "গোপনীয় প্রাথমিক পরামর্শের জন্য সরাসরি চেম্বারে যোগাযোগ করুন। আপনিই আলোচনা শুরু করবেন; কোনো বার্তা স্বয়ংক্রিয়ভাবে পাঠানো হবে না।",
    chamber: "চেম্বার",
    address: (
      <>
        বাড়ি ১৪, রোড ৭<br />
        ধানমন্ডি, ঢাকা ১২০৫
      </>
    ),
    hours: "সাক্ষাতের সময়",
    schedule: (
      <>
        রবিবার — বৃহস্পতিবার
        <br />
        বিকেল ৫:০০ — রাত ৮:০০
      </>
    ),
    whatsapp: "হোয়াটসঅ্যাপে বার্তা পাঠান",
    footer: "তথ্যভিত্তিক পোর্টফোলিও · আইনি পরামর্শ নয়",
    whatsappMessage:
      "হ্যালো চৌধুরী আবদুল্লাহ মনোয়ার, আপনার ওয়েবসাইটে আপনার প্রোফাইল দেখেছি। আমি একটি বিষয় নিয়ে আলোচনা করতে চাই ",
  },
} as const;

const practiceAreas = {
  en: [
    ["Civil matters", "Property, contracts, injunctions and civil disputes."],
    [
      "Criminal matters",
      "Representation and advice across criminal proceedings.",
    ],
    ["Family Court", "Marriage, custody, maintenance and family disputes."],
    ["Documentation", "Drafting, review and legal documentation."],
    [
      "Banking matters",
      "Financial disputes, recovery and banking documentation.",
    ],
    ["Registration", "Deeds, instruments and registration guidance."],
    ["Customs & Labour", "Customs Act and labour law matters."],
    ["High Court matters", "Appeal, bail and writ applications."],
    ["VAT, Tax & Company", "Tax, VAT and company consultancy."],
    [
      "Immigration & Foreign Affairs",
      "Immigration and international law matters.",
    ],
  ],
  bn: [
    ["দেওয়ানি বিষয়", "সম্পত্তি, চুক্তি, নিষেধাজ্ঞা ও দেওয়ানি বিরোধ।"],
    ["ফৌজদারি বিষয়", "ফৌজদারি কার্যক্রমে প্রতিনিধিত্ব ও পরামর্শ।"],
    ["পারিবারিক আদালত", "বিবাহ, অভিভাবকত্ব, ভরণপোষণ ও পারিবারিক বিরোধ।"],
    ["দলিলপত্র", "খসড়া তৈরি, পর্যালোচনা ও আইনি দলিল।"],
    ["ব্যাংকিং বিষয়", "আর্থিক বিরোধ, ঋণ আদায় ও ব্যাংকিং দলিল।"],
    ["রেজিস্ট্রেশন", "দলিল, ইন্সট্রুমেন্ট ও নিবন্ধন সংক্রান্ত পরামর্শ।"],
    ["কাস্টমস ও শ্রম", "কাস্টমস আইন ও শ্রম আইন সংক্রান্ত বিষয়।"],
    ["হাইকোর্ট বিষয়", "আপিল, জামিন ও রিট আবেদন।"],
    ["ভ্যাট, ট্যাক্স ও কোম্পানি", "ট্যাক্স, ভ্যাট ও কোম্পানি পরামর্শ।"],
    ["ইমিগ্রেশন ও পররাষ্ট্র", "ইমিগ্রেশন ও আন্তর্জাতিক আইন সংক্রান্ত বিষয়।"],
  ],
} as const;

const matters = {
  en: [
    [
      "2024",
      "High Court Division",
      "Constitutional writ petition",
      "Representation in a public law matter concerning administrative action.",
    ],
    [
      "2023",
      "Civil jurisdiction",
      "Property and title dispute",
      "Advice and representation in a complex title-related proceeding.",
    ],
    [
      "2022",
      "Criminal jurisdiction",
      "Bail application",
      "Representation in a bail matter before the appropriate court.",
    ],
  ],
  bn: [
    [
      "২০২৪",
      "হাইকোর্ট বিভাগ",
      "সাংবিধানিক রিট আবেদন",
      "প্রশাসনিক কার্যক্রম সংক্রান্ত একটি জনস্বার্থ বিষয়ে প্রতিনিধিত্ব।",
    ],
    [
      "২০২৩",
      "দেওয়ানি এখতিয়ার",
      "সম্পত্তি ও স্বত্ব বিরোধ",
      "জটিল স্বত্ব-সংক্রান্ত মামলায় পরামর্শ ও প্রতিনিধিত্ব।",
    ],
    [
      "২০২২",
      "ফৌজদারি এখতিয়ার",
      "জামিন আবেদন",
      "উপযুক্ত আদালতে জামিন সংক্রান্ত বিষয়ে প্রতিনিধিত্ব।",
    ],
  ],
} as const;

export default function Page() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<string | null>(null);
  const copy = translations[language];
  const whatsappHref = `https://wa.me/8801864762060?text=${encodeURIComponent(copy.whatsappMessage)}`;

  return (
    <main className="site-shell" lang={language === "bn" ? "bn" : "en"}>
      <svg
        aria-hidden="true"
        className="glass-filter-defs"
        width="0"
        height="0"
      >
        <defs>
          <filter
            id="glass-distortion"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025 0.025"
              numOctaves="2"
              seed="92"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="65"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label={`${copy.brand} home`}>
          <span className="brand-mark">
            <Scale size={18} strokeWidth={1.4} />
          </span>
          <span>
            <strong>{copy.brand}</strong>
            <small>{copy.title}</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          className={menuOpen ? "main-nav open" : "main-nav"}
          aria-label="Main navigation"
        >
          {copy.nav.map((label, index) => (
            <a
              key={label}
              href={["#profile", "#practice", "#matters", "#contact"][index]}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language-switcher" role="group" aria-label="Language">
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <button
              className={language === "bn" ? "active" : ""}
              onClick={() => setLanguage("bn")}
              aria-pressed={language === "bn"}
            >
              বাংলা
            </button>
          </div>
          <a
            className="header-action"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> {copy.whatsapp}
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> {copy.heroEyebrow}
          </p>
          <h1>{copy.heroTitle}</h1>
          <p className="hero-intro">{copy.heroIntro}</p>
          <div className="hero-actions">
            <a className="button button-brass" href="#profile">
              {copy.profileCta} <ArrowUpRight size={16} />
            </a>
            <a
              className="text-link"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              {copy.startCta} <span>↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={15} /> {copy.location}
            </span>
            <span>{copy.enrollment}</span>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-card glass-panel">
            <img src="/advocate-portrait.png" alt={copy.portraitAlt} />
            <div className="portrait-caption">
              <span>{copy.quote}</span>
              <small>{copy.quoteAuthor}</small>
            </div>
          </div>
          <div className="est-badge">
            EST.
            <br />
            <strong>2010</strong>
          </div>
          <div className="seal">
            <Gavel size={18} />
            <span>CAM</span>
          </div>
        </div>
      </section>

      <section className="profile-strip" id="profile">
        <div className="section-kicker">
          01 <span>{copy.profileKicker}</span>
        </div>
        <div className="profile-grid">
          <h2>{copy.profileTitle}</h2>
          <div className="profile-text">
            {copy.profileCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="credential-list">
            {copy.credentials.map((credential) => {
              const [title, detail] = credential.split("|");
              return (
                <div key={title}>
                  <strong>{title}</strong>
                  <span>{detail}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="practice-section" id="practice">
        <div className="section-heading">
          <div className="section-kicker">
            02 <span>{copy.practiceKicker}</span>
          </div>
          <h2>{copy.practiceTitle}</h2>
          <p>{copy.practiceIntro}</p>
        </div>
        <div className="practice-grid">
          {practiceAreas[language].map(([title, detail], index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <button
                className={
                  activeArea === number
                    ? "practice-card glass-panel active"
                    : "practice-card glass-panel"
                }
                key={number}
                onClick={() =>
                  setActiveArea(activeArea === number ? null : number)
                }
              >
                <span className="card-number">{number}</span>
                <span className="card-content">
                  <strong>{title}</strong>
                  <span>{detail}</span>
                </span>
                <ChevronDown size={17} className="card-chevron" />
              </button>
            );
          })}
        </div>
      </section>

      <section className="matters-section" id="matters">
        <div className="section-heading matters-heading">
          <div className="section-kicker">
            03 <span>{copy.mattersKicker}</span>
          </div>
          <h2>{copy.mattersTitle}</h2>
          <p>{copy.mattersIntro}</p>
        </div>
        <div className="matters-list">
          {matters[language].map(([year, field, title, detail]) => (
            <article className="matter-row" key={year}>
              <span className="matter-year">{year}</span>
              <span className="matter-field">{field}</span>
              <div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
              <ArrowUpRight size={18} />
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner glass-panel">
          <div>
            <div className="section-kicker">
              04 <span>{copy.contactKicker}</span>
            </div>
            <h2>{copy.contactTitle}</h2>
            <p>{copy.contactCopy}</p>
          </div>
          <div className="contact-details">
            <div>
              <span>{copy.chamber}</span>
              <strong>{copy.address}</strong>
            </div>
            <div>
              <span>{copy.hours}</span>
              <strong>{copy.schedule}</strong>
            </div>
            <a
              className="button button-brass"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} /> {copy.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">
            <Scale size={16} strokeWidth={1.4} />
          </span>
          <span>
            <strong>{copy.brand}</strong>
            <small>{copy.title}</small>
          </span>
        </div>
        <p>{copy.footer}</p>
        <div className="socials">
          <a href="#contact" aria-label="Facebook">
            f
          </a>
          <a href="#contact" aria-label="LinkedIn">
            in
          </a>
          <a href="#home" aria-label="Back to top">
            ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
