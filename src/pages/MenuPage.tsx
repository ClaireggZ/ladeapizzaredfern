import { useState } from "react";
import { pizzaMenu, pizzaBoxes, pizzaNote, dolciMenu, type MenuItem, type MenuCategory } from "@/data/menu";
import pizzaIcon from "@/assets/pizza-icon.png";
import dessertIcon from "@/assets/dessert-icon.png";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<"pizza" | "dolci">("pizza");

  return (
    <div className="min-h-screen px-4 py-6">
      {/* Page Title */}
      <div className="text-center mb-6">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Our Menu</h1>
        <p className="text-foreground/70">CREATO A ROMA, CIBO PER GLI DEI</p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveCategory("pizza")}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
            activeCategory === "pizza"
              ? "bg-foreground text-background"
              : "bg-card text-foreground border border-border hover:bg-card/80"
          }`}
        >
          <img src={pizzaIcon} alt="Pizza" className="w-10 h-10 aspect-square object-contain rounded-full" />
          Pizza
        </button>
        <button
          onClick={() => setActiveCategory("dolci")}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
            activeCategory === "dolci"
              ? "bg-foreground text-background"
              : "bg-card text-foreground border border-border hover:bg-card/80"
          }`}
        >
          <img src={dessertIcon} alt="Dessert" className="w-10 h-10 aspect-square object-contain rounded-full" />
          Dessert
        </button>
      </div>

      {/* Pizza Menu */}
      {activeCategory === "pizza" && (
        <div className="max-w-2xl mx-auto animate-fade-in">
          {/* Header */}
          <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-6">
            Roman-Style Sliced Pizza
          </h2>

          {/* Pizza Boxes */}
          <div className="mb-8">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3 text-center">Pizza Boxes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pizzaBoxes.map((box) => (
                <div key={box.name} className="bg-card/50 rounded-xl p-4 border border-border/30 text-center">
                  <h4 className="font-serif text-lg font-semibold text-foreground">{box.name}</h4>
                  <p className="text-foreground/70 text-sm">{box.description}</p>
                  <p className="font-semibold text-foreground mt-1">${box.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Slice Categories */}
          <div className="space-y-8">
            {pizzaMenu.map((category) => (
              <div key={category.name}>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1 border-b border-border/50 pb-2">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-foreground/60 text-sm mb-3">{category.description}</p>
                )}
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <PizzaItemCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pizza Note */}
          <div className="mt-8 bg-card/30 rounded-xl p-4 border border-border/20">
            <p className="text-foreground/70 text-xs leading-relaxed italic">{pizzaNote}</p>
          </div>
        </div>
      )}

      {/* Dolci Menu */}
      {activeCategory === "dolci" && (
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4 text-center">
            Artisan Tiramisù
          </h2>
          <p className="text-foreground/70 text-center mb-6 text-sm">
            Handcrafted with love, each a divine experience
          </p>
          <div className="space-y-4">
            {dolciMenu.map((item) => (
              <DolciItemCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PizzaItemCard = ({ item }: { item: MenuItem }) => {
  const dietLabel = item.isVegan ? "Vg" : item.isVegetarian ? "V" : null;

  return (
    <div className="bg-card/50 rounded-xl p-4 border border-border/30">
      <div className="flex justify-between items-start gap-4 mb-1">
        <h4 className="font-serif text-lg font-semibold text-foreground">
          {item.name}
          {dietLabel && (
            <span className="ml-2 text-sm font-sans font-normal text-foreground/60">({dietLabel})</span>
          )}
        </h4>
        <span className="font-semibold text-foreground whitespace-nowrap">
          ${item.price.toFixed(2)}
        </span>
      </div>
      <p className="text-foreground/75 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};

const DolciItemCard = ({ item }: { item: MenuItem }) => {
  return (
    <div className="bg-card/50 rounded-xl p-4 border border-border/30">
      <div className="flex justify-between items-start gap-4 mb-2">
        <h3 className="font-serif text-xl font-semibold text-foreground">
          {item.name}
        </h3>
        <span className="font-semibold text-foreground whitespace-nowrap">
          ${item.price.toFixed(2)}
        </span>
      </div>
      <p className="text-foreground/75 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};

export default MenuPage;
