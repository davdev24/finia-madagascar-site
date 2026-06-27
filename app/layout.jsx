import "./globals.css";

export const metadata = {
  title: "FINIA Madagascar | Innovation numérique, IA, Data & Cybersec",
  description:
    "FINIA Madagascar fédère l'innovation numérique, l'intelligence artificielle, la data et la cybersécurité pour accélérer la transformation publique et citoyenne.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
