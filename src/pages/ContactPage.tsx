import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { locations, contactInfo } from "@/data/menu";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <div className="min-h-screen px-4 py-6">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-2">Find Us</h1>
        <p className="text-foreground/70">Two locations to serve you</p>
      </div>

      {/* Location Tabs */}
      <div className="flex justify-center gap-2 mb-6">
        {locations.map((location, index) => (
          <button
            key={location.name}
            onClick={() => setActiveLocation(index)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${
              activeLocation === index
                ? "bg-foreground text-background"
                : "bg-card text-foreground border border-border hover:bg-card/80"
            }`}
          >
            <MapPin className="w-4 h-4" />
            {location.name}
          </button>
        ))}
      </div>

      {/* Active Location Card */}
      <div className="max-w-md mx-auto mb-8 animate-fade-in">
        <div className="bg-card/50 rounded-2xl p-6 border border-border/30">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">
            📍 {locations[activeLocation].name}
          </h2>
          <p className="text-foreground/80 mb-4">
            {locations[activeLocation].address}
          </p>
          
          {/* Map Embed */}
          <div className="aspect-video rounded-xl overflow-hidden bg-card mb-4">
            <iframe
              src={locations[activeLocation].mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${locations[activeLocation].name} location`}
            />
          </div>

          <Button asChild className="w-full">
            <a 
              href={locations[activeLocation].mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
              <MapPin className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-md mx-auto space-y-4 mb-8">
        <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-4">
          Contact Us
        </h2>

        {/* Phone */}
        <a 
          href={contactInfo.phoneLink}
          className="flex items-center gap-4 bg-card/50 rounded-xl p-4 border border-border/30 hover:bg-card/70 transition-colors"
        >
          <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <p className="text-foreground/60 text-sm">Call us</p>
            <p className="text-foreground font-semibold">{contactInfo.phone}</p>
          </div>
        </a>

        {/* Email */}
        <a 
          href={contactInfo.emailLink}
          className="flex items-center gap-4 bg-card/50 rounded-xl p-4 border border-border/30 hover:bg-card/70 transition-colors"
        >
          <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <p className="text-foreground/60 text-sm">Email us</p>
            <p className="text-foreground font-semibold">{contactInfo.email}</p>
          </div>
        </a>

        {/* Hours */}
        <div className="flex items-center gap-4 bg-card/50 rounded-xl p-4 border border-border/30">
          <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <p className="text-foreground/60 text-sm">Open daily</p>
            <p className="text-foreground font-semibold">{contactInfo.hours}</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="max-w-md mx-auto">
        <h2 className="font-serif text-xl font-semibold text-foreground text-center mb-4">
          Follow Us
        </h2>
        <div className="flex justify-center gap-4">
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-card/50 rounded-xl px-6 py-3 border border-border/30 hover:bg-card/70 transition-colors"
          >
            <Instagram className="w-5 h-5 text-foreground" />
            <span className="text-foreground font-medium">Instagram</span>
          </a>
          <a
            href={contactInfo.rednote}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-card/50 rounded-xl px-6 py-3 border border-border/30 hover:bg-card/70 transition-colors"
          >
            <span className="text-xl">📕</span>
            <span className="text-foreground font-medium">Rednote</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
