import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import laDeaLogo from "@/assets/la-dea-logo.png";
import charcuterieIcon from "@/assets/charcuterie-icon.png";
import pizzaGallery from "@/assets/pizza-gallery.png";
import freshBaked from "@/assets/fresh-baked.png";
import desserts from "@/assets/desserts.jpg";
import flavoursIcon from "@/assets/flavours-icon.png";
import gourmetPizzaIcon from "@/assets/gourmet-pizza-icon.png";
import premiumIcon from "@/assets/premium-ingredients-icon.png";
import romeIcon from "@/assets/rome-at-home-icon.png";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 pt-8 pb-12 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={laDeaLogo} 
            alt="LA DEA Pizza & Dolci - Creato a Roma, Cibo Per Gli Dei" 
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-foreground/30" />
          <img src={charcuterieIcon} alt="LA DEA icon" className="w-10 h-10 opacity-80" />
          <div className="h-px w-16 bg-foreground/30" />
        </div>

        {/* Brand Story */}
        <p className="max-w-md mx-auto text-foreground/85 text-lg leading-relaxed mb-10 font-light">
          Where Roman tradition meets artisan craft. Every pizza is a tribute to the goddess, 
          every tiramisù a divine indulgence. Welcome to food for the gods.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="font-semibold text-lg px-8">
            <Link to="/menu">
              View Our Menu
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-foreground/50 text-foreground hover:bg-foreground/10">
            <Link to="/contact">
              Find Us
            </Link>
          </Button>
        </div>
      </section>

      {/* Pizza Gallery */}
      <section className="px-4 pb-8">
        <h2 className="font-serif text-3xl text-center text-foreground mb-6">
          Our Creations
        </h2>
        
        <div className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
          {/* Pizza Image 1 */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-card shadow-xl">
            <img 
              src={pizzaGallery} 
              alt="LA DEA Artisan Roman-style pizzas" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Pizza Image 2 & 3 */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-card shadow-xl">
              <img 
                src={freshBaked} 
                alt="LA DEA Fresh Baked Roman-style pizzas" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-card shadow-xl">
              <img 
                src={desserts} 
                alt="LA DEA Artisan Desserts"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="px-6 py-10 bg-card/30">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-serif text-3xl text-foreground mb-4">
            The Goddess
          </h2>
          <p className="text-foreground/80 text-sm leading-relaxed mb-6">
            <span className="font-semibold">LA DEA</span> means "The Goddess" in Italian — 
            a name that embodies our promise of <span className="italic">divine culinary experiences</span> and 
            elevated, godly pizza offerings.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-foreground/30" />
            <img src={premiumIcon} alt="Premium ingredients" className="w-8 h-8 opacity-80" />
            <div className="h-px w-12 bg-foreground/30" />
          </div>

          <p className="text-foreground/75 text-sm leading-relaxed italic">
            "Roman style pizza is cooked on a rectangular tray, thin and crispy, 
            with a generous variety of toppings. We serve by the slice — 
            so you can taste the divine flavours, any time."
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-8 bg-card/50">
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
          <div>
            <img src={romeIcon} alt="Roman Style" className="w-8 h-8 mb-2 mx-auto" />
            <p className="text-foreground/80 text-xs">Roman Style</p>
          </div>
          <div>
            <img src={gourmetPizzaIcon} alt="By The Slice" className="w-8 h-8 mb-2 mx-auto" />
            <p className="text-foreground/80 text-xs">By The Slice</p>
          </div>
          <div>
            <img src={flavoursIcon} alt="Divine Taste" className="w-8 h-8 mb-2 mx-auto" />
            <p className="text-foreground/80 text-xs">Divine Taste</p>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="px-6 py-10">
        <h2 className="font-serif text-2xl text-center text-foreground mb-4">
          Two Locations in Sydney
        </h2>
        <p className="text-center text-foreground/70 mb-6">
          Visit us in Redfern or at the Sydney Fish Market
        </p>
        <div className="text-center">
          <Button asChild variant="outline" className="border-foreground/50 text-foreground hover:bg-foreground/10">
            <Link to="/contact">
              Get Directions
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
