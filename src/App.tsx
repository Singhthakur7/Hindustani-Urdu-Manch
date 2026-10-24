/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface EventItem {
  id: string;
  index: string;
  title: string;
  urduTitle: string;
  category: 'ghazals' | 'competitions' | 'seminars';
  categoryLabel: string;
  schedule: string;
  shortSchedule: string;
  hall: string;
  entryType: string;
  formOptionValue: string;
  summary: string;
  highlights: string[];
  featuredArtistsOrGuests: string;
  artworkType: 'ghazal' | 'competition' | 'afsana' | 'tribute';
}

interface CoupletItem {
  id: string;
  shortTab: string;
  poet: string;
  era: string;
  urdu: string;
  hindi: string;
  kannada: string;
  transliteration: string;
  translation: string;
  occasion: string;
}

const COUPLETS: CoupletItem[] = [
  {
    id: 'mehfil',
    shortTab: 'Ghalib Ghazal',
    poet: 'Mirza Asadullah Khan Ghalib',
    era: 'Classical Diwan Tradition',
    urdu: 'ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے',
    hindi: 'हज़ारों ख़्वाहिशें ऐसी कि हर ख़्वाहिश पे दम निकले',
    kannada: 'ಹಜಾರೋಂ ಖ್ವಾಹಿಶೇಂ ಐಸಿ ಕಿ ಹರ್ ಖ್ವಾಹಿಶ್ ಪೆ ದಮ್ ನಿಕಲೇ',
    transliteration: 'Hazaaron khwahishein aisi ke har khwahish pe dam nikle',
    translation:
      'A thousand desires, each worth a lifetime of longing — recited in the candlelit hush of HUM Centre.',
    occasion: 'Recited at Classical Nazm & Ghazal Mehfils',
  },
  {
    id: 'rafi-tribute',
    shortTab: 'Rafi Retro',
    poet: 'Shakeel Badayuni · Voiced by Mohd. Rafi',
    era: 'Golden Era Retro Tribute (1960)',
    urdu: 'چودہویں کا چاند ہو یا آفتاب ہو، جو بھی ہو تم خدا کی قسم لاجواب ہو',
    hindi: 'चौदहवीं का चांद हो या आफ़ताब हो, जो भी हो तुम ख़ुदा की क़सम लाजवाಬ್ हो',
    kannada: 'ಚೌದಹ್ವೀ ಕಾ ಚಾಂದ್ ಹೋ ಯಾ ಆಫ್ತಾಬ್ ಹೋ, ಜೋ ಭೀ ಹೋ ತುಮ್ ಲಾಜವಾಬ್ ಹೋ',
    transliteration: 'Chaudhvin ka chand ho ya aaftab ho, jo bhi ho tum Khuda ki qasam lajawab ho',
    translation:
      'Whether you are the full fourteenth moon or the radiant sun — an immortal melody celebrated at our Monday Retro Evenings.',
    occasion: 'Featured in Tribute to Legends & Monday Ghazals',
  },
  {
    id: 'youth-adab',
    shortTab: 'Iqbal Youth',
    poet: 'Allama Iqbal',
    era: 'Youth Literary Mentorship',
    urdu: 'لب پہ آتی ہے دعا بن کے تمنا میری، زندگی شمع کی صورت ہو خدایا میری',
    hindi: 'लब पे आती है दुआ बन के तमन्ना मेरी, ज़िंदगी शमा की सूरत हो ख़ुदाया मेरी',
    kannada: 'ಲಬ್ ಪೆ ಆತಿ ಹೈ ದುಆ ಬನ್ ಕೆ ತಮನ್ನಾ ಮೇರಿ, ಜಿಂದಗಿ ಶಮಾ ಕಿ ಸೂರತ್ ಹೋ',
    transliteration: 'Lab pe aati hai dua ban ke tamanna meri, zindagi shama ki soorat ho Khudaya meri',
    translation:
      'May my life illuminate the world like a steadfast lamp — the guiding ethos of our Inter-College Urdu Poetry Recitation Shield.',
    occasion: 'Opening Invocation at Inter-College Competitions',
  },
];

const EVENTS: EventItem[] = [
  {
    id: 'monday-ghazals',
    index: '01',
    title: 'Monday Ghazals & Retro Evenings',
    urduTitle: 'پیر کی شام غزل اور سنہرے نغمے',
    category: 'ghazals',
    categoryLabel: 'Weekly Musical Mehfil',
    schedule: 'Every Monday · 6:30 PM – 9:00 PM IST',
    shortSchedule: 'Every Monday · 6:30 PM',
    hall: 'Diwan-e-Naghma Hall, HUM Centre',
    entryType: 'Open to Community · Prior RSVP',
    formOptionValue: 'Ghazal Night',
    summary:
      'Timeless melodies and golden era classics performed live with acoustic harmonium, tabla, and sarangi at HUM Centre. Experience the poetic depth of classical Ghazals alongside cherished retro gems.',
    highlights: [
      'Live acoustic accompaniment on traditional harmonium and tabla',
      'Curated repertoire of Jagjit Singh, Mehdi Hassan, Begum Akhtar & vintage film ghazals',
      'Interactive sher-o-shayari introductions explaining poetic metaphors in Urdu, Hindi & Kannada',
    ],
    featuredArtistsOrGuests: 'Resident Ensemble & Visiting Ghazal Vocalists from across Karnataka',
    artworkType: 'ghazal',
  },
  {
    id: 'inter-college-poetry',
    index: '02',
    title: 'Inter-College Urdu Poetry Recitation Competition',
    urduTitle: 'بین الکلیاتی اردو شعری مقابلہ',
    category: 'competitions',
    categoryLabel: 'Youth Literary Championship',
    schedule: 'Quarterly Championship · 10:30 AM – 4:30 PM IST',
    shortSchedule: 'Quarterly · 10:30 AM',
    hall: 'Main Literary Auditorium, HUM Centre',
    entryType: 'University & College Delegations',
    formOptionValue: 'Poetry Recitation',
    summary:
      'Promoting youth talent across Bengaluru universities and degree colleges with engraved rolling trophies, merit certificates, and mentorship in classical Urdu diction (Talaffuz) and poetic meter (Beher).',
    highlights: [
      'Engraved HUM Rolling Shield, individual brass trophies, and citations for winners',
      'Judged by eminent Urdu professors, poets, and literary critics on Talaffuz, Lehja & Kalam selection',
      'Complimentary preparatory pronunciation workshop for participating non-native Urdu students',
    ],
    featuredArtistsOrGuests: 'Open to Undergraduate & Postgraduate Students across Bengaluru',
    artworkType: 'competition',
  },
  {
    id: 'afsano-ki-shaam',
    index: '03',
    title: 'Afsano Ki Shaam & Nazm Sarayi',
    urduTitle: 'افسانوں کی شام اور نظم سرائی',
    category: 'seminars',
    categoryLabel: 'Literary Seminar & Readings',
    schedule: 'Second & Fourth Saturday · 5:30 PM – 8:30 PM IST',
    shortSchedule: '2nd & 4th Sat · 5:30 PM',
    hall: 'Archival Reading Salon, HUM Centre',
    entryType: 'Literary Circle · RSVP Required',
    formOptionValue: 'Afsano Ki Shaam & Nazm Sarayi',
    summary:
      'Dramatic readings of classic and contemporary Urdu short stories (Afsane) and thematic poetry seminars (Nazm Sarayi) led by eminent literary figures, authors, and translators.',
    highlights: [
      'Unabridged dramatic readings from Manto, Ismat Chughtai, Premchand, and Qurratulain Hyder',
      'Moderated critical discourse on contemporary Deccani and Hindustani literary traditions',
      'Archival book display and bilingual glossary handouts for young readers',
    ],
    featuredArtistsOrGuests: 'Eminent Urdu Authors, Dramatists & Sahitya Akademi Scholars',
    artworkType: 'afsana',
  },
  {
    id: 'tribute-to-legends',
    index: '04',
    title: 'Tribute to Legends',
    urduTitle: 'خراجِ عقیدت: رفیع، مکیش اور لتا',
    category: 'ghazals',
    categoryLabel: 'Commemorative Musical Gala',
    schedule: 'Special Anniversary Evenings · 6:00 PM – 9:30 PM IST',
    shortSchedule: 'Anniversary Evenings · 6:00 PM',
    hall: 'Main Literary Auditorium, HUM Centre',
    entryType: 'Reserved Seating · Family Gathering',
    formOptionValue: 'Tribute to Legends',
    summary:
      'Special birth and death anniversary musical tributes honoring the immortal voices of Mohd. Rafi, Mukesh, Lata Mangeshkar, Talat Mahmood, and legendary lyricists Sahir Ludhianvi, Majrooh Sultanpuri, and Kaifi Azmi.',
    highlights: [
      'Full-length thematic concerts celebrating the golden era of Indian cinema (1950s–1970s)',
      'Rare archival anecdotes on the collaboration between Urdu poets and playback maestros',
      'Community chorus finale and commemorative souvenir booklet for attendees',
    ],
    featuredArtistsOrGuests: 'Guest Playback Vocalists, Retro Music Historians & HUM Orchestra',
    artworkType: 'tribute',
  },
];

function EventIllustration({ type }: { type: EventItem['artworkType'] }) {
  if (type === 'ghazal') {
    return (
      <svg
        viewBox="0 0 400 240"
        className="w-full h-full object-cover"
        role="img"
        aria-label="Illustration of a classical harmonium and vintage brass microphone in warm candlelight"
      >
        <defs>
          <linearGradient id="bgGhazal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#043927" />
            <stop offset="60%" stopColor="#064E3B" />
            <stop offset="100%" stopColor="#022c22" />
          </linearGradient>
          <radialGradient id="glowGhazal" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#D97706" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="240" fill="url(#bgGhazal)" />
        <circle cx="200" cy="115" r="115" fill="url(#glowGhazal)" />
        <path
          d="M 40,225 L 40,95 C 40,45 120,22 200,15 C 280,22 360,45 360,95 L 360,225"
          fill="none"
          stroke="#D97706"
          strokeWidth="1.2"
          strokeOpacity="0.45"
        />
        {/* Harmonium body */}
        <rect x="85" y="140" width="165" height="50" rx="4" fill="#451A03" stroke="#D97706" strokeWidth="1.5" />
        <rect x="95" y="127" width="145" height="15" rx="2" fill="#FDFBF7" stroke="#B45309" strokeWidth="1" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <line key={i} x1={105 + i * 11} y1="127" x2={105 + i * 11} y2="142" stroke="#1C1917" strokeWidth="1" />
        ))}
        {[0, 1, 3, 4, 5, 7, 8, 10].map((i) => (
          <rect key={i} x={101 + i * 11} y="127" width="6" height="9" fill="#1C1917" />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={115 + i * 26} cy="165" r="4.5" fill="#D97706" />
        ))}
        {/* Vintage Ribbon Microphone */}
        <line x1="300" y1="95" x2="300" y2="195" stroke="#D97706" strokeWidth="3" />
        <rect x="278" y="191" width="44" height="8" rx="4" fill="#B45309" />
        <rect x="286" y="52" width="28" height="42" rx="14" fill="#1C1917" stroke="#F59E0B" strokeWidth="2" />
        <line x1="286" y1="64" x2="314" y2="64" stroke="#D97706" strokeWidth="1" />
        <line x1="286" y1="73" x2="314" y2="73" stroke="#D97706" strokeWidth="1" />
        <line x1="286" y1="82" x2="314" y2="82" stroke="#D97706" strokeWidth="1" />
        {/* Candle */}
        <path d="M 135,100 L 145,100 L 142,74 L 138,74 Z" fill="#FDFBF7" />
        <path d="M 140,58 C 145,66 144,73 140,74 C 136,73 135,66 140,58 Z" fill="#F59E0B" />
        <text x="200" y="218" textAnchor="middle" fill="#FDE68A" fontSize="10" letterSpacing="3" opacity="0.85">
          SHAM-E-GHAZAL · EVERY MONDAY
        </text>
      </svg>
    );
  }

  if (type === 'competition') {
    return (
      <svg
        viewBox="0 0 400 240"
        className="w-full h-full object-cover"
        role="img"
        aria-label="Illustration of an engraved brass literary trophy and certificate scroll"
      >
        <defs>
          <linearGradient id="bgComp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#064E3B" />
            <stop offset="100%" stopColor="#022c22" />
          </linearGradient>
          <radialGradient id="glowComp" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="240" fill="url(#bgComp)" />
        <circle cx="200" cy="115" r="110" fill="url(#glowComp)" />
        <path
          d="M 40,225 L 40,95 C 40,45 120,22 200,15 C 280,22 360,45 360,95 L 360,225"
          fill="none"
          stroke="#D97706"
          strokeWidth="1.2"
          strokeOpacity="0.45"
        />
        <rect x="160" y="168" width="80" height="24" rx="3" fill="#451A03" stroke="#D97706" strokeWidth="1.5" />
        <rect x="174" y="156" width="52" height="12" fill="#B45309" />
        <path d="M 192,126 L 208,126 L 212,156 L 188,156 Z" fill="#D97706" />
        <path
          d="M 155,58 L 245,58 C 245,105 225,128 200,128 C 175,128 155,105 155,58 Z"
          fill="#F59E0B"
          fillOpacity="0.22"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        <path d="M 155,68 C 130,68 132,105 162,110" fill="none" stroke="#D97706" strokeWidth="2.5" />
        <path d="M 245,68 C 270,68 268,105 238,110" fill="none" stroke="#D97706" strokeWidth="2.5" />
        <circle cx="200" cy="88" r="15" fill="none" stroke="#FEF3C7" strokeWidth="1.2" />
        <text x="200" y="93" textAnchor="middle" fill="#FEF3C7" fontSize="11" fontWeight="bold">
          ہم
        </text>
        <rect x="78" y="145" width="65" height="18" rx="9" fill="#FDFBF7" stroke="#D97706" strokeWidth="1.5" />
        <line x1="108" y1="145" x2="108" y2="163" stroke="#B45309" strokeWidth="2.5" />
        <text x="200" y="218" textAnchor="middle" fill="#FDE68A" fontSize="10" letterSpacing="3" opacity="0.85">
          INTER-COLLEGE SHIELD · BENGALURU
        </text>
      </svg>
    );
  }

  if (type === 'afsana') {
    return (
      <svg
        viewBox="0 0 400 240"
        className="w-full h-full object-cover"
        role="img"
        aria-label="Illustration of an open Urdu manuscript book, brass inkpot, and calligraphic quill"
      >
        <defs>
          <linearGradient id="bgAfsana" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#022c22" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#bgAfsana)" />
        <path
          d="M 40,225 L 40,95 C 40,45 120,22 200,15 C 280,22 360,45 360,95 L 360,225"
          fill="none"
          stroke="#D97706"
          strokeWidth="1.2"
          strokeOpacity="0.45"
        />
        <path
          d="M 85,172 Q 142,158 200,175 Q 258,158 315,172 L 315,85 Q 258,70 200,88 Q 142,70 85,85 Z"
          fill="#FDFBF7"
          stroke="#D97706"
          strokeWidth="2"
        />
        <line x1="200" y1="88" x2="200" y2="175" stroke="#B45309" strokeWidth="1.5" />
        {[0, 1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            <line
              x1="105"
              y1={105 + i * 14}
              x2="182"
              y2={105 + i * 14}
              stroke="#064E3B"
              strokeWidth="1.5"
              strokeOpacity="0.55"
            />
            <line
              x1="218"
              y1={105 + i * 14}
              x2="295"
              y2={105 + i * 14}
              stroke="#064E3B"
              strokeWidth="1.5"
              strokeOpacity="0.55"
            />
          </React.Fragment>
        ))}
        <rect x="275" y="155" width="26" height="24" rx="4" fill="#D97706" stroke="#FEF3C7" strokeWidth="1" />
        <path d="M 290,157 L 335,62 C 312,68 295,94 288,130 Z" fill="#F59E0B" fillOpacity="0.85" />
        <text x="200" y="218" textAnchor="middle" fill="#FDE68A" fontSize="10" letterSpacing="3" opacity="0.85">
          AFSANO KI SHAAM · NAZM SARAYI
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 240"
      className="w-full h-full object-cover"
      role="img"
      aria-label="Illustration of a golden era vinyl record and classic playback tribute emblem"
    >
      <defs>
        <linearGradient id="bgTribute" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#043927" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#bgTribute)" />
      <path
        d="M 40,225 L 40,95 C 40,45 120,22 200,15 C 280,22 360,45 360,95 L 360,225"
        fill="none"
        stroke="#D97706"
        strokeWidth="1.2"
        strokeOpacity="0.45"
      />
      <circle cx="200" cy="112" r="64" fill="#1C1917" stroke="#D97706" strokeWidth="2" />
      <circle cx="200" cy="112" r="50" fill="none" stroke="#FDFBF7" strokeWidth="0.5" strokeOpacity="0.3" />
      <circle cx="200" cy="112" r="36" fill="none" stroke="#FDFBF7" strokeWidth="0.5" strokeOpacity="0.3" />
      <circle cx="200" cy="112" r="20" fill="#D97706" />
      <circle cx="200" cy="112" r="5" fill="#FDFBF7" />
      <path d="M 282,62 L 282,106 L 232,126" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      <circle cx="282" cy="62" r="6" fill="#D97706" />
      <text x="200" y="218" textAnchor="middle" fill="#FDE68A" fontSize="10" letterSpacing="3" opacity="0.85">
        RAFI · MUKESH · LATA TRIBUTES
      </text>
    </svg>
  );
}

export default function App() {
  const [selectedCoupletId, setSelectedCoupletId] = useState<string>('mehfil');
  const [eventFilter, setEventFilter] = useState<'all' | 'ghazals' | 'competitions' | 'seminars'>('all');
  const [activePillar, setActivePillar] = useState<number>(0);
  const [selectedModalEvent, setSelectedModalEvent] = useState<EventItem | null>(null);
  const [activeMobileNav, setActiveMobileNav] = useState<'home' | 'events' | 'register' | 'venue'>('home');
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false);

  // Registration Form State
  const [fullName, setFullName] = useState<string>('');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [eventOfInterest, setEventOfInterest] = useState<string>('Ghazal Night');
  const [institutionOrGuests, setInstitutionOrGuests] = useState<string>('1 Seat (Individual)');
  const [message, setMessage] = useState<string>('');
  const [formError, setFormError] = useState<string>('');
  const [submittedTicket, setSubmittedTicket] = useState<{
    referenceCode: string;
    fullName: string;
    whatsappNumber: string;
    email: string;
    eventOfInterest: string;
    institutionOrGuests: string;
    message: string;
    timestamp: string;
  } | null>(null);

  const activeCouplet = COUPLETS.find((c) => c.id === selectedCoupletId) || COUPLETS[0];

  const filteredEvents =
    eventFilter === 'all' ? EVENTS : EVENTS.filter((ev) => ev.category === eventFilter);

  const handleSelectEventForRegistration = (formOptionValue: string) => {
    setEventOfInterest(formOptionValue);
    setSubmittedTicket(null);
    setSelectedModalEvent(null);
    setActiveMobileNav('register');
    const registerEl = document.getElementById('register');
    if (registerEl) {
      registerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyAddress = () => {
    const addr =
      "HUM Centre, Off Queen's Road, Next to Shifa Hospital, Beside Maratha Darshan Hotel, Bengaluru - 560001";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(addr);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    const trimmedName = fullName.trim();
    const cleanedPhone = whatsappNumber.replace(/[\s\-()]/g, '');
    const trimmedEmail = email.trim();

    if (trimmedName.length < 2) {
      setFormError('Please enter your full name so our hospitality desk can reserve your seat.');
      return;
    }

    if (!/^\+?[0-9]{10,14}$/.test(cleanedPhone)) {
      setFormError('Please enter a valid 10-digit WhatsApp or mobile number (e.g. +91 9845498354).');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setFormError('Please enter a valid email address to receive your programme invitation.');
      return;
    }

    const randomCode = `HUM-${Math.floor(1000 + Math.random() * 9000)}`;
    const nowStr = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    setSubmittedTicket({
      referenceCode: randomCode,
      fullName: trimmedName,
      whatsappNumber: whatsappNumber.trim(),
      email: trimmedEmail,
      eventOfInterest,
      institutionOrGuests,
      message: message.trim(),
      timestamp: nowStr,
    });
  };

  const pillars = [
    {
      index: '01. Mushaira & Adab',
      title: 'Preserving the Living Poetic Canon of Deccan & Hindustan',
      urduScript: 'اردو ادب اور مشاعرہ کی روایت',
      description:
        'From the metaphysical depth of Ghalib and Mir Taqi Mir to the progressive prose of Manto and Ismat Chughtai, HUM Centre hosts curated literary evenings where verses are recited with authentic diction and unpacked in Urdu, Hindi, and Kannada.',
      quote:
        '“Attending Afsano Ki Shaam at HUM Centre introduced our postgraduate literature students to the living cadence of spoken Urdu poetry right in the heart of Bengaluru.”',
      attribution: 'Prof. Syed Mahmood · Bengaluru City University',
      metricLabel: '120+ Literary Gatherings Hosted',
    },
    {
      index: '02. Retro Tributes',
      title: 'Celebrating Mohd. Rafi, Mukesh, Lata Mangeshkar & Immortal Lyricists',
      urduScript: 'سنہرے دور کے عظیم گلوکاروں کو خراجِ عقیدت',
      description:
        'Every Monday evening and on landmark birth and death anniversaries, our hall resonates with acoustic tributes to the golden era of Indian playback music—honouring Sahir Ludhianvi, Shakeel Badayuni, Majrooh Sultanpuri, and Naushad.',
      quote:
        '“The Monday Ghazals & Retro Evenings carry an intimacy you cannot find in commercial auditoriums—pure acoustic instruments and genuine connoisseurs of Mohd. Rafi and Mukesh.”',
      attribution: 'Anwar Pasha & Family · Patron Members, Bengaluru',
      metricLabel: 'Every Monday · 6:30 PM Acoustic Mehfils',
    },
    {
      index: '03. Youth Shield',
      title: 'Nurturing the Next Generation of Reciters, Poets & Scholars',
      urduScript: 'نوجوان نسل اور بین الکلیاتی مقابلے',
      description:
        'Through our flagship Inter-College Urdu Poetry Recitation Competition, university students from across Karnataka compete for the HUM Rolling Shield, engraved trophies, and merit certificates.',
      quote:
        '“Winning the Inter-College Recitation Trophy at HUM Centre gave our college literary club confidence to engage deeply with classical Ghazals and Nazms.”',
      attribution: 'Ayesha Tabassum · Gold Medalist, Inter-College Shield',
      metricLabel: '28+ Participating Bengaluru Colleges',
    },
  ];

  const quickEventOptions = [
    { value: 'Ghazal Night', label: 'Monday Ghazal Night', icon: 'fa-music' },
    { value: 'Poetry Recitation', label: 'Poetry Competition', icon: 'fa-trophy' },
    { value: 'Afsano Ki Shaam & Nazm Sarayi', label: 'Afsano Ki Shaam', icon: 'fa-book-open' },
    { value: 'Tribute to Legends', label: 'Rafi & Mukesh Tribute', icon: 'fa-record-vinyl' },
    { value: 'Community Member', label: 'Community Member', icon: 'fa-users' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1C1917] pb-20 md:pb-0">
      {/* 1. TOP BAR CONTRACT: Compact 54px on Mobile, Full 3-Zone on Desktop */}
      <header className="sticky top-0 z-30 bg-[#064E3B]/95 backdrop-blur-md text-[#FDFBF7] border-b border-[#D97706]/30">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4 lg:gap-8 px-4 sm:px-6 h-14 sm:h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={() => setActiveMobileNav('home')}
            className="font-serif-display text-lg sm:text-2xl font-semibold tracking-tight text-[#FDFBF7] hover:text-[#FDE68A] transition-colors whitespace-nowrap truncate"
          >
            HUM — Hindustani Urdu Manch
          </a>

          {/* Zone 2: 5 concise single-line text navigation links (Desktop) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#FDFBF7]/90"
          >
            <a
              href="#home"
              className="hover:text-[#FDE68A] hover:underline underline-offset-8 decoration-[#D97706] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-[#FDE68A] hover:underline underline-offset-8 decoration-[#D97706] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              About Us
            </a>
            <a
              href="#events"
              className="hover:text-[#FDE68A] hover:underline underline-offset-8 decoration-[#D97706] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Events &amp; Ghazals
            </a>
            <a
              href="#competitions"
              className="hover:text-[#FDE68A] hover:underline underline-offset-8 decoration-[#D97706] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Competitions
            </a>
            <a
              href="#venue"
              className="hover:text-[#FDE68A] hover:underline underline-offset-8 decoration-[#D97706] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Venue &amp; Contact
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action (44px min touch target) */}
          <div className="flex items-center shrink-0">
            <a
              href="tel:9845498354"
              className="inline-flex items-center justify-center gap-2 min-h-[40px] sm:min-h-[44px] px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-[#1C1917] bg-[#D97706] hover:bg-[#F59E0B] active:scale-[0.98] rounded-lg transition-all whitespace-nowrap shrink-0 shadow-xs"
            >
              <i className="fa-solid fa-phone-volume text-xs" aria-hidden="true" />
              <span>RSVP / Join Community</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. MOBILE-FIRST HERO SECTION */}
        <section
          id="home"
          className="relative bg-[#064E3B] text-[#FDFBF7] overflow-hidden border-b border-[#D97706]/40"
        >
          {/* Subtle architectural lattice overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 25%, #D97706 1px, transparent 1px), radial-gradient(circle at 80% 75%, #D97706 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 pt-7 pb-10 sm:py-14 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Left Column: Poetic Cultural Headline & Mobile Thumb-Friendly Dual CTAs */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  {/* Multi-lingual Script Kicker */}
                  <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm tracking-widest uppercase text-[#FDE68A] font-medium">
                    <span className="font-urdu text-base sm:text-lg tracking-normal text-[#FDFBF7]">
                      ہم
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>हम</span>
                    <span aria-hidden="true">·</span>
                    <span>ಹಮ್</span>
                    <span aria-hidden="true">·</span>
                    <span>Queen&apos;s Road, Bengaluru</span>
                  </div>

                  <h1
                    className="font-serif-display text-[2.15rem] sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.12] tracking-tight text-[#FDFBF7]"
                    style={{ textWrap: 'balance' }}
                  >
                    Preserving Heritage, Celebrating Urdu Literature &amp; Timeless Melodies
                  </h1>

                  <p className="text-sm sm:text-lg text-[#FDFBF7]/85 leading-relaxed max-w-2xl">
                    Welcome to{' '}
                    <strong className="font-semibold text-[#FDE68A]">
                      Hindustani Urdu Manch (HUM Centre)
                    </strong>
                    —Bengaluru&apos;s intimate cultural sanctuary for weekly Monday Ghazal &amp; retro musical evenings,
                    classical Mushaira, and inter-college Urdu poetry recitation championships.
                  </p>
                </div>

                {/* Full-Width Thumb-Zone Dual CTAs on Mobile, Inline on Desktop */}
                <div className="space-y-5 pt-1">
                  <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-3 sm:gap-4">
                    <a
                      href="#register"
                      onClick={() => setActiveMobileNav('register')}
                      className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#1C1917] bg-[#D97706] hover:bg-[#F59E0B] active:scale-[0.98] rounded-xl transition-all whitespace-nowrap shrink-0 shadow-md"
                    >
                      <i className="fa-regular fa-calendar-check text-sm" aria-hidden="true" />
                      <span>Register for Next Programme</span>
                    </a>

                    <a
                      href="#events"
                      onClick={() => setActiveMobileNav('events')}
                      className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#FDFBF7] bg-[#043927]/80 border border-[#FDE68A]/45 hover:border-[#FDE68A] active:scale-[0.98] rounded-xl transition-all whitespace-nowrap shrink-0"
                    >
                      <span>Explore Upcoming Events</span>
                      <i className="fa-solid fa-arrow-down-long text-xs text-[#FDE68A]" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Quick Tap Location & Hotline Strip */}
                  <div className="pt-4 border-t border-[#FDFBF7]/15 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#FDFBF7]/85">
                    <span>Off Queen&apos;s Road, Next to Shifa Hospital</span>
                    <span aria-hidden="true">·</span>
                    <span>Beside Maratha Darshan Hotel</span>
                    <span aria-hidden="true">·</span>
                    <a
                      href="tel:9845498354"
                      className="text-[#FDE68A] underline underline-offset-4 font-semibold tabular-nums"
                    >
                      +91 98454 98354
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Diwan-e-Sukhan (Touch Card with 44px Tabs) */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-[#043927] border border-[#D97706]/40 rounded-2xl p-5 sm:p-7 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3 border-b border-[#D97706]/25 pb-3.5">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#FDE68A] font-semibold">
                        Diwan-e-Sukhan · Verse Explorer
                      </p>
                      <p className="text-xs text-[#FDFBF7]/70 mt-0.5">
                        Tap a poet to read in Urdu, Hindi, Kannada &amp; English
                      </p>
                    </div>
                    <i className="fa-solid fa-feather-pointed text-[#D97706] text-base" aria-hidden="true" />
                  </div>

                  {/* Touch-optimized 44px Segmented Control */}
                  <div
                    role="tablist"
                    aria-label="Curated Urdu Couplets"
                    className="grid grid-cols-3 gap-1.5 p-1 bg-[#022c22] rounded-xl border border-[#D97706]/25"
                  >
                    {COUPLETS.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={selectedCoupletId === tab.id}
                        onClick={() => setSelectedCoupletId(tab.id)}
                        className={`min-h-[42px] px-2 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap truncate active:scale-[0.97] ${
                          selectedCoupletId === tab.id
                            ? 'bg-[#D97706] text-[#1C1917] shadow-xs'
                            : 'text-[#FDFBF7]/80 hover:text-[#FDFBF7]'
                        }`}
                      >
                        {tab.shortTab}
                      </button>
                    ))}
                  </div>

                  {/* Multi-script Calligraphic Display Box */}
                  <div className="p-4 sm:p-5 bg-[#064E3B]/75 border border-[#D97706]/30 rounded-xl space-y-2.5">
                    <p
                      dir="rtl"
                      lang="ur"
                      className="font-urdu text-xl sm:text-2xl text-[#FEF3C7] text-right leading-loose"
                    >
                      {activeCouplet.urdu}
                    </p>
                    <p className="text-xs text-[#FDFBF7]/80 font-medium leading-relaxed">
                      {activeCouplet.hindi} <span className="mx-1 text-[#D97706]">·</span> {activeCouplet.kannada}
                    </p>
                    <p className="font-serif-display italic text-base sm:text-lg text-[#FDFBF7] pt-1">
                      “{activeCouplet.transliteration}”
                    </p>
                    <p className="text-xs text-[#FDFBF7]/80 leading-relaxed">{activeCouplet.translation}</p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D97706]/25 flex items-center justify-between gap-3 text-xs">
                  <div className="min-w-0">
                    <p className="font-semibold text-[#FDE68A] truncate">{activeCouplet.poet}</p>
                    <p className="text-[#FDFBF7]/70 truncate mt-0.5">{activeCouplet.occasion}</p>
                  </div>
                  <a
                    href="#register"
                    className="min-h-[40px] inline-flex items-center px-3 py-1.5 rounded-lg bg-[#D97706]/20 border border-[#D97706]/40 text-xs font-semibold text-[#FDE68A] hover:bg-[#D97706] hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0"
                  >
                    Attend →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile 2x2 Quick Info Grid / Desktop 4-Column Operational Bar */}
          <div className="bg-[#043927] border-t border-[#D97706]/30">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-4 sm:py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs">
              <div className="p-3 sm:p-0 bg-[#064E3B]/50 sm:bg-transparent rounded-xl border border-[#D97706]/20 sm:border-none">
                <p className="uppercase tracking-wider text-[#FDE68A] font-semibold text-[11px]">
                  01 · Weekly Mehfil
                </p>
                <p className="text-[#FDFBF7]/95 font-medium mt-1 tabular-nums">
                  Monday Ghazals · 6:30 PM
                </p>
              </div>
              <div className="p-3 sm:p-0 bg-[#064E3B]/50 sm:bg-transparent rounded-xl border border-[#D97706]/20 sm:border-none">
                <p className="uppercase tracking-wider text-[#FDE68A] font-semibold text-[11px]">
                  02 · Youth Shield
                </p>
                <p className="text-[#FDFBF7]/95 font-medium mt-1">
                  Inter-College Urdu Poetry
                </p>
              </div>
              <div className="p-3 sm:p-0 bg-[#064E3B]/50 sm:bg-transparent rounded-xl border border-[#D97706]/20 sm:border-none">
                <p className="uppercase tracking-wider text-[#FDE68A] font-semibold text-[11px]">
                  03 · Bengaluru Venue
                </p>
                <p className="text-[#FDFBF7]/95 font-medium mt-1">
                  Off Queen&apos;s Road · 560001
                </p>
              </div>
              <div className="p-3 sm:p-0 bg-[#064E3B]/50 sm:bg-transparent rounded-xl border border-[#D97706]/20 sm:border-none">
                <p className="uppercase tracking-wider text-[#FDE68A] font-semibold text-[11px]">
                  04 · Direct RSVP
                </p>
                <p className="text-[#FDFBF7]/95 font-medium mt-1 tabular-nums">
                  +91 98454 98354
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ABOUT HUM CENTRE SECTION (Mobile-Scannable + Drop Cap + Swipeable Pillars) */}
        <section id="about" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 border-b border-[#E7E0D3]">
          <div className="max-w-[1240px] mx-auto space-y-10 sm:space-y-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-end border-b border-[#D6CEBE] pb-8">
              <div className="lg:col-span-7 space-y-2.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B45309] font-semibold">
                  <span>About HUM Centre</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-urdu text-sm text-[#064E3B]">ہندوستانی اردو منچ</span>
                </div>
                <h2
                  className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#064E3B] leading-tight"
                  style={{ textWrap: 'balance' }}
                >
                  A Living Home for Tehzeeb, Shayari &amp; Golden Era Melodies
                </h2>
              </div>
              <div className="lg:col-span-5 text-sm text-[#44403C] leading-relaxed">
                Situated off Queen&apos;s Road in Bengaluru,{' '}
                <strong className="font-semibold text-[#1C1917]">Hindustani Urdu Manch (HUM Centre)</strong> bridges
                generations—uniting veteran lovers of Urdu literature with college students discovering classical verse
                and golden-era playback music.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Narrative + Mobile 3-Stat Card Row */}
              <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#292524] leading-[1.75]">
                <p className="first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-serif-display first-letter:font-bold first-letter:text-[#064E3B] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                  Hindustani Urdu Manch (HUM Centre) was founded on the conviction that poetry and melody are meant to
                  be experienced in warm, living companionship. Every week, our centre opens its doors for listeners who
                  cherish the nuanced cadence of an Urdu Ghazal, the dramatic turn of an Afsana, and the emotional
                  honesty of retro cinema.
                </p>

                <p>
                  We actively promote Urdu literature across Bengaluru by organizing{' '}
                  <strong className="font-semibold text-[#064E3B]">
                    Inter-College Urdu Poetry Recitation Competitions
                  </strong>{' '}
                  for college students, hosting weekly{' '}
                  <strong className="font-semibold text-[#064E3B]">Monday Ghazals &amp; Retro Evenings</strong>, and
                  staging heartfelt musical tributes to legendary artists including{' '}
                  <strong className="font-semibold text-[#B45309]">
                    Mohd. Rafi, Mukesh, and Lata Mangeshkar
                  </strong>
                  .
                </p>

                {/* Mobile-Friendly 3-Column Metric Row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-3">
                  <div className="p-3.5 bg-[#F6F2E9] border border-[#D6CEBE] rounded-xl text-center sm:text-left">
                    <p className="font-serif-display text-2xl sm:text-3xl font-bold text-[#064E3B] tabular-nums">
                      52+
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#57534E] mt-0.5">
                      Weekly Ghazal Nights / Yr
                    </p>
                  </div>
                  <div className="p-3.5 bg-[#F6F2E9] border border-[#D6CEBE] rounded-xl text-center sm:text-left">
                    <p className="font-serif-display text-2xl sm:text-3xl font-bold text-[#064E3B] tabular-nums">
                      28+
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#57534E] mt-0.5">
                      Colleges in Youth Shield
                    </p>
                  </div>
                  <div className="p-3.5 bg-[#F6F2E9] border border-[#D6CEBE] rounded-xl text-center sm:text-left">
                    <p className="font-serif-display text-2xl sm:text-3xl font-bold text-[#064E3B] tabular-nums">
                      3 Scripts
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#57534E] mt-0.5">
                      Urdu · Hindi · Kannada
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Touch-First 3-Pillar Explorer */}
              <div className="lg:col-span-6 bg-[#F6F2E9] border border-[#D6CEBE] rounded-2xl p-5 sm:p-8 space-y-5">
                <div className="border-b border-[#D6CEBE] pb-3.5">
                  <p className="text-xs uppercase tracking-widest text-[#B45309] font-semibold">
                    Three Cultural Pillars of HUM Centre
                  </p>
                  <p className="text-xs text-[#57534E] mt-0.5">
                    Tap any pillar below to read our community impact
                  </p>
                </div>

                {/* Horizontal Scrollable / 3-Grid Touch Buttons (44px min height) */}
                <div className="grid grid-cols-3 gap-2">
                  {pillars.map((pillar, idx) => (
                    <button
                      key={pillar.index}
                      type="button"
                      onClick={() => setActivePillar(idx)}
                      className={`min-h-[44px] px-3 py-2 rounded-xl text-xs font-semibold transition-all border active:scale-[0.97] ${
                        activePillar === idx
                          ? 'bg-[#064E3B] text-[#FDFBF7] border-[#064E3B] shadow-xs'
                          : 'bg-[#FDFBF7] text-[#292524] border-[#D6CEBE] hover:border-[#064E3B]'
                      }`}
                    >
                      <span className="block truncate">{pillar.index}</span>
                    </button>
                  ))}
                </div>

                {/* Active Pillar Card */}
                <div className="bg-[#FDFBF7] border border-[#E7E0D3] rounded-xl p-5 sm:p-6 space-y-3.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#B45309] font-medium">
                    <span>{pillars[activePillar].metricLabel}</span>
                    <span className="font-urdu text-base text-[#064E3B]">
                      {pillars[activePillar].urduScript}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-xl sm:text-2xl font-semibold text-[#064E3B] leading-snug">
                    {pillars[activePillar].title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                    {pillars[activePillar].description}
                  </p>

                  <div className="pt-3.5 border-t border-[#E7E0D3] space-y-1">
                    <p className="font-serif-display italic text-sm sm:text-base text-[#1C1917]">
                      {pillars[activePillar].quote}
                    </p>
                    <p className="text-xs font-medium text-[#57534E]">
                      — {pillars[activePillar].attribution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FEATURED UPCOMING & PAST EVENTS (MOBILE SWIPE FILTER + TOUCH CARDS) */}
        <section id="events" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[#F7F3EB] border-b border-[#E7E0D3]">
          <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-12">
            {/* Section Header + Horizontal Swipeable Filter Bar on Mobile */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-[#D6CEBE] pb-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B45309] font-semibold">
                  <span>Curated Cultural Calendar</span>
                  <span aria-hidden="true">·</span>
                  <span>Bengaluru 560001</span>
                </div>
                <h2
                  className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#064E3B]"
                  style={{ textWrap: 'balance' }}
                >
                  Featured Upcoming &amp; Past Events
                </h2>
              </div>

              {/* Mobile Horizontal Scrollable Filter Controls (44px min-height) */}
              <div
                role="group"
                aria-label="Filter Programmes by Category"
                className="flex items-center gap-1.5 p-1.5 bg-[#EBE5D8] rounded-xl border border-[#D6CEBE] overflow-x-auto no-scrollbar max-w-full"
              >
                {[
                  { key: 'all', label: 'All Events' },
                  { key: 'ghazals', label: 'Ghazals & Retro' },
                  { key: 'competitions', label: 'Competitions' },
                  { key: 'seminars', label: 'Afsane & Seminars' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setEventFilter(tab.key as typeof eventFilter)}
                    className={`min-h-[40px] px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 active:scale-[0.97] ${
                      eventFilter === tab.key
                        ? 'bg-[#064E3B] text-[#FDFBF7] shadow-xs'
                        : 'text-[#44403C] hover:text-[#1C1917]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4-Card Responsive Grid (Rounded-2xl Mobile Touch Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {filteredEvents.map((ev) => (
                <article
                  key={ev.id}
                  className="bg-[#FDFBF7] border border-[#D6CEBE] rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs"
                >
                  <div>
                    {/* Custom Archival SVG Illustration Banner */}
                    <div className="aspect-16/9 w-full bg-[#064E3B] relative overflow-hidden border-b border-[#D97706]/30">
                      <EventIllustration type={ev.artworkType} />
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-7 space-y-3.5">
                      {/* Clean Unboxed Metadata with Separators */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#78716C] font-medium">
                        <span className="text-[#B45309] font-semibold">
                          {ev.index}. {ev.categoryLabel}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{ev.shortSchedule}</span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#064E3B] leading-snug">
                          {ev.title}
                        </h3>
                        <p className="font-urdu text-base text-[#B45309]" dir="rtl" lang="ur">
                          {ev.urduTitle}
                        </p>
                      </div>

                      <p className="text-sm text-[#44403C] leading-relaxed">{ev.summary}</p>

                      <ul className="space-y-1.5 pt-2 border-t border-[#E7E0D3] text-xs text-[#44403C]">
                        {ev.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#D97706] font-bold select-none" aria-hidden="true">
                              ·
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mobile-Ergonomic 2-Button Touch Footer (44px Hitboxes) */}
                  <div className="p-4 sm:px-7 sm:py-4 bg-[#F6F2E9] border-t border-[#E7E0D3] space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between gap-4">
                    <div className="text-xs text-[#57534E] truncate">
                      <span className="font-semibold text-[#1C1917]">{ev.hall}</span>
                    </div>

                    <div className="grid grid-cols-2 sm:flex items-center gap-2.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => setSelectedModalEvent(ev)}
                        className="min-h-[44px] px-3.5 py-2 text-xs font-semibold text-[#064E3B] bg-[#FDFBF7] border border-[#D6CEBE] hover:border-[#064E3B] active:scale-[0.98] rounded-xl transition-all whitespace-nowrap"
                      >
                        View Details
                      </button>

                      <button
                        type="button"
                        onClick={() => handleSelectEventForRegistration(ev.formOptionValue)}
                        className="min-h-[44px] px-4 py-2 text-xs font-semibold text-[#FDFBF7] bg-[#064E3B] hover:bg-[#043927] active:scale-[0.98] rounded-xl transition-all whitespace-nowrap"
                      >
                        Register Seat
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INTER-COLLEGE POETRY RECITATION COMPETITION SECTION */}
        <section
          id="competitions"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#064E3B] text-[#FDFBF7] border-b border-[#D97706]/40"
        >
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#FDE68A] font-semibold">
                <span>Student &amp; Youth Outreach</span>
                <span aria-hidden="true">·</span>
                <span>Trophies &amp; Merit Certificates</span>
              </div>

              <h2
                className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#FDFBF7] leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Inter-College Urdu Poetry Recitation Championship
              </h2>

              <p className="text-sm sm:text-base text-[#FDFBF7]/85 leading-relaxed max-w-2xl">
                Promoting youth talent across Bengaluru colleges and universities. Participants are mentored in Urdu
                diction (Talaffuz) and judged on 100 points across articulation, poetic delivery, and selection of verse.
              </p>

              {/* 3-Card Rubric Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 bg-[#043927] border border-[#D97706]/35 rounded-xl flex sm:block items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#FDE68A]">01 · Diction</p>
                    <p className="font-serif-display text-xl font-semibold mt-0.5">Talaffuz &amp; Makharij</p>
                  </div>
                  <p className="text-xs font-semibold text-[#FDE68A] sm:text-[#FDFBF7]/75 sm:mt-1 tabular-nums">
                    40 Points
                  </p>
                </div>

                <div className="p-4 bg-[#043927] border border-[#D97706]/35 rounded-xl flex sm:block items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#FDE68A]">02 · Delivery</p>
                    <p className="font-serif-display text-xl font-semibold mt-0.5">Lehja &amp; Tarannum</p>
                  </div>
                  <p className="text-xs font-semibold text-[#FDE68A] sm:text-[#FDFBF7]/75 sm:mt-1 tabular-nums">
                    30 Points
                  </p>
                </div>

                <div className="p-4 bg-[#043927] border border-[#D97706]/35 rounded-xl flex sm:block items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#FDE68A]">03 · Selection</p>
                    <p className="font-serif-display text-xl font-semibold mt-0.5">Intikhab-e-Kalam</p>
                  </div>
                  <p className="text-xs font-semibold text-[#FDE68A] sm:text-[#FDFBF7]/75 sm:mt-1 tabular-nums">
                    30 Points
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#043927] border border-[#D97706]/40 rounded-2xl p-5 sm:p-7 space-y-5">
              <h3 className="font-serif-display text-2xl font-semibold text-[#FDE68A]">
                Nominate Your College Delegation
              </h3>
              <p className="text-xs sm:text-sm text-[#FDFBF7]/85 leading-relaxed">
                Each degree college or university may nominate up to 4 student reciters. Every student receives an
                official HUM Certificate of Participation, and winners receive engraved trophies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => handleSelectEventForRegistration('Poetry Recitation')}
                  className="min-h-[48px] px-4 py-3 text-xs sm:text-sm font-semibold text-[#1C1917] bg-[#D97706] hover:bg-[#F59E0B] active:scale-[0.98] rounded-xl transition-all text-center"
                >
                  Register as Student Reciter
                </button>
                <a
                  href="https://wa.me/919845498354?text=Hello%20HUM%20Centre%2C%20we%20would%20like%20to%20register%20our%20college%20for%20the%20Inter-College%20Urdu%20Poetry%20Recitation%20Competition."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-[#FDFBF7] border border-[#FDE68A]/45 hover:border-[#FDE68A] active:scale-[0.98] rounded-xl transition-all text-center"
                >
                  <i className="fa-brands fa-whatsapp text-sm text-[#FDE68A]" aria-hidden="true" />
                  <span>College Rulebook</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. MOBILE-ERGONOMIC EVENT REGISTRATION & LEAD CAPTURE FORM */}
        <section id="register" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[#FDFBF7] border-b border-[#E7E0D3]">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Context */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B45309] font-semibold">
                <span>Instant Seat Reservation</span>
                <span aria-hidden="true">·</span>
                <span>Free Community RSVP</span>
              </div>

              <h2
                className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#064E3B] leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Register for Next Programme or Join Our Community
              </h2>

              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                Reserve your seat for Monday Ghazals, register for the Inter-College Poetry Recitation Competition, or
                join the HUM Centre community list to receive direct WhatsApp invitations.
              </p>

              <div className="bg-[#F6F2E9] border border-[#D6CEBE] rounded-2xl p-5 space-y-3">
                <h3 className="font-serif-display text-xl font-semibold text-[#064E3B]">
                  Mehfil Hospitality Notes
                </h3>
                <ul className="space-y-2 text-xs text-[#44403C] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#B45309] font-bold">01.</span>
                    <span>Doors open 20 minutes prior to the evening Mehfil.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B45309] font-bold">02.</span>
                    <span>Suleimani chai is served during the intermission.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B45309] font-bold">03.</span>
                    <span>
                      Instant WhatsApp assistance:{' '}
                      <a href="tel:9845498354" className="font-semibold text-[#064E3B] underline tabular-nums">
                        +91 98454 98354
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Touch-Optimized Form (16px inputs to prevent iOS zoom, 48px Submit button) */}
            <div className="lg:col-span-7 bg-[#F7F3EB] border border-[#D6CEBE] rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xs">
              {submittedTicket ? (
                <div className="bg-[#FDFBF7] border-2 border-[#064E3B] rounded-2xl p-5 sm:p-8 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D6CEBE] pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#B45309] font-semibold">
                        Confirmed Mehfil Invitation Pass
                      </p>
                      <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#064E3B] mt-0.5">
                        Adaab &amp; Shukriya, {submittedTicket.fullName}
                      </h3>
                    </div>
                    <div className="bg-[#F6F2E9] px-3.5 py-2 rounded-xl border border-[#D6CEBE]">
                      <span className="text-[10px] uppercase tracking-widest text-[#78716C] block">RSVP Pass ID</span>
                      <span className="font-mono text-sm sm:text-base font-bold text-[#064E3B] tabular-nums">
                        {submittedTicket.referenceCode}
                      </span>
                    </div>
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm border-b border-[#E7E0D3] pb-5">
                    <div>
                      <dt className="text-xs text-[#78716C] uppercase tracking-wider">Selected Event</dt>
                      <dd className="font-semibold text-[#064E3B] mt-1">{submittedTicket.eventOfInterest}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#78716C] uppercase tracking-wider">Seating / College</dt>
                      <dd className="font-semibold text-[#1C1917] mt-1">{submittedTicket.institutionOrGuests}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#78716C] uppercase tracking-wider">WhatsApp Number</dt>
                      <dd className="font-medium text-[#1C1917] mt-1 tabular-nums">
                        {submittedTicket.whatsappNumber}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[#78716C] uppercase tracking-wider">Venue Address</dt>
                      <dd className="font-medium text-[#1C1917] mt-1">
                        HUM Centre, Off Queen&apos;s Road, Bengaluru
                      </dd>
                    </div>
                  </dl>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <a
                      href={`https://wa.me/919845498354?text=${encodeURIComponent(
                        `Adaab HUM Centre! I have registered (${submittedTicket.referenceCode}).\nName: ${submittedTicket.fullName}\nEvent: ${submittedTicket.eventOfInterest}\nSeats/College: ${submittedTicket.institutionOrGuests}\nNotes: ${submittedTicket.message || 'Looking forward to attending.'}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold text-[#FDFBF7] bg-[#064E3B] hover:bg-[#043927] active:scale-[0.98] rounded-xl transition-all"
                    >
                      <i className="fa-brands fa-whatsapp text-lg text-[#FDE68A]" aria-hidden="true" />
                      <span>Send RSVP Pass to WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedTicket(null);
                        setFullName('');
                        setMessage('');
                      }}
                      className="min-h-[44px] px-4 py-2.5 text-xs font-semibold text-[#44403C] hover:text-[#1C1917] underline underline-offset-4"
                    >
                      Register Another Guest
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#D6CEBE] pb-3.5 flex items-center justify-between">
                    <div>
                      <h3 className="font-serif-display text-2xl font-semibold text-[#064E3B]">
                        Event Registration Form
                      </h3>
                      <p className="text-xs text-[#57534E] mt-0.5">
                        Quick mobile registration · Takes 30 seconds
                      </p>
                    </div>
                    <span className="font-urdu text-lg text-[#B45309]" aria-hidden="true">
                      ہم سینٹر
                    </span>
                  </div>

                  {formError && (
                    <div
                      role="alert"
                      className="p-3.5 bg-[#FEF2F2] border border-[#DC2626] rounded-xl text-xs font-medium text-[#991B1B] flex items-center gap-2.5"
                    >
                      <i className="fa-solid fa-circle-exclamation shrink-0" aria-hidden="true" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Quick-Tap Mobile Chip Selector for Event of Interest */}
                  <div className="space-y-2">
                    <label htmlFor="eventOfInterest" className="block text-xs font-semibold text-[#292524]">
                      Tap Event of Interest *
                    </label>
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                      {quickEventOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setEventOfInterest(opt.value)}
                          className={`min-h-[42px] inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all whitespace-nowrap shrink-0 active:scale-[0.97] ${
                            eventOfInterest === opt.value
                              ? 'bg-[#064E3B] text-[#FDFBF7] border-[#064E3B] shadow-xs'
                              : 'bg-[#FDFBF7] text-[#292524] border-[#D6CEBE] hover:border-[#064E3B]'
                          }`}
                        >
                          <i className={`fa-solid ${opt.icon} text-xs text-[#D97706]`} aria-hidden="true" />
                          <span>{opt.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Accessible Native Select Sync */}
                    <select
                      id="eventOfInterest"
                      value={eventOfInterest}
                      onChange={(e) => setEventOfInterest(e.target.value)}
                      className="w-full min-h-[48px] px-3.5 py-2.5 text-base sm:text-sm bg-[#FDFBF7] border border-[#D6CEBE] rounded-xl focus:outline-none focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
                    >
                      <option value="Ghazal Night">Ghazal Night (Monday Ghazals &amp; Retro Evenings)</option>
                      <option value="Poetry Recitation">Poetry Recitation (Inter-College Competition)</option>
                      <option value="Community Member">Community Member (Literary Circle)</option>
                      <option value="Afsano Ki Shaam & Nazm Sarayi">Afsano Ki Shaam &amp; Nazm Sarayi</option>
                      <option value="Tribute to Legends">Tribute to Legends (Rafi, Mukesh &amp; Lata)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-[#292524] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full min-h-[48px] px-3.5 py-2.5 text-base sm:text-sm bg-[#FDFBF7] border border-[#D6CEBE] rounded-xl focus:outline-none focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
                      />
                    </div>

                    <div>
                      <label htmlFor="whatsappNumber" className="block text-xs font-semibold text-[#292524] mb-1.5">
                        WhatsApp Number *
                      </label>
                      <input
                        id="whatsappNumber"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        placeholder="+91 98454 98354"
                        className="w-full min-h-[48px] px-3.5 py-2.5 text-base sm:text-sm bg-[#FDFBF7] border border-[#D6CEBE] rounded-xl focus:outline-none focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B] tabular-nums"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#292524] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full min-h-[48px] px-3.5 py-2.5 text-base sm:text-sm bg-[#FDFBF7] border border-[#D6CEBE] rounded-xl focus:outline-none focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
                      />
                    </div>

                    <div>
                      <label htmlFor="institutionOrGuests" className="block text-xs font-semibold text-[#292524] mb-1.5">
                        Seats or College Name
                      </label>
                      <input
                        id="institutionOrGuests"
                        type="text"
                        value={institutionOrGuests}
                        onChange={(e) => setInstitutionOrGuests(e.target.value)}
                        placeholder="e.g. 2 Seats / St. Joseph's University"
                        className="w-full min-h-[48px] px-3.5 py-2.5 text-base sm:text-sm bg-[#FDFBF7] border border-[#D6CEBE] rounded-xl focus:outline-none focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#292524] mb-1.5">
                      Message or Favourite Ghazal Request
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your favourite poet, song request, or inquiry..."
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-[#FDFBF7] border border-[#D6CEBE] rounded-xl focus:outline-none focus:border-[#064E3B] focus:ring-1 focus:ring-[#064E3B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 text-sm font-semibold text-[#FDFBF7] bg-[#064E3B] hover:bg-[#043927] active:scale-[0.98] rounded-xl transition-all cursor-pointer shadow-sm"
                  >
                    Submit Registration
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* 6. VENUE & CONTACT INFO SECTION (1-Tap Mobile Directions & Call Cards) */}
        <section id="venue" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[#F6F2E9] border-b border-[#D6CEBE]">
          <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-12">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B45309] font-semibold">
                <span>Location &amp; Hospitality Desk</span>
                <span aria-hidden="true">·</span>
                <span>Bengaluru — 560001</span>
              </div>
              <h2
                className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#064E3B]"
                style={{ textWrap: 'balance' }}
              >
                Venue Address &amp; 1-Tap Directions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              {/* Left Column: Address + 48px Touch Action Buttons */}
              <div className="lg:col-span-6 bg-[#FDFBF7] border border-[#D6CEBE] rounded-2xl p-5 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#B45309] font-semibold">
                        HUM Centre Bengaluru
                      </p>
                      <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#064E3B] mt-1">
                        Hindustani Urdu Manch
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="min-h-[40px] px-3 py-1.5 rounded-lg bg-[#F6F2E9] border border-[#D6CEBE] text-xs font-semibold text-[#064E3B] active:scale-[0.97] transition-all shrink-0"
                    >
                      {copiedAddress ? 'Address Copied!' : 'Copy Address'}
                    </button>
                  </div>

                  <p className="text-sm sm:text-base text-[#292524] font-medium leading-relaxed">
                    HUM Centre, Off Queen&apos;s Road,
                    <br />
                    Next to Shifa Hospital, Beside Maratha Darshan Hotel,
                    <br />
                    Bengaluru, Karnataka — 560001
                  </p>

                  {/* Interactive Tap List Rows for Mobile Clarity */}
                  <div className="divide-y divide-[#E7E0D3] border-y border-[#E7E0D3]">
                    <div className="py-3.5 flex items-center justify-between gap-4 text-xs sm:text-sm">
                      <span className="text-[#57534E] font-medium">Primary Landmark</span>
                      <span className="font-semibold text-[#1C1917] text-right">
                        Next to Shifa Hospital &amp; Maratha Darshan
                      </span>
                    </div>
                    <div className="py-3.5 flex items-center justify-between gap-4 text-xs sm:text-sm">
                      <span className="text-[#57534E] font-medium">Working Hours</span>
                      <span className="font-semibold text-[#1C1917] tabular-nums text-right">
                        Daily · 10:30 AM – 9:00 PM
                      </span>
                    </div>
                    <div className="py-3.5 flex items-center justify-between gap-4 text-xs sm:text-sm">
                      <span className="text-[#57534E] font-medium">RSVP &amp; Inquiry Phone</span>
                      <a
                        href="tel:9845498354"
                        className="font-bold text-[#064E3B] underline tabular-nums text-right"
                      >
                        +91 98454 98354
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile 2-Button Full-Width Action Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <a
                    href="tel:9845498354"
                    className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-5 py-3 text-xs sm:text-sm font-semibold text-[#FDFBF7] bg-[#064E3B] hover:bg-[#043927] active:scale-[0.98] rounded-xl transition-all"
                  >
                    <i className="fa-solid fa-phone text-xs text-[#FDE68A]" aria-hidden="true" />
                    <span>Call +91 98454 98354</span>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Shifa+Hospital+Queens+Road+Bengaluru+560001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-5 py-3 text-xs sm:text-sm font-semibold text-[#064E3B] bg-[#F6F2E9] border border-[#064E3B] hover:bg-[#064E3B] hover:text-[#FDFBF7] active:scale-[0.98] rounded-xl transition-all"
                  >
                    <i className="fa-solid fa-location-dot text-xs" aria-hidden="true" />
                    <span>Open Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Landmark Corridor Map SVG */}
              <div className="lg:col-span-6 bg-[#064E3B] text-[#FDFBF7] border border-[#D97706]/40 rounded-2xl p-5 sm:p-8 flex flex-col justify-between space-y-5">
                <div className="flex items-center justify-between border-b border-[#D97706]/30 pb-3.5">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#FDE68A] font-semibold">
                      Queen&apos;s Road Landmark Map
                    </p>
                    <p className="text-xs text-[#FDFBF7]/75 mt-0.5">
                      Next to Shifa Hospital · Beside Maratha Darshan Hotel
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#FDE68A] tabular-nums">560001</span>
                </div>

                <div className="bg-[#043927] border border-[#D97706]/30 rounded-xl p-3 sm:p-4">
                  <svg
                    viewBox="0 0 500 240"
                    className="w-full h-auto"
                    role="img"
                    aria-label="Wayfinding map showing Queen's Road, Shifa Hospital, Maratha Darshan Hotel, and HUM Centre in Bengaluru"
                  >
                    <rect width="500" height="240" fill="#043927" />
                    {[50, 100, 150, 200].map((y) => (
                      <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#FDFBF7" strokeOpacity="0.06" />
                    ))}
                    {[100, 200, 300, 400].map((x) => (
                      <line key={x} x1={x} y1="0" x2={x} y2="240" stroke="#FDFBF7" strokeOpacity="0.06" />
                    ))}

                    <path d="M 30,205 L 470,50" stroke="#D97706" strokeWidth="10" strokeOpacity="0.35" />
                    <path
                      d="M 30,205 L 470,50"
                      stroke="#FEF3C7"
                      strokeWidth="1.5"
                      strokeDasharray="6 6"
                      strokeOpacity="0.7"
                    />
                    <text
                      x="110"
                      y="190"
                      fill="#FDE68A"
                      fontSize="11"
                      fontWeight="bold"
                      transform="rotate(-19, 110, 190)"
                    >
                      QUEEN&apos;S ROAD (BENGALURU)
                    </text>

                    <path d="M 270,120 L 270,38" stroke="#D97706" strokeWidth="7" strokeOpacity="0.4" />

                    <rect
                      x="130"
                      y="68"
                      width="115"
                      height="44"
                      rx="6"
                      fill="#064E3B"
                      stroke="#FDFBF7"
                      strokeOpacity="0.4"
                    />
                    <text x="187" y="88" textAnchor="middle" fill="#FDFBF7" fontSize="10" fontWeight="bold">
                      Shifa Hospital
                    </text>
                    <text x="187" y="102" textAnchor="middle" fill="#FDE68A" fontSize="9">
                      Next to Venue
                    </text>

                    <rect
                      x="300"
                      y="125"
                      width="140"
                      height="44"
                      rx="6"
                      fill="#064E3B"
                      stroke="#FDFBF7"
                      strokeOpacity="0.4"
                    />
                    <text x="370" y="145" textAnchor="middle" fill="#FDFBF7" fontSize="10" fontWeight="bold">
                      Maratha Darshan Hotel
                    </text>
                    <text x="370" y="159" textAnchor="middle" fill="#FDE68A" fontSize="9">
                      Beside HUM Centre
                    </text>

                    <rect
                      x="285"
                      y="28"
                      width="175"
                      height="64"
                      rx="8"
                      fill="#D97706"
                      stroke="#FEF3C7"
                      strokeWidth="2"
                    />
                    <text x="372" y="51" textAnchor="middle" fill="#1C1917" fontSize="12" fontWeight="bold">
                      HUM CENTRE (ہم سینٹر)
                    </text>
                    <text x="372" y="68" textAnchor="middle" fill="#1C1917" fontSize="10" fontWeight="600">
                      Hindustani Urdu Manch
                    </text>
                    <text x="372" y="82" textAnchor="middle" fill="#1C1917" fontSize="9">
                      Off Queen&apos;s Road · 560001
                    </text>
                  </svg>
                </div>

                <a
                  href="https://wa.me/919845498354?text=Hello%20Hindustani%20Urdu%20Manch%2C%20please%20share%20the%20Google%20Maps%20location%20pin%20for%20HUM%20Centre."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#043927] border border-[#D97706]/40 text-xs font-semibold text-[#FDE68A] hover:bg-[#D97706] hover:text-[#1C1917] transition-colors"
                >
                  <i className="fa-brands fa-whatsapp text-sm" aria-hidden="true" />
                  <span>Request Live Location Pin on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
      <footer id="contact" className="bg-[#043927] text-[#FDFBF7] border-t border-[#D97706]/40">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#FDFBF7]/15">
            <div className="md:col-span-6 space-y-3">
              <p className="font-serif-display text-2xl font-semibold text-[#FDFBF7]">
                HUM — Hindustani Urdu Manch
              </p>
              <p className="text-xs sm:text-sm text-[#FDE68A] font-medium">
                <span className="font-urdu text-lg mr-2">ہم</span> · हम · ಹಮ್ — Preserving Heritage, Celebrating Urdu
                Literature &amp; Timeless Melodies
              </p>
              <p className="text-xs text-[#FDFBF7]/75 leading-relaxed max-w-md">
                HUM Centre, Off Queen&apos;s Road, Next to Shifa Hospital, Beside Maratha Darshan Hotel, Bengaluru —
                560001
              </p>
            </div>

            <div className="md:col-span-6 flex flex-col sm:flex-row sm:items-center md:justify-end gap-3">
              <a
                href="tel:9845498354"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#D97706] text-[#1C1917] text-xs font-semibold"
              >
                <i className="fa-solid fa-phone" aria-hidden="true" />
                <span>Call +91 98454 98354</span>
              </a>
              <a
                href="https://wa.me/919845498354?text=Hello%20Hindustani%20Urdu%20Manch"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#15803D] text-[#FDFBF7] text-xs font-semibold"
              >
                <i className="fa-brands fa-whatsapp text-sm" aria-hidden="true" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FDFBF7]/65 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Hindustani Urdu Manch (HUM Centre), Bengaluru. All rights reserved.</p>
            <p>Urdu Poetry · Monday Ghazals · Retro Tributes · Youth Competitions</p>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM SHEET / DESKTOP MODAL FOR PROGRAMME DETAILS */}
      {selectedModalEvent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-event-title"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/65 backdrop-blur-xs"
          onClick={() => setSelectedModalEvent(null)}
        >
          <div
            className="bg-[#FDFBF7] text-[#1C1917] border-t-2 sm:border-2 border-[#064E3B] rounded-t-3xl sm:rounded-2xl max-w-xl w-full p-5 sm:p-8 space-y-5 shadow-2xl max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Bottom Sheet Drag Handle Affordance */}
            <div className="w-10 h-1.5 bg-[#D6CEBE] rounded-full mx-auto sm:hidden" aria-hidden="true" />

            <div className="flex items-start justify-between gap-4 border-b border-[#D6CEBE] pb-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#B45309] font-semibold">
                  {selectedModalEvent.categoryLabel} · {selectedModalEvent.shortSchedule}
                </p>
                <h3
                  id="modal-event-title"
                  className="font-serif-display text-2xl sm:text-3xl font-bold text-[#064E3B] mt-1"
                >
                  {selectedModalEvent.title}
                </h3>
                <p className="font-urdu text-base text-[#B45309] mt-1" dir="rtl" lang="ur">
                  {selectedModalEvent.urduTitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedModalEvent(null)}
                aria-label="Close details"
                className="min-w-[44px] min-h-[44px] rounded-xl border border-[#D6CEBE] flex items-center justify-center text-[#44403C] hover:text-[#1C1917] hover:bg-[#F6F2E9]"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              </button>
            </div>

            <p className="text-sm text-[#292524] leading-relaxed">{selectedModalEvent.summary}</p>

            <div className="bg-[#F6F2E9] border border-[#D6CEBE] rounded-xl p-4 space-y-2 text-xs">
              <p>
                <strong className="text-[#064E3B]">Schedule:</strong> {selectedModalEvent.schedule}
              </p>
              <p>
                <strong className="text-[#064E3B]">Hall &amp; Seating:</strong> {selectedModalEvent.hall} (
                {selectedModalEvent.entryType})
              </p>
              <p>
                <strong className="text-[#064E3B]">Featured Artists:</strong>{' '}
                {selectedModalEvent.featuredArtistsOrGuests}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleSelectEventForRegistration(selectedModalEvent.formOptionValue)}
                className="min-h-[48px] px-5 py-3 text-xs sm:text-sm font-semibold text-[#FDFBF7] bg-[#064E3B] hover:bg-[#043927] active:scale-[0.98] rounded-xl transition-all"
              >
                Reserve Seat for This Programme →
              </button>
              <button
                type="button"
                onClick={() => setSelectedModalEvent(null)}
                className="min-h-[44px] px-4 py-2.5 text-xs font-semibold text-[#44403C] hover:text-[#1C1917]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE THUMB-ZONE BOTTOM NAVIGATION BAR (Visible on Mobile/Tablet < md) */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 h-16 bg-[#043927]/95 backdrop-blur-md border-t border-[#D97706]/35 grid grid-cols-5 items-center px-1 text-[#FDFBF7]"
      >
        <a
          href="#home"
          onClick={() => setActiveMobileNav('home')}
          className={`min-h-[48px] flex flex-col items-center justify-center rounded-lg transition-colors ${
            activeMobileNav === 'home' ? 'text-[#FDE68A]' : 'text-[#FDFBF7]/75'
          }`}
        >
          <i className="fa-solid fa-house text-base" aria-hidden="true" />
          <span className="text-[10px] font-medium tracking-tight mt-1">Home</span>
        </a>

        <a
          href="#events"
          onClick={() => setActiveMobileNav('events')}
          className={`min-h-[48px] flex flex-col items-center justify-center rounded-lg transition-colors ${
            activeMobileNav === 'events' ? 'text-[#FDE68A]' : 'text-[#FDFBF7]/75'
          }`}
        >
          <i className="fa-solid fa-music text-base" aria-hidden="true" />
          <span className="text-[10px] font-medium tracking-tight mt-1">Mehfils</span>
        </a>

        <a
          href="#register"
          onClick={() => setActiveMobileNav('register')}
          className="min-h-[48px] flex flex-col items-center justify-center"
        >
          <span className="w-11 h-8 rounded-xl bg-[#D97706] text-[#1C1917] flex items-center justify-center shadow-sm">
            <i className="fa-solid fa-ticket text-sm" aria-hidden="true" />
          </span>
          <span className="text-[10px] font-semibold text-[#FDE68A] tracking-tight mt-0.5">Register</span>
        </a>

        <a
          href="#venue"
          onClick={() => setActiveMobileNav('venue')}
          className={`min-h-[48px] flex flex-col items-center justify-center rounded-lg transition-colors ${
            activeMobileNav === 'venue' ? 'text-[#FDE68A]' : 'text-[#FDFBF7]/75'
          }`}
        >
          <i className="fa-solid fa-location-dot text-base" aria-hidden="true" />
          <span className="text-[10px] font-medium tracking-tight mt-1">Venue</span>
        </a>

        <a
          href="https://wa.me/919845498354?text=Hello%20Hindustani%20Urdu%20Manch"
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[48px] flex flex-col items-center justify-center text-[#4ADE80]"
        >
          <i className="fa-brands fa-whatsapp text-lg" aria-hidden="true" />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5 text-[#FDFBF7]">WhatsApp</span>
        </a>
      </nav>

      {/* DESKTOP FLOATING WHATSAPP BUTTON (Visible on Desktop >= md) */}
      <a
        href="https://wa.me/919845498354?text=Hello%20Hindustani%20Urdu%20Manch"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hindustani Urdu Manch on WhatsApp"
        className="hidden md:inline-flex fixed bottom-5 right-5 z-40 items-center gap-2.5 px-4 py-3 rounded-full bg-[#15803D] hover:bg-[#166534] text-[#FDFBF7] shadow-lg border border-[#FDFBF7]/20 transition-transform duration-150 hover:scale-105"
      >
        <i className="fa-brands fa-whatsapp text-xl" aria-hidden="true" />
        <span className="text-xs font-semibold tracking-wide whitespace-nowrap">WhatsApp HUM Desk</span>
      </a>
    </div>
  );
}
