import { motion } from "framer-motion";
import { Zap, Cpu, Lightbulb, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AMElectricite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            AM <span className="text-blue-400">Electricité</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto"
          >
            Électricien professionnel à Bourgoin-Jallieu – intervention en moins d’une semaine dans un rayon de 50 km.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-2xl shadow-xl" onClick={() => document.getElementById('devis')?.scrollIntoView({ behavior: 'smooth' })}>
              Demander un devis
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 px-8 py-6 text-lg rounded-2xl shadow-xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Appeler maintenant
            </Button>
            <Button variant="outline" className="border-indigo-300 text-indigo-100 px-8 py-6 text-lg rounded-2xl" onClick={() => document.getElementById('entreprise')?.scrollIntoView({ behavior: 'smooth' })}>
              Nos services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nos <span className="text-blue-400">expertises</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{ 
            icon: <Zap className="w-10 h-10 text-blue-400" />,
            title: "Installations électriques",
            text: "Installations complètes pour logements, bureaux et bâtiments professionnels."
          },{
            icon: <Cpu className="w-10 h-10 text-sky-300" />,
            title: "Rénovation électrique",
            text: "Mise aux normes et rénovation complète d'installations électriques existantes."
          },{
            icon: <Lightbulb className="w-10 h-10 text-white" />,
            title: "Tableaux électriques",
            text: "Installation et remplacement de tableaux électriques modernes et sécurisés."
          },{
            icon: <Zap className="w-10 h-10 text-red-400" />,
            title: "Dépannage urgence 24h/24",
            text: "Intervention en moins d’une semaine pour pannes, courts-circuits et urgences électriques."
          }].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl">
                <CardContent className="p-8">
                  {s.icon}
                  <h3 className="text-2xl font-semibold mt-4">{s.title}</h3>
                  <p className="text-indigo-200 mt-2">{s.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* A PROPOS */}
      <section id="entreprise" className="bg-black/20 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold mb-6">Pourquoi <span className="text-blue-400">AM Electricité</span> ?</h2>
          <p className="text-lg text-indigo-200 leading-relaxed">
            AM Electricité est une entreprise locale basée à Bourgoin-Jallieu, spécialisée dans les travaux d’électricité générale.
            Nous accompagnons les particuliers et les professionnels pour leurs projets d’installation, de rénovation et de dépannage électrique.
            Notre priorité est de fournir un travail soigné, conforme aux normes en vigueur, avec des délais clairs et un accompagnement humain à chaque étape du projet.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="devis" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-10">Demande de devis</h2>
        <form action="mailto:amelectricite38@gmail.com" method="POST" encType="text/plain" className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 space-y-6 text-left">
          <div>
            <label className="block text-sm mb-2">Nom / Prénom</label>
            <input type="text" name="Nom" placeholder="Votre nom" className="w-full p-3 rounded-xl bg-black/40 border border-white/20 text-white" />
          </div>
          <div>
            <label className="block text-sm mb-2">Téléphone</label>
            <input type="tel" name="Téléphone" placeholder="06 00 00 00 00" className="w-full p-3 rounded-xl bg-black/40 border border-white/20 text-white" />
          </div>
          <div>
            <label className="block text-sm mb-2">Ville</label>
            <input type="text" name="Ville" placeholder="Bourgoin-Jallieu" className="w-full p-3 rounded-xl bg-black/40 border border-white/20 text-white" />
          </div>
          <div>
            <label className="block text-sm mb-2">Votre besoin</label>
            <textarea name="Demande" placeholder="Expliquez brièvement votre demande" rows="4" className="w-full p-3 rounded-xl bg-black/40 border border-white/20 text-white" />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-2xl shadow-xl">
              Envoyer la demande
            </button>
          </div>
          <p className="text-xs text-indigo-200 text-center">
            Les informations transmises sont utilisées uniquement pour vous recontacter.
          </p>
        </form>
        <div id="contact" className="mt-12 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 text-xl">
            <Phone className="text-blue-400" />
            <span>06 35 30 74 28</span>
          </div>
          <a href="tel:0635307428">
            <Button className="bg-green-500 hover:bg-green-600 px-10 py-6 text-lg rounded-2xl shadow-xl">
              Appeler maintenant
            </Button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-indigo-300 text-sm">
        © {new Date().getFullYear()} AM Electricité — Tous droits réservés<br />
        Entreprise individuelle – AM Electricité – Bourgoin-Jallieu – Téléphone : 06 35 30 74 28
      </footer>
    </div>
  );
}
