import Header from "@/components/Header";
import TeamCard from "@/components/TeamCard";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  color: "purple" | "violet" | "blue";
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Maki",
    role: "DJ/Beatmaker",
    description:
      "Anciennement Makside, l'un des DJs les plus anciens de la team avec plus de 10 ans dans le beatmaking. Redoutable dans son style tropical dem et zouky.",
    image: "/images/maki.jpeg",
    color: "purple",
  },
  {
    id: 2,
    name: "Minty",
    role: "Beatmaker",
    description:
      "Beatmaker depuis 2021, producteur polyvalent qui mélange la quasi totalité des styles musicaux appréciés en Nouvelle-Calédonie.",
    image: "/images/minty.jpeg",
    color: "violet",
  },
  {
    id: 3,
    name: "Reanim",
    role: "Beatmaker",
    description:
      "Jeune beatmaker arrivé il y a 2 ans seulement. Prometteur et en constante évolution.",
    image: "/images/reanim.jpg",
    color: "blue",
  },
  {
    id: 4,
    name: "Seneo",
    role: "Artiste",
    description:
      "Artiste compositeur producteur. Créateur complet avec une vision musicale unique.",
    image: "/images/pena.jpeg",
    color: "purple",
  },
  {
    id: 5,
    name: "Rydzer",
    role: "Beatmaker",
    description:
      "Le ninja qui fait des sons chills. Expert dans la création de beats détendus et fluides.",
    image: "/images/yael.jpeg",
    color: "violet",
  },
  {
    id: 6,
    name: "Kleg",
    role: "Social Manager",
    description:
      "S'occupe des réseaux sociaux et de la communication de BMKPROD NEWCAL. Connecte la team avec la communauté.",
    image: "/images/kleg.jpeg",
    color: "blue",
  },
  {
    id: 7,
    name: "SpiderSharkukulos",
    role: "Mascotte",
    description:
      "La mascotte officielle de BMKPROD NEWCAL. Apporte la joie et l'énergie à chaque événement.",
    image: "/images/spider.jpeg",
    color: "purple",
  },
  {
    id: 8,
    name: "Tovai",
    role: "Daredevil",
    description:
      "Dardevil de la team. Toujours prêt à prendre des risques créatifs et surprendre le public.",
    image: "/images/tovai.jpg",
    color: "violet",
  },
];

export default function Team() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 bg-background" />

      {/* Animated gradient orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-50 pointer-events-none" />
      <div className="fixed bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl animate-float opacity-40 pointer-events-none" />

      <div className="relative z-10">
        <Header />

        {/* Team Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 pt-32">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Notre Équipe</h1>
              <p className="text-lg text-muted-foreground mb-2">
                Rencontrez les talenteux Beatmakers et DJs de BMKPROD NEWCAL
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  image={member.image}
                  color={member.color}
                />
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-24 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Ensemble, On Crée la Magie</h2>
              <p className="text-muted-foreground mb-8">
                Chaque membre de BMKPROD NEWCAL apporte son talent unique et sa passion pour la musique. 
                Ensemble, nous créons des expériences sonores inoubliables qui célèbrent la richesse musicale du Pacifique.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-border py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
            <p>&copy; 2025 BMKPROD NEWCAL. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
