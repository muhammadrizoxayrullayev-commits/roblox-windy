/**
 * ROBLOX WINDY (Windy Service) - Main Application Script
 * High-performance, reactive, and responsive storefront logic
 */

// Configuration & Constants
const ADMIN_USERNAME = 'flexyha';
const ADMIN_URL = 'https://t.me/flexyha';
const CHANNEL_URL = 'https://t.me/Roblox_W1ndy';
const REVIEWS_URL = 'https://t.me/w1ndy_otziv';

// Products Data Catalog
const PRODUCTS_DATA = [
  // ----------------------------------------------------
  // ROBUX: STANDART NARXLAR
  // ----------------------------------------------------
  {
    id: 'robux-40',
    name: '40 ROBUX',
    category: 'robux',
    subCategory: 'robux-standard',
    price: 7500,
    priceFormatted: '7.500 UZS',
    badge: null,
    highlight: false,
    delivery: '1 - 5 daqiqa',
    iconType: 'robux',
    description: 'Roblox o\'yin balansi uchun toza va halol Robux.',
    features: ['Tezkor yetkazish', 'Xavfsiz usul', 'Kafolatli']
  },
  {
    id: 'robux-80',
    name: '80 ROBUX',
    category: 'robux',
    subCategory: 'robux-standard',
    price: 14000,
    priceFormatted: '14.000 UZS',
    badge: null,
    highlight: false,
    delivery: '1 - 5 daqiqa',
    iconType: 'robux',
    description: 'O\'yin ichidagi narsalarni sotib olish uchun ajoyib boshlang\'ich paket.',
    features: ['Tezkor yetkazish', 'Arzon narx', 'Kafolatli']
  },
  {
    id: 'robux-500',
    name: '500 ROBUX',
    category: 'robux',
    subCategory: 'robux-standard',
    price: 67500,
    priceFormatted: '67.500 UZS',
    badge: 'Tejamkor ⚡️',
    highlight: false,
    delivery: '1 - 5 daqiqa',
    iconType: 'robux',
    description: 'Ko\'p o\'yinchilar tanlovi! Istalgan kiyim va Game Pass uchun yetarli.',
    features: ['Eng ko\'p olinadigan', 'Kafolatlangan yetkazish', '24/7 yordam']
  },
  {
    id: 'robux-1000',
    name: '1000 ROBUX',
    category: 'robux',
    subCategory: 'robux-standard',
    price: 130000,
    priceFormatted: '130.000 UZS',
    badge: 'Ommabop 🔥',
    highlight: true,
    accent: 'green',
    delivery: '1 - 5 daqiqa',
    iconType: 'robux',
    description: 'Bizning eng xaridorgir paketimiz! Eng yaxshi nisbatdagi narx.',
    features: ['🔥 Eng ko\'p sotilgan', '1-5 daqiqada hisobda', '100% halol']
  },
  {
    id: 'robux-2000',
    name: '2000 ROBUX',
    category: 'robux',
    subCategory: 'robux-standard',
    price: 260000,
    priceFormatted: '260.000 UZS',
    badge: 'Katta To\'plam 💎',
    highlight: false,
    delivery: '1 - 5 daqiqa',
    iconType: 'robux',
    description: 'Eksklyuziv skinlar va premium game pass\'lar uchun eng qulay miqdor.',
    features: ['Katta chegirma', 'VIP xizmat', 'Kafolatlangan']
  },
  {
    id: 'robux-5250',
    name: '5250 ROBUX',
    category: 'robux',
    subCategory: 'robux-standard',
    price: 650500,
    priceFormatted: '650.500 UZS',
    badge: 'Maksimal Paket 👑',
    highlight: true,
    accent: 'purple',
    delivery: '1 - 10 daqiqa',
    iconType: 'robux',
    description: 'Haqiqiy Roblox ishqibozlari uchun eng katta va tejamkor to\'plam!',
    features: ['Eksklyuziv narx', 'Maxsus bonus xizmat', 'To\'liq kafolat']
  },

  // ----------------------------------------------------
  // ROBUX: PLUS STORE (Roblox Premium/Plus)
  // ----------------------------------------------------
  {
    id: 'plus-basic',
    name: 'Plus (Roblox)',
    category: 'robux',
    subCategory: 'plus-store',
    price: 66000,
    priceFormatted: '66.000 UZS',
    badge: 'Plus Xizmat ⭐️',
    highlight: false,
    delivery: '1 - 10 daqiqa',
    iconType: 'plus',
    description: 'Roblox Plus tizimi orqali qo\'shimcha imkoniyatlar va afzalliklar.',
    features: ['Eksklyuziv kirish', 'Tezkor faollashtirish', '100% ishonchli']
  },
  {
    id: 'plus-500',
    name: '500 Plus',
    category: 'robux',
    subCategory: 'plus-store',
    price: 120000,
    priceFormatted: '120.000 UZS',
    badge: 'Plus 500 ✨',
    highlight: false,
    delivery: '1 - 10 daqiqa',
    iconType: 'plus',
    description: '500 Plus balansi bilan sevimli o\'yinlaringizda yetakchi bo\'ling.',
    features: ['Arzonlashtirilgan narx', 'Tezkor yetkazish', 'To\'liq yordam']
  },
  {
    id: 'plus-1000',
    name: '1000 Plus',
    category: 'robux',
    subCategory: 'plus-store',
    price: 175000,
    priceFormatted: '175.000 UZS',
    badge: 'Ommabop Plus ⚡️',
    highlight: true,
    accent: 'purple',
    delivery: '1 - 10 daqiqa',
    iconType: 'plus',
    description: 'Katta miqdordagi Plus to\'plami eng qulay narxda.',
    features: ['Mijozlar tanlovi', 'Kafolatlangan yetkazish', 'Maxsus chegirma']
  },
  {
    id: 'plus-2000',
    name: '2000 Plus',
    category: 'robux',
    subCategory: 'plus-store',
    price: 290000,
    priceFormatted: '290.000 UZS',
    badge: 'Super Plus 💎',
    highlight: false,
    delivery: '1 - 10 daqiqa',
    iconType: 'plus',
    description: 'Maksimal darajadagi Plus balansi har qanday o\'yin maqsadingiz uchun.',
    features: ['Super tejamkor', 'Eng yaxshi narx', 'VIP qulaylik']
  },
  {
    id: 'custom-gamepass',
    name: 'Barcha Game Pass\'lar',
    category: 'robux',
    subCategory: 'plus-store',
    price: 0,
    priceFormatted: 'Kelishilgan narx',
    badge: 'Istalgan O\'yin 🎮',
    highlight: true,
    accent: 'cyan',
    delivery: '5 - 15 daqiqa',
    iconType: 'gamepass',
    description: 'Robloxdagi istalgan o\'yindagi Game Pass va narsalarni eng arzon narxda olib beramiz!',
    features: ['Blox Fruits, Blade Ball va boshqalar', 'Akkaunt xavfsizligi 100%', 'Admindan narxni bilish'],
    customButtonText: 'Narxini bilish 💬'
  },

  // ----------------------------------------------------
  // CATEGORY 2: TELEGRAM STARS & PREMIUM
  // ----------------------------------------------------
  {
    id: 'stars-50',
    name: '50 ⭐️ Stars',
    category: 'stars',
    subCategory: 'stars-standard',
    price: 13000,
    priceFormatted: '13.000 UZS',
    badge: 'Akkauntsiz 🔒',
    highlight: false,
    delivery: '1 - 3 daqiqa',
    iconType: 'star',
    description: 'Telegram yulduzlari botlar, mini-ilovalar va postlarga reaksiya uchun.',
    features: ['🔒 Akkauntga kirmasdan!', 'Faqat username kerak', '1 daqiqada tushadi']
  },
  {
    id: 'stars-100',
    name: '100 ⭐️ Stars',
    category: 'stars',
    subCategory: 'stars-standard',
    price: 25000,
    priceFormatted: '25.000 UZS',
    badge: 'Akkauntsiz 🔒',
    highlight: false,
    delivery: '1 - 3 daqiqa',
    iconType: 'star',
    description: 'Telegram botlari va kanallaridagi pullik xizmatlar uchun qulay paket.',
    features: ['🔒 Akkauntga kirmasdan!', 'Parol mutlaqo kerak emas', 'Tezkor yuboriladi']
  },
  {
    id: 'stars-250',
    name: '250 ⭐️ Stars',
    category: 'stars',
    subCategory: 'stars-standard',
    price: 62000,
    priceFormatted: '62.000 UZS',
    badge: 'Best Value 💎',
    highlight: true,
    accent: 'gold',
    delivery: '1 - 3 daqiqa',
    iconType: 'star',
    description: 'Eng maqbul to\'plam! Ko\'p sonli xizmatlar va sovg\'alar uchun ideal.',
    features: ['🔒 Akkauntga kirmasdan!', '⭐️ Eng ko\'p tanlangan', 'Bir zumda tushadi']
  },
  {
    id: 'stars-300',
    name: '300 ⭐️ Stars',
    category: 'stars',
    subCategory: 'stars-standard',
    price: 74000,
    priceFormatted: '74.000 UZS',
    badge: 'Akkauntsiz 🔒',
    highlight: false,
    delivery: '1 - 3 daqiqa',
    iconType: 'star',
    description: 'Telegram mini app o\'yinlari va botlarda obuna to\'lovlari uchun.',
    features: ['🔒 Akkauntga kirmasdan!', 'To\'g\'ridan-to\'g\'ri profilga', 'Ishonchli xizmat']
  },
  {
    id: 'stars-500',
    name: '500 ⭐️ Stars',
    category: 'stars',
    subCategory: 'stars-standard',
    price: 123000,
    priceFormatted: '123.000 UZS',
    badge: 'Katta To\'plam ⭐️',
    highlight: true,
    accent: 'gold',
    delivery: '1 - 5 daqiqa',
    iconType: 'star',
    description: 'Yirik miqdordagi Stars to\'plami barcha Telegram imkoniyatlari uchun.',
    features: ['🔒 Akkauntga kirmasdan!', 'Eng arzon narx kafolati', 'Tezkor bajarilish']
  },
  {
    id: 'stars-custom-premium',
    name: 'Boshqa miqdor / Telegram Premium',
    category: 'stars',
    subCategory: 'stars-standard',
    price: 0,
    priceFormatted: 'Maxsus narx',
    badge: 'Premium & 500+ 🚀',
    highlight: true,
    accent: 'purple',
    delivery: '2 - 10 daqiqa',
    iconType: 'telegram-vip',
    description: '500+ yulduzlar va Telegram Premium (3, 6, 12 oylik) uchun to\'g\'ridan-to\'g\'ri adminga yozing!',
    features: ['500 dan 50.000 gacha Stars', 'Telegram Premium sovg\'a shaklida', 'Akkauntga kirmasdan!'],
    customButtonText: 'Adminga yozish 💬'
  },

  // ----------------------------------------------------
  // CATEGORY 3: BRAWL STARS (PASS & GEMS)
  // ----------------------------------------------------
  // Brawl Pass Section
  {
    id: 'brawl-pass',
    name: 'BRAWL PASS',
    category: 'brawl',
    subCategory: 'brawl-pass',
    price: 100000,
    priceFormatted: '100.000 UZS (100K)',
    badge: 'Mavsum Pass 🔥',
    highlight: false,
    delivery: '2 - 10 daqiqa',
    iconType: 'brawl-pass',
    description: 'Mavsumiy Brawl Pass: barcha eksklyuziv mukofotlar va resurslarni oling.',
    features: ['Barcha Pass bosqichlari', 'Eksklyuziv brawler mukofoti', '100% xavfsiz']
  },
  {
    id: 'brawl-pass-plus',
    name: 'BRAWL PASS PLUS',
    category: 'brawl',
    subCategory: 'brawl-pass',
    price: 135000,
    priceFormatted: '135.000 UZS (135K)',
    badge: 'Xit 🔥',
    highlight: true,
    accent: 'red',
    delivery: '2 - 10 daqiqa',
    iconType: 'brawl-pass-plus',
    description: 'Eng mashhur Brawl Pass Plus! Qo\'shimcha ranglar, skinlar va +20% progress.',
    features: ['🔥 Eng ko\'p xarid qilinadi', 'Plus barcha bonuslari', 'Tezkor faollashtirish']
  },
  {
    id: 'brawl-pro-pass',
    name: 'PRO PASS WORLD FINAL',
    category: 'brawl',
    subCategory: 'brawl-pass',
    price: 185000,
    priceFormatted: '185.000 UZS (185K)',
    badge: 'World Final 🏆',
    highlight: true,
    accent: 'gold',
    delivery: '2 - 10 daqiqa',
    iconType: 'brawl-pro',
    description: 'Maxsus World Final Pro Pass cheklangan miqdordagi noyob mukofotlar bilan.',
    features: ['Turnir eksklyuzivlari', 'Noyob pin va skinlar', 'Kafolatlangan donat']
  },

  // Standart Gems
  {
    id: 'brawl-gem-30',
    name: '30 GEM',
    category: 'brawl',
    subCategory: 'brawl-gems',
    price: 17000,
    priceFormatted: '17.000 UZS (17K)',
    badge: null,
    highlight: false,
    delivery: '2 - 8 daqiqa',
    iconType: 'gem',
    description: 'Kichik xaridlar va pinlar uchun boshlang\'ich gem paketi.',
    features: ['Tezkor yuklash', 'Xavfsiz to\'lov', 'Kafolat']
  },
  {
    id: 'brawl-gem-60',
    name: '60 GEM',
    category: 'brawl',
    subCategory: 'brawl-gems',
    price: 34000,
    priceFormatted: '34.000 UZS (34K)',
    badge: null,
    highlight: false,
    delivery: '2 - 8 daqiqa',
    iconType: 'gem',
    description: 'Qulay miqdordagi gemlar, har qanday mayda xarajat uchun.',
    features: ['Supercell ID orqali', 'Ishonchli xizmat', 'Halol narx']
  },
  {
    id: 'brawl-gem-80',
    name: '80 GEM',
    category: 'brawl',
    subCategory: 'brawl-gems',
    price: 43000,
    priceFormatted: '43.000 UZS (43K)',
    badge: null,
    highlight: false,
    delivery: '2 - 8 daqiqa',
    iconType: 'gem',
    description: 'Ajoyib narxda 80 ta yashil qimmatbaho gemlar.',
    features: ['Tezkor yetkazish', '24/7 yordam', 'Kafolatlangan']
  },
  {
    id: 'brawl-gem-90',
    name: '90 GEM',
    category: 'brawl',
    subCategory: 'brawl-gems',
    price: 51000,
    priceFormatted: '51.000 UZS (51K)',
    badge: null,
    highlight: false,
    delivery: '2 - 8 daqiqa',
    iconType: 'gem',
    description: 'O\'yindagi chegirmali skinlarni darhol qo\'lga kiriting.',
    features: ['Qulay narx', 'Tezkor xizmat', 'To\'liq halol']
  },
  {
    id: 'brawl-gem-120',
    name: '120 GEM',
    category: 'brawl',
    subCategory: 'brawl-gems',
    price: 68000,
    priceFormatted: '68.000 UZS (68K)',
    badge: null,
    highlight: false,
    delivery: '2 - 8 daqiqa',
    iconType: 'gem',
    description: 'Bir nechta skin va qutilarni ochish uchun yaxshi to\'plam.',
    features: ['Tez yetkazib berish', 'Xavfsiz servis', 'Kafolat']
  },
  {
    id: 'brawl-gem-150',
    name: '150 GEM',
    category: 'brawl',
    subCategory: 'brawl-gems',
    price: 85000,
    priceFormatted: '85.000 UZS (85K)',
    badge: null,
    highlight: false,
    delivery: '2 - 8 daqiqa',
    iconType: 'gem',
    description: 'Yaxshi skinlar va mega box takliflari uchun ayni muddao.',
    features: ['Eng maqbul narx', 'Tezkor jarayon', 'Kafolatlangan']
  },
  {
    id: 'brawl-gem-160',
    name: '160 GEM',
    category: 'brawl',
    subCategory: 'brawl-gems',
    price: 86000,
    priceFormatted: '86.000 UZS (86K)',
    badge: 'Qulay Narx 💎',
    highlight: false,
    delivery: '2 - 8 daqiqa',
    iconType: 'gem',
    description: '150 ga qaraganda deyarli bir xil narxda ko\'proq gem oling!',
    features: ['Foydali tanlov', 'Tezkor yetkazish', 'Xavfsiz']
  },

  // ----------------------------------------------------
  // SKIDKA (DISCOUNTED GEMS - Highlighted with glowing RED/GOLD "SKIDKA 🔥" badge!)
  // ----------------------------------------------------
  {
    id: 'brawl-skidka-170',
    name: '170 GEM',
    category: 'brawl',
    subCategory: 'brawl-skidka',
    price: 80000,
    priceFormatted: '80.000 UZS (80K)',
    badge: 'SKIDKA 🔥',
    isSkidka: true,
    highlight: true,
    accent: 'red',
    delivery: '2 - 10 daqiqa',
    iconType: 'gem-fire',
    description: 'Maxsus CHEGIRMA! Standart narxlardan ancha arzon narxda 170 Gem oling.',
    features: ['🔥 Katta chegirma!', 'Cheklangan vaqt', 'Tezkor yuklab berish']
  },
  {
    id: 'brawl-skidka-360',
    name: '360 GEM',
    category: 'brawl',
    subCategory: 'brawl-skidka',
    price: 155000,
    priceFormatted: '155.000 UZS (155K)',
    badge: 'SKIDKA 🔥',
    isSkidka: true,
    highlight: true,
    accent: 'red',
    delivery: '2 - 10 daqiqa',
    iconType: 'gem-fire',
    description: 'Haqiqiy super taklif! 360 Gem bilan o\'yindagi eng yaxshi narsalarni oling.',
    features: ['🔥 Skidka narx', 'Juda ommabop paket', '100% kafolatlangan']
  },
  {
    id: 'brawl-skidka-950',
    name: '950 GEM',
    category: 'brawl',
    subCategory: 'brawl-skidka',
    price: 369000,
    priceFormatted: '369.000 UZS (369K)',
    badge: 'SUPER SKIDKA 🔥',
    isSkidka: true,
    highlight: true,
    accent: 'red',
    delivery: '2 - 10 daqiqa',
    iconType: 'gem-fire',
    description: 'Super chegirma! Ko\'p sonli afsonaviy skinlar va barcha do\'kon takliflari uchun.',
    features: ['💥 Super chegirma!', 'Maksimal tejash', 'VIP tezkor xizmat']
  },
  {
    id: 'brawl-skidka-2000',
    name: '2000 GEM',
    category: 'brawl',
    subCategory: 'brawl-skidka',
    price: 730000,
    priceFormatted: '730.000 UZS (730K)',
    badge: 'MEGA SKIDKA 🔥',
    isSkidka: true,
    highlight: true,
    accent: 'red',
    delivery: '2 - 15 daqiqa',
    iconType: 'gem-fire',
    description: 'Eng ulkan paket eng past chegirmali narxda! Hisobingizni cho\'qqiga olib chiqing.',
    features: ['👑 MEGA CHEGIRMA', 'Eng katta tejash', 'Shaxsiy admin nazorati']
  }
];

// SVG Icon Definitions for consistent crisp rendering
const ICONS = {
  robux: `
    <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" fill="rgba(0,255,135,0.2)"/>
        <circle cx="12" cy="12" r="3.5" fill="currentColor"/>
      </svg>
    </div>
  `,
  plus: `
    <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="rgba(112,0,255,0.2)"/>
        <line x1="12" y1="8" x2="12" y2="16" stroke-width="2.5"/>
        <line x1="8" y1="12" x2="16" y2="12" stroke-width="2.5"/>
      </svg>
    </div>
  `,
  gamepass: `
    <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="6" width="20" height="12" rx="2" fill="rgba(0,240,255,0.15)"/>
        <circle cx="6" cy="12" r="1.5" fill="currentColor"/>
        <path d="M14 9h4M14 12h4M14 15h2"/>
      </svg>
    </div>
  `,
  star: `
    <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#starGradient)"/>
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF275"/>
            <stop offset="100%" stop-color="#FFAA00"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  `,
  'telegram-vip': `
    <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr from-purple-600/20 to-blue-500/20 border border-purple-400/30 text-purple-300 group-hover:scale-110 transition-transform">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m22 2-7 20-4-9-9-4Z" fill="rgba(168,85,247,0.3)"/>
        <path d="M22 2 11 13"/>
      </svg>
    </div>
  `,
  'brawl-pass': `
    <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-rose-500/10 border border-rose-500/30 text-rose-400 group-hover:scale-110 transition-transform">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" fill="rgba(244,63,94,0.2)"/>
        <path d="M13 5v2M13 17v2M13 11v2"/>
      </svg>
    </div>
  `,
  'brawl-pass-plus': `
    <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-rose-500/20 to-amber-500/20 border border-rose-400/40 text-amber-300 group-hover:scale-110 transition-transform">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" fill="rgba(251,191,36,0.25)"/>
      </svg>
    </div>
  `,
  'brawl-pro': `
    <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-500/15 border border-amber-400/40 text-amber-300 group-hover:scale-110 transition-transform">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
      </svg>
    </div>
  `,
  gem: `
    <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="6 3 18 3 22 9 12 22 2 9" fill="rgba(16,185,129,0.2)"/>
        <polyline points="2 9 12 22 22 9"/>
        <line x1="6" y1="3" x2="12" y2="22"/>
        <line x1="18" y1="3" x2="12" y2="22"/>
      </svg>
    </div>
  `,
  'gem-fire': `
    <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-rose-500/20 border border-rose-500/40 text-rose-400 group-hover:scale-110 transition-transform relative">
      <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="6 3 18 3 22 9 12 22 2 9" fill="rgba(244,63,94,0.3)"/>
        <polyline points="2 9 12 22 22 9"/>
      </svg>
      <span class="absolute -top-1 -right-1 text-xs">🔥</span>
    </div>
  `
};

// Application State
const state = {
  activeCategory: 'all',
  activeSubCategory: 'all',
  searchQuery: '',
  selectedProduct: null,
  sortBy: 'default' // 'default', 'price-asc', 'price-desc', 'popular'
};

// DOM References
const elements = {
  productsGrid: document.getElementById('products-grid'),
  categoryTabs: document.querySelectorAll('.category-tab'),
  subCategoryPillsContainer: document.getElementById('subcategory-pills'),
  searchInput: document.getElementById('search-input'),
  clearSearchBtn: document.getElementById('clear-search'),
  categoryHeaderTitle: document.getElementById('category-header-title'),
  categoryHeaderNotice: document.getElementById('category-header-notice'),
  itemCountBadge: document.getElementById('item-count-badge'),
  // Modal elements
  orderModal: document.getElementById('order-modal'),
  modalCloseBtn: document.getElementById('modal-close-btn'),
  modalCancelBtn: document.getElementById('modal-cancel-btn'),
  modalItemIcon: document.getElementById('modal-item-icon'),
  modalItemTitle: document.getElementById('modal-item-title'),
  modalItemPrice: document.getElementById('modal-item-price'),
  modalItemDelivery: document.getElementById('modal-item-delivery'),
  modalItemCategory: document.getElementById('modal-item-category'),
  modalAccountInput: document.getElementById('modal-account-input'),
  modalAccountLabel: document.getElementById('modal-account-label'),
  modalAccountHint: document.getElementById('modal-account-hint'),
  modalSubmitAdminBtn: document.getElementById('modal-submit-admin'),
  modalCopyBtn: document.getElementById('modal-copy-btn'),
  // Toast
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toast-message'),
  // Mobile menu
  mobileMenuBtn: document.getElementById('mobile-menu-btn'),
  mobileMenu: document.getElementById('mobile-menu'),
  mobileMenuCloseBtn: document.getElementById('mobile-menu-close')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  renderSubCategoryPills();
  renderProducts();
  startRecentOrdersTicker();
});

// Event Listeners Setup
function setupEventListeners() {
  // Category tabs click
  elements.categoryTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const category = tab.dataset.category;
      setCategory(category);
    });
  });

  // Search input
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      if (elements.clearSearchBtn) {
        if (state.searchQuery.length > 0) {
          elements.clearSearchBtn.classList.remove('hidden');
        } else {
          elements.clearSearchBtn.classList.add('hidden');
        }
      }
      renderProducts();
    });
  }

  // Clear search button
  if (elements.clearSearchBtn) {
    elements.clearSearchBtn.addEventListener('click', () => {
      elements.searchInput.value = '';
      state.searchQuery = '';
      elements.clearSearchBtn.classList.add('hidden');
      renderProducts();
      elements.searchInput.focus();
    });
  }

  // Modal close buttons
  if (elements.modalCloseBtn) {
    elements.modalCloseBtn.addEventListener('click', closeModal);
  }
  if (elements.modalCancelBtn) {
    elements.modalCancelBtn.addEventListener('click', closeModal);
  }

  // Modal overlay click outside to close
  if (elements.orderModal) {
    elements.orderModal.addEventListener('click', (e) => {
      if (e.target === elements.orderModal) {
        closeModal();
      }
    });
  }

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !elements.orderModal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Modal submit action to Telegram
  if (elements.modalSubmitAdminBtn) {
    elements.modalSubmitAdminBtn.addEventListener('click', handleProceedToTelegram);
  }

  // Modal copy order text action
  if (elements.modalCopyBtn) {
    elements.modalCopyBtn.addEventListener('click', handleCopyOrderDetails);
  }

  // Mobile menu toggle
  if (elements.mobileMenuBtn && elements.mobileMenu) {
    elements.mobileMenuBtn.addEventListener('click', () => {
      elements.mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });
  }

  if (elements.mobileMenuCloseBtn && elements.mobileMenu) {
    elements.mobileMenuCloseBtn.addEventListener('click', () => {
      elements.mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // Mobile menu links close drawer on click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (elements.mobileMenu) {
        elements.mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  });
}

// Category Switching
window.setCategory = function(category) {
  state.activeCategory = category;
  state.activeSubCategory = 'all';

  // Update tabs active state
  elements.categoryTabs.forEach(tab => {
    if (tab.dataset.category === category) {
      tab.classList.add('active', 'text-white', 'border-cyan-400/40');
      tab.classList.remove('text-gray-400', 'border-transparent');
    } else {
      tab.classList.remove('active', 'text-white', 'border-cyan-400/40');
      tab.classList.add('text-gray-400', 'border-transparent');
    }
  });

  // Update Category Header & Notice Badges
  updateCategoryNotices(category);

  // Re-render subcategory pills and items
  renderSubCategoryPills();
  renderProducts();
}

function updateCategoryNotices(category) {
  if (!elements.categoryHeaderNotice || !elements.categoryHeaderTitle) return;

  if (category === 'robux') {
    elements.categoryHeaderTitle.innerHTML = '💰 Robux & Plus Store';
    elements.categoryHeaderNotice.innerHTML = `
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium">
        <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Robloxdagi barcha narsalar va barcha Game Pass'larni ham olib beramiz!</span>
      </div>
    `;
    elements.categoryHeaderNotice.classList.remove('hidden');
  } else if (category === 'stars') {
    elements.categoryHeaderTitle.innerHTML = '⭐️ Telegram Stars & Premium';
    elements.categoryHeaderNotice.innerHTML = `
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium">
        <svg class="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        <span>🔒 Asosiysi: Telegram akkauntga kirmasdan olib beriladi! Undan ko'p miqdorda ham mavjud.</span>
      </div>
    `;
    elements.categoryHeaderNotice.classList.remove('hidden');
  } else if (category === 'brawl') {
    elements.categoryHeaderTitle.innerHTML = '🔥 Brawl Stars (Pass & Gems)';
    elements.categoryHeaderNotice.innerHTML = `
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-medium">
        <span class="text-rose-400 font-bold">SKIDKA 🔥:</span>
        <span>Arzonlashtirilgan maxsus paketlar va rasmiy Brawl Pass donatlari!</span>
      </div>
    `;
    elements.categoryHeaderNotice.classList.remove('hidden');
  } else {
    elements.categoryHeaderTitle.innerHTML = 'Barcha Mahsulotlar & Xizmatlar';
    elements.categoryHeaderNotice.innerHTML = '';
    elements.categoryHeaderNotice.classList.add('hidden');
  }
}

// Subcategory Pills Rendering
function renderSubCategoryPills() {
  if (!elements.subCategoryPillsContainer) return;

  let pills = [];

  if (state.activeCategory === 'robux') {
    pills = [
      { id: 'all', label: 'Barchasi' },
      { id: 'robux-standard', label: 'Standart Robux' },
      { id: 'plus-store', label: '⭐️ Plus Store' }
    ];
  } else if (state.activeCategory === 'brawl') {
    pills = [
      { id: 'all', label: 'Barchasi' },
      { id: 'brawl-pass', label: '🔥 Brawl Pass' },
      { id: 'brawl-gems', label: 'Gems (Standart)' },
      { id: 'brawl-skidka', label: 'SKIDKA Gemlar 🔥' }
    ];
  } else {
    // Hide or empty pills container for 'all' or 'stars'
    elements.subCategoryPillsContainer.innerHTML = '';
    return;
  }

  elements.subCategoryPillsContainer.innerHTML = pills.map(pill => {
    const isActive = state.activeSubCategory === pill.id;
    return `
      <button 
        type="button" 
        onclick="handleSubCategoryChange('${pill.id}')"
        class="px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
          isActive 
            ? 'bg-white/15 text-white border border-white/30 shadow-sm' 
            : 'bg-white/5 text-gray-400 border border-white/5 hover:text-white hover:bg-white/10'
        }"
      >
        ${pill.label}
      </button>
    `;
  }).join('');
}

window.handleSubCategoryChange = function(subCatId) {
  state.activeSubCategory = subCatId;
  renderSubCategoryPills();
  renderProducts();
};

// Filter Products
function getFilteredProducts() {
  return PRODUCTS_DATA.filter(item => {
    // Category check
    if (state.activeCategory !== 'all' && item.category !== state.activeCategory) {
      return false;
    }

    // Subcategory check
    if (state.activeSubCategory !== 'all' && item.subCategory !== state.activeSubCategory) {
      return false;
    }

    // Search query check
    if (state.searchQuery) {
      const matchName = item.name.toLowerCase().includes(state.searchQuery);
      const matchDesc = item.description.toLowerCase().includes(state.searchQuery);
      const matchPrice = item.priceFormatted.toLowerCase().includes(state.searchQuery);
      const matchBadge = item.badge ? item.badge.toLowerCase().includes(state.searchQuery) : false;
      return matchName || matchDesc || matchPrice || matchBadge;
    }

    return true;
  });
}

// Render Products Grid
function renderProducts() {
  const filtered = getFilteredProducts();

  // Update item count badge
  if (elements.itemCountBadge) {
    elements.itemCountBadge.textContent = `${filtered.length} ta variant`;
  }

  if (filtered.length === 0) {
    elements.productsGrid.innerHTML = `
      <div class="col-span-full py-16 text-center glass-card rounded-2xl p-8 border border-white/10">
        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">Hech narsa topilmadi</h3>
        <p class="text-sm text-gray-400 max-w-md mx-auto mb-6">
          "${state.searchQuery}" bo'yicha hech qanday mahsulot topilmadi. Qidiruv so'zini o'zgartirib ko'ring yoki barcha toifalarni ko'ring.
        </p>
        <button 
          onclick="resetFilters()"
          class="px-5 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 text-sm font-semibold transition-colors"
        >
          Filtrlarni tozalash
        </button>
      </div>
    `;
    return;
  }

  elements.productsGrid.innerHTML = filtered.map(item => createProductCardHtml(item)).join('');
}

window.resetFilters = function() {
  state.activeCategory = 'all';
  state.activeSubCategory = 'all';
  state.searchQuery = '';
  if (elements.searchInput) elements.searchInput.value = '';
  if (elements.clearSearchBtn) elements.clearSearchBtn.classList.add('hidden');
  setCategory('all');
};

// Generate Card HTML
function createProductCardHtml(item) {
  // Determine card style based on category & flags
  let cardSpecificClass = 'glass-card';
  let badgeHtml = '';
  let borderGlow = '';

  if (item.isSkidka) {
    cardSpecificClass += ' card-skidka';
    badgeHtml = `
      <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-red-600 to-rose-500 text-white pulse-glow-skidka uppercase tracking-wider">
        ${item.badge || 'SKIDKA 🔥'}
      </span>
    `;
  } else if (item.badge) {
    let badgeClass = 'badge-neon-cyan';
    if (item.category === 'robux') badgeClass = 'badge-neon-robux';
    if (item.category === 'stars') badgeClass = 'badge-neon-gold';
    if (item.category === 'brawl') badgeClass = 'badge-neon-brawl';
    if (item.subCategory === 'plus-store') badgeClass = 'badge-neon-purple';

    badgeHtml = `
      <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold ${badgeClass}">
        ${item.badge}
      </span>
    `;
  }

  // Accent hover class
  if (item.category === 'robux') cardSpecificClass += ' card-robux';
  if (item.category === 'stars') cardSpecificClass += ' card-stars';
  if (item.category === 'brawl' && !item.isSkidka) cardSpecificClass += ' card-brawl';
  if (item.subCategory === 'plus-store') cardSpecificClass += ' card-plus';

  const iconSvg = ICONS[item.iconType] || ICONS.robux;
  const buttonLabel = item.customButtonText || 'Sotib olish';

  return `
    <div class="${cardSpecificClass} rounded-2xl p-5 flex flex-col justify-between group">
      <div>
        <!-- Top Row: Icon + Badge -->
        <div class="flex items-start justify-between gap-3 mb-4">
          ${iconSvg}
          <div class="flex flex-col items-end gap-1">
            ${badgeHtml}
            <span class="text-[11px] text-gray-400 flex items-center gap-1 mt-1">
              <svg class="w-3 h-3 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              ${item.delivery}
            </span>
          </div>
        </div>

        <!-- Title & Description -->
        <div class="mb-4">
          <h3 class="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors font-gaming tracking-wide">
            ${item.name}
          </h3>
          <p class="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
            ${item.description}
          </p>
        </div>

        <!-- Features list -->
        <div class="space-y-1.5 mb-5 pt-3 border-t border-white/5">
          ${item.features.map(feat => `
            <div class="flex items-center gap-2 text-xs text-gray-300">
              <svg class="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="truncate">${feat}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Bottom Row: Price & Buy Button -->
      <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        <div>
          <span class="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Narxi</span>
          <div class="text-lg sm:text-xl font-extrabold ${item.isSkidka ? 'text-rose-400' : 'text-white'} font-gaming">
            ${item.priceFormatted}
          </div>
        </div>

        <button 
          type="button"
          onclick="openOrderModal('${item.id}')"
          class="${item.isSkidka ? 'btn-cyber-admin' : 'btn-cyber-primary'} px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white flex items-center gap-2 active:scale-95 transition-transform shadow-lg cursor-pointer"
        >
          <span>${buttonLabel}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  `;
}

// Modal Logic
window.openOrderModal = function(productId) {
  const item = PRODUCTS_DATA.find(p => p.id === productId);
  if (!item) return;

  state.selectedProduct = item;

  // Populate modal data
  if (elements.modalItemIcon) {
    elements.modalItemIcon.innerHTML = ICONS[item.iconType] || ICONS.robux;
  }
  if (elements.modalItemTitle) {
    elements.modalItemTitle.textContent = item.name;
  }
  if (elements.modalItemPrice) {
    elements.modalItemPrice.textContent = item.priceFormatted;
  }
  if (elements.modalItemDelivery) {
    elements.modalItemDelivery.textContent = item.delivery;
  }
  if (elements.modalItemCategory) {
    let catName = 'Roblox Xizmati';
    if (item.category === 'stars') catName = 'Telegram Xizmati (Akkauntsiz)';
    if (item.category === 'brawl') catName = 'Brawl Stars Donat';
    elements.modalItemCategory.textContent = catName;
  }

  // Adjust input placeholder & label based on service
  if (elements.modalAccountLabel && elements.modalAccountInput && elements.modalAccountHint) {
    elements.modalAccountInput.value = '';
    if (item.category === 'robux') {
      elements.modalAccountLabel.textContent = 'Roblox Nickname (Foydalanuvchi nomi):';
      elements.modalAccountInput.placeholder = 'Masalan: RobloxUser123';
      elements.modalAccountHint.textContent = 'Game Pass yoki guruh orqali yetkazish uchun parolsiz.';
    } else if (item.category === 'stars') {
      elements.modalAccountLabel.textContent = 'Telegram @username:';
      elements.modalAccountInput.placeholder = 'Masalan: @sizning_profil';
      elements.modalAccountHint.textContent = '🔒 Akkauntga kirish talab qilinmaydi! Stars to\'g\'ridan-to\'g\'ri yuboriladi.';
    } else if (item.category === 'brawl') {
      elements.modalAccountLabel.textContent = 'Supercell ID yoki Player Tag:';
      elements.modalAccountInput.placeholder = 'Masalan: #2P0CY9QL yoki email';
      elements.modalAccountHint.textContent = 'Brawl Pass yoki Gemlarni faollashtirish uchun.';
    }
  }

  // Show modal
  elements.orderModal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
};

window.closeModal = function() {
  if (elements.orderModal) {
    elements.orderModal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// Generate Order Message for Telegram
function generateOrderMessage() {
  const item = state.selectedProduct;
  if (!item) return '';

  const accountInfo = elements.modalAccountInput ? elements.modalAccountInput.value.trim() : '';

  let message = `Assalomu alaykum @${ADMIN_USERNAME}!\n`;
  message += `Men "WINDY SERVICE" veb-saytidan buyurtma bermoqchiman:\n\n`;
  message += `📦 Mahsulot: ${item.name}\n`;
  message += `💰 Narxi: ${item.priceFormatted}\n`;
  if (accountInfo) {
    message += `🎮 Akkaunt / Username: ${accountInfo}\n`;
  }
  message += `⚡️ Yetkazish: ${item.delivery}\n\n`;
  message += `Iltimos, to'lov rekvizitlarini (Click / Payme / Uzcard) yuborsangiz!`;

  return message;
}

// Proceed to Telegram
function handleProceedToTelegram() {
  const item = state.selectedProduct;
  if (!item) return;

  const message = generateOrderMessage();
  const encodedMessage = encodeURIComponent(message);
  const telegramUrl = `https://t.me/${ADMIN_USERNAME}?text=${encodedMessage}`;

  // Open Telegram in new tab
  window.open(telegramUrl, '_blank');

  showToast('Telegram ochilmoqda! Adminga xabar yuborishga tayyor.');
  closeModal();
}

// Copy Order Details to Clipboard
function handleCopyOrderDetails() {
  const message = generateOrderMessage();
  if (!message) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(message)
      .then(() => {
        showToast('✅ Buyurtma matni nusxalandi! Adminga jo\'natishingiz mumkin.');
      })
      .catch(() => {
        fallbackCopyText(message);
      });
  } else {
    fallbackCopyText(message);
  }
}

function fallbackCopyText(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
    showToast('✅ Buyurtma matni nusxalandi!');
  } catch (err) {
    showToast('Nusxalashda xatolik yuz berdi.');
  }
  document.body.removeChild(textarea);
}

// Toast System
let toastTimeout;
function showToast(message) {
  if (!elements.toast || !elements.toastMessage) return;

  clearTimeout(toastTimeout);
  elements.toastMessage.textContent = message;
  elements.toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
  elements.toast.classList.add('opacity-100', 'translate-y-0');

  toastTimeout = setTimeout(() => {
    elements.toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    elements.toast.classList.remove('opacity-100', 'translate-y-0');
  }, 4000);
}

// Recent Purchases Social Proof Live Ticker
const RECENT_PURCHASES = [
  { name: 'Xurshid R.', item: '1000 ROBUX', time: '1 daqiqa oldin', icon: '⚡️' },
  { name: 'Jasur B.', item: '250 ⭐️ Stars (Akkauntsiz)', time: '3 daqiqa oldin', icon: '⭐️' },
  { name: 'Sardor T.', item: 'BRAWL PASS PLUS', time: '5 daqiqa oldin', icon: '🔥' },
  { name: 'Diyor M.', item: '2000 GEM (Mega Skidka)', time: '8 daqiqa oldin', icon: '💥' },
  { name: 'Bekzod K.', item: '500 ROBUX', time: '12 daqiqa oldin', icon: '💰' },
  { name: 'Ulug\'bek A.', item: '500 ⭐️ Stars', time: '14 daqiqa oldin', icon: '✨' },
  { name: 'Timur S.', item: 'Barcha Game Pass\'lar', time: '18 daqiqa oldin', icon: '🎮' }
];

function startRecentOrdersTicker() {
  const container = document.getElementById('recent-order-popup');
  if (!container) return;

  let index = 0;

  function showNextPurchase() {
    const purchase = RECENT_PURCHASES[index];
    index = (index + 1) % RECENT_PURCHASES.length;

    const popupHtml = `
      <div class="glass-panel p-3.5 rounded-2xl flex items-center gap-3 border border-white/10 shadow-2xl backdrop-blur-xl animate-fade-in max-w-sm">
        <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-lg flex-shrink-0">
          ${purchase.icon}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between text-[11px] text-gray-400 mb-0.5">
            <span class="font-medium text-gray-300 truncate">${purchase.name}</span>
            <span class="text-cyan-400 font-mono">${purchase.time}</span>
          </div>
          <div class="text-xs font-bold text-white truncate">
            ${purchase.item} <span class="text-emerald-400 font-normal">yetkazildi</span>
          </div>
        </div>
        <button onclick="dismissRecentPopup()" class="text-gray-400 hover:text-white p-1 ml-1" title="Yopish">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;

    container.innerHTML = popupHtml;
    container.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    container.classList.add('opacity-100', 'translate-y-0');

    // Auto hide after 6 seconds
    setTimeout(() => {
      container.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      container.classList.remove('opacity-100', 'translate-y-0');
    }, 6000);
  }

  // Start after 3.5 seconds, repeat every 18 seconds
  setTimeout(() => {
    showNextPurchase();
    setInterval(showNextPurchase, 18000);
  }, 3500);
}

window.dismissRecentPopup = function() {
  const container = document.getElementById('recent-order-popup');
  if (container) {
    container.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    container.classList.remove('opacity-100', 'translate-y-0');
  }
};
