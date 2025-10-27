import Header from "@/components/Header";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 bg-background" />

      {/* Animated gradient orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-50 pointer-events-none" />
      <div className="fixed bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl animate-float opacity-40 pointer-events-none" />

      <div className="relative z-10">
        <Header />

        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Notre Équipe
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Cette page arrive bientôt. Continuez à me demander pour qu'elle
              soit remplie avec nos membres d'équipe, leurs profils, rôles et
              histoires.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Demandez-moi de créer des cartes de membres d'équipe avec des
              photos, des noms de scène, des rôles, des bios et des influences
              musicales.
            </p>
            <Link
              to="/"
              className="inline-flex px-6 py-2 bg-primary text-white font-semibold rounded-lg transition-all hover:shadow-neon-glow"
            >
              Retour à l'Accueil
            </Link>
          </div>
        </section>

        <footer className="relative border-t border-border py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
            <p>&copy; 2025 BMKPROD NEWCAL. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
