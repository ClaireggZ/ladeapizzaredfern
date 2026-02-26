// Menu data for LA DEA Pizza & Dolci

export interface MenuItem {
  name: string;
  price: number;
  description: string;
  isGlutenFree?: boolean;
  isSpecial?: boolean;
  isRecommended?: boolean;
  isVegan?: boolean;
  isVegetarian?: boolean;
  hasVeganOption?: boolean;
}

export interface MenuCategory {
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface PizzaBox {
  name: string;
  description: string;
  price: number;
}

export const pizzaBoxes: PizzaBox[] = [
  { name: "Divine Delights Box", description: "4 slices, serves 2–3", price: 44.90 },
  { name: "Divine Delights Grande Box", description: "10 slices, serves 6–8", price: 103.90 },
];

export const pizzaMenu: MenuCategory[] = [
  {
    name: "By The Slice — Base",
    description: "avg. 150g Base — $8.00 each",
    items: [
      { name: "Rossa", price: 8.00, description: "Tomato sauce, oregano, garlic, extra virgin olive oil.", isVegan: true },
      { name: "Focaccia", price: 8.00, description: "Oregano, extra virgin olive oil.", isVegan: true },
      { name: "Olive Focaccia", price: 8.00, description: "Green olives, oregano, extra virgin olive oil.", isVegan: true },
      { name: "Tomato Focaccia", price: 8.00, description: "Cherry tomatoes, oregano, extra virgin olive oil.", isVegan: true },
    ],
  },
  {
    name: "By The Slice — Vegan & Vegetarian",
    description: "avg. 250g",
    items: [
      { name: "Colosseo", price: 11.99, description: "Sliced grilled eggplant with a mix of chili and fresh parsley.", isVegan: true },
      { name: "Regina", price: 11.99, description: "Tomato sauce, fior di latte mozzarella, and fresh basil leaves. (Vegan option available)", isVegetarian: true, hasVeganOption: true },
      { name: "Mimosa", price: 12.99, description: "Creamy base with mozzarella, ham, and golden egg.", isVegetarian: true },
    ],
  },
  {
    name: "By The Slice — Red Base",
    items: [
      { name: "Roma", price: 12.99, description: "Tomato sauce, crispy guanciale, Pecorino Romano DOP, and freshly ground black pepper." },
      { name: "Italia", price: 12.90, description: "Tomato sauce, stracciatella, cherry tomatoes, anchovies, pesto." },
      { name: "Imperatore", price: 12.90, description: "Tomato sauce, spinach, parmesan, prosciutto." },
      { name: "Flavia", price: 12.99, description: "Tomato sauce, Puglia stracciatella, red and yellow cherry tomatoes, olives, and basil.", isVegetarian: true },
    ],
  },
  {
    name: "By The Slice — White Base",
    items: [
      { name: "Nobile", price: 12.99, description: "An elegant, full-bodied pizza layered with rich flavors and a refined, noble finish in every bite." },
      { name: "Flagello", price: 12.99, description: "Fior di latte mozzarella, Pecorino and Parmesan cream, black truffle paste, and black pepper.", isVegetarian: true },
      { name: "Imperia", price: 12.99, description: "Sliced grilled eggplant, crispy stretched pancetta, and a mix of parsley and chili." },
      { name: "Inferno", price: 12.99, description: "Red pepper cream, fior di latte mozzarella, spicy salami, and fresh coriander." },
      { name: "Virtuosa", price: 12.99, description: "Fior di latte mozzarella, high-quality cooked ham, and sliced button mushrooms." },
      { name: "Flora", price: 12.99, description: "Fior di latte mozzarella, sautéed mushrooms, Italian sausage, and fresh parsley." },
    ],
  },
  {
    name: "By The Slice — The Divine",
    items: [
      { name: "Bandiera", price: 12.99, description: "Fresh wild rocket, Parma prosciutto, fior di latte mozzarella, and cracked black pepper." },
      { name: "Principessa", price: 12.99, description: "Fior di latte mozzarella, Bologna mortadella, Puglia stracciatella cheese, and crushed pistachios." },
      { name: "Sua Maestà", price: 12.99, description: "Signature carbonara cream, crispy guanciale, Pecorino Romano, and black pepper." },
      { name: "Apollo", price: 12.99, description: "Red peppers, red onions, pulled chicken, fresh thyme, and salted ricotta." },
    ],
  },
  {
    name: "By The Slice — The Sea",
    items: [
      { name: "Marina", price: 12.99, description: "Tomato sauce, gourmet mayonnaise, iceberg lettuce, cherry tomatoes, baby prawns, and fresh parsley." },
      { name: "Sirena", price: 12.99, description: "Tomato sauce, fresh sardines, red cherry tomatoes, and a mix of parsley and chili." },
    ],
  },
];

export const pizzaNote = "Vegan option (VO) available on selected pizzas. Gluten-free + $2/slice. Note: Cross-contamination may occur due to shared equipment.";

export const dolciMenu: MenuItem[] = [
  { name: "Tiramisù Classico", price: 14.90, description: "Lavazza espresso-dipped ladyfingers, mascarpone, cocoa powder.", isGlutenFree: true },
  { name: "Tiramisù CoccoBello", price: 14.90, description: "Hazelnut-dipped ladyfingers, coconut mascarpone, white chocolate, shredded coconut.", isGlutenFree: true, isSpecial: true },
  { name: "Tiramisù ChocoNocciola", price: 14.90, description: "Cocoa-infused ladyfingers, hazelnut mascarpone, Nutella drizzle, roasted hazelnuts.", isGlutenFree: true },
  { name: "Tiramisù Biscoff Oro", price: 14.90, description: "Lavazza espresso-dipped ladyfingers, Biscoff mascarpone, salted caramel." },
  { name: "Tiramisù Pistacchio Verde", price: 14.90, description: "Pistachio-dipped ladyfingers, mascarpone, pistachio crunch & drizzle.", isGlutenFree: true },
  { name: "Tiramisù Matcha Strawberry", price: 14.90, description: "Strawberry-dipped ladyfingers, matcha mascarpone, fresh strawberries, matcha dust.", isGlutenFree: true },
];

export interface PartyTray {
  title: string;
  description: string;
  isPromo?: boolean;
}

export interface ExtraItem {
  name: string;
  price: number;
}

export const partyTrays: PartyTray[] = [
  { title: "1 Tray", description: "Choose up to 2 different types of pizza." },
  { title: "2 Trays", description: "Choose up to 4 different types of pizza." },
  { title: "3 to 4 Trays", description: "Choose up to 5 different types of pizza." },
  { title: "5+ Trays (Promo!)", description: "Order 5 or more trays and receive 10% off your entire tray order. Choose up to 5 different types of pizza.", isPromo: true },
];

export const partyExtras: ExtraItem[] = [
  { name: "Tagliere", price: 10.00 },
  { name: "Italian Salad", price: 8.00 },
  { name: "Artisan Tiramisù", price: 10.00 },
];

export const locations = [
  {
    name: "Redfern",
    address: "Shop E/66 Regent St, Redfern NSW 2016",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d151.2055!3d-33.8925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1d8a8e2c9d1%3A0x1234567890abcdef!2sShop%20E%2F66%20Regent%20St%2C%20Redfern%20NSW%202016!5e0!3m2!1sen!2sau!4v1234567890",
    mapsLink: "https://maps.google.com/?q=Shop+E/66+Regent+St,+Redfern+NSW+2016",
  },
  {
    name: "Sydney Fish Market",
    address: "Shop F3/1 Bridge Rd, Glebe NSW 2037",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d151.1855!3d-33.8725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1d8a8e2c9d1%3A0x1234567890abcdef!2sSydney%20Fish%20Market!5e0!3m2!1sen!2sau!4v1234567890",
    mapsLink: "https://maps.google.com/?q=Shop+F3/1+Bridge+Rd,+Glebe+NSW+2037",
  },
];

export const contactInfo = {
  phone: "0411 448 799",
  phoneLink: "tel:+61411448799",
  email: "info@ladeapizza.com.au",
  emailLink: "mailto:info@ladeapizza.com.au",
  hours: "11am - 11pm",
  instagram: "https://www.instagram.com/ladeapizza/?hl=en",
  rednote: "https://xhslink.com/m/5IfyG2h7cH0",
};
