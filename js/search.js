

// ═══════════════════════════════════════════════════════
// VIT-AP Location DATA — Vijayawada (16.4922, 80.5004)
// ═══════════════════════════════════════════════════════
let BASE_LAT = 16.492241, BASE_LNG = 80.500429;

const IMG = {
  burger: ['https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=80', 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80', 'https://images.unsplash.com/photo-1625758166190-b2b5e1efed18?w=600&q=80', 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&q=80', 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80'],
  cafe: ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80', 'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=600&q=80', 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80'],
  street: ['https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=700&q=80', 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=80', 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80'],
  bakery: ['https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=700&q=80', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80', 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80'],
  fast: ['https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&q=80', 'https://images.unsplash.com/photo-1562059390-a761a084768e?w=600&q=80', 'https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=600&q=80'],
};

const SHOPS = [
  // { id: 1, name: "Vijay Burger House", category: "Fast Food", emoji: "🍔", coverImg: IMG.burger[0], images: [...IMG.burger], lat: 16.4951, lng: 80.5045, distance: 0.4, rating: 4.8, reviewCount: 287, trust: 95, isOpen: true, aiRecommended: true, phone: "+91 98491 23456", address: "12-3-56, MG Road, Governorpet, Vijayawada - 520002", hours: "9:00 AM – 11:00 PM", warning: null, tags: ["burger", "fast food", "fries", "shakes"], aiReason: "Highest ratings in area + consistent stock + best price-value ratio", products: [{ name: "Classic Burger", price: "₹119" }, { name: "Double Smash", price: "₹199" }, { name: "Chicken Tikka Burger", price: "₹159" }, { name: "Cheese Fries", price: "₹79" }, { name: "Mango Shake", price: "₹99" }, { name: "Veggie Delight", price: "₹109" }], reviews: [{ id: 1, name: "Arjun Reddy", init: "A", rating: 5, date: "3 days ago", text: "Absolutely the best burger in Vijayawada! The double smash is insane. Crispy, juicy, perfect bun. Coming back every week!", photos: ['https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&q=80'], helpful: 14, voted: false }, { id: 2, name: "Kavitha M", init: "K", rating: 4, date: "1 week ago", text: "Really good food, fast service. The cheese fries were amazing. Parking can be tricky.", photos: [], helpful: 7, voted: false }, { id: 3, name: "Srinivas P", init: "S", rating: 5, date: "2 weeks ago", text: "Must try the mango shake! Fresh and thick. Burger buns freshly baked. Great value.", photos: ['https://images.unsplash.com/photo-1625758166190-b2b5e1efed18?w=300&q=80', 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=300&q=80'], helpful: 22, voted: false }] },
  // { id: 2, name: "Café Vijayawada", category: "Café & Snacks", emoji: "☕", coverImg: IMG.cafe[0], images: [...IMG.cafe], lat: 16.4905, lng: 80.4980, distance: 0.7, rating: 4.6, reviewCount: 154, trust: 89, isOpen: true, aiRecommended: true, phone: "+91 87654 98765", address: "23, Eluru Road, Near Benz Circle, Vijayawada - 520008", hours: "7:30 AM – 10:00 PM", warning: null, tags: ["burger", "café", "coffee", "sandwiches"], aiReason: "Trending + high review velocity + great hygiene reports", products: [{ name: "Burger Sandwich", price: "₹89" }, { name: "Cold Coffee", price: "₹79" }, { name: "Veg Wrap", price: "₹99" }, { name: "Brownie", price: "₹59" }, { name: "Pasta", price: "₹129" }, { name: "Fresh Juice", price: "₹69" }], reviews: [{ id: 1, name: "Pooja Nair", init: "P", rating: 5, date: "2 days ago", text: "Beautiful café ambiance! Cold coffee is the best in Vijayawada. Burger sandwich hits different. Love this place!", photos: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&q=80'], helpful: 18, voted: false }, { id: 2, name: "Ravi Kumar", init: "R", rating: 4, date: "5 days ago", text: "Great spot for work. WiFi is good, food is decent. Brownie is a must try.", photos: [], helpful: 5, voted: false }] },
  // {
  //   id: 3, name: "Krishna Street Bites",
  //   category: "Street Food",
  //   emoji: "🌯",
  //   coverImg: IMG.street[0],
  //   images: [...IMG.street],
  //   lat: 16.4960,
  //   lng: 80.4950,
  //   distance: 1.0,
  //   rating: 4.3,
  //   reviewCount: 421,
  //   trust: 68,
  //   isOpen: true,
  //   aiRecommended: false,
  //   phone: "+91 76543 12345",
  //   address: "45, Besant Road, Patamata, Vijayawada - 520010",
  //   hours: "10:00 AM – 9:30 PM",
  //   warning: "3 users reported a menu item shown as available but was out of stock. Trust review in progress.",
  //   tags: ["burger", "rolls", "grills", "street food"],
  //   aiReason: null,
  //   products: [
  //     { name: "Grilled Chicken Burger", price: "₹79" },
  //     { name: "Paneer Roll", price: "₹69" },
  //     { name: "Egg Kheema Wrap", price: "₹89" },
  //     { name: "Fresh Lime Soda", price: "₹35" },
  //     { name: "Corn Chaat", price: "₹49" }
  //   ],
  //   reviews: [
  //     { id: 1, name: "Mahesh T", init: "M", rating: 4, date: "1 week ago", text: "Cheap and filling. Grilled chicken burger for ₹79 is unbeatable. Go early — they run out fast.", photos: [], helpful: 31, voted: false },
  //     { id: 2, name: "Deepika R", init: "D", rating: 3, date: "10 days ago", text: "Food was good but the item I ordered wasn't available even though it showed on the menu. Please update!", photos: [], helpful: 12, voted: false }
  //   ]
  // },
  // { id: 4, name: "Annapurna Bakery", category: "Bakery", emoji: "🥐", coverImg: IMG.bakery[0], images: [...IMG.bakery], lat: 16.4880, lng: 80.5050, distance: 1.3, rating: 4.7, reviewCount: 198, trust: 91, isOpen: true, aiRecommended: false, phone: "+91 65432 54321", address: "7, Nakkalagutta, Near Siddhartha College, Vijayawada - 520010", hours: "8:00 AM – 9:00 PM (Mon–Sat)", warning: null, tags: ["burger", "bakery", "bread", "pastry", "breakfast"], aiReason: null, products: [{ name: "Bun Burger", price: "₹69" }, { name: "Chicken Patty Burger", price: "₹109" }, { name: "Croissant", price: "₹45" }, { name: "Plum Cake", price: "₹39" }, { name: "Fresh Bread Loaf", price: "₹55" }], reviews: [{ id: 1, name: "Sunitha V", init: "S", rating: 5, date: "3 weeks ago", text: "Freshest baked buns in all of Vijayawada. Their burger patty is homemade and you can taste the difference!", photos: ['https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=300&q=80'], helpful: 27, voted: false }] },
  // { id: 5, name: "Spicy Street Express", category: "Fast Food", emoji: "🌶️", coverImg: IMG.fast[0], images: [...IMG.fast], lat: 16.4990, lng: 80.5080, distance: 1.6, rating: 4.4, reviewCount: 312, trust: 82, isOpen: true, aiRecommended: true, phone: "+91 54321 67890", address: "88, Auto Nagar, Vijayawada - 520007", hours: "11:00 AM – 11:00 PM", warning: null, tags: ["burger", "spicy", "chicken", "andhra"], aiReason: "Consistent 4.4+ rating over 6 months + reliable availability", products: [{ name: "Spicy Chicken Burger", price: "₹139" }, { name: "Andhra Style Burger", price: "₹159" }, { name: "Masala Fries", price: "₹79" }, { name: "Chaas", price: "₹39" }, { name: "Chilli Paneer Burger", price: "₹129" }, { name: "Combo Meal", price: "₹199" }], reviews: [{ id: 1, name: "Balaji K", init: "B", rating: 5, date: "4 days ago", text: "The Andhra Style Burger is fire! Literally fire in your mouth but in the best way. Service is fast!", photos: ['https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&q=80'], helpful: 19, voted: false }, { id: 2, name: "Priya S", init: "P", rating: 4, date: "2 weeks ago", text: "Very Vijayawada style spicy food. Combo meal is worth it. A bit crowded on weekends.", photos: [], helpful: 8, voted: false }] },
  // { id: 6, name: "Budget Bites Corner", category: "Budget Food", emoji: "💰", coverImg: IMG.street[1], images: [IMG.street[1], IMG.street[2]], lat: 16.4840, lng: 80.4990, distance: 2.1, rating: 3.7, reviewCount: 89, trust: 48, isOpen: true, aiRecommended: false, phone: "+91 43210 11223", address: "Near Gandhi Nagar Bus Stand, Vijayawada - 520003", hours: "8:00 AM – 10:00 PM", warning: "Multiple users flagged incorrect pricing. Visibility restricted until resolved.", tags: ["burger", "budget", "cheap"], aiReason: null, products: [{ name: "Basic Burger", price: "₹39" }, { name: "Egg Burger", price: "₹49" }, { name: "Tea", price: "₹15" }, { name: "Biscuits", price: "₹10" }], reviews: [{ id: 1, name: "Vinod T", init: "V", rating: 3, date: "1 month ago", text: "Food is okay for the price. But they charged me more than the menu price. Watch out for that.", photos: [], helpful: 16, voted: false }] },
  {
    id: 7,
    name: "Ramarao Biriyani",
    category: "Biriyani",
    emoji: "🍛",
    coverImg: "../image/shops/ramarao_biriyani_1.jpeg",
    images: ["../image/shops/ramarao_biriyani_1.jpeg"],
    lat: 16.5217,
    lng: 80.5208,
    distance: 2.5,
    rating: 4.2,
    reviewCount: 2,
    trust: 92,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 91338 17775",
    address: "Door 2-132, Malkapuram Junction, Mandadam, Near AP Secretariat, Gollapudi, Vijayawada, Andhra Pradesh",
    hours: "11:00 AM – 10:30 PM",
    warning: null,
    tags: ["biryiani", "dum biriyani", "spicy", "non-veg"],
    aiReason: "Popular for authentic dum biriyani with consistent taste and good portion size.",
    products: [
      { name: "Dum biriyani", price: "₹260" },
      { name: "Fry biriyani", price: "₹270" },
      { name: "Mix biriyani", price: "₹290" }
    ],
    reviews: [
      {
        id: 1,
        name: "Suresh K",
        init: "S",
        rating: 4,
        date: "5 days ago",
        text: "Dum biriyani has a rich flavor and good quantity. Worth the price.",
        photos: [],
        helpful: 18,
        voted: false
      },
      {
        id: 2,
        name: "Anjali P",
        init: "A",
        rating: 5,
        date: "2 weeks ago",
        text: "One of the best biriyani spots near Secretariat. Mix biriyani is a must try!",
        photos: [],
        helpful: 25,
        voted: false
      }
    ]
  },
  {
    id: 8,
    name: "Ruchi Pulka Point",
    category: "Tiffin",
    emoji: "&#129368;",
    coverImg: "../image/shops/id_8/1.jpeg",
    images: [
      "../image/shops/id_8/1.jpeg"
    ],
    lat: 16.5209,
    lng: 80.5219,
    distance: 2.3,
    rating: 4.4,
    reviewCount: 2,
    trust: 75,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 97014 18519",
    address: "Main Road, Opposite to Hotel Balabhadra Grand, Mandadam, Malkapuram, Andhra Pradesh 522237",
    hours: "7:00 AM – 10:00 PM",
    warning: null,
    tags: ["pulka", "chapati", "egg", "chicken curry", "budget meals"],
    aiReason: "Highly affordable pulka meals with multiple curry options, popular among locals for quick and filling food.",
    products: [
      { name: "Single Pulka", price: "₹10" },
      { name: "3 Pulka with 2 Veg Curry", price: "₹50" },
      { name: "3 Pulka with Egg Bhurji", price: "₹60" },
      { name: "3 Pulka with Chicken Curry", price: "₹80" },
      { name: "Omelette (1 Piece)", price: "₹20" },
      { name: "Omelette (2 Piece)", price: "₹40" },
      { name: "2 Chapati with 2 Veg Curry", price: "₹60" }
    ],
    reviews: [
      {
        id: 1,
        name: "Ravi Teja",
        init: "R",
        rating: 5,
        date: "3 days ago",
        text: "Very cheap and tasty food. Pulka with chicken curry is the best combo here.",
        photos: [],
        helpful: 21,
        voted: false
      },
      {
        id: 2,
        name: "Keerthi M",
        init: "K",
        rating: 4,
        date: "1 week ago",
        text: "Good place for daily meals. Egg bhurji combo is filling and worth the price.",
        photos: [],
        helpful: 14,
        voted: false
      }
    ]
  },
  {
    id: 9,
    name: "Masha Allah Fast Food Center",
    category: "Fast Food",
    emoji: "🍜",
    coverImg: "../image/shops/id_9/1.jpeg",
    images: [
      "../image/shops/id_9/1.jpeg",
    ],
    lat: 16.520407,
    lng: 80.522677,
    distance: 2.2,
    rating: 4.5,
    reviewCount: 2,
    trust: 78,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 84639 55245",
    address: "Near Masid Road, Mandadam, Velgapudi, Andhra Pradesh 522241",
    hours: "11:00 AM – 11:00 PM",
    warning: null,
    tags: ["fried rice", "noodles", "biryani", "chicken", "fast food", "budget"],
    aiReason: "Wide variety of budget-friendly fast food items with strong local popularity, especially for fried rice and starters.",
    products: [
      { name: "Chicken Fried Rice", price: "₹80" },
      { name: "All Mix Fried Rice", price: "₹100" },
      { name: "Chicken Noodles", price: "₹80" },
      { name: "All Mix Noodles", price: "₹100" },
      { name: "Egg Manchurian Rice", price: "₹70" },
      { name: "Egg Manchurian Noodles", price: "₹70" },
      { name: "Egg Fried Rice", price: "₹60" },
      { name: "Egg Noodles", price: "₹60" },

      { name: "Chilli Chicken (250g)", price: "₹150" },
      { name: "Chicken Lollipop (3 pcs)", price: "₹150" },
      { name: "Chicken Lollipop (1 pc)", price: "₹40" },
      { name: "Chicken Manchurian", price: "₹120" },
      { name: "Leg Piece (1 pc)", price: "₹50" },
      { name: "Chicken Pakodi (100g)", price: "₹50" },
      { name: "Chicken Pakodi (250g)", price: "₹120" },
      { name: "Egg Manchurian", price: "₹70" },

      { name: "Veg Fried Rice", price: "₹60" },
      { name: "Veg Noodles", price: "₹60" },
      { name: "Veg Manchurian", price: "₹60" },
      { name: "Jeera Fried Rice", price: "₹70" },
      { name: "Paneer Fried Rice", price: "₹80" },
      { name: "Paneer Noodles", price: "₹80" },
      { name: "Veg Manchurian Fried Rice", price: "₹60" },
      { name: "Veg Manchurian Noodles", price: "₹60" },

      { name: "Chicken Dum Biryani", price: "₹130" },
      { name: "Chicken Fry Biryani", price: "₹140" },
      { name: "Chicken Lollipop Biryani", price: "₹150" }
    ],
    reviews: [
      {
        id: 1,
        name: "Imran S",
        init: "I",
        rating: 5,
        date: "2 days ago",
        text: "Best place for fried rice and noodles at this price. Chicken fried rice is a must try!",
        photos: [],
        helpful: 34,
        voted: false
      },
      {
        id: 2,
        name: "Pooja N",
        init: "P",
        rating: 4,
        date: "1 week ago",
        text: "Good variety and taste. Sometimes crowded in the evening but food is worth the wait.",
        photos: [],
        helpful: 19,
        voted: false
      }
    ]
  },
  {
    id: 10,
    name: "The Food Corner Fast Food Center",
    category: "Fast Food",
    emoji: "&#127836;",
    coverImg: "../image/shops/id_10/1.jpeg",
    images: [
      "../image/shops/id_10/1.jpeg"
    ],
    lat: 16.519673,
    lng: 80.524334,
    distance: 2.1,
    rating: 4.1,
    reviewCount: 2,
    trust: 70,
    isOpen: true,
    aiRecommended: false,
    phone: "+91 89196 02260",
    address: "Mandadam, Opposite Sivalayam Temple, Main Road, Gollapudi, Vijayawada",
    hours: "11:00 AM – 10:30 PM",
    warning: null,
    tags: ["fast food", "chicken", "fried rice", "noodles", "manchurian"],
    aiReason: null,
    products: [
      { name: "Veg Manchurian", price: "₹80" },
      { name: "Chicken Manchurian", price: "₹150" },
      { name: "Chicken Noodles", price: "₹100" },
      { name: "Chicken Fried Rice", price: "₹90" },
      { name: "Chicken Joint (1 Piece)", price: "₹50" }
    ],
    reviews: [
      {
        id: 1,
        name: "Kiran V",
        init: "K",
        rating: 4,
        date: "4 days ago",
        text: "Good taste for the price. Chicken fried rice is decent and filling.",
        photos: [],
        helpful: 11,
        voted: false
      },
      {
        id: 2,
        name: "Sneha R",
        init: "S",
        rating: 3,
        date: "1 week ago",
        text: "Food is okay but waiting time can be long during evening hours.",
        photos: [],
        helpful: 6,
        voted: false
      }
    ]
  },
  {
    id: 11,
    name: "Vijayawada Junction Restaurant",
    category: "Restaurant",
    emoji: "&#127869;",
    coverImg: "../image/shops/id_11/1.jpeg",
    images: [
      "../image/shops/id_11/1.jpeg"
    ],
    lat: 16.519188,
    lng: 80.525862,
    distance: 2.0,
    rating: 4.6,
    reviewCount: 2,
    trust: 85,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 88862 27474",
    address: "Gachu Centre, Vijayawada-Amaravathi Road, Mandadam, Andhra Pradesh 522241",
    hours: "11:00 AM – 11:30 PM",
    warning: null,
    tags: ["restaurant", "biryani", "non-veg", "family dining", "curries", "premium"],
    aiReason: "Premium multi-cuisine restaurant with extensive menu and strong non-veg options.",
    products: [
      { name: "Golden Fried Mushroom", price: "₹280" },
      { name: "Salt and Pepper Mushroom", price: "₹280" },
      { name: "Paneer 65", price: "₹280" },
      { name: "Paneer Majestic", price: "₹280" },
      { name: "Chilli Paneer", price: "₹280" },

      { name: "Chilli Chicken", price: "₹330" },
      { name: "Garlic Chicken", price: "₹340" },
      { name: "Lemon Chicken", price: "₹330" },
      { name: "Pepper Chicken", price: "₹360" },
      { name: "Chicken 65", price: "₹330" },
      { name: "Fish Fingers", price: "₹370" },
      { name: "Apollo Fish", price: "₹399" },
      { name: "Chicken Manchurian", price: "₹359" },
      { name: "Chilli Fish", price: "₹309" },
      { name: "Cashew Nut Chicken", price: "₹349" },
      { name: "Crispy Fish", price: "₹349" },
      { name: "Chicken Lollipop", price: "₹409" },

      { name: "Kaju Mushroom", price: "₹359" },
      { name: "Paneer Butter Masala", price: "₹359" },
      { name: "Palak Paneer", price: "₹310" },
      { name: "Tomato Kaju Masala", price: "₹280" },
      { name: "Kaju Paneer", price: "₹410" },
      { name: "Kadai Paneer", price: "₹360" },
      { name: "Mushroom Masala", price: "₹329" },
      { name: "Dal Fry", price: "₹229" },
      { name: "Dal Tadka", price: "₹249" },

      { name: "Egg Curry (2 Eggs)", price: "₹150" },
      { name: "Special Omelette Curry", price: "₹229" },
      { name: "Egg Bhurji", price: "₹130" },
      { name: "Butter Chicken", price: "₹340" },
      { name: "Kadai Chicken", price: "₹310" },
      { name: "Andhra Chicken Curry", price: "₹280" },
      { name: "Chicken Mughlai Curry", price: "₹400" },
      { name: "Shahi Chicken", price: "₹370" },
      { name: "Fish Pulusu", price: "₹250" },
      { name: "Andhra Chicken Fry", price: "₹400" },
      { name: "Fish Fry", price: "₹260" },
      { name: "Prawns Fry", price: "₹500" },

      { name: "Phulka", price: "₹22" },
      { name: "Butter Phulka", price: "₹30" },
      { name: "Chapati", price: "₹40" },
      { name: "Egg Chapati", price: "₹110" },

      { name: "Veg Fried Rice", price: "₹250" },
      { name: "Veg Schezwan Fried Rice", price: "₹280" },
      { name: "Kaju Fried Rice", price: "₹340" },
      { name: "Paneer Fried Rice", price: "₹340" },
      { name: "Egg Fried Rice", price: "₹280" },
      { name: "Egg Schezwan Fried Rice", price: "₹300" },
      { name: "Chicken Schezwan Fried Rice", price: "₹330" },
      { name: "Chicken Fried Rice", price: "₹310" },

      { name: "Veg Soft Noodles", price: "₹210" },
      { name: "Veg Schezwan Noodles", price: "₹240" },
      { name: "Veg Hakka Noodles", price: "₹270" },
      { name: "Egg Schezwan Noodles", price: "₹240" },
      { name: "Egg Hakka Noodles", price: "₹270" },
      { name: "Egg Soft Noodles", price: "₹140" },
      { name: "Chicken Soft Noodles", price: "₹270" },
      { name: "Chicken Hakka Noodles", price: "₹280" },
      { name: "Chicken Schezwan Noodles", price: "₹299" },

      { name: "Fried Chicken Biryani", price: "₹450" },
      { name: "Special Chicken Biryani", price: "₹500" },
      { name: "Prawns Biryani", price: "₹500" },
      { name: "Fish Fried Biryani", price: "₹429" },
      { name: "Chicken Wings Biryani", price: "₹469" },
      { name: "Chicken Mughlai Biryani", price: "₹469" },
      { name: "Veg Biryani", price: "₹359" },

      { name: "Plain Rice", price: "₹75" },
      { name: "Curd Rice", price: "₹150" },

      { name: "Chicken Manchow Soup", price: "₹199" },
      { name: "Chicken Hot and Sour Soup", price: "₹179" },
      { name: "Veg Manchow Soup", price: "₹159" },
      { name: "Veg Hot and Sour Soup", price: "₹169" }
    ],
    reviews: [
      {
        id: 1,
        name: "Ramesh B",
        init: "R",
        rating: 5,
        date: "2 days ago",
        text: "Excellent restaurant with a wide menu. Chicken biryani and butter chicken are top class.",
        photos: [],
        helpful: 42,
        voted: false
      },
      {
        id: 2,
        name: "Divya S",
        init: "D",
        rating: 4,
        date: "1 week ago",
        text: "Great place for family dining. Slightly expensive but quality and taste are very good.",
        photos: [],
        helpful: 27,
        voted: false
      }
    ]
  },
  {
    id: 12,
    name: "Hotel Bheemasena",
    category: "Restaurant",
    emoji: "&#127869;",
    coverImg: "../image/shops/id_12/1.jpeg",
    images: [
      "../image/shops/id_12/1.jpeg"
    ],
    lat: 16.5245,
    lng: 80.5178,
    distance: 2.6,
    rating: 4,
    reviewCount: 2,
    trust: 84,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 87906 48199",
    address: "Penumaka-Amaravathi Road, Malkapuram, Andhra Pradesh 522241",
    hours: "11:00 AM – 11:30 PM",
    warning: null,
    tags: ["restaurant", "tandoori", "biryani", "non-veg", "family dining", "premium"],
    aiReason: "Extensive premium menu with strong tandoori and non-veg offerings, consistent quality and variety.",
    products: [
      { name: "Veg Corn Soup", price: "₹160" },
      { name: "Veg Hot and Sour Soup", price: "₹160" },
      { name: "Bheemasena Special Soup", price: "₹170" },

      { name: "Chicken Corn Soup", price: "₹170" },
      { name: "Chicken Manchow Soup", price: "₹170" },
      { name: "Chicken Hot and Sour Soup", price: "₹170" },
      { name: "Chicken Coriander Soup", price: "₹170" },
      { name: "Mutton Soup", price: "₹220" },
      { name: "Mutton Shorba Soup", price: "₹220" },

      { name: "Bheemasena Special Veg", price: "₹400" },
      { name: "Paneer 65", price: "₹350" },
      { name: "Baby Corn", price: "₹400" },
      { name: "Mushroom Chilli", price: "₹300" },
      { name: "Gobi Manchurian", price: "₹270" },
      { name: "Veg Manchurian", price: "₹270" },
      { name: "Golden Fried Paneer", price: "₹360" },
      { name: "Paneer Majestic", price: "₹360" },
      { name: "Pepper Paneer Stick", price: "₹500" },
      { name: "Mushroom Salt and Pepper", price: "₹460" },

      { name: "Chilli Egg", price: "₹325" },
      { name: "Chilli Chicken", price: "₹380" },
      { name: "Chicken Manchurian", price: "₹370" },
      { name: "Chicken 65", price: "₹380" },
      { name: "Chicken Majestic", price: "₹380" },
      { name: "Dragon Chicken", price: "₹390" },
      { name: "Chicken 555", price: "₹370" },
      { name: "Royal Chicken", price: "₹390" },
      { name: "Basket Chicken", price: "₹420" },
      { name: "Chicken Fry", price: "₹360" },
      { name: "Pepper Chicken", price: "₹425" },
      { name: "Spanish Chicken", price: "₹428.80" },
      { name: "Crispy Fried Chicken", price: "₹402" },
      { name: "Crispy Chicken", price: "₹425" },
      { name: "Apollo Fish", price: "₹440" },
      { name: "Chilli Fish", price: "₹450" },
      { name: "Loose Prawns", price: "₹480" },
      { name: "Chilli Prawns", price: "₹490" },
      { name: "Lemon Prawns", price: "₹509.20" },

      { name: "Paneer Tikka", price: "₹440" },
      { name: "Chicken Barra Kebab", price: "₹509.20" },
      { name: "Chicken Banno Kebab", price: "₹469" },
      { name: "Chicken Seekh Kebab", price: "₹428.80" },
      { name: "Muscat Chicken Kebab", price: "₹428.80" },
      { name: "Tandoori Chicken", price: "₹400" },
      { name: "Tangdi Kebab", price: "₹440" },
      { name: "Chicken Tikka", price: "₹415" },
      { name: "Malai Tikka", price: "₹455" },
      { name: "Fish Tikka", price: "₹440" },
      { name: "Mutton Seekh Kebab", price: "₹509.20" },

      { name: "Plain Palak", price: "₹260" },
      { name: "Mixed Veg Curry", price: "₹350" },
      { name: "Paneer Butter Masala", price: "₹370" },
      { name: "Kaju Masala", price: "₹370" },
      { name: "Mushroom Masala", price: "₹370" },
      { name: "Kaju Paneer Curry", price: "₹390" },
      { name: "Veg Jaipuri", price: "₹350" },
      { name: "Veg Chatpata", price: "₹365" },
      { name: "Tomato Kaju Curry", price: "₹390" },
      { name: "Methi Chaman", price: "₹390" },
      { name: "Bheemasena Special Veg Curry", price: "₹430" },
      { name: "Palak Paneer", price: "₹370" },

      { name: "Egg Bhurji", price: "₹240" },
      { name: "Chicken Curry", price: "₹350" },
      { name: "Chicken Fry Curry", price: "₹360" },
      { name: "Methi Chicken Curry", price: "₹380" },
      { name: "Mughlai Chicken Curry", price: "₹390" },
      { name: "Chicken Tikka Masala", price: "₹400" },
      { name: "Punjabi Chicken Masala", price: "₹410" },
      { name: "Andhra Chicken Boneless Curry", price: "₹500" },
      { name: "Andhra Chicken Curry", price: "₹380" },
      { name: "Butter Chicken", price: "₹380" },
      { name: "Natu Kodi Curry", price: "₹470" },
      { name: "Kadhai Chicken", price: "₹380" },
      { name: "Chicken Hyderabadi", price: "₹380" },
      { name: "Bheemasena Special Non Veg Curry", price: "₹520" },
      { name: "Mutton Curry", price: "₹500" },
      { name: "Mutton Rogan Josh", price: "₹530" },
      { name: "Mutton Curry Boneless", price: "₹530" },
      { name: "Fish Curry", price: "₹550" },
      { name: "Fish Curry Boneless", price: "₹430" },
      { name: "Prawns Curry", price: "₹460" },

      { name: "Garlic Naan", price: "₹95" },
      { name: "Methi Paratha", price: "₹85" },
      { name: "Kulcha", price: "₹65" },
      { name: "Plain Naan", price: "₹45" },
      { name: "Butter Naan", price: "₹60" },
      { name: "Butter Roti", price: "₹40" },
      { name: "Roti", price: "₹35" },

      { name: "Biryani Rice", price: "₹230" },
      { name: "White Rice", price: "₹100" },
      { name: "Curd Rice", price: "₹120" },
      { name: "Special Curd Rice", price: "₹200" },

      { name: "Veg Biryani", price: "₹300" },
      { name: "Special Veg Biryani", price: "₹310" },
      { name: "Veg Ulavacharu Biryani", price: "₹320" },
      { name: "Kaju Biryani", price: "₹360" },
      { name: "Special Kaju Biryani", price: "₹400" },
      { name: "Mushroom Biryani", price: "₹310" },
      { name: "Special Mushroom Biryani", price: "₹360" },
      { name: "Paneer Biryani", price: "₹340" },
      { name: "Special Paneer Biryani", price: "₹360" },
      { name: "Paneer Tikka Biryani", price: "₹400" },
      { name: "Bheemasena Special Veg Biryani", price: "₹410" },
      { name: "Paneer Bucket Biryani", price: "₹1300" }
    ],
    reviews: [
      {
        id: 1,
        name: "Harish K",
        init: "H",
        rating: 5,
        date: "3 days ago",
        text: "Massive menu and excellent taste. Tandoori items and curries are outstanding.",
        photos: [],
        helpful: 39,
        voted: false
      },
      {
        id: 2,
        name: "Lakshmi P",
        init: "L",
        rating: 4,
        date: "1 week ago",
        text: "Great variety and quality. Slightly expensive but worth it for family dining.",
        photos: [],
        helpful: 22,
        voted: false
      }
    ]
  },
  {
    id: 13,
    name: "Dream Cafeteria",
    category: "Restaurant",
    emoji: "&#9749;",
    coverImg: "../image/shops/id_13/1.jpeg",
    images: [
      "../image/shops/id_13/1.jpeg"
    ],
    lat: 16.521234,
    lng: 80.522012,
    distance: 2.3,
    rating: 4.4,
    reviewCount: 278,
    trust: 80,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 95425 52288",
    address: "Main Road, Opposite to Z.P.H.School, Inside Hotel Balabhadra Grand, Mandadam, Malkapuram, Andhra Pradesh 522241",
    hours: "11:00 AM – 11:00 PM",
    warning: null,
    tags: ["restaurant", "biryani", "tandoori", "seafood", "family dining"],
    aiReason: "Strong variety of seafood, chicken starters and biryanis with consistent pricing and popularity.",

    products: [
      { name: "Chicken Lollipop", price: "₹319" },
      { name: "Chicken Drums of Heaven", price: "₹319" },
      { name: "Chicken Pepper", price: "₹319" },
      { name: "Schezwan Chicken", price: "₹319" },
      { name: "Dragon Chicken", price: "₹319" },
      { name: "Chilli Chicken", price: "₹319" },
      { name: "Chicken Majestic", price: "₹319" },
      { name: "Chicken Tikka", price: "₹339" },
      { name: "Fish Tikka", price: "₹359" },
      { name: "Chilli Fish", price: "₹349" },
      { name: "Fish 65", price: "₹349" },
      { name: "Fish Manchurian", price: "₹349" },
      { name: "Apollo Fish", price: "₹349" },
      { name: "Fish Roast", price: "₹349" },
      { name: "Tandoori Prawns", price: "₹369" },
      { name: "Prawns Chilli", price: "₹349" },
      { name: "Prawns 65", price: "₹349" },
      { name: "Loose Prawns", price: "₹349" },
      { name: "Prawns Manchurian", price: "₹349" },
      { name: "Prawns Fry", price: "₹369" },
      { name: "Tandoori Chicken (Half, 4 Pieces)", price: "₹359" },

      { name: "Mushroom Tikka", price: "₹259" },
      { name: "Paneer Tikka", price: "₹269" },
      { name: "Fried Baby Corn", price: "₹209" },
      { name: "Baby Corn Chilli", price: "₹239" },
      { name: "Baby Corn 65", price: "₹239" },
      { name: "Baby Corn Manchurian", price: "₹239" },
      { name: "Crispy Vegetable", price: "₹219" },
      { name: "Mushroom Chilli", price: "₹249" },
      { name: "Mushroom 65", price: "₹249" },
      { name: "Mushroom Salt and Pepper", price: "₹249" },
      { name: "Vegetable Manchurian", price: "₹219" },
      { name: "Salt and Pepper Paneer", price: "₹269" },
      { name: "Paneer Manchurian", price: "₹269" },
      { name: "Paneer 65", price: "₹269" },
      { name: "Chilli Paneer", price: "₹269" },
      { name: "Paneer Majestic", price: "₹269" },
      { name: "French Fries", price: "₹199" },

      { name: "Andhra Chicken Curry (400g)", price: "₹359" },
      { name: "Chicken Chettinad (400g)", price: "₹359" },
      { name: "Chicken Kadai (400g)", price: "₹359" },
      { name: "Chicken Methi (400g)", price: "₹359" },
      { name: "Chicken Tikka Masala (400g)", price: "₹359" },
      { name: "Fish Curry (400g)", price: "₹369" },
      { name: "Prawns Curry (400g)", price: "₹389" },
      { name: "Prawns Masala (400g)", price: "₹389" },

      { name: "Plain Palak", price: "₹229" },
      { name: "Aloo Matar", price: "₹229" },
      { name: "Methi Chaman", price: "₹269" },
      { name: "Veg Kadai", price: "₹249" },
      { name: "Mix Veg Curry", price: "₹249" },
      { name: "Paneer Kadai", price: "₹269" },
      { name: "Palak Paneer", price: "₹269" },
      { name: "Paneer Tikka Masala", price: "₹269" },
      { name: "Kaju Paneer", price: "₹269" },
      { name: "Baby Corn Masala", price: "₹239" },
      { name: "Dal Fry", price: "₹219" },
      { name: "Dal Tadka", price: "₹219" },
      { name: "Dal Palak", price: "₹219" },
      { name: "Dal Tomato", price: "₹219" },
      { name: "Cashew Tomato", price: "₹289" },
      { name: "Cashew Curry", price: "₹289" },
      { name: "Cashew Masala", price: "₹289" },
      { name: "Mushroom Masala", price: "₹259" },
      { name: "Mushroom Matar", price: "₹259" },

      { name: "Butter Naan", price: "₹59" },
      { name: "Plain Naan", price: "₹59" },
      { name: "Laccha Paratha", price: "₹69" },
      { name: "Stuffed Paratha", price: "₹79" },
      { name: "Tandoori Roti", price: "₹49" },
      { name: "2 Phulka", price: "₹39" },
      { name: "Tandoori Butter Roti", price: "₹59" },

      { name: "Cashew Biryani", price: "₹259" },
      { name: "Mushroom Biryani", price: "₹239" },
      { name: "Paneer Biryani", price: "₹259" },
      { name: "Veg Dum Biryani", price: "₹229" },
      { name: "Egg Biryani", price: "₹279" },
      { name: "Special Chicken Biryani", price: "₹359" },
      { name: "Chicken Wings Biryani", price: "₹329" },
      { name: "Chicken Tikka Biryani", price: "₹329" },
      { name: "Chicken Fried Biryani", price: "₹329" },
      { name: "Chicken Dum Biryani", price: "₹329" },
      { name: "Fish Biryani", price: "₹389" },
      { name: "Prawns Biryani", price: "₹399" }
    ],

    reviews: [
      {
        id: 1,
        name: "Naveen K",
        init: "N",
        rating: 5,
        date: "2 days ago",
        text: "Amazing variety of starters, especially seafood. Biryani is also very tasty.",
        photos: [],
        helpful: 36,
        voted: false
      },
      {
        id: 2,
        name: "Priya S",
        init: "P",
        rating: 4,
        date: "1 week ago",
        text: "Good place for family dining. Slightly pricey but quality is consistent.",
        photos: [],
        helpful: 20,
        voted: false
      }
    ]
  },
  {
    id: 14,
    name: "Snack Chat",
    category: "Cafe",
    emoji: "&#129380;",
    coverImg: "../image/shops/id_14/1.jpeg",
    images: [
      "../image/shops/id_14/1.jpeg"
    ],
    lat: 16.520434,
    lng: 80.525535,
    distance: 2.1,
    rating: 4.3,
    reviewCount: 198,
    trust: 77,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 70325 93577",
    address: "2-53, NVR Nilayam, Boddu rai Centre, Thullur, Mandadam, Andhra Pradesh 522241",
    hours: "11:00 AM – 11:00 PM",
    warning: null,
    tags: ["cafe", "milkshakes", "pizza", "snacks", "fast food"],
    aiReason: "Popular for shakes, pizzas, and quick bites with affordable pricing and good variety.",

    products: [
      { name: "Vanilla Milkshake", price: "₹99" },
      { name: "Strawberry Milkshake", price: "₹99" },
      { name: "Chocolate Milkshake", price: "₹109" },
      { name: "Triple Chocolate Milkshake", price: "₹129" },
      { name: "Classic Cold Coffee", price: "₹109" },
      { name: "Black Cold Coffee", price: "₹109" },
      { name: "Oreo Milkshake", price: "₹119" },
      { name: "Kit Kat Shake", price: "₹119" },
      { name: "Blackcurrant Shake", price: "₹129" },
      { name: "Alphonso Mango Shake", price: "₹129" },

      { name: "Vanilla Thickshake", price: "₹149" },
      { name: "Strawberry Thickshake", price: "₹149" },
      { name: "Chocolate Thickshake", price: "₹159" },
      { name: "Thick Cold Coffee", price: "₹159" },
      { name: "Oreo Thickshake", price: "₹169" },
      { name: "Kit Kat Thickshake", price: "₹169" },
      { name: "Blackcurrant Thickshake", price: "₹179" },
      { name: "Alphonso Mango Thickshake", price: "₹179" },
      { name: "Triple Chocolate Thickshake", price: "₹179" },

      { name: "Virgin Mojito", price: "₹99" },
      { name: "Blue Curacao", price: "₹99" },
      { name: "Watermelon Mocktail", price: "₹99" },
      { name: "Green Apple Mocktail", price: "₹99" },
      { name: "Green Mint Mocktail", price: "₹99" },
      { name: "Grenadine Mocktail", price: "₹99" },
      { name: "Orange Mocktail", price: "₹99" },

      { name: "Vanilla Ice Cream (Single)", price: "₹49" },
      { name: "Strawberry Ice Cream (Single)", price: "₹49" },
      { name: "Chocolate Ice Cream (Single)", price: "₹49" },
      { name: "Blackcurrant Ice Cream (Single)", price: "₹59" },
      { name: "Butterscotch Ice Cream (Single)", price: "₹49" },
      { name: "Alphonso Mango Ice Cream (Single)", price: "₹59" },

      { name: "Vanilla Ice Cream (Double)", price: "₹69" },
      { name: "Strawberry Ice Cream (Double)", price: "₹69" },
      { name: "Chocolate Ice Cream (Double)", price: "₹69" },
      { name: "Blackcurrant Ice Cream (Double)", price: "₹79" },
      { name: "Butterscotch Ice Cream (Double)", price: "₹69" },
      { name: "Alphonso Mango Ice Cream (Double)", price: "₹79" },

      { name: "Extra Toppings", price: "₹10" },

      { name: "Veg Pizza", price: "₹149" },
      { name: "Golden Corn Pizza", price: "₹159" },
      { name: "Margherita Veg Pizza", price: "₹159" },
      { name: "Italian Pizza", price: "₹169" },
      { name: "Paneer Tikka Pizza", price: "₹179" },
      { name: "Mushroom Pizza", price: "₹179" },
      { name: "Cheese Burst Veg Pizza", price: "₹189" },
      { name: "Paneer Cheese Burst Pizza", price: "₹199" },

      { name: "Corn Add-on", price: "₹20" },
      { name: "Diced Cheese Add-on", price: "₹30" },
      { name: "Paneer Add-on", price: "₹30" },
      { name: "Mushroom Add-on", price: "₹30" },
      { name: "Chicken Add-on", price: "₹30" },

      { name: "Chicken Pizza", price: "₹179" },
      { name: "Margherita Chicken Pizza", price: "₹189" },
      { name: "Peri-Peri Chicken Pizza", price: "₹199" },
      { name: "Tandoori Chicken Pizza", price: "₹199" },
      { name: "Italian Chicken Pizza", price: "₹209" },
      { name: "Mexican Chicken Pizza", price: "₹209" },
      { name: "Cheese Burst Chicken Pizza", price: "₹219" },

      { name: "Mix Veg Momos (6 pcs)", price: "₹89" },
      { name: "Paneer Momos (6 pcs)", price: "₹109" },
      { name: "Chicken Momos (6 pcs)", price: "₹109" },
      { name: "Extra Schezwan Sauce", price: "₹10" },

      { name: "Chicken Popcorn (Small)", price: "₹99" },
      { name: "Chicken Popcorn (Medium)", price: "₹149" },
      { name: "Chicken Popcorn (Large)", price: "₹189" },
      { name: "Peri-Peri Chicken Popcorn (Small)", price: "₹109" },
      { name: "Peri-Peri Chicken Popcorn (Medium)", price: "₹159" },
      { name: "Peri-Peri Chicken Popcorn (Large)", price: "₹199" },

      { name: "Chicken Wings (3 pcs)", price: "₹99" },
      { name: "Chicken Wings (5 pcs)", price: "₹189" },
      { name: "Chicken Wings (7 pcs)", price: "₹219" },

      { name: "Chicken Lollipops (3 pcs)", price: "₹139" },
      { name: "Chicken Lollipops (5 pcs)", price: "₹229" },
      { name: "Chicken Lollipops (7 pcs)", price: "₹309" },

      { name: "Chicken Boneless Strips (3 pcs)", price: "₹119" },
      { name: "Chicken Boneless Strips (6 pcs)", price: "₹229" },
      { name: "Chicken Boneless Strips (9 pcs)", price: "₹329" },

      { name: "Extra Mayo (Small)", price: "₹20" },
      { name: "Extra Mayo (Large)", price: "₹30" },

      { name: "Veg Wrap", price: "₹119" },
      { name: "Paneer Wrap", price: "₹149" },
      { name: "Crispy Chicken Wrap", price: "₹149" },
      { name: "Tandoori Chicken Wrap", price: "₹149" },

      { name: "Classic French Fries", price: "₹89" },
      { name: "Peri-Peri French Fries", price: "₹99" },
      { name: "Tandoori French Fries", price: "₹99" },
      { name: "Chicken Nuggets (6 pcs)", price: "₹99" },
      { name: "Extra Veg Mayo Dip", price: "₹15" }
    ],

    reviews: [
      {
        id: 1,
        name: "Rahul M",
        init: "R",
        rating: 5,
        date: "3 days ago",
        text: "Best place for shakes and snacks. Oreo shake and chicken popcorn are amazing.",
        photos: [],
        helpful: 28,
        voted: false
      },
      {
        id: 2,
        name: "Anusha K",
        init: "A",
        rating: 4,
        date: "1 week ago",
        text: "Good variety and affordable prices. Pizza and wraps are worth trying.",
        photos: [],
        helpful: 17,
        voted: false
      }
    ]
  },
  {
    id: 15,
    name: "Hotel Sindhu",
    category: "Restaurant",
    emoji: "🍛",
    coverImg: "../image/shops/id_15/1.jpeg",
    images: [
      "../image/shops/id_15/1.jpeg"
    ],
    lat: 16.520234,
    lng: 80.523558,
    distance: 2.3,
    rating: 4.2,
    reviewCount: 86,
    trust: 74,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 84980 10973",
    address: "Mandadam post, beside Sri Kanaka Dhurga Chicken Center, Mandadam Centre, Thullur Mandal, Velgapudi, Andhra Pradesh 522241",
    hours: "11:00 AM – 11:00 PM",
    warning: null,
    tags: ["biryani", "non-veg", "restaurant", "lunch", "dinner"],
    aiReason: "Popular local spot for affordable and flavorful biryanis, especially known for chicken and mutton varieties.",

    products: [
      { name: "Chicken Dum Biryani", price: "₹200" },
      { name: "Chicken Fry Biryani", price: "₹200" },
      { name: "Chicken Mix Biryani", price: "₹200" },
      { name: "Mutton Biryani", price: "₹370" },
      { name: "Prawns Biryani", price: "₹270" }
    ],

    reviews: [
      {
        id: 1,
        name: "Suresh R",
        init: "S",
        rating: 5,
        date: "2 days ago",
        text: "Very tasty biryani, especially chicken dum. Good quantity for the price.",
        photos: [],
        helpful: 12,
        voted: false
      },
      {
        id: 2,
        name: "Kavya P",
        init: "K",
        rating: 4,
        date: "5 days ago",
        text: "Affordable and delicious. Mutton biryani is worth trying.",
        photos: [],
        helpful: 8,
        voted: false
      }
    ]
  },
  {
    id: 16,
    name: "Sri Lakshmi Mourya Family Restaurant",
    category: "Restaurant",
    emoji: "🍽️",
    coverImg: "../image/shops/id_16/1.jpeg",
    images: [
      "../image/shops/id_16/1.jpeg"
    ],
    lat: 16.522786,
    lng: 80.520162,
    distance: 2.5,
    rating: 4.4,
    reviewCount: 312,
    trust: 82,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 90526 31122",
    address: "Velagapudi W Rd, Malkapuram, Andhra Pradesh 522241",
    hours: "11:00 AM – 11:30 PM",
    warning: null,
    tags: ["biryani", "family restaurant", "non-veg", "tandoori", "fried rice", "seafood"],
    aiReason: "Highly popular family restaurant offering a wide variety of biryanis, fried rice, and tandoori dishes with strong local reputation and large portion options.",

    products: [
      { name: "Chicken Dum Biryani", price: "₹279" },
      { name: "SP Chicken Biryani", price: "₹339" },
      { name: "Chicken Fry Piece Biryani", price: "₹319" },
      { name: "Chicken Tikka Biryani", price: "₹359" },
      { name: "Chicken Wings Biryani", price: "₹419" },
      { name: "Chicken Moghalai Biryani", price: "₹389" },
      { name: "Mutton Biryani", price: "₹519" },
      { name: "Mutton SP Biryani", price: "₹609" },
      { name: "Mutton Moghalai Biryani", price: "₹569" },
      { name: "Fish Biryani", price: "₹479" },
      { name: "Prawns Biryani", price: "₹479" },
      { name: "SP Prawns Biryani", price: "₹579" },

      { name: "Mourya SP Chicken Biryani", price: "₹420" },
      { name: "Mourya SP Mutton Biryani", price: "₹700" },
      { name: "Mourya SP Veg Biryani", price: "₹250" },
      { name: "Mourya SP Chicken Family Pack", price: "₹1500" },
      { name: "Mourya SP Chicken Curry", price: "₹330" },

      { name: "Biryani Rice", price: "₹180" },
      { name: "Biryani Rice Half", price: "₹130" },
      { name: "Baby Corn Biryani", price: "₹230" },
      { name: "Egg Biryani", price: "₹270" },
      { name: "Kaju Biryani", price: "₹290" },
      { name: "Mushroom Biryani", price: "₹260" },
      { name: "Veg Biryani", price: "₹250" },
      { name: "Paneer Biryani", price: "₹270" },
      { name: "Veg Palav", price: "₹230" },

      { name: "Chicken Dum Family Pack", price: "₹849" },
      { name: "Chicken Fry Piece Family Pack", price: "₹899" },
      { name: "Chicken SP Family Pack", price: "₹949" },
      { name: "Mutton Family Pack", price: "₹1399" },
      { name: "Fish Family Pack", price: "₹1299" },
      { name: "Prawns Family Pack", price: "₹1399" },
      { name: "Veg Family Pack", price: "₹750" },

      { name: "Egg Fried Rice", price: "₹240" },
      { name: "SP Egg Fried Rice", price: "₹290" },
      { name: "Egg Schezwan Fried Rice", price: "₹260" },
      { name: "Ghee Fried Rice", price: "₹230" },
      { name: "Kaju Fried Rice", price: "₹270" },
      { name: "Mixed Veg Fried Rice", price: "₹280" },
      { name: "Mushroom Fried Rice", price: "₹250" },
      { name: "Paneer Fried Rice", price: "₹270" },
      { name: "Veg Fried Rice", price: "₹230" },
      { name: "SP Veg Fried Rice", price: "₹280" },
      { name: "Tomato Rice", price: "₹220" },
      { name: "Veg Schezwan Fried Rice", price: "₹230" },
      { name: "Zeera Rice", price: "₹210" },
      { name: "Curd Rice", price: "₹110" },
      { name: "SP Curd Rice", price: "₹160" },

      { name: "Chicken Fried Rice", price: "₹269" },
      { name: "Mixed Non-Veg Fried Rice", price: "₹319" },
      { name: "Non-Veg Schezwan Fried Rice", price: "₹319" },
      { name: "Mutton Fried Rice", price: "₹429" },

      { name: "Chicken 555", price: "₹319" },
      { name: "Chicken 65", price: "₹310" },
      { name: "Chicken Bone Roast", price: "₹290" },
      { name: "Chicken Drumstick", price: "₹330" },
      { name: "Chicken Fry BL", price: "₹310" },
      { name: "Chicken Fry Bones", price: "₹290" },
      { name: "Chicken Lollypop", price: "₹339" },
      { name: "Chicken Majestic", price: "₹319" },
      { name: "Chicken Manchurian", price: "₹309" },
      { name: "Chicken Wings Full", price: "₹330" },
      { name: "Chicken Wings Half", price: "₹200" },
      { name: "Chilly Chicken", price: "₹310" },
      { name: "RR Chicken", price: "₹339" },
      { name: "Dragon Chicken", price: "₹320" },
      { name: "Garlic Chicken", price: "₹310" },

      { name: "Ginger Chicken", price: "₹310" },
      { name: "Hongkong Chicken", price: "₹350" },
      { name: "Kaju Chicken", price: "₹370" },
      { name: "Pepper Chicken", price: "₹309" },
      { name: "Mutton Fry", price: "₹460" },
      { name: "Chilli Mutton", price: "₹460" },
      { name: "Chefs Special Chicken", price: "₹399" },

      { name: "Loose Prawns", price: "₹350" },
      { name: "Prawns Fry", price: "₹350" },
      { name: "Chilli Fish", price: "₹350" },
      { name: "Chilli Prawns", price: "₹350" },
      { name: "Apollo Fish", price: "₹350" },

      { name: "Baby Corn Manchurian", price: "₹260" },
      { name: "Chilli Baby Corn", price: "₹250" },
      { name: "Chilli Mushroom", price: "₹250" },
      { name: "Chilli Paneer", price: "₹270" },
      { name: "Crispy Baby Corn", price: "₹250" },
      { name: "Kaju Fry", price: "₹310" },
      { name: "Mushroom 65", price: "₹260" },
      { name: "Gobi Manchurian", price: "₹250" },
      { name: "Paneer 65", price: "₹270" },
      { name: "Paneer 555", price: "₹270" },
      { name: "Paneer Manchurian", price: "₹270" },
      { name: "Paneer Majestic", price: "₹270" },
      { name: "Veg Manchurian", price: "₹250" },

      { name: "Tandoori Chicken Full", price: "₹499" },
      { name: "Tandoori Chicken Half", price: "₹299" },
      { name: "Chicken Tikka", price: "₹299" },
      { name: "Paneer Tikka", price: "₹289" },
      { name: "Tangdi Kebab", price: "₹319" }
    ],

    reviews: []
  },
  {
    id: 17,
    name: "Hotel Aatidhyam",
    category: "Restaurant",
    emoji: "🍛",
    coverImg: "../image/shops/id_17/1.jpeg",
    images: [
      "../image/shops/id_17/1.jpeg"
    ],
    lat: 16.524574,
    lng: 80.517484,
    distance: 2.8,
    rating: 4.1,
    reviewCount: 64,
    trust: 72,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 91003 88002",
    address: "Door no 2&3, opposite Malkapuram cheruvu, Malkapuram, Amaravathi, Andhra Pradesh 522241",
    hours: "11:00 AM – 10:30 PM",
    warning: null,
    tags: ["meals", "non-veg", "lunch", "budget", "family"],
    aiReason: "Good option for budget-friendly meals with multiple non-veg meal combos including chicken, fish, and mutton.",

    products: [
      { name: "Mini Meals", price: "₹110" },
      { name: "Jumbo Meals (for 2)", price: "₹160" },
      { name: "Chicken Meals", price: "₹220" },
      { name: "Fish Meals", price: "₹220" },
      { name: "Mutton Meals", price: "₹370" },
      { name: "Egg Meals", price: "₹140" },
      { name: "3 in 1", price: "₹270" },
      { name: "Egg Curry", price: "₹80" },
      { name: "Chicken Curry", price: "₹150" },
      { name: "Mutton Curry", price: "₹300" }
    ],

    reviews: []
  },
  {
    id: 18,
    name: "Hotel Bilal",
    category: "Restaurant",
    emoji: "🍛",
    coverImg: "../image/shops/id_18/1.jpeg",
    images: [
      "../image/shops/id_18/1.jpeg",
      "../image/shops/id_18/2.jpeg",
    ],
    lat: 16.520968,
    lng: 80.522026,
    distance: 2.2,
    rating: 4.0,
    reviewCount: 48,
    trust: 70,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 91210 54269",
    address: "Mandadam, Malkapuram, Andhra Pradesh 522241",
    hours: "11:00 AM – 10:30 PM",
    warning: null,
    tags: ["biryani", "budget", "non-veg", "quick meals"],
    aiReason: "Affordable biryani spot known for simple and budget-friendly chicken biryani options.",

    products: [
      { name: "Chicken Biriyani", price: "₹150" },
      { name: "Chicken Fry Biriyani", price: "₹180" },
      { name: "Chicken Mix Biriyani", price: "₹200" }
    ],

    reviews: []
  },


];

// ═══════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════
let filtered = [...SHOPS], activeFilters = new Set(['open']), activeId = null, currentId = null;
let map, uMarker, sMarkers = {}, dMap = null;
let lbImgs = [], lbIdx = 0, revStars = 0;

// ═══════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════
const tc = s => s >= 85 ? '#16a34a' : s >= 70 ? '#d97706' : '#dc2626';
const tbClass = s => s >= 85 ? 'badge-th' : s >= 70 ? 'badge-tm' : 'badge-tl';
const tLabel = s => s >= 85 ? 'High Trust' : s >= 70 ? 'Moderate' : 'Low Trust';
function stars(r, big = false) {
  const sz = big ? '15px' : '11px'; let h = '';
  for (let i = 1; i <= 5; i++) {
    const col = r >= i ? '#f59e0b' : r >= i - .5 ? '#f59e0b' : '#d1d5db';
    const ic = r >= i ? 'fa-solid fa-star' : r >= i - .5 ? 'fa-solid fa-star-half-stroke' : 'fa-regular fa-star';
    h += `<i class="${ic}" style="color:${col};font-size:${sz};"></i>`;
  } return h;
}
function rDist(rating, n) {
  const d = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  if (!n) return d;
  d[5] = Math.round(n * Math.max(0, rating - 3.5) * .55);
  d[4] = Math.round(n * .28); d[3] = Math.round(n * .1); d[2] = Math.round(n * .05);
  d[1] = Math.max(0, n - d[5] - d[4] - d[3] - d[2]); return d;
}
function toast(m) { const e = document.getElementById('mapToast'); e.textContent = m; e.classList.add('show'); setTimeout(() => e.classList.remove('show'), 2800); }

// ═══════════════════════════════════════════════════════
// MAP
// ═══════════════════════════════════════════════════════
function initMap() {
  map = L.map('map', { zoomControl: false }).setView([BASE_LAT, BASE_LNG], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors', maxZoom: 19 }).addTo(map);
  SHOPS.forEach(s => addMarker(s));
  addUMarker(BASE_LAT, BASE_LNG);
}
function sIcon(shop, hl = false) {
  const sz = hl ? 44 : 36, bg = hl ? '#e02020' : '#fff', bor = hl ? '#b01010' : '#d1d5db';
  const sh = hl ? '0 0 0 4px rgba(224,32,32,.2),0 4px 14px rgba(0,0,0,.18)' : '0 2px 8px rgba(0,0,0,.14)';
  return L.divIcon({ className: '', html: `<div style="width:${sz}px;height:${sz}px;background:${bg};border:2.5px solid ${bor};border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:${hl ? 22 : 16}px;box-shadow:${sh};transition:all .3s;">${shop.emoji}</div>`, iconSize: [sz, sz], iconAnchor: [sz / 2, sz], popupAnchor: [0, -(sz + 4)] });
}
function addMarker(shop) {
  const m = L.marker([shop.lat, shop.lng], { icon: sIcon(shop) }).addTo(map).bindPopup(`<div class="popup-name">${shop.emoji} ${shop.name}</div><div class="popup-meta">${stars(shop.rating)} ${shop.rating} · 📍${shop.distance}km · ${shop.isOpen ? '🟢 Open' : '🔴 Closed'}</div>`);
  m.on('click', () => openDetail(shop.id)); sMarkers[shop.id] = m;
}
function addUMarker(lat, lng) {
  const ic = L.divIcon({ className: '', html: `<div style="width:16px;height:16px;background:#2563eb;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 4px rgba(37,99,235,.25);"></div>`, iconSize: [16, 16], iconAnchor: [8, 8] });
  if (uMarker) map.removeLayer(uMarker);
  uMarker = L.marker([lat, lng], { icon: ic }).addTo(map).bindPopup('<div class="popup-name">📍 You are here</div>');
}
function goToMyLocation() {
  if (!navigator.geolocation) { toast('Geolocation not supported'); return; }
  navigator.geolocation.getCurrentPosition(
    p => { map.flyTo([p.coords.latitude, p.coords.longitude], 15); addUMarker(p.coords.latitude, p.coords.longitude); toast('📍 Moved to your location'); },
    () => { map.flyTo([BASE_LAT, BASE_LNG], 14); toast('📍 Using Vijayawada demo location'); }
  );
}

// ═══════════════════════════════════════════════════════
// RENDER CARD
// ═══════════════════════════════════════════════════════
function mkCard(shop) {
  const d = document.createElement('div');
  d.className = 'shop-card' + (shop.id === activeId ? ' active' : ''); d.id = `card-${shop.id}`;
  const tColor = tc(shop.trust);
  const aiB = shop.aiRecommended ? `<span class="badge badge-ai">✨ AI Pick</span>` : '';
  const openB = shop.isOpen ? `<span class="badge badge-open"><span class="pulse" style="display:inline-block;width:6px;height:6px;background:#16a34a;border-radius:50%;margin-right:2px;"></span>Open</span>` : `<span class="badge badge-closed">⛔ Closed</span>`;
  const wB = shop.warning ? `<div class="warn-banner"><i class="fa-solid fa-triangle-exclamation" style="margin-top:1px;flex-shrink:0;"></i>${shop.warning}</div>` : '';
  d.innerHTML = `
    <div class="shop-img">${shop.coverImg ? `<img src="${shop.coverImg}" alt="${shop.name}" loading="lazy"/>` : `<span>${shop.emoji}</span>`}</div>
    <div class="shop-info">
      <div class="shop-name-row"><div class="shop-name">${shop.name}</div>${openB}</div>
      <div class="shop-sub">${shop.category} · ${shop.address.split(',')[0]}</div>
      <div class="tags-row">
        ${aiB}
        <span class="badge badge-rating">${stars(shop.rating)} ${shop.rating} <span style="opacity:.6;font-weight:400">(${shop.reviewCount})</span></span>
        <span class="badge badge-dist"><i class="fa-solid fa-location-dot"></i> ${shop.distance}km</span>
        <span class="badge ${tbClass(shop.trust)}"><i class="fa-solid fa-shield-halved"></i> ${tLabel(shop.trust)}</span>
      </div>
      <div class="trust-bar-wrap">
        <span class="trust-label">Trust</span>
        <div class="trust-bar"><div class="trust-fill" style="width:${shop.trust}%;background:${tColor};"></div></div>
        <span class="trust-val" style="color:${tColor};">${shop.trust}/100</span>
      </div>

      ${wB}
    </div>`;
  d.addEventListener('click', () => openDetail(shop.id)); return d;
}
function renderList(arr) {
  const list = document.getElementById('shopList');
  list.innerHTML = '';
  // document.getElementById('resultCount').textContent = arr.length;
  const city = localStorage.getItem('selectedCity') || 'Vijayawada';
  document.getElementById('resultCount').textContent = arr.length;
  document.querySelector('.result-count').innerHTML =
    `<span id="resultCount">${arr.length}</span> shops near ${city}`;

  if (!arr.length) { list.innerHTML = '<div class="no-results"><i class="fa-solid fa-store-slash"></i><p>No shops found. Try adjusting your filters.</p></div>'; return; }
  arr.forEach(s => list.appendChild(mkCard(s)));
}
function updateMarkers(arr) {
  const v = new Set(arr.map(s => s.id));
  SHOPS.forEach(s => { if (!sMarkers[s.id]) return; v.has(s.id) ? sMarkers[s.id].addTo(map) : map.removeLayer(sMarkers[s.id]); });
}

// ═══════════════════════════════════════════════════════
// FILTER / SORT
// ═══════════════════════════════════════════════════════
function togglePill(el, f) { el.classList.toggle('active'); activeFilters.has(f) ? activeFilters.delete(f) : activeFilters.add(f); applyFilters(); }
function doSearch() { applyFilters(); }
document.getElementById('searchInput').addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
function applyFilters() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  let arr = SHOPS.filter(s => {
    const mQ = !q || s.name.toLowerCase().includes(q) || s.tags.some(t => t.includes(q)) || s.category.toLowerCase().includes(q) || s.products.some(p => p.name.toLowerCase().includes(q));
    return mQ && (!activeFilters.has('open') || s.isOpen) && (!activeFilters.has('ai') || s.aiRecommended) && (!activeFilters.has('nearby') || s.distance < 1) && (!activeFilters.has('top') || s.rating >= 4.5) && (!activeFilters.has('trusted') || s.trust >= 85);
  });
  const sort = document.getElementById('sortSelect').value;
  arr.sort((a, b) => sort === 'distance' ? a.distance - b.distance : sort === 'rating' ? b.rating - a.rating : b.trust - a.trust);
  filtered = arr; renderList(arr); updateMarkers(arr);
}

// ═══════════════════════════════════════════════════════
// DETAIL
// ═══════════════════════════════════════════════════════
function openDetail(id) {
  const shop = SHOPS.find(s => s.id === id); if (!shop) return;
  activeId = id; currentId = id; revStars = 0;
  document.querySelectorAll('.shop-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById(`card-${id}`);
  if (card) { card.classList.add('active'); card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
  Object.keys(sMarkers).forEach(sid => { const s = SHOPS.find(x => x.id === +sid); if (s) sMarkers[sid].setIcon(sIcon(s, +sid === id)); });
  map.flyTo([shop.lat, shop.lng], 16, { duration: .8 });
  // Reset to overview tab
  document.querySelectorAll('.tab-btn').forEach((b, i) => { b.classList.toggle('active', i === 0); });
  renderDetailContent(shop, 'overview');
  document.getElementById('detailOverlay').classList.add('show');
}

function renderDetailContent(shop, tab) {
  renderRight(shop);
  if (tab === 'overview') renderOverview(shop);
  else if (tab === 'products') renderProducts(shop);
  else if (tab === 'photos') renderPhotos(shop);
  else if (tab === 'reviews') renderReviews(shop);
}

function renderRight(shop) {
  document.getElementById('detailRight').innerHTML = `
    <div class="section-label">Location</div>
    <div id="detail-map"></div>
    <div style="font-size:12px;color:var(--muted);margin-top:5px;line-height:1.5;"><i class="fa-solid fa-location-dot" style="color:#ff8938;margin-right:5px;"></i>${shop.address}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="action-btn btn-primary" style="flex:1;" onclick="getDir(${shop.lat},${shop.lng})"><i class="fa-solid fa-diamond-turn-right"></i> Directions</button>
      <button class="action-btn btn-secondary" onclick="window.location.href='tel:${shop.phone}'"><i class="fa-solid fa-phone"></i> Call</button>
    </div>
    <hr class="divider" style="margin:10px 0;">
    <div class="section-label">Hours & Contact</div>
    <div class="info-row"><i class="fa-solid fa-clock"></i><div>${shop.hours}</div></div>
    <div class="info-row"><i class="fa-solid fa-phone"></i><strong>${shop.phone}</strong></div>
    <hr class="divider" style="margin:10px 0;">
    <div class="section-label">Tags</div>
    <div class="tags-row">${shop.tags.map(t => `<span class="badge badge-dist">#${t}</span>`).join('')}</div>
  `;
  setTimeout(() => {
    if (dMap) { dMap.remove(); dMap = null; }
    dMap = L.map('detail-map', { zoomControl: false, attributionControl: false }).setView([shop.lat, shop.lng], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(dMap);
    L.marker([shop.lat, shop.lng], { icon: sIcon(shop, true) }).addTo(dMap);
    L.marker([BASE_LAT, BASE_LNG], { icon: L.divIcon({ className: '', html: `<div style="width:12px;height:12px;background:#2563eb;border:2px solid #fff;border-radius:50%;"></div>`, iconSize: [12, 12], iconAnchor: [6, 6] }) }).addTo(dMap);
  }, 120);
}

function renderOverview(shop) {
  const tColor = tc(shop.trust);
  const aiSec = shop.aiRecommended ? `<div class="ai-chip"><i class="fa-solid fa-wand-magic-sparkles" style="margin-top:1px;flex-shrink:0;"></i><div><div>${shop.aiReason}</div><div style="font-weight:400;opacity:.75;margin-top:2px;font-size:11px;">Evaluated on: price, distance, quality feedback & reliability</div></div></div>` : '';
  const wSec = shop.warning ? `<div class="warn-detail"><i class="fa-solid fa-triangle-exclamation" style="margin-top:1px;flex-shrink:0;"></i><div>${shop.warning}</div></div>` : '';
  const openB = shop.isOpen ? `<span class="badge badge-open" style="padding:4px 10px;font-size:12px;"><span class="pulse" style="display:inline-block;width:7px;height:7px;background:#16a34a;border-radius:50%;margin-right:3px;"></span>Open Now</span>` : `<span class="badge badge-closed" style="padding:4px 10px;font-size:12px;">⛔ Closed</span>`;
  document.getElementById('detailLeft').innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;">
      <div style="width:70px;height:70px;border-radius:12px;overflow:hidden;border:1.5px solid var(--border2);flex-shrink:0;background:#f3f4f6;">
        ${shop.coverImg ? `<img src="${shop.coverImg}" style="width:100%;height:100%;object-fit:cover;" alt=""/>` : `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:28px;">${shop.emoji}</div>`}
      </div>
      <div>
        <div style="font-family:'Manrope',sans-serif;font-size:20px;font-weight:800;color:var(--text);">${shop.name}</div>
        <div style="font-size:12px;color:var(--muted);">${shop.category}</div>
      </div>
    </div>
    ${aiSec}
    <div class="tags-row" style="margin-bottom:12px;">
      ${openB}
      <span class="badge badge-rating" style="padding:4px 10px;font-size:12px;">${stars(shop.rating)} ${shop.rating} <span style="opacity:.6;font-weight:400;">(${shop.reviewCount})</span></span>
      <span class="badge badge-dist" style="padding:4px 10px;font-size:12px;"><i class="fa-solid fa-location-dot"></i> ${shop.distance}km</span>
      <span class="badge ${tbClass(shop.trust)}" style="padding:4px 10px;font-size:12px;"><i class="fa-solid fa-shield-halved"></i> ${tLabel(shop.trust)}</span>
    </div>
    <div class="trust-bar-wrap" style="margin-bottom:14px;">
      <span class="trust-label" style="font-size:12px;">Trust Score</span>
      <div class="trust-bar" style="height:5px;"><div class="trust-fill" style="width:${shop.trust}%;background:${tColor};"></div></div>
      <span class="trust-val" style="font-size:12px;color:${tColor};">${shop.trust}/100 — ${tLabel(shop.trust)}</span>
    </div>
    ${wSec}
    <hr class="divider">
    <div class="section-label">Top Products Preview</div>
    <div class="product-grid">
      ${shop.products.slice(0, 4).map(p => `<div class="product-card"><span class="product-name">${p.name}</span><span class="product-price">${p.price}</span></div>`).join('')}
    </div>
    ${shop.products.length > 4 ? `<div style="font-size:12px;color:#ff8938;margin-top:8px;cursor:pointer;" onclick="document.querySelector('.tab-btn[data-tab=products]').click()">View all ${shop.products.length} products →</div>` : ''}
  `;
}

function renderProducts(shop) {
  document.getElementById('detailLeft').innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
      <div style="font-family:'Manrope',sans-serif;font-size:17px;font-weight:800;">Products & Services</div>
      <span class="badge badge-dist">${shop.products.length} items</span>
    </div>
    <input type="text" placeholder="Search products…" oninput="filterProds(this.value,${shop.id})"
      style="width:100%;border:1.5px solid var(--border2);border-radius:10px;padding:9px 14px;font-family:'Open Sans',sans-serif;font-size:13px;outline:none;margin-bottom:12px;background:var(--surface2);color:var(--text);">
    <div class="product-grid" id="pgrid-${shop.id}">
      ${shop.products.map(p => `<div class="product-card"><span class="product-name">${p.name}</span><span class="product-price">${p.price}</span></div>`).join('')}
    </div>
  `;
}
function filterProds(q, id) {
  const shop = SHOPS.find(s => s.id === id); if (!shop) return;
  const f = shop.products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
  document.getElementById(`pgrid-${id}`).innerHTML = f.length ? f.map(p => `<div class="product-card"><span class="product-name">${p.name}</span><span class="product-price">${p.price}</span></div>`).join('') : `<div style="grid-column:span 2;text-align:center;padding:20px;color:var(--muted);font-size:13px;">No products match "${q}"</div>`;
}

function renderPhotos(shop) {
  lbImgs = [...(shop.images || [])];
  const imgs = shop.images || [];
  let gallHtml;
  if (!imgs.length) {
    gallHtml = `<div class="gallery-empty"><i class="fa-solid fa-images" style="font-size:32px;color:var(--border2);"></i><span style="font-size:13px;color:var(--muted);">No photos yet — be the first!</span></div>`;
  } else {
    gallHtml = `<div class="gallery-grid">`;
    imgs.slice(0, 5).forEach((src, i) => {
      if (i === 0) gallHtml += `<div class="gallery-main" onclick="openLB(0,${shop.id})"><img src="${src}" alt="" loading="lazy"/></div>`;
      else gallHtml += `<div class="gallery-cell" onclick="openLB(${i},${shop.id})">${i === 4 && imgs.length > 5 ? `<img src="${src}" alt="" loading="lazy"/><div class="gallery-more">+${imgs.length - 5} more</div>` : `<img src="${src}" alt="" loading="lazy"/>`}</div>`;
    });
    gallHtml += `</div>`;
  }
  document.getElementById('detailLeft').innerHTML = `
    <div style="font-family:'Manrope',sans-serif;font-size:17px;font-weight:800;margin-bottom:14px;">${shop.name} — ${imgs.length} Photo${imgs.length !== 1 ? 's' : ''}</div>
    ${gallHtml}
    <hr class="divider">
    <div class="section-label">Upload Your Photos</div>
    <label class="photo-upload-btn"><i class="fa-solid fa-camera"></i> Choose Photos
      <input type="file" accept="image/*" multiple style="display:none;" onchange="addShopPhotos(this,${shop.id})">
    </label>
    <div id="upPrev-${shop.id}" class="photo-preview-row" style="margin-top:10px;"></div>
  `;
}
function addShopPhotos(input, id) {
  const shop = SHOPS.find(s => s.id === id); if (!shop) return;
  const prev = document.getElementById(`upPrev-${id}`);
  Array.from(input.files).forEach(f => {
    const r = new FileReader(); r.onload = e => {
      const img = document.createElement('img'); img.src = e.target.result; img.className = 'photo-thumb';
      prev.appendChild(img); shop.images.push(e.target.result); lbImgs = [...shop.images];
    }; r.readAsDataURL(f);
  });
}

function renderReviews(shop) {
  const dist = rDist(shop.rating, shop.reviewCount);
  const maxD = Math.max(...Object.values(dist)) || 1;
  document.getElementById('detailLeft').innerHTML = `
    <div class="review-summary">
      <div style="text-align:center;flex-shrink:0;">
        <div class="rev-big-num">${shop.rating}</div>
        <div class="rev-big-stars">${stars(shop.rating, true)}</div>
        <div class="rev-big-count">${shop.reviewCount} reviews</div>
      </div>
      <div style="flex:1;">${[5, 4, 3, 2, 1].map(n => `
        <div class="rev-bar-row">
          <div class="rev-bar-label">${n}</div>
          <div class="rev-bar-track"><div class="rev-bar-fill" style="width:${Math.round((dist[n] / maxD) * 100)}%;"></div></div>
          <div class="rev-bar-count">${dist[n]}</div>
        </div>`).join('')}
      </div>
    </div>

    <div class="write-review-box">
      <div class="section-label">Write a Review</div>
      <div class="star-picker" id="sPicker-${shop.id}">
        ${[1, 2, 3, 4, 5].map(n => `<span class="star-btn" data-v="${n}" onclick="setStars(${n},${shop.id})">★</span>`).join('')}
      </div>
      <textarea class="review-textarea" id="revTxt-${shop.id}" placeholder="Share your experience at ${shop.name}…" rows="3"></textarea>
      <div>
        <label class="photo-upload-btn"><i class="fa-solid fa-camera-retro"></i> Add Photos
          <input type="file" accept="image/*" multiple style="display:none;" onchange="prevRevPhotos(this,${shop.id})">
        </label>
        <div id="rPrev-${shop.id}" class="photo-preview-row"></div>
      </div>
      <button class="submit-review-btn" onclick="submitRev(${shop.id})"><i class="fa-solid fa-paper-plane"></i> Submit Review</button>
    </div>

    <div class="section-label" style="margin-bottom:12px;">${shop.reviews.length} Customer Review${shop.reviews.length !== 1 ? 's' : ''}</div>
    <div id="revList-${shop.id}">${mkRevCards(shop)}</div>
  `;
}
function mkRevCards(shop) {
  if (!shop.reviews?.length) return `<div style="text-align:center;padding:24px;color:var(--muted);font-size:13px;background:var(--surface2);border-radius:12px;">No reviews yet. Be the first to review!</div>`;
  return shop.reviews.map(r => `
    <div class="review-card" id="rc-${r.id}-${shop.id}">
      <div class="reviewer-row">
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="reviewer-avatar">${r.init}</div>
          <div>
            <div class="reviewer-name">${r.name}</div>
            <div style="display:flex;align-items:center;gap:6px;">
              <div>${stars(r.rating)}</div>
              <span class="reviewer-date">${r.date}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="review-text">${r.text}</div>
      ${r.photos?.length ? `<div class="review-photos">${r.photos.map(ph => `<img class="review-photo" src="${ph}" onclick="openLBDirect('${ph}')" loading="lazy" alt=""/>`).join('')}</div>` : ''}
      <div class="helpful-row">
        <button class="helpful-btn${r.voted ? ' voted' : ''}" id="hb-${r.id}-${shop.id}" onclick="markHelp(${r.id},${shop.id})">
          <i class="fa-${r.voted ? 'solid' : 'regular'} fa-thumbs-up"></i>&nbsp;Helpful (${r.helpful})
        </button>
      </div>
    </div>`).join('');
}
function setStars(n, id) { revStars = n; document.querySelectorAll(`#sPicker-${id} .star-btn`).forEach(b => b.classList.toggle('lit', +b.dataset.v <= n)); }
function prevRevPhotos(input, id) {
  const p = document.getElementById(`rPrev-${id}`); p.innerHTML = '';
  Array.from(input.files).forEach(f => { const r = new FileReader(); r.onload = e => { const img = document.createElement('img'); img.src = e.target.result; img.className = 'photo-thumb'; p.appendChild(img); }; r.readAsDataURL(f); });
}
function submitRev(id) {
  const shop = SHOPS.find(s => s.id === id); if (!shop) return;
  const txt = document.getElementById(`revTxt-${id}`).value.trim();
  if (!revStars) { alert('Please select a star rating!'); return; }
  if (!txt) { alert('Please write something about your experience.'); return; }
  const photos = Array.from(document.querySelectorAll(`#rPrev-${id} img`)).map(i => i.src);
  shop.reviews.unshift({ id: Date.now(), name: "You", init: "Y", rating: revStars, date: "Just now", text: txt, photos, helpful: 0, voted: false });
  const total = shop.reviews.reduce((s, r) => s + r.rating, 0);
  shop.rating = Math.round((total / shop.reviews.length) * 10) / 10;
  shop.reviewCount++;
  document.getElementById(`revList-${id}`).innerHTML = mkRevCards(shop);
  document.getElementById(`revTxt-${id}`).value = '';
  document.getElementById(`rPrev-${id}`).innerHTML = '';
  revStars = 0; document.querySelectorAll(`#sPicker-${id} .star-btn`).forEach(b => b.classList.remove('lit'));
  renderList(filtered); toast('✅ Review submitted successfully!');
}
function markHelp(rid, sid) {
  const shop = SHOPS.find(s => s.id === sid); const rev = shop?.reviews?.find(r => r.id === rid); if (!rev) return;
  rev.voted = !rev.voted; rev.helpful += rev.voted ? 1 : -1;
  const btn = document.getElementById(`hb-${rid}-${sid}`);
  if (btn) { btn.className = 'helpful-btn' + (rev.voted ? ' voted' : ''); btn.innerHTML = `<i class="fa-${rev.voted ? 'solid' : 'regular'} fa-thumbs-up"></i>&nbsp;Helpful (${rev.helpful})`; }
}

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const shop = SHOPS.find(s => s.id === currentId);
    if (shop) renderDetailContent(shop, this.dataset.tab);
  });
});

// Close detail
function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('show');
  if (dMap) { dMap.remove(); dMap = null; }
  Object.keys(sMarkers).forEach(sid => { const s = SHOPS.find(x => x.id === +sid); if (s) sMarkers[sid].setIcon(sIcon(s, false)); });
  activeId = null; document.querySelectorAll('.shop-card').forEach(c => c.classList.remove('active'));
}
function closeDetailOutside(e) { if (e.target.id === 'detailOverlay') closeDetail(); }
function getDir(lat, lng) { window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`, '_blank'); }

// Lightbox
function openLB(idx, id) { const shop = SHOPS.find(s => s.id === id); lbImgs = [...(shop?.images || [])]; lbIdx = idx; showLB(); document.getElementById('lightbox').classList.add('show'); }
function openLBDirect(src) { lbImgs = [src]; lbIdx = 0; showLB(); document.getElementById('lightbox').classList.add('show'); }
function showLB() { document.getElementById('lbImg').src = lbImgs[lbIdx]; document.getElementById('lbCounter').textContent = `${lbIdx + 1} / ${lbImgs.length}`; }
function lbNav(d) { lbIdx = (lbIdx + d + lbImgs.length) % lbImgs.length; showLB(); }
function closeLB() { document.getElementById('lightbox').classList.remove('show'); }
function lbOutside(e) { if (e.target.id === 'lightbox') closeLB(); }
document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox').classList.contains('show')) {
    if (e.key === 'ArrowRight') lbNav(1); if (e.key === 'ArrowLeft') lbNav(-1); if (e.key === 'Escape') closeLB();
  } else if (e.key === 'Escape' && document.getElementById('detailOverlay').classList.contains('show')) closeDetail();
});

// ═══ INIT ═══
document.addEventListener('DOMContentLoaded', () => {
  // Read query from URL and pre-fill search box
  const urlParams = new URLSearchParams(window.location.search);
  const urlQuery = urlParams.get('q');
  if (urlQuery) {
    document.getElementById('searchInput').value = urlQuery;
  }

  // ── Read location from localStorage (set by dashboard) ──
  const savedCity = localStorage.getItem('selectedCity');
  const savedLat = parseFloat(localStorage.getItem('userLat'));
  const savedLon = parseFloat(localStorage.getItem('userLon'));

  // Override BASE_LAT / BASE_LNG if we have real coords
  if (!isNaN(savedLat) && !isNaN(savedLon)) {
    BASE_LAT = savedLat;
    BASE_LNG = savedLon;
  }

  initMap(); applyFilters();
  setTimeout(() => toast('Click any shop card to explore details'), 500);
});
