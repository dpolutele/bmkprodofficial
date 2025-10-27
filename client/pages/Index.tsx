import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { ChevronDown, Music, Zap, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-background" />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-50" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl animate-float opacity-40" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-40" />

      {/* Radial gradient grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(122, 0, 255, 0.05) 25%, rgba(122, 0, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(122, 0, 255, 0.05) 75%, rgba(122, 0, 255, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(122, 0, 255, 0.05) 25%, rgba(122, 0, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(122, 0, 255, 0.05) 75%, rgba(122, 0, 255, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Light rays effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-full bg-gradient-to-b from-transparent via-secondary/30 to-transparent opacity-30 animate-pulse"
            style={{
              left: `${25 + i * 25}%`,
              animation: `pulse 3s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const FloatingCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
      <div className="relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
        <Icon className="w-8 h-8 text-primary mb-3" />
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatedBackground />

      {/* Main content */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full animate-glow-pulse">
              <Zap className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-primary">
                Beatmakers • DJs • Vibes
              </span>
            </div>

            {/* Main heading */}
            <div className="relative mb-6 flex flex-col items-center">
              {/* Logo image */}
              <img
                src="/logo.png"
                alt="Logo BMKPROD"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-50 absolute -top-10"
              />
              <h1 className="relative text-5xl sm:text-7xl lg:text-6xl font-bold leading-tight mt-60">
                <span className="block text-foreground">BMKPROD</span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  NEWCAL
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Beatmakers, DJs & Vibes du Pacifique.
            </p>
            <p className="text-sm text-muted-foreground mb-12 max-w-xl mx-auto">
              Découvrez nos sons inspirés des nombreux styles musicaux du Pacifique.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/team"
                className="group px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-neon-glow inline-flex items-center justify-center gap-2"
              >
                Notre Équipe
                <Sparkles className="w-4 h-4 group-hover:animate-spin" />
              </Link>
              <Link
                to="/events"
                className="px-8 py-3 bg-primary/20 border border-primary/40 text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary/30 hover:shadow-neon-purple inline-flex items-center justify-center gap-2"
              >
                <Music className="w-4 h-4" />
                Nos Événements
              </Link>
              <Link
                to="/media"
                className="px-8 py-3 bg-secondary/20 border border-secondary/40 text-secondary font-semibold rounded-lg transition-all duration-300 hover:bg-secondary/30 hover:shadow-neon-violet inline-flex items-center justify-center gap-2"
              >
                Nos derniers sons
              </Link>
            </div>

            {/* Scroll indicator */}
            <div
              className="inline-flex flex-col items-center gap-2 text-muted-foreground animate-bounce"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              <span className="text-xs uppercase tracking-widest">
                Scroll pour explorer
              </span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ce que Nous Apportons au Son
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FloatingCard
                icon={Music}
                title="Beats Originaux"
                description="Des beats frais et innovants créés par des beatmakers talentueux qui repoussent les limites"
              />
              <FloatingCard
                icon={Zap}
                title="Énergie Brute"
                description="Des performances et des mixes électrisants qui font bouger les corps et inspirent les âmes"
              />
              <FloatingCard
                icon={Sparkles}
                title="Vibes du Pacifique"
                description="Un son unique enraciné dans la culture locale avec des influences mondiales"
              />
            </div>
          </div>
        </section>

        {/* Upcoming Events Preview */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Dernières Nouvelles
              </h2>
              <p className="text-muted-foreground">
                Restez à l'affût des événements à venir et du contenu frais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center overflow-hidden relative">
                  <Music className="w-16 h-16 text-primary/30 group-hover:text-primary/60 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Dernier Mix</h3>
                  <p className="text-muted-foreground text-sm">
                    Nouveaux titres et pistes exclusives de notre collectif
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-secondary/50 transition-all duration-300 group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center overflow-hidden relative">
                  <Sparkles className="w-16 h-16 text-secondary/30 group-hover:text-secondary/60 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Prochain Événement</h3>
                  <p className="text-muted-foreground text-sm">
                    Rejoignez-nous pour une nuit inoubliable de musique pure et
                    d'énergie
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold"
              >
                Voir tous les événements →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Prêt à Rejoindre le Son?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connectez-vous avec nous sur les réseaux sociaux, contactez-nous
              pour des collaborations, ou vibrez simplement avec la communauté.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-neon-glow items-center gap-2"
            >
              Nous Contacter
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-border py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-foreground mb-4">
                  BMKPROD NEWCAL
                </h3>
                <p className="text-muted-foreground text-sm">
                  Beatmakers, DJs & Vibes du Pacifique
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Naviguer</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/team"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Équipe
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/events"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Événements
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Contenu</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      to="/media"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Médias
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Légal</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Confidentialité
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
              <p>&copy; 2025 BMKPROD NEWCAL. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
