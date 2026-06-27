# FINIA Madagascar - Site vitrine

Site vitrine pour FINIA Madagascar / PNIC, construit en React Next.js avec assets locaux, animations avancées, responsive desktop/mobile et variantes de template HTML.

## Stack principale

- React / Next.js 16
- Tailwind CSS configuré dans le projet
- Bootstrap inclus pour la variante HTML Bootstrap
- Lucide React pour les icônes
- Build statique exporté dans `out/`
- Netlify via `netlify.toml`

## Variantes incluses

- `app/` : version principale React Next.js, destinée au déploiement.
- `templates/html-bootstrap/` : variante HTML autonome avec Bootstrap CDN + CSS du site.
- `templates/tailwind/` : variante HTML autonome avec Tailwind CDN + CSS du site.

## Commandes

```bash
npm install
npm run dev
npm run build
```

Après `npm run build`, le site statique est généré dans `out/`.

## Déploiement Netlify

Le fichier `netlify.toml` configure :

- commande build : `npm run build`
- dossier publié : `out`
- Node.js 20

Déploiement manuel possible :

```bash
netlify link
netlify deploy --build
netlify deploy --build --prod
```

Le workflow `.github/workflows/netlify-deploy.yml` reconstruit le site et publie la production Netlify à chaque push sur `main`.
