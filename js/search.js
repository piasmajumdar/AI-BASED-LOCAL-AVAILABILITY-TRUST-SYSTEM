

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
    tags: ["fried rice", "noodles", "biriyani", "chicken", "fast food", "budget"],
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

      { name: "Chicken Dum biriyani", price: "₹130" },
      { name: "Chicken Fry biriyani", price: "₹140" },
      { name: "Chicken Lollipop biriyani", price: "₹150" }
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
    tags: ["restaurant", "biriyani", "non-veg", "family dining", "curries", "premium"],
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

      { name: "Fried Chicken biriyani", price: "₹450" },
      { name: "Special Chicken biriyani", price: "₹500" },
      { name: "Prawns biriyani", price: "₹500" },
      { name: "Fish Fried biriyani", price: "₹429" },
      { name: "Chicken Wings biriyani", price: "₹469" },
      { name: "Chicken Mughlai biriyani", price: "₹469" },
      { name: "Veg biriyani", price: "₹359" },

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
        text: "Excellent restaurant with a wide menu. Chicken biriyani and butter chicken are top class.",
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
    tags: ["restaurant", "tandoori", "biriyani", "non-veg", "family dining", "premium"],
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

      { name: "biriyani Rice", price: "₹230" },
      { name: "White Rice", price: "₹100" },
      { name: "Curd Rice", price: "₹120" },
      { name: "Special Curd Rice", price: "₹200" },

      { name: "Veg biriyani", price: "₹300" },
      { name: "Special Veg biriyani", price: "₹310" },
      { name: "Veg Ulavacharu biriyani", price: "₹320" },
      { name: "Kaju biriyani", price: "₹360" },
      { name: "Special Kaju biriyani", price: "₹400" },
      { name: "Mushroom biriyani", price: "₹310" },
      { name: "Special Mushroom biriyani", price: "₹360" },
      { name: "Paneer biriyani", price: "₹340" },
      { name: "Special Paneer biriyani", price: "₹360" },
      { name: "Paneer Tikka biriyani", price: "₹400" },
      { name: "Bheemasena Special Veg biriyani", price: "₹410" },
      { name: "Paneer Bucket biriyani", price: "₹1300" }
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
    tags: ["restaurant", "biriyani", "tandoori", "seafood", "family dining"],
    aiReason: "Strong variety of seafood, chicken starters and biriyanis with consistent pricing and popularity.",

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

      { name: "Cashew biriyani", price: "₹259" },
      { name: "Mushroom biriyani", price: "₹239" },
      { name: "Paneer biriyani", price: "₹259" },
      { name: "Veg Dum biriyani", price: "₹229" },
      { name: "Egg biriyani", price: "₹279" },
      { name: "Special Chicken biriyani", price: "₹359" },
      { name: "Chicken Wings biriyani", price: "₹329" },
      { name: "Chicken Tikka biriyani", price: "₹329" },
      { name: "Chicken Fried biriyani", price: "₹329" },
      { name: "Chicken Dum biriyani", price: "₹329" },
      { name: "Fish biriyani", price: "₹389" },
      { name: "Prawns biriyani", price: "₹399" }
    ],

    reviews: [
      {
        id: 1,
        name: "Naveen K",
        init: "N",
        rating: 5,
        date: "2 days ago",
        text: "Amazing variety of starters, especially seafood. biriyani is also very tasty.",
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
    tags: ["biriyani", "non-veg", "restaurant", "lunch", "dinner"],
    aiReason: "Popular local spot for affordable and flavorful biriyanis, especially known for chicken and mutton varieties.",

    products: [
      { name: "Chicken Dum biriyani", price: "₹200" },
      { name: "Chicken Fry biriyani", price: "₹200" },
      { name: "Chicken Mix biriyani", price: "₹200" },
      { name: "Mutton biriyani", price: "₹370" },
      { name: "Prawns biriyani", price: "₹270" }
    ],

    reviews: [
      {
        id: 1,
        name: "Suresh R",
        init: "S",
        rating: 5,
        date: "2 days ago",
        text: "Very tasty biriyani, especially chicken dum. Good quantity for the price.",
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
        text: "Affordable and delicious. Mutton biriyani is worth trying.",
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
    tags: ["biriyani", "family restaurant", "non-veg", "tandoori", "fried rice", "seafood"],
    aiReason: "Highly popular family restaurant offering a wide variety of biriyanis, fried rice, and tandoori dishes with strong local reputation and large portion options.",

    products: [
      { name: "Chicken Dum biriyani", price: "₹279" },
      { name: "SP Chicken biriyani", price: "₹339" },
      { name: "Chicken Fry Piece biriyani", price: "₹319" },
      { name: "Chicken Tikka biriyani", price: "₹359" },
      { name: "Chicken Wings biriyani", price: "₹419" },
      { name: "Chicken Moghalai biriyani", price: "₹389" },
      { name: "Mutton biriyani", price: "₹519" },
      { name: "Mutton SP biriyani", price: "₹609" },
      { name: "Mutton Moghalai biriyani", price: "₹569" },
      { name: "Fish biriyani", price: "₹479" },
      { name: "Prawns biriyani", price: "₹479" },
      { name: "SP Prawns biriyani", price: "₹579" },

      { name: "Mourya SP Chicken biriyani", price: "₹420" },
      { name: "Mourya SP Mutton biriyani", price: "₹700" },
      { name: "Mourya SP Veg biriyani", price: "₹250" },
      { name: "Mourya SP Chicken Family Pack", price: "₹1500" },
      { name: "Mourya SP Chicken Curry", price: "₹330" },

      { name: "biriyani Rice", price: "₹180" },
      { name: "biriyani Rice Half", price: "₹130" },
      { name: "Baby Corn biriyani", price: "₹230" },
      { name: "Egg biriyani", price: "₹270" },
      { name: "Kaju biriyani", price: "₹290" },
      { name: "Mushroom biriyani", price: "₹260" },
      { name: "Veg biriyani", price: "₹250" },
      { name: "Paneer biriyani", price: "₹270" },
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
    tags: ["biriyani", "budget", "non-veg", "quick meals"],
    aiReason: "Affordable biriyani spot known for simple and budget-friendly chicken biriyani options.",

    products: [
      { name: "Chicken Biriyani", price: "₹150" },
      { name: "Chicken Fry Biriyani", price: "₹180" },
      { name: "Chicken Mix Biriyani", price: "₹200" }
    ],

    reviews: []
  },
  {
    id: 19,
    name: "Sri Veeranjaneya Sweets and Bakery",
    category: "Bakery",
    emoji: "🍰",
    coverImg: "../image/shops/id_19/1.jpeg",
    images: [
      "../image/shops/id_19/1.jpeg"
    ],
    lat: 16.520954,
    lng: 80.524123,
    distance: 2.2,
    rating: 4.3,
    reviewCount: 95,
    trust: 76,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 99663 38055",
    address: "Hindi Master Street, Near central bank, Mandadam, Velgapudi, Andhra Pradesh 522241",
    hours: "9:00 AM – 10:30 PM",
    warning: null,
    tags: ["bakery", "desserts", "snacks", "pizza", "sweets"],
    aiReason: "Popular bakery offering a variety of desserts, puffs, and pizzas at affordable prices, ideal for quick snacks and sweet cravings.",

    products: [
      { name: "Browny", price: "₹88" },
      { name: "Mudpie", price: "₹166" },
      { name: "Chocolate Lollypop", price: "₹140" },
      { name: "Doughnuts", price: "₹88" },
      { name: "Choco Lava", price: "₹88" },
      { name: "Glass Deserts", price: "₹101" },
      { name: "Passion Delight", price: "₹166" },
      { name: "Cheese Cake", price: "₹166" },

      { name: "Special Veg", price: "₹270" },
      { name: "Special Chicken Pizza", price: "₹335" },

      { name: "Veg Puff", price: "₹36" },
      { name: "Egg Puff", price: "₹36" },
      { name: "Chicken Puff", price: "₹43" },
      { name: "Dil Pasand", price: "₹88" },
      { name: "Bread", price: "₹62" }
    ],

    reviews: []
  },
  {
    id: 20,
    name: "Meeseva",
    category: "Service",
    emoji: "🏢",
    coverImg: "../image/shops/id_20/1.jpeg",
    images: [
      "../image/shops/id_20/1.jpeg"
    ],
    lat: 16.521379,
    lng: 80.521231,
    distance: 3.2,
    rating: 0,
    reviewCount: 0,
    trust: null,
    isOpen: true,
    aiRecommended: null,
    phone: "+91 97053 05202",
    address: "1-47, Main Road, Opposite Zphs High School, Mandadam, Malkapuram, Andhra Pradesh 522241",
    hours: "10:00 AM - 5:00 PM",
    warning: null,
    tags: ["government service", "documents", "utility", "official"],
    aiReason: "Reliable government service center for document processing, certificates, and utility services.",

    products: [],

    reviews: [
    ]
  },
  {
    id: 21,
    name: "Garima Fruit Shop",
    category: "Shop",
    emoji: "🍎",
    coverImg: "../image/shops/id_21/1.jpeg",
    images: [
      "../image/shops/id_21/1.jpeg"
    ],
    lat: 16.520250,
    lng: 80.523637,
    distance: 2.1,
    rating: 4.1,
    reviewCount: 34,
    trust: 73,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "Near Amrutha Jewelery, Mandadam Center, Mandadam, Andhra Pradesh,522241",
    hours: "7:00 AM – 9:00 PM",
    warning: null,
    tags: ["fruits", "fresh", "local shop", "grocery"],
    aiReason: "Local fruit shop offering fresh seasonal fruits at reasonable per kg pricing.",

    products: [
      { name: "Banana", price: "80-90/- Per KG" },
      { name: "Apple (Simla)", price: "110/- per kg" },
      { name: "Mango", price: "117-125/- Per kg" }
    ],

    reviews: []
  },
  {
    id: 22,
    name: "Bank Of Baroda",
    category: "Bank",
    emoji: "🏦",
    coverImg: "../image/shops/id_22/1.png",
    images: [
      "../image/shops/id_22/1.png"
    ],
    lat: 16.520782,
    lng: 80.522209,
    distance: 2.1,
    rating: 4,
    reviewCount: 0,
    trust: 88,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "AP Secratariat Road, Near Ram Boys Hostel, Mandadam, Velagapudi, Andhra Pradesh,522503",
    hours: "10:00 AM – 4:00 PM",
    warning: null,
    tags: ["bank", "atm", "finance", "official"],
    aiReason: "Trusted banking service with ATM facility available next to the branch for convenient access.",

    products: [],

    reviews: [
      {
        id: 1,
        name: "Anil K",
        init: "A",
        rating: 4,
        date: "4 days ago",
        text: "Good service and ATM availability makes it convenient.",
        photos: [],
        helpful: 5,
        voted: false
      }
    ],

    remark: "ATM Next To Bank"
  },
  {
    id: 23,
    name: "State Bank Of India",
    category: "Bank",
    emoji: "🏦",
    coverImg: "../image/shops/id_23/1.png",
    images: [
      "../image/shops/id_23/1.png"
    ],
    lat: 16.518333,
    lng: 80.527479,
    distance: 2.4,
    rating: 4.3,
    reviewCount: 52,
    trust: 90,
    isOpen: true,
    aiRecommended: true,
    phone: null,
    address: "Amaravathi-Vijayawada Road, Mandadam, Velgapudi, Andhra Pradesh 522503",
    hours: "10:00 AM – 4:00 PM",
    warning: null,
    tags: ["bank", "atm", "finance", "official"],
    aiReason: "Reliable public sector bank with ATM facility available nearby, suitable for regular banking needs.",

    products: [],

    reviews: [
      {
        id: 1,
        name: "Sandeep R",
        init: "S",
        rating: 4,
        date: "3 days ago",
        text: "Good banking services and easy ATM access.",
        photos: [],
        helpful: 7,
        voted: false
      }
    ],

    remark: "ATM Next To Bank"
  },
  {
    id: 24,
    name: "Union Bank Of India",
    category: "Bank",
    emoji: "🏦",
    coverImg: "../image/shops/id_24/1.jpeg",
    images: [
      "../image/shops/id_24/1.jpeg"
    ],
    lat: 16.520194,
    lng: 80.525223,
    distance: 2.1,
    rating: 4.0,
    reviewCount: 36,
    trust: 86,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "Way to Seed Access Road, Opposite To Mandadam Grama Sachivalayam, Mandadam, Thullur Mandal, Andhra Pradesh 522503",
    hours: "10:00 AM – 4:00 PM",
    warning: "No ATM available nearby",
    tags: ["bank", "finance", "official"],
    aiReason: "Standard banking services available, but lacks nearby ATM facility which may affect convenience.",

    products: [],

    reviews: [
      {
        id: 1,
        name: "Kiran P",
        init: "K",
        rating: 3,
        date: "5 days ago",
        text: "Service is okay but no ATM nearby makes it inconvenient.",
        photos: [],
        helpful: 4,
        voted: false
      }
    ],

    remark: "There's No ATM Inside or near Bank"
  },
  {
    id: 25,
    name: "Indian ATM",
    category: "ATM",
    emoji: "🏧",
    coverImg: "../image/shops/id_25/1.jpeg",
    images: [
      "../image/shops/id_25/1.jpeg"
    ],
    lat: 16.520028,
    lng: 80.524083,
    distance: 2.1,
    rating: 4.1,
    reviewCount: 22,
    trust: 80,
    isOpen: true,
    aiRecommended: true,
    phone: null,
    address: "Mandadam Center, Mandadam, Velgapudi, Andhra Pradesh 522503",
    hours: "24 Hours",
    warning: null,
    tags: ["atm", "cash", "24x7", "finance"],
    aiReason: "Convenient ATM with availability of multiple denominations including ₹100, ₹200, and ₹500 notes.",

    products: [],

    reviews: [
      {
        id: 1,
        name: "Rohit S",
        init: "R",
        rating: 4,
        date: "2 days ago",
        text: "Easy to access and usually has all note denominations available.",
        photos: [],
        helpful: 3,
        voted: false
      }
    ],

    remark: "100,200,500 Notes Available"
  },
  {
    id: 26,
    name: "Bhavani Xerox 24",
    category: "Service",
    emoji: "📄",
    coverImg: "../image/shops/id_26/1.jpeg",
    images: [
      "../image/shops/id_26/1.jpeg"
    ],
    lat: 16.520278,
    lng: 80.523917,
    distance: 2.1,
    rating: 4.2,
    reviewCount: 27,
    trust: 78,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 77319 79709",
    address: "Shop No- 2 Mandadam Center, Mandadam, Andhra Pradesh",
    hours: "8:00 AM – 10:00 PM",
    warning: null,
    tags: ["xerox", "printing", "documents", "service"],
    aiReason: "Convenient local shop for photocopying, printing, and document-related services.",

    products: [],

    reviews: [
      {
        id: 1,
        name: "Teja K",
        init: "T",
        rating: 4,
        date: "3 days ago",
        text: "Good place for quick xerox and printing work.",
        photos: [],
        helpful: 4,
        voted: false
      }
    ]
  },
  {
    id: 27,
    name: "999 Cafe",
    category: "Cafe",
    emoji: "🍔",
    coverImg: "../image/shops/id_27/1.jpeg",
    images: [
      ".././image/shops/id_27/1.jpeg"
    ],
    lat: 16.520222,
    lng: 80.523917,
    distance: 2.1,
    rating: 4.3,
    reviewCount: 61,
    trust: 79,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 79975 14403",
    address: "Mandadam, Center, Mandadam, Velgapudi, Andhra Pradesh 522503",
    hours: "11:00 AM – 11:00 PM",
    warning: null,
    tags: ["cafe", "fast food", "chicken", "burgers", "pizza", "combos"],
    aiReason: "Popular fast food cafe known for chicken items, burgers, and value meal combos.",

    products: [
      { name: "Chicken Wings (5 pcs)", price: "₹140" },
      { name: "Chicken Wings (10 pcs)", price: "₹220" },

      { name: "Boneless Strips (5 pcs)", price: "₹190" },
      { name: "Boneless Strips (10 pcs)", price: "₹340" },

      { name: "Lollipop (5 pcs)", price: "₹200" },
      { name: "Lollipop (10 pcs)", price: "₹350" },

      { name: "Paneer Popcorn Small (100g)", price: "₹130" },
      { name: "Paneer Popcorn Medium (150g)", price: "₹180" },
      { name: "Paneer Popcorn Large (220g)", price: "₹220" },

      { name: "Chicken Popcorn Small (100g)", price: "₹99" },
      { name: "Chicken Popcorn Medium (150g)", price: "₹149" },
      { name: "Chicken Popcorn Large (220g)", price: "₹199" },

      { name: "Veg Burger", price: "₹89" },
      { name: "Crispy Patty Burger (Veg/Non-Veg)", price: "₹99" },
      { name: "Fried Chicken Burger", price: "₹109" },
      { name: "999 Special Burger", price: "₹130" },

      { name: "Veg Sandwich", price: "₹130" },
      { name: "Fried Chicken Sandwich", price: "₹140" },
      { name: "Tandoori Mayo Sandwich", price: "₹145" },

      { name: "Veg Roll", price: "₹99" },
      { name: "Paneer Roll", price: "₹129" },
      { name: "Chicken Roll", price: "₹139" },

      { name: "Sweet Corn Pizza", price: "₹169" },
      { name: "Paneer Pizza", price: "₹169" },
      { name: "Chicken Pizza", price: "₹180" },
      { name: "Tandoori Chicken Pizza", price: "₹180" },

      { name: "Extra Cheese", price: "₹20" },

      { name: "Meal Combo (Sandwich + Fries + Cool Drink)", price: "₹200" },
      { name: "Meal Combo (B", price: "" }
    ],

    reviews: []
  },
  {
    id: 28,
    name: "Santosh Hair Saloon For Men",
    category: "Salon",
    emoji: "💈",
    coverImg: "../image/shops/id_28/1.jpeg",
    images: [
      "../image/shops/id_28/1.jpeg"
    ],
    lat: 16.520288,
    lng: 80.523908,
    distance: 2.1,
    rating: 4.2,
    reviewCount: 39,
    trust: 77,
    isOpen: true,
    aiRecommended: true,
    phone: "+91 98499 69390",
    address: "Next To 999 Cafe, Mandadam, Center, Mandadam, Velgapudi, Andhra Pradesh 522503",
    hours: "9:00 AM – 9:00 PM",
    warning: null,
    tags: ["salon", "haircut", "men", "grooming"],
    aiReason: "Local men's salon offering basic grooming services with good accessibility near 999 Cafe.",

    products: [],

    reviews: [
      {
        id: 1,
        name: "Manoj T",
        init: "M",
        rating: 4,
        date: "2 days ago",
        text: "Good haircut service and reasonable pricing.",
        photos: [],
        helpful: 3,
        voted: false
      }
    ]
  },
  {
    id: 29,
    name: "Durga Vegetables",
    category: "Shop",
    emoji: "🥕",
    coverImg: "../image/shops/id_29/1.jpeg",
    images: [
      "../image/shops/id_29/1.jpeg"
    ],
    lat: 16.520444,
    lng: 80.523361,
    distance: 2.1,
    rating: 4.1,
    reviewCount: 31,
    trust: 74,
    isOpen: true,
    aiRecommended: true,
    phone: null,
    address: "Next To Friend's Diagnostic Lab, Mandadam, Center, Mandadam, Velgapudi, Andhra Pradesh 522503",
    hours: "6:30 AM – 9:00 PM",
    warning: null,
    tags: ["vegetables", "fresh", "grocery", "local shop"],
    aiReason: "Local vegetable shop offering fresh produce with daily price ranges per kg.",

    products: [
      { name: "Potatoes", price: "24-30/-" },
      { name: "Tomatoes", price: "22-27/-" },
      { name: "Brinjal", price: "25-35/-" },
      { name: "Lady's Fingers", price: "35-45/-" },
      { name: "Lemons", price: "20/-" },
      { name: "Onions", price: "28-35/-" },
      { name: "Biiter Gourd", price: "25-35/-" },
      { name: "Bottle Guard", price: "20-30/-" },
      { name: "Ginger", price: "150-180/-" }
    ],

    reviews: []
  },
  {
    id: 30,
    name: "Total Fresh Super Market",
    category: "Shop",
    emoji: "🛒",
    coverImg: "../image/shops/id_30/1.jpeg",
    images: [
      "../image/shops/id_30/1.jpeg"
    ],
    lat: 16.518847,
    lng: 80.526658,
    distance: 2.4,
    rating: 4.2,
    reviewCount: 6,
    trust: 78,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "OLD STATE BANK BUILDING, DOOR NO - 6-43/1, Mandadam, Andhra Pradesh 522241",
    hours: null,
    warning: null,
    tags: ["supermarket", "grocery", "snacks", "beverages", "essentials", "detergents"],
    aiReason: "Supermarket stocking snacks, beverages, toiletries, stationery, detergents, and daily life essentials.",
    products: [
      { name: "Snacks And Beverages", price: null },
      { name: "Toiletries", price: null },
      { name: "Stationary Items", price: null },
      { name: "Detergents", price: null },
      { name: "Sugar", price: null },
      { name: "Daily Life Essentials", price: null }
    ],
    reviews: []
  },
  {
    id: 31,
    name: "Telugu Baptist Church",
    category: "Religious",
    emoji: "⛪",
    coverImg: "../image/shops/id_31/1.jpeg",
    images: [
      "../image/shops/id_31/1.jpeg"
    ],
    lat: 16.518013,
    lng: 80.527930,
    distance: 2.7,
    rating: 4.5,
    reviewCount: 3,
    trust: 82,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "Penumaka-Amaravathi Road, Mandadam, Andhra Pradesh 522241",
    hours: null,
    warning: null,
    tags: ["church", "christian", "baptist", "religious", "worship"],
    aiReason: "A Baptist church situated along Penumaka-Amaravathi Road in Mandadam.",
    products: [],
    reviews: []
  },
  {
    id: 32,
    name: "Kelvin Food Court",
    category: "Restaurant",
    emoji: "🍜",
    coverImg: "../image/shops/id_32/1.jpeg",
    images: [
      "../image/shops/id_32/1.jpeg"
    ],
    lat: 16.517500,
    lng: 80.528467,
    distance: 2.9,
    rating: 4.0,
    reviewCount: 8,
    trust: 75,
    isOpen: true,
    aiRecommended: false,
    phone: "9000894510",
    address: "Penumaka-Amaravathi Road, Near Telugu Baptist Church, Mandadam, Andhra Pradesh 522241",
    hours: null,
    warning: null,
    tags: ["food court", "noodles", "fried rice", "starters", "chinese", "chicken"],
    aiReason: "Food court serving noodles, fried rice, and starters in veg, egg, and chicken varieties.",
    products: [
      { name: "Veg Noodles", price: "90/-" },
      { name: "Veg Manchurian Noodles", price: "100/-" },
      { name: "Egg Manchurian Noodles", price: "110/-" },
      { name: "Egg Noodles", price: "120/-" },
      { name: "Double Egg Noodles", price: "130/-" },
      { name: "Chicken Noodles", price: "140/-" },
      { name: "Double Egg Chicken Noodles", price: "150/-" },
      { name: "Veg Fried Rice", price: "90/-" },
      { name: "Veg Manchurian Fried Rice", price: "100/-" },
      { name: "Egg Manchurian Fried Rice", price: "110/-" },
      { name: "Egg Fried Rice", price: "120/-" },
      { name: "Double Egg Fried Rice", price: "130/-" },
      { name: "Chicken Fried Rice", price: "140/-" },
      { name: "Double Egg Chicken Fried Rice", price: "150/-" },
      { name: "Veg Manchurian", price: "90/-" },
      { name: "Egg Manchurian", price: "100/-" },
      { name: "Double Egg Manchurian", price: "110/-" },
      { name: "Chicken Manchurian", price: "150/-" },
      { name: "Chilli Chicken", price: "160/-" }
    ],
    reviews: []
  },
  {
    id: 33,
    name: "Hindustan Petroleum Corporation",
    category: "Fuel Station",
    emoji: "⛽",
    coverImg: "../image/shops/id_33/1.jpeg",
    images: [
      "../image/shops/id_33/1.jpeg"
    ],
    lat: 16.514721,
    lng: 80.531927,
    distance: 2.3,
    rating: 3.8,
    reviewCount: 4,
    trust: 72,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "Survey No 284/A, Mangalagiri - Rayapudi Rd, Mandadam, Guntur, Malkapuram, Andhra Pradesh 522241",
    hours: null,
    warning: null,
    tags: ["fuel", "petrol", "HPCL", "petroleum", "gas station"],
    aiReason: "HPCL fuel station on Mangalagiri-Rayapudi Road serving the Mandadam area.",
    products: [],
    reviews: []
  },
  {
    id: 34,
    name: "Bharat Petroleum",
    category: "Fuel Station",
    emoji: "⛽",
    coverImg: "../image/shops/id_34/1.jpeg",
    images: [
      "../image/shops/id_34/1.jpeg"
    ],
    lat: 16.513426,
    lng: 80.533109,
    distance: 2.6,
    rating: 4.1,
    reviewCount: 5,
    trust: 80,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "Penumaka-Amaravathi Road, Mandadam, Malkapuram, Andhra Pradesh 522241",
    hours: null,
    warning: null,
    tags: ["fuel", "petrol", "BPCL", "petroleum", "gas station"],
    aiReason: "BPCL fuel station located on Penumaka-Amaravathi Road in Mandadam.",
    products: [],
    reviews: []
  },
  {
    id: 35,
    name: "Assisi Shanti Niketan Health Centre",
    category: "Healthcare",
    emoji: "🏥",
    coverImg: "../image/shops/id_35/1.jpeg",
    images: [
      "../image/shops/id_35/1.jpeg"
    ],
    lat: 16.515877,
    lng: 80.530485,
    distance: 2.1,
    rating: 4.3,
    reviewCount: 7,
    trust: 85,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "Near Hindustan Petroleum Limited, Mandadam, Thullur Mandal, Andhra Pradesh 522503",
    hours: null,
    warning: null,
    tags: ["health centre", "hospital", "clinic", "healthcare", "medical"],
    aiReason: "Health centre located near Hindustan Petroleum in Mandadam, Thullur Mandal.",
    products: [],
    reviews: []
  },
  {
    id: 36,
    name: "Shivalayam Temple",
    category: "Religious",
    emoji: "🛕",
    coverImg: "../image/shops/id_36/1.jpeg",
    images: [
      "../image/shops/id_36/1.jpeg"
    ],
    lat: 16.519660,
    lng: 80.524432,
    distance: 2.5,
    rating: 4.6,
    reviewCount: 2,
    trust: 88,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "Near Thullur Police Station Outpost, Mandadam, Thullur, Andhra Pradesh 522241",
    hours: null,
    warning: null,
    tags: ["temple", "hindu", "shiva", "religious", "worship"],
    aiReason: "A Shiva temple situated near the Thullur Police Station Outpost in Mandadam.",
    products: [],
    reviews: []
  },
  {
    id: 37,
    name: "Asian Paints - Venkateswara Electricals And Hardware",
    category: "Shop",
    emoji: "🔧",
    coverImg: "../image/shops/id_37/1.jpeg",
    images: [
      "../image/shops/id_37/1.jpeg"
    ],
    lat: 16.520519,
    lng: 80.522806,
    distance: 2.8,
    rating: 3.9,
    reviewCount: 9,
    trust: 73,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "Near Masjid Road, Mandadam, Velgapudi, Andhra Pradesh 522241",
    hours: null,
    warning: null,
    tags: ["hardware", "electricals", "paints", "asian paints", "tools", "construction"],
    aiReason: "Shop offering Asian Paints products along with electrical and hardware supplies in Mandadam.",
    products: [],
    reviews: []
  },
  {
    id: 38,
    name: "Simhadri Super Market",
    category: "Shop",
    emoji: "🛒",
    coverImg: "../image/shops/id_38/1.jpeg",
    images: [
      "../image/shops/id_38/1.jpeg"
    ],
    lat: 16.520348,
    lng: 80.523149,
    distance: 2.2,
    rating: 4.2,
    reviewCount: 6,
    trust: 76,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "1-110 Masjid Center, Opposite Sivamani Hair Styles, Mandadam, Andhra Pradesh 522241",
    hours: null,
    warning: null,
    tags: ["supermarket", "grocery", "snacks", "ice cream", "toiletries", "spices", "essentials"],
    aiReason: "Supermarket stocking snacks, beverages, ice creams, toiletries, spices, and daily essentials.",
    products: [
      { name: "Snacks and Beverages", price: null },
      { name: "Ice Creams", price: null },
      { name: "Toiletries", price: null },
      { name: "Spices", price: null },
      { name: "Daily Life Essentials", price: null }
    ],
    reviews: []
  },
  {
    id: 39,
    name: "RajyaLakshmi General Stores",
    category: "Shop",
    emoji: "🏪",
    coverImg: "../image/shops/id_39/1.jpeg",
    images: [
      "../image/shops/id_39/1.jpeg"
    ],
    lat: 16.520349,
    lng: 80.523098,
    distance: 2.3,
    rating: 4.0,
    reviewCount: 4,
    trust: 79,
    isOpen: true,
    aiRecommended: false,
    phone: "8184802014",
    address: "Next To Masjid Road, Shop 5-96, Mandadam, Andhra Pradesh 522241",
    hours: null,
    warning: null,
    tags: ["general store", "toiletries", "kitchen", "household", "essentials", "brooms"],
    aiReason: "General store carrying toiletries, kitchen accessories, and household items like brooms and buckets.",
    products: [
      { name: "Toiletries", price: null },
      { name: "Daily Life Essentials", price: null },
      { name: "Kitchen Accessories", price: null },
      { name: "Brooms", price: null },
      { name: "Buckets", price: null }
    ],
    reviews: []
  },
  {
    id: 40,
    name: "R. S. N. L. Medical & Fancy Store",
    category: "Medical",
    emoji: "💊",
    coverImg: "../image/shops/id_40/1.jpeg",
    images: [
      "../image/shops/id_40/1.jpeg"
    ],
    lat: 16.520055,
    lng: 80.523859,
    distance: 2.7,
    rating: 4.4,
    reviewCount: 5,
    trust: 83,
    isOpen: true,
    aiRecommended: false,
    phone: "9705568257",
    address: "Mandadam Center, Mandadam, Velgapudi, Andhra Pradesh 522241",
    hours: null,
    warning: null,
    tags: ["medical", "pharmacy", "medicines", "fancy store"],
    aiReason: "Medical and fancy store located at Mandadam Center serving local residents.",
    products: [],
    reviews: []
  },
  {
    id: 41,
    name: "Shri Raghuramanjaneya Medicals",
    category: "Medical",
    emoji: "💊",
    coverImg: "../image/shops/id_41/1.jpeg",
    images: [
      "../image/shops/id_41/1.jpeg"
    ],
    lat: 16.520024,
    lng: 80.523806,
    distance: 2.4,
    rating: 4.1,
    reviewCount: 3,
    trust: 77,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "Next To R.S.N.L Medical Shop, Mandadam Center, Mandadam, Velgapudi, Andhra Pradesh 522241",
    hours: null,
    warning: null,
    tags: ["medical", "pharmacy", "medicines", "local"],
    aiReason: "Medical store located next to R.S.N.L Medical Shop at Mandadam Center.",
    products: [],
    reviews: []
  },
  {
    id: 42,
    name: "Puri Vuri Express",
    category: "Restaurant",
    emoji: "🥙",
    coverImg: "../image/shops/id_42/1.jpeg",
    images: [
      "../image/shops/id_42/1.jpeg"
    ],
    lat: 16.49377429594764,
    lng: 80.49837280062518,
    distance: 0.3,
    rating: 4.3,
    reviewCount: 7,
    trust: 81,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "VIT-AP University Food Street, Inavolu, Amaravati, Andhra Pradesh 522237",
    hours: null,
    warning: null,
    tags: ["chaat", "pani puri", "pav bhaji", "street food", "veg", "food street"],
    aiReason: "Popular chaat and street food stall on VIT-AP Food Street serving pani puri, pav bhaji, vada pav, sandwiches, and more.",
    products: [
      { name: "Pani Puri (6 pcs)", price: "₹50" },
      { name: "Dahi Puri (5 pcs)", price: "₹80" },
      { name: "Sev Puri", price: "₹60" },
      { name: "Masala Puri (5 pcs)", price: "₹60" },
      { name: "Malai Dahi Vada (2 pcs)", price: "₹70" },
      { name: "Dahi Papdi", price: "₹70" },
      { name: "Dahi Vada Papdi", price: "₹280" },
      { name: "Dahi Samosa", price: "₹60" },
      { name: "Dahi Kachori", price: "₹65" },
      { name: "Raj Kachori", price: "₹100" },
      { name: "Laccha Tokri", price: "₹100" },
      { name: "Basket Chaat", price: "₹90" },
      { name: "Dahi Palak Patha", price: "₹390" },
      { name: "Samosa Ragada", price: "₹80" },
      { name: "Kachori Ragada", price: "₹85" },
      { name: "Chole Samosa", price: "₹90" },
      { name: "Chole Kachori", price: "₹95" },
      { name: "Aloo Tikki Ragada", price: "₹390" },
      { name: "Aloo Tikki Chutney", price: "₹50" },
      { name: "Aloo Tikki Chole", price: "₹95" },
      { name: "Papdi Ragada", price: "₹85" },
      { name: "Palak Patha Ragada", price: "₹85" },
      { name: "Vada Pav (1 pc)", price: "₹30" },
      { name: "Cheese Vada Pav (1 pc)", price: "₹40" },
      { name: "Schezwan Vada Pav", price: "₹40" },
      { name: "Bhelpuri", price: "₹60" },
      { name: "Popcorn Bhel", price: "₹60" },
      { name: "Jalmuri", price: "₹60" },
      { name: "Papidi Bhel", price: "₹65" },
      { name: "Puri Vurii Spl. Bhel", price: "₹80" },
      { name: "Chor Bhel", price: "₹70" },
      { name: "Dabeli (1 pc)", price: "₹30" },
      { name: "Cheese Dabeli (1 pc)", price: "₹40" },
      { name: "Pav Bhaji (Makhan Wale)", price: "₹90" },
      { name: "Cheese Pav Bhaji", price: "₹110" },
      { name: "Masala Pav Bhaji", price: "₹120" },
      { name: "Masala Cheese Pav Bhaji", price: "₹140" },
      { name: "Paneer Pav Bhaji", price: "₹120" },
      { name: "Spl. Pav Bhaji", price: "₹140" },
      { name: "Extra Pav", price: "₹20" },
      { name: "Spl. Extra Pav", price: "₹25" },
      { name: "Chole Bature", price: "₹90" },
      { name: "Paneer Chole Bature", price: "₹110" },
      { name: "Grilled Chole Pav", price: "₹70" },
      { name: "Veg Sandwich", price: "₹60" },
      { name: "Grill Sandwich", price: "₹80" },
      { name: "Cheese Grill Sandwich", price: "₹110" },
      { name: "Paneer Grill Sandwich", price: "₹110" },
      { name: "Water Bottle", price: "₹25" }
    ],
    reviews: []
  },
  {
    id: 43,
    name: "ZUZU",
    category: "Restaurant",
    emoji: "🥤",
    coverImg: "../image/shops/id_43/1.jpeg",
    images: [
      "../image/shops/id_43/1.jpeg"
    ],
    lat: 16.493536400815696,
    lng: 80.49828965214998,
    distance: 0.2,
    rating: 4.5,
    reviewCount: 9,
    trust: 86,
    isOpen: true,
    aiRecommended: true,
    phone: null,
    address: "VIT-AP University Food Street, Inavolu Village, Amaravati, Andhra Pradesh 522237",
    hours: null,
    warning: null,
    tags: ["juices", "waffles", "boba", "burgers", "wraps", "fries", "food street", "beverages"],
    aiReason: "Versatile food stall on VIT-AP Food Street offering fresh juices, boba drinks, waffles, burgers, wraps, fries, and egg dishes.",
    products: [
      { name: "Fresh Lime", price: "₹25" },
      { name: "Fresh Lime with Soda", price: "₹35" },
      { name: "Mint Lime with Soda", price: "₹50" },
      { name: "A for Apple Juice", price: "₹70" },
      { name: "B for Banana Juice", price: "₹50" },
      { name: "C for Beetroot Juice", price: "₹55" },
      { name: "C for Carrot Juice", price: "₹55" },
      { name: "C for Cucumber Juice", price: "₹50" },
      { name: "C for Custard Apple Juice", price: "₹70" },
      { name: "D for Dragon Fruit Juice", price: "₹90" },
      { name: "D for Dates Milk", price: "₹65" },
      { name: "D for Dry Fruits Special", price: "₹90" },
      { name: "F for Fig Juice", price: "₹60" },
      { name: "G for Grape Juice", price: "₹55" },
      { name: "G for Guava Juice", price: "₹55" },
      { name: "J for Jeera Drink", price: "₹50" },
      { name: "K for Kiwi Juice", price: "₹70" },
      { name: "L for Lychee Juice", price: "₹70" },
      { name: "M for Mosambi Juice", price: "₹60" },
      { name: "M for Mango Juice", price: "₹60" },
      { name: "M for Muskmelon Juice", price: "₹55" },
      { name: "N for Nannari Sharbat", price: "₹55" },
      { name: "O for Orange Juice", price: "₹60" },
      { name: "P for Pineapple Juice", price: "₹55" },
      { name: "P for Pomegranate Juice", price: "₹70" },
      { name: "Papaya Juice", price: "₹55" },
      { name: "S for Strawberry Juice", price: "₹70" },
      { name: "S for Sapota Juice", price: "₹55" },
      { name: "W for Watermelon Juice", price: "₹50" },
      { name: "Ice Tea (Litchi)", price: "₹55" },
      { name: "Ice Tea (Peach)", price: "₹55" },
      { name: "Rooh Afza", price: "₹55" },
      { name: "Black Current Drink", price: "₹55" },
      { name: "Milk Shake (Basic)", price: "₹55" },
      { name: "Sugar Cane Juice", price: "₹25" },
      { name: "Butter Milk", price: "₹25" },
      { name: "Coconut Water", price: "₹70" },
      { name: "Coconut Pulp", price: "₹80" },
      { name: "Fruit Bowl", price: "₹55" },
      { name: "Veg Salad", price: "₹90" },
      { name: "Egg Salad", price: "₹90" },
      { name: "Chicken Salad", price: "₹120" },
      { name: "Paneer Salad", price: "₹130" },
      { name: "Veg Exotic Salad", price: "₹130" },
      { name: "Boiled Egg", price: "₹15" },
      { name: "Plain Omelette", price: "₹35" },
      { name: "Masala Omelette", price: "₹45" },
      { name: "Mushroom Omelette", price: "₹70" },
      { name: "Egg Bhurji", price: "₹70" },
      { name: "Bread Omelette", price: "₹55" },
      { name: "Cheese Bread Omelette", price: "₹65" },
      { name: "Maple Butter Waffle", price: "₹109" },
      { name: "Belgium Chocolate Waffle", price: "₹149" },
      { name: "Belgium Chocolate Dark Waffle", price: "₹119" },
      { name: "Butterscotch Waffle", price: "₹139" },
      { name: "Nutella Waffle", price: "₹139" },
      { name: "KitKat Waffle", price: "₹129" },
      { name: "Strawberry Waffle", price: "₹119" },
      { name: "Blueberry Waffle", price: "₹129" },
      { name: "Triple Chocolate Waffle", price: "₹149" },
      { name: "Double Chocolate Waffle", price: "₹139" },
      { name: "Red Velvet Waffle", price: "₹139" },
      { name: "Pan Cake", price: "₹119" },
      { name: "Chocolate Pan Cake", price: "₹119" },
      { name: "Brownie Shake", price: "₹99" },
      { name: "Rose Milk", price: "₹55" },
      { name: "Badam Milk", price: "₹55" },
      { name: "Pista Milk", price: "₹55" },
      { name: "Cold Coffee", price: "₹80" },
      { name: "Egg Kushi", price: "₹45" },
      { name: "Hot Dog (Non-Veg)", price: "₹90" },
      { name: "Sweet Potato", price: "₹40" },
      { name: "Pop Corn", price: "₹40" },
      { name: "Cheese Pop Corn", price: "₹50" },
      { name: "Tomato Pop Corn", price: "₹50" },
      { name: "Ice Blue Lady", price: "₹50" },
      { name: "Ice Green Apple", price: "₹50" },
      { name: "Ice Red Rose", price: "₹50" },
      { name: "Ice Watermelon", price: "₹50" },
      { name: "Ice Mint Lime", price: "₹50" },
      { name: "Ice Kala Khatta", price: "₹50" },
      { name: "Ice Orange", price: "₹50" },
      { name: "Ice Strawberry", price: "₹50" },
      { name: "Ice Mango", price: "₹50" },
      { name: "Ice Mix & Match", price: "₹60" },
      { name: "Blue Crushers", price: "₹70" },
      { name: "Lime Mint Crushers", price: "₹70" },
      { name: "Green Apple Crushers", price: "₹70" },
      { name: "Boba Coffee", price: "₹90" },
      { name: "Boba Strawberry", price: "₹90" },
      { name: "Boba Chocolate", price: "₹90" },
      { name: "Boba Mango", price: "₹90" },
      { name: "Matcha Tea Boba", price: "₹120" },
      { name: "Thai Tea Boba", price: "₹130" },
      { name: "Hong Kong Tea Boba", price: "₹130" },
      { name: "Rich Chocolate Boba", price: "₹150" },
      { name: "Cappuccino Boba", price: "₹130" },
      { name: "Tiramisu Boba", price: "₹150" },
      { name: "French Vanilla Boba", price: "₹150" },
      { name: "Butterscotch Coffee Boba", price: "₹150" },
      { name: "Veg Burger", price: "₹80" },
      { name: "Chicken Burger", price: "₹120" },
      { name: "Veg Sandwich", price: "₹80" },
      { name: "Grill Sandwich", price: "₹90" },
      { name: "Cheese Sandwich", price: "₹100" },
      { name: "Paneer Sandwich", price: "₹100" },
      { name: "Chicken Sandwich", price: "₹120" },
      { name: "French Fries", price: "₹80" },
      { name: "Peri Peri Fries", price: "₹90" },
      { name: "Cheese Loaded Fries", price: "₹120" },
      { name: "Chicken Loaded Fries", price: "₹140" },
      { name: "Veg Jumbo Wrap", price: "₹90" },
      { name: "Egg Wrap", price: "₹100" },
      { name: "Chicken Wrap", price: "₹120" },
      { name: "Double Egg Chicken Wrap", price: "₹140" },
      { name: "Paneer Wrap", price: "₹110" }
    ],
    reviews: []
  },
  {
    id: 44,
    name: "The Ice Cream Bakery",
    category: "Desserts",
    emoji: "🍨",
    coverImg: "../image/shops/id_44/1.jpeg",
    images: [
      "../image/shops/id_44/1.jpeg"
    ],
    lat: 16.49414716896029,
    lng: 80.49847367796968,
    distance: 0.4,
    rating: 4.4,
    reviewCount: 8,
    trust: 84,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "VIT-AP University Food Street, Inavolu, Amaravati, Andhra Pradesh 522237",
    hours: null,
    warning: null,
    tags: ["ice cream", "sundae", "hot chocolate", "desserts", "bakery", "food street"],
    aiReason: "Dessert shop on VIT-AP Food Street specializing in artisan ice creams, sundaes, hot chocolates, and brownie-based desserts.",
    products: [
      { name: "Dark Night (Hot Chocolate)", price: "₹179" },
      { name: "Glossy (Hot Chocolate)", price: "₹175" },
      { name: "Mocha Mocha (Hot Chocolate)", price: "₹175" },
      { name: "Milkyway (Hot Chocolate)", price: "₹179" },
      { name: "Dark Night Sundae", price: "₹199" },
      { name: "Glossy Sundae", price: "₹199" },
      { name: "Mocha Sundae", price: "₹199" },
      { name: "Salted Caramel Sundae", price: "₹215" },
      { name: "Fudge Brownie Sundae", price: "₹199" },
      { name: "Nuts (Topping)", price: "₹15 / ₹30 / ₹90" },
      { name: "Chocolate Brownie (Topping)", price: "₹40 / ₹60 / ₹90" },
      { name: "Orange Brownie (Topping)", price: "₹34 / ₹54 / ₹102" },
      { name: "Waffle Cone", price: "₹10" },
      { name: "Dark Night Ice Cream", price: "₹75 / ₹145 / ₹438" },
      { name: "Glossy Chocolate Ice Cream", price: "₹75 / ₹145 / ₹382" },
      { name: "Choco Asteroid", price: "₹85 / ₹175 / ₹490" },
      { name: "Dark Asteroid", price: "₹85 / ₹175 / ₹534" },
      { name: "Mocha-Mocha Ice Cream", price: "₹75 / ₹140 / ₹405" },
      { name: "Milky Way Ice Cream", price: "₹75 / ₹140 / ₹440" },
      { name: "Bon-Bourn Ice Cream", price: "₹75 / ₹150 / ₹412" },
      { name: "Oreoride Ice Cream", price: "₹75 / ₹140 / ₹378" },
      { name: "Choco Bounty", price: "₹80 / ₹150 / ₹410" },
      { name: "Choco Peanut Butter", price: "₹80 / ₹150 / ₹410" },
      { name: "Vanilla Ice Cream", price: "₹55 / ₹105 / ₹293" },
      { name: "Nutty Coffee Ice Cream", price: "₹70 / ₹130 / ₹378" },
      { name: "Salted Caramel Ice Cream", price: "₹85 / ₹165 / ₹442" },
      { name: "Brownie with Vanilla Ice Cream", price: "₹119" },
      { name: "Rose Gulkand Ice Cream", price: "₹65 / ₹130 / ₹353" },
      { name: "Dates Ice Cream", price: "₹70 / ₹130 / ₹382" },
      { name: "Anjeer Ice Cream", price: "₹75 / ₹150 / ₹454" },
      { name: "Calcutta Meetha Ice Cream", price: "₹70 / ₹130 / ₹378" }
    ],
    reviews: []
  },
  {
    id: 45,
    name: "Bits & Bites (Non-Veg)",
    category: "Restaurant",
    emoji: "🍗",
    coverImg: "../image/shops/id_45/1.jpeg",
    images: [
      "../image/shops/id_45/1.jpeg"
    ],
    lat: 16.493956284113757,
    lng: 80.49837958247001,
    distance: 0.5,
    rating: 4.2,
    reviewCount: 10,
    trust: 79,
    isOpen: true,
    aiRecommended: true,
    phone: null,
    address: "VIT-AP University Food Street, Inavolu, Amaravati, Andhra Pradesh 522237",
    hours: null,
    warning: null,
    tags: ["non-veg", "chicken", "biryani", "kebabs", "fried rice", "noodles", "starters", "food street"],
    aiReason: "Non-veg specialist on VIT-AP Food Street serving a wide range of chicken starters, biryanis, curries, kebabs, and tandoori dishes.",
    products: [
      { name: "Egg Noodles", price: "₹130" },
      { name: "Double Egg Noodles", price: "₹150" },
      { name: "Chicken Noodles", price: "₹160" },
      { name: "Double Chicken Noodles", price: "₹180" },
      { name: "Double Egg Double Chicken Noodles", price: "₹200" },
      { name: "Chicken Schezwan Noodles", price: "₹170" },
      { name: "Prawn Noodles", price: "₹220" },
      { name: "Egg Fried Rice", price: "₹140" },
      { name: "Double Egg Fried Rice", price: "₹160" },
      { name: "Chicken Fried Rice", price: "₹160" },
      { name: "Double Chicken Fried Rice", price: "₹180" },
      { name: "Double Egg Double Chicken Fried Rice", price: "₹210" },
      { name: "Chicken Schezwan Fried Rice", price: "₹170" },
      { name: "Wings Fried Rice", price: "₹220" },
      { name: "Drumsticks Fried Rice", price: "₹250" },
      { name: "Prawn Fried Rice", price: "₹250" },
      { name: "Mixed Nonveg Fried Rice", price: "₹250" },
      { name: "Chicken Manchurian", price: "₹150" },
      { name: "Chilli Chicken", price: "₹150" },
      { name: "Chicken 65", price: "₹160" },
      { name: "Schezwan Chicken (Dry)", price: "₹160" },
      { name: "Garlic Chicken", price: "₹160" },
      { name: "Ginger Chicken", price: "₹160" },
      { name: "Cashew Chicken (Dry)", price: "₹170" },
      { name: "Chicken 555", price: "₹160" },
      { name: "Dragon Chicken", price: "₹170" },
      { name: "Chicken Majestic", price: "₹170" },
      { name: "Crispy Chicken", price: "₹180" },
      { name: "Pepper Chicken", price: "₹180" },
      { name: "Chicken Ghee Roast (Bone 6 pcs)", price: "₹190" },
      { name: "Chicken Wings (4 pcs)", price: "₹200" },
      { name: "Chicken Lollipop (5 pcs)", price: "₹190" },
      { name: "Chilli Wings (6 pcs)", price: "₹200" },
      { name: "Sesame Chicken", price: "₹180" },
      { name: "Honey Chicken", price: "₹180" },
      { name: "Bits & Bites Special Chicken", price: "₹220" },
      { name: "Chicken Slaw", price: "₹200" },
      { name: "Egg Manchurian", price: "₹140" },
      { name: "Egg Chilli", price: "₹150" },
      { name: "Apollo Fish", price: "₹220" },
      { name: "Chilli Fish", price: "₹200" },
      { name: "Fried Fish", price: "₹220" },
      { name: "Fried Prawns", price: "₹230" },
      { name: "Chilli Prawns", price: "₹220" },
      { name: "Chicken Plater", price: "₹280" },
      { name: "Dum Biryani (2 pcs)", price: "₹180" },
      { name: "Fry Biryani (4 pcs)", price: "₹200" },
      { name: "Chicken Tikka Biryani", price: "₹220" },
      { name: "Prawns Biryani", price: "₹230" },
      { name: "Bits & Bites Special Biryani", price: "₹250" },
      { name: "Butter Chicken", price: "₹160" },
      { name: "Chicken Tikka Masala", price: "₹170" },
      { name: "Kadai Chicken", price: "₹170" },
      { name: "Andhra Style Chicken Curry", price: "₹170" },
      { name: "Punjabi Chicken Curry", price: "₹170" },
      { name: "Hyderabadi Chicken Curry", price: "₹180" },
      { name: "Mughlai Chicken Curry", price: "₹170" },
      { name: "Methi Chicken", price: "₹180" },
      { name: "Chicken Roghan Josh", price: "₹180" },
      { name: "Chicken Patiala", price: "₹180" },
      { name: "Chicken Do Pyaza", price: "₹170" },
      { name: "Chicken Maharani", price: "₹180" },
      { name: "Chicken Kolhapuri", price: "₹180" },
      { name: "Dum Ka Chicken", price: "₹180" },
      { name: "Cashew Chicken Curry", price: "₹200" },
      { name: "Gongura Chicken Curry", price: "₹180" },
      { name: "Ulavacharu Chicken Curry", price: "₹180" },
      { name: "Egg Curry", price: "₹140" },
      { name: "Prawns Curry", price: "₹220" },
      { name: "Fish Curry", price: "₹140" },
      { name: "Tandoori Roti", price: "₹30" },
      { name: "Butter Roti", price: "₹40" },
      { name: "Plain Naan", price: "₹50" },
      { name: "Butter Naan", price: "₹60" },
      { name: "Garlic Naan", price: "₹70" },
      { name: "Plain Kulcha", price: "₹50" },
      { name: "Butter Kulcha", price: "₹60" },
      { name: "Rumali Roti", price: "₹40" },
      { name: "Tandoori Chicken (Half)", price: "₹260" },
      { name: "Tandoori Chicken (Full)", price: "₹500" },
      { name: "Tangdi Kebab (Half)", price: "₹160" },
      { name: "Tangdi Kebab (Full)", price: "₹280" },
      { name: "Cheese Tangdi Kebab (Half)", price: "₹170" },
      { name: "Cheese Tangdi Kebab (Full)", price: "₹300" },
      { name: "Tikka Kebab", price: "₹160" },
      { name: "Malai Kebab", price: "₹170" },
      { name: "Achari Kebab", price: "₹160" },
      { name: "Hariyali Kebab", price: "₹160" },
      { name: "Garlic Kebab", price: "₹170" },
      { name: "Reshmi Tikka Kebab", price: "₹170" },
      { name: "Triple Kebab", price: "₹220" }
    ],
    reviews: []
  },
  {
    id: 46,
    name: "CFC Coffee Shop",
    category: "Cafe",
    emoji: "☕",
    coverImg: "../image/shops/id_46/1.jpeg",
    images: [
      "../image/shops/id_46/1.jpeg"
    ],
    lat: 16.49381476045637,
    lng: 80.49849846348334,
    distance: 0.1,
    rating: 4.1,
    reviewCount: 5,
    trust: 76,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "VIT-AP University Food Street, Inavolu, Amaravati, Andhra Pradesh 522237",
    hours: null,
    warning: null,
    tags: ["coffee", "tea", "cafe", "hot drinks", "lassi", "beverages", "food street"],
    aiReason: "Café on VIT-AP Food Street offering filter coffee, teas, hot milk drinks, cold coffees, and lassi at pocket-friendly prices.",
    products: [
      { name: "Filter Coffee", price: "₹25" },
      { name: "Special Bellam Coffee", price: "₹25" },
      { name: "Bellam Coffee", price: "₹30" },
      { name: "Black Coffee", price: "₹25" },
      { name: "Normal Coffee", price: "₹25" },
      { name: "Hot Milk", price: "₹15" },
      { name: "Badam Milk (Hot)", price: "₹25" },
      { name: "Boost", price: "₹25" },
      { name: "Horlicks", price: "₹25" },
      { name: "Bournvita", price: "₹40" },
      { name: "Hot Chocolate", price: "₹15" },
      { name: "Special Tea", price: "₹20" },
      { name: "Bellam Tea", price: "₹25" },
      { name: "Badam Tea", price: "₹25" },
      { name: "Lemon Tea", price: "₹25" },
      { name: "Green Tea", price: "₹25" },
      { name: "Special Masala Green Tea", price: "₹25" },
      { name: "Black Tea", price: "₹25" },
      { name: "Special Rose Milk", price: "₹100" },
      { name: "Special Badam Milk", price: "₹110" },
      { name: "Special Pista Milk", price: "₹100" },
      { name: "Cold Coffee", price: "₹150" },
      { name: "Chocolate Cold Coffee", price: "₹160" },
      { name: "Caramel Cold Coffee", price: "₹175" },
      { name: "Nutella Cold Coffee", price: "₹175" },
      { name: "Lassi", price: "₹60" },
      { name: "Blackcurrant Lassi", price: "₹75" },
      { name: "Strawberry Lassi", price: "₹75" },
      { name: "Mango Lassi", price: "₹75" }
    ],
    reviews: []
  },
  {
    id: 47,
    name: "Bits & Bites (Veg)",
    category: "Restaurant",
    emoji: "🥦",
    coverImg: "../image/shops/id_47/1.jpeg",
    images: [
      "../image/shops/id_47/1.jpeg"
    ],
    lat: 16.493827888240958,
    lng: 80.4986022686712,
    distance: 0.3,
    rating: 4.0,
    reviewCount: 6,
    trust: 74,
    isOpen: true,
    aiRecommended: false,
    phone: null,
    address: "VIT-AP University Food Street, Inavolu, Amaravati, Andhra Pradesh 522237",
    hours: null,
    warning: null,
    tags: ["veg", "fried rice", "noodles", "starters", "curries", "kebabs", "paneer", "food street"],
    aiReason: "Veg-only outlet on VIT-AP Food Street with an extensive menu of fried rice, noodles, starters, curries, rotis, and kebabs.",
    products: [
      { name: "Veg Fried Rice", price: "₹130" },
      { name: "Veg Schezwan Fried Rice", price: "₹140" },
      { name: "Veg Manchurian Fried Rice", price: "₹140" },
      { name: "Gobi Fried Rice", price: "₹140" },
      { name: "Paneer Fried Rice", price: "₹170" },
      { name: "Baby Corn Fried Rice", price: "₹150" },
      { name: "Mushroom Fried Rice", price: "₹150" },
      { name: "Cashew Fried Rice", price: "₹180" },
      { name: "Jeera Rice", price: "₹130" },
      { name: "Ghee Rice", price: "₹140" },
      { name: "Veg Noodles", price: "₹110" },
      { name: "Veg Schezwan Noodles", price: "₹140" },
      { name: "Veg Manchurian Noodles", price: "₹130" },
      { name: "Gobi Noodles", price: "₹130" },
      { name: "Paneer Noodles", price: "₹160" },
      { name: "Baby Corn Noodles", price: "₹140" },
      { name: "Mushroom Noodles", price: "₹140" },
      { name: "Veg Manchurian", price: "₹130" },
      { name: "Gobi Manchurian", price: "₹130" },
      { name: "Paneer Manchurian", price: "₹160" },
      { name: "Mushroom Manchurian", price: "₹150" },
      { name: "Baby Corn Manchurian", price: "₹130" },
      { name: "Crispy Corn", price: "₹130" },
      { name: "Crispy Veg", price: "₹140" },
      { name: "Honey Chilli Potato", price: "₹150" },
      { name: "Chilli Potato", price: "₹170" },
      { name: "Chilli Mushroom", price: "₹150" },
      { name: "Chilli Baby Corn", price: "₹130" },
      { name: "Chilli Gobi", price: "₹130" },
      { name: "Chilli Paneer", price: "₹150" },
      { name: "Schezwan Paneer", price: "₹160" },
      { name: "Magachi Paneer", price: "₹170" },
      { name: "Veg Bullet (8 pcs)", price: "₹180" },
      { name: "Corn Lollipop (5 pcs)", price: "₹160" },
      { name: "Milava Veg", price: "₹150" },
      { name: "Veg Mongolia", price: "₹160" },
      { name: "Gobi 65", price: "₹140" },
      { name: "Paneer 65", price: "₹160" },
      { name: "Bits & Bites Special Starter", price: "₹180" },
      { name: "Triangle Paneer", price: "₹180" },
      { name: "Greenpeas Curry", price: "₹130" },
      { name: "Mix Vegetable Curry", price: "₹120" },
      { name: "Kadai Veg", price: "₹120" },
      { name: "Kadai Paneer", price: "₹170" },
      { name: "Kadai Gobi", price: "₹140" },
      { name: "Kadai Mushroom", price: "₹170" },
      { name: "Kadai Baby Corn", price: "₹160" },
      { name: "Gobi Masala", price: "₹140" },
      { name: "Baby Corn Masala", price: "₹160" },
      { name: "Greenpeas Masala", price: "₹140" },
      { name: "Mushroom Masala", price: "₹160" },
      { name: "Paneer Butter Masala", price: "₹170" },
      { name: "Shahi Paneer", price: "₹180" },
      { name: "Special Paneer Curry", price: "₹180" },
      { name: "Methi Paneer", price: "₹170" },
      { name: "Methi Chaman", price: "₹180" },
      { name: "Tomato Curry", price: "₹130" },
      { name: "Tomato Cashew Curry", price: "₹150" },
      { name: "Palak Paneer", price: "₹170" },
      { name: "Veg Chatpat", price: "₹150" },
      { name: "Tandoori Roti", price: "₹30" },
      { name: "Butter Roti", price: "₹40" },
      { name: "Plain Naan", price: "₹50" },
      { name: "Butter Naan", price: "₹60" },
      { name: "Garlic Naan", price: "₹70" },
      { name: "Plain Kulcha", price: "₹50" },
      { name: "Butter Kulcha", price: "₹60" },
      { name: "Rumali Roti", price: "₹40" },
      { name: "Paneer Tikka", price: "₹170" },
      { name: "Hariyali Paneer Tikka", price: "₹170" },
      { name: "Malai Paneer Tikka", price: "₹180" },
      { name: "Veg Seekh Kebab", price: "₹160" },
      { name: "Coke", price: "₹40" },
      { name: "Sprite", price: "₹40" },
      { name: "Fanta", price: "₹40" },
      { name: "Sparkle Water", price: "₹25" },
      { name: "Sparkle Water (Lemon & Salt)", price: "₹30" }
    ],
    reviews: []
  },
  {
    id: 48,
    name: "Shakers & Movers",
    category: "Cafe",
    emoji: "🧃",
    coverImg: "../image/shops/id_48/1.jpeg",
    images: [
      "../image/shops/id_48/1.jpeg"
    ],
    lat: 16.493905290744618,
    lng: 80.49851629751606,
    distance: 0.2,
    rating: 4.3,
    reviewCount: 7,
    trust: 83,
    isOpen: true,
    aiRecommended: true,
    phone: null,
    address: "VIT-AP University Food Street, Inavolu, Amaravati, Andhra Pradesh 522237",
    hours: null,
    warning: null,
    tags: ["juices", "shakes", "mojito", "thickshakes", "boba", "protein shake", "fruit bowl", "food street"],
    aiReason: "Juice and shake bar on VIT-AP Food Street offering fresh juices, mojitos, milkshakes, thickshakes, and protein shakes.",
    products: [
      { name: "Watermelon Juice", price: "₹50" },
      { name: "ABC Juice", price: "₹80" },
      { name: "Banana Juice", price: "₹60" },
      { name: "Mosambi Juice", price: "₹60" },
      { name: "Orange Juice", price: "₹60" },
      { name: "Pineapple Juice", price: "₹60" },
      { name: "Avocado Juice", price: "₹90" },
      { name: "Dragon Fruit Juice", price: "₹90" },
      { name: "Kiwi Juice", price: "₹70" },
      { name: "Litchi Juice", price: "₹90" },
      { name: "Sitaphal Juice", price: "₹90" },
      { name: "Dry Fruit Special", price: "₹100" },
      { name: "Apple Juice", price: "₹70" },
      { name: "Beetroot/Carrot Juice", price: "₹60" },
      { name: "Grape Juice", price: "₹60" },
      { name: "Muskmelon Juice", price: "₹60" },
      { name: "Mango Juice", price: "₹70" },
      { name: "Papaya Juice", price: "₹60" },
      { name: "Pomegranate Juice", price: "₹70" },
      { name: "Sapota Juice", price: "₹60" },
      { name: "Fruit Bowl", price: "₹60" },
      { name: "Fruit Bowl with Vanilla", price: "₹80" },
      { name: "Himalayan Phalsa", price: "₹39" },
      { name: "Indian Orange", price: "₹39" },
      { name: "Citrus Lemon", price: "₹39" },
      { name: "Blackcurrant", price: "₹39" },
      { name: "Blue Berry", price: "₹39" },
      { name: "Strawberry", price: "₹39" },
      { name: "Alphonso Mango", price: "₹39" },
      { name: "Tropical Pineapple", price: "₹39" },
      { name: "Virgin Mojito", price: "₹79" },
      { name: "Blue Angel (Curacao)", price: "₹79" },
      { name: "Watermelon Mojito", price: "₹79" },
      { name: "Green Apple Mojito", price: "₹79" },
      { name: "Strawberry Mojito", price: "₹79" },
      { name: "Kitkat Banana", price: "₹89" },
      { name: "Oreo Banana", price: "₹89" },
      { name: "Chocochip Banana", price: "₹89" },
      { name: "Caramel Banana", price: "₹89" },
      { name: "Nutella Banana", price: "₹89" },
      { name: "Mango Madness", price: "₹79" },
      { name: "Banana Blast", price: "₹79" },
      { name: "Blackcurrant Shake", price: "₹79" },
      { name: "Only Oreo", price: "₹99" },
      { name: "Chocochip Oreo", price: "₹99" },
      { name: "Choco Oreo", price: "₹99" },
      { name: "Kitkat Oreo", price: "₹99" },
      { name: "Kitkat Shake", price: "₹109" },
      { name: "Oreo Shake", price: "₹109" },
      { name: "Cookie & Cream", price: "₹109" },
      { name: "Triple Choco Chip", price: "₹109" },
      { name: "Kitkat Thickshake", price: "₹119" },
      { name: "Oreo Thickshake", price: "₹119" },
      { name: "Cookie & Cream Thickshake", price: "₹119" },
      { name: "Strawberry Thickshake", price: "₹119" },
      { name: "Belgium Chocolate", price: "₹139" },
      { name: "Ferrero Rocher", price: "₹139" },
      { name: "Nutella Brownie", price: "₹139" },
      { name: "Brownie Choco", price: "₹139" },
      { name: "Brownie Oreo", price: "₹139" },
      { name: "Brownie Choco Chip", price: "₹139" },
      { name: "Nutella Chocolate Blast", price: "₹129" },
      { name: "Nutella Cookie & Cream", price: "₹129" },
      { name: "Nutella Choco Chip", price: "₹129" },
      { name: "Protein Shake", price: "₹129" },
      { name: "Protein Shake (Monthly Plan)", price: "₹99" }
    ],
    reviews: []
  },
  {
    id: 49,
    name: "Street Vegetable Shop",
    category: "Shop",
    emoji: "🥕",
    coverImg: "../image/shops/id_49/1.jpeg",
    images: [
      "../image/shops/id_49/1.jpeg"
    ],
    lat: 16.520135,
    lng: 80.523669,
    distance: 2.1,
    rating: 4.0,
    reviewCount: 22,
    trust: 72,
    isOpen: true,
    aiRecommended: true,
    phone: null,
    address: "Mandadam Center, Mandam, Thullur, Andhra Pradesh,522503.",
    hours: "6:30 AM – 9:00 PM",
    warning: null,
    tags: ["vegetables", "fresh", "grocery", "local shop"],
    aiReason: "Street-side vegetable shop offering fresh produce at flexible price ranges per kg and bunch.",

    products: [
      { name: "Potatoes", price: "24-30/-" },
      { name: "Tomatoes", price: "22-27/-" },
      { name: "Brinjal", price: "25-35/-" },
      { name: "Lady's Fingers", price: "35-45/-" },
      { name: "Lemons", price: "20/-" },
      { name: "Onions", price: "28-35/-" },
      { name: "Drum Stick", price: "70-80/-" },
      { name: "Bottle Guard", price: "20-30/-" },
      { name: "Green Chilli", price: "50-60/-" },
      { name: "Coriander", price: "10-20/- (Bunch)" }
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
