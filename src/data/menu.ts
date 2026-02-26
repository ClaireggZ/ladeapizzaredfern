// Menu data for LA DEA Pizza & Dolci

export interface MenuItem {
  name: string;
  price: number;
  description: string;
  isGlutenFree?: boolean;
  isSpecial?: boolean;
  isRecommended?: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const pizzaMenu: MenuCategory[] = [
  {
    name: "The Tradition",
    items: [
      { name: "Mimosa", price: 12.90, description: "Creamy base with Mozzarella, ham, and golden egg." },
      { name: "Bandiera", price: 14.90, description: "Fresh wild rocket, Parma prosciutto, fior di latte mozzarella, and cracked black pepper." },
      { name: "Rossa (Vg)", price: 9.90, description: "San Marzano tomato sauce, oregano, sliced garlic, and extra virgin olive oil." },
      { name: "Regina (V)", price: 12.90, description: "Tomato sauce, fior di latte mozzarella, and fresh basil leaves." },
      { name: "Colosseo (Vg)", price: 12.90, description: "Sliced grilled eggplant with a mix of chili and fresh parsley." },
    ],
  },
  {
    name: "The Goddess Choice",
    items: [
      { name: "Roma", price: 13.90, description: "Tomato sauce, crispy guanciale, Pecorino Romano DOP, and freshly ground black pepper." },
      { name: "Principessa", price: 14.90, description: "Fior di latte mozzarella, Bologna mortadella, Puglia stracciatella cheese, and crushed pistachios." },
      { name: "Sua Maestà", price: 14.90, description: "Signature carbonara cream, crispy guanciale, Pecorino Romano, and black pepper." },
      { name: "Flagello", price: 13.90, description: "Fior di latte mozzarella, Pecorino and Parmesan cream, black truffle paste, and black pepper." },
    ],
  },
  {
    name: "The Imperial",
    items: [
      { name: "Nobile", price: 13.90, description: "An elegant, full-bodied pizza layered with rich flavors and a refined, noble finish in every bite." },
      { name: "Flavia (V)", price: 13.90, description: "Tomato sauce, Puglia stracciatella, red and yellow cherry tomatoes, olives, and basil." },
      { name: "Apollo", price: 13.90, description: "Red peppers, red onions, pulled chicken, fresh thyme, and salted ricotta." },
      { name: "Inferno", price: 14.90, description: "Red pepper cream, fior di latte mozzarella, spicy salami, and fresh coriander." },
    ],
  },
  {
    name: "The Divine",
    items: [
      { name: "Imperia", price: 13.90, description: "Sliced grilled eggplant, crispy stretched pancetta, and a mix of parsley and chili." },
      { name: "Flora", price: 13.90, description: "Fior di latte mozzarella, sautéed mushrooms, Italian sausage, and fresh parsley." },
      { name: "Virtuosa", price: 13.90, description: "Fior di latte mozzarella, high-quality cooked ham, and sliced button mushrooms." },
    ],
  },
  {
    name: "The Sea",
    items: [
      { name: "Poseidone", price: 14.90, description: "Crowned with briny ocean flavors and rich mozzarella." },
      { name: "Nettuno", price: 13.90, description: "Tomato sauce, gourmet mayonnaise, iceberg lettuce, smoked salmon, and black sesame seeds." },
      { name: "Marina", price: 13.90, description: "Tomato sauce, gourmet mayonnaise, iceberg lettuce, cherry tomatoes, baby prawns, and fresh parsley." },
      { name: "Sirena", price: 13.90, description: "Tomato sauce, fresh sardines, red cherry tomatoes, and a mix of parsley and chili." },
    ],
  },
];

export const dolciMenu: MenuItem[] = [
  { name: "Tiramisù Classico", price: 15.90, description: "Lavazza espresso-dipped ladyfingers, mascarpone, cocoa powder.", isGlutenFree: true, isRecommended: true },
  { name: "Tiramisù CoccoBello", price: 15.90, description: "Hazelnut-dipped ladyfingers, coconut mascarpone, white chocolate, shredded coconut.", isGlutenFree: true, isSpecial: true },
  { name: "Tiramisù ChocoNocciola", price: 15.90, description: "Cocoa-infused ladyfingers, hazelnut mascarpone, Nutella drizzle, roasted hazelnuts.", isGlutenFree: true },
  { name: "Tiramisù Biscoff Oro", price: 15.90, description: "Lavazza espresso-dipped ladyfingers, Biscoff mascarpone, salted caramel." },
  { name: "Tiramisù Pistacchio Verde", price: 15.90, description: "Pistachio-dipped ladyfingers, mascarpone, pistachio crunch & drizzle.", isGlutenFree: true, isRecommended: true },
  { name: "Tiramisù Matcha Strawberry", price: 15.90, description: "Strawberry-dipped ladyfingers, matcha mascarpone, fresh strawberries, matcha dust.", isGlutenFree: true },
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
