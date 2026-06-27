import {
  Activity,
  ArrowRight,
  Bot,
  Brain,
  BrainCircuit,
  DatabaseZap,
  GraduationCap,
  Handshake,
  Landmark,
  Lightbulb,
  LockKeyhole,
  Menu,
  MessageSquareText,
  Network,
  Radar,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import SiteInteractions from "../components/SiteInteractions";

export default function HomePage() {
  return (
    <div className="site-shell">
      <SiteInteractions />

      <header className="navbar" data-nav>
        <a className="brand" href="#accueil" aria-label="FINIA Madagascar - Accueil">
          <img src="/images/image1.jpeg" alt="Logo FINIA Madagascar" />
          <span>
            <strong>FINIA</strong>
            <small>Madagascar</small>
          </span>
        </a>

        <button className="nav-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false" data-menu-button>
          <Menu aria-hidden="true" />
        </button>

        <nav className="nav-links" data-menu>
          <a href="#mission">Mission</a>
          <a href="#programmes">Programmes</a>
          <a href="#pnic">PNIC</a>
          <a href="#impact">Impact</a>
          <a className="nav-cta" href="#contact">
            <span>Rejoindre</span>
            <ArrowRight aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-bg" aria-hidden="true"></div>
          <div className="hero-grid">
            <div className="hero-copy reveal reveal-left">
              <p className="eyebrow">Connecter · Innover · Transformer</p>
              <h1>FINIA Madagascar</h1>
              <p className="hero-lead">
                Une vitrine nationale pour fédérer l’innovation numérique, l’intelligence artificielle, la data et la
                cybersécurité au service d’un Madagascar plus agile, plus souverain et mieux connecté à ses citoyens.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#programmes">
                  <span>Découvrir les programmes</span>
                  <Rocket aria-hidden="true" />
                </a>
                <a className="btn btn-secondary" href="#pnic">
                  <span>Explorer la PNIC</span>
                  <Radar aria-hidden="true" />
                </a>
              </div>

              <dl className="hero-metrics" aria-label="Indicateurs clés du programme">
                <div>
                  <dt className="count-up" data-count="27">
                    27
                  </dt>
                  <dd>ministères ciblés</dd>
                </div>
                <div>
                  <dt className="count-up" data-count="3000" data-format="space">
                    3 000
                  </dt>
                  <dd>agents à former</dd>
                </div>
                <div>
                  <dt className="count-up" data-count="300">
                    300
                  </dt>
                  <dd>sessions prévues</dd>
                </div>
              </dl>
            </div>

            <div className="hero-visual reveal reveal-right">
              <figure className="poster-frame">
                <img src="/images/image4.jpeg" alt="Visuel FINIA Madagascar avec carte numérique de Madagascar" />
              </figure>
              <div className="signal-card signal-one" aria-hidden="true">
                <BrainCircuit />
                <span>IA publique</span>
              </div>
              <div className="signal-card signal-two" aria-hidden="true">
                <ShieldCheck />
                <span>Cyber résilience</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-strip" id="mission" aria-label="Domaines d'action">
          <article className="reveal reveal-rise">
            <Brain aria-hidden="true" />
            <span>Intelligence artificielle</span>
          </article>
          <article className="reveal reveal-rise">
            <DatabaseZap aria-hidden="true" />
            <span>Numérique & data</span>
          </article>
          <article className="reveal reveal-rise">
            <Lightbulb aria-hidden="true" />
            <span>Innovation & recherche</span>
          </article>
          <article className="reveal reveal-rise">
            <GraduationCap aria-hidden="true" />
            <span>Formation & compétences</span>
          </article>
          <article className="reveal reveal-rise">
            <Handshake aria-hidden="true" />
            <span>Collaboration nationale</span>
          </article>
        </section>

        <section className="section split-section" id="programmes">
          <div className="section-kicker reveal reveal-rise">Programme national</div>
          <div className="section-heading">
            <h2 className="reveal reveal-left">Former le capital humain, digitaliser les institutions, accélérer le développement.</h2>
            <p className="reveal reveal-right">
              Le projet xN et la PNIC se complètent : l’un renforce les compétences numériques des institutions
              publiques, l’autre transforme les données citoyennes agrégées en signaux utiles à la décision.
            </p>
          </div>

          <div className="program-grid">
            <article className="program-card reveal reveal-left">
              <span className="card-number">01</span>
              <Landmark aria-hidden="true" />
              <h3>Renforcement des capacités numériques</h3>
              <p>
                Former les cadres et techniciens publics à l’IA, la data, la cybersécurité, l’automatisation et les
                tableaux de bord décisionnels.
              </p>
              <ul>
                <li>27 ministères couverts</li>
                <li>3 000 agents publics formés</li>
                <li>300 sessions de 5 jours</li>
              </ul>
            </article>

            <article className="program-card highlight reveal reveal-zoom">
              <span className="card-number">02</span>
              <Activity aria-hidden="true" />
              <h3>PNIC, intelligence citoyenne</h3>
              <p>
                Mesurer les préoccupations publiques, détecter les tendances émergentes et suivre l’impact des
                politiques grâce au NLP, au Big Data et aux agents IA.
              </p>
              <ul>
                <li>Opinion agrégée en temps réel</li>
                <li>Cartographie régionale des signaux</li>
                <li>Recommandations assistées et auditables</li>
              </ul>
            </article>

            <article className="program-card reveal reveal-right">
              <span className="card-number">03</span>
              <Network aria-hidden="true" />
              <h3>Écosystème d’innovation</h3>
              <p>
                Connecter les étudiants, chercheurs, entrepreneurs, institutions et startups autour d’une feuille de
                route commune pour Madagascar.
              </p>
              <ul>
                <li>Fédérer les talents et organisations</li>
                <li>Accompagner les porteurs de projets</li>
                <li>Créer des passerelles public-privé</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="showcase">
          <img
            className="reveal reveal-left reveal-tilt"
            src="/images/image3.jpeg"
            alt="Bannière FINIA Madagascar sur l'innovation numérique et l'intelligence artificielle"
          />
          <div className="reveal reveal-right">
            <p className="eyebrow">Une identité visuelle forte</p>
            <h2>Un mouvement national, pas seulement une plateforme.</h2>
            <p>
              Le site reprend l’énergie des maquettes : carte connectée, lignes lumineuses, visuels humains,
              iconographie tech et tonalité institutionnelle ambitieuse.
            </p>
          </div>
        </section>

        <section className="section pnic-section" id="pnic">
          <div className="section-kicker reveal reveal-rise">Projet phare</div>
          <div className="section-heading">
            <h2 className="reveal reveal-left">PNIC : un radar stratégique pour comprendre l’opinion publique.</h2>
            <p className="reveal reveal-right">
              La Plateforme Nationale d’Intelligence Citoyenne analyse des tendances agrégées issues de sources
              publiques et volontaires pour éclairer les politiques publiques sans ciblage individuel.
            </p>
          </div>

          <div className="pnic-grid">
            <div className="dashboard reveal reveal-left" aria-label="Exemple de tableau de bord PNIC">
              <div className="dashboard-top">
                <span>Tableau de bord national</span>
                <strong>Analyse du jour</strong>
              </div>
              <div className="sentiment-row">
                <article>
                  <span>Favorable</span>
                  <strong>61%</strong>
                  <div className="bar">
                    <span style={{ width: "61%" }}></span>
                  </div>
                </article>
                <article>
                  <span>Défavorable</span>
                  <strong>27%</strong>
                  <div className="bar danger">
                    <span style={{ width: "27%" }}></span>
                  </div>
                </article>
                <article>
                  <span>Neutre</span>
                  <strong>12%</strong>
                  <div className="bar neutral">
                    <span style={{ width: "12%" }}></span>
                  </div>
                </article>
              </div>
              <div className="map-panel">
                <div className="madagascar-shape" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <ul>
                  <li>
                    <strong>Analamanga</strong>
                    <span>volume élevé</span>
                  </li>
                  <li>
                    <strong>Atsinanana</strong>
                    <span>signal négatif</span>
                  </li>
                  <li>
                    <strong>Boeny</strong>
                    <span>attente d’information</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="feature-list">
              <article className="feature-item reveal reveal-right">
                <MessageSquareText aria-hidden="true" />
                <div>
                  <h3>Écoute multi-sources</h3>
                  <p>Réseaux sociaux publics, médias, blogs, forums, commentaires et enquêtes numériques.</p>
                </div>
              </article>
              <article className="feature-item reveal reveal-right">
                <Sparkles aria-hidden="true" />
                <div>
                  <h3>IA et NLP multilingues</h3>
                  <p>Sentiment, posture, extraction de thèmes, résumé automatique et détection de pics inhabituels.</p>
                </div>
              </article>
              <article className="feature-item reveal reveal-right">
                <Bot aria-hidden="true" />
                <div>
                  <h3>Agent IA décisionnel</h3>
                  <p>Rapports quotidiens, alertes intelligentes, questions-réponses et recommandations prudentes.</p>
                </div>
              </article>
              <article className="feature-item reveal reveal-right">
                <LockKeyhole aria-hidden="true" />
                <div>
                  <h3>Éthique et confidentialité</h3>
                  <p>Agrégation, anonymisation, seuils statistiques et absence de profilage individuel.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section impact-section" id="impact">
          <div className="section-kicker reveal reveal-rise">Impact attendu</div>
          <div className="impact-grid">
            <div className="reveal reveal-left">
              <h2>Des institutions plus rapides, plus sûres et mieux informées.</h2>
              <p>
                La combinaison formation + plateforme d’intelligence citoyenne permet de moderniser les méthodes de
                travail, sécuriser les pratiques numériques et améliorer la prise de décision basée sur les données.
              </p>
            </div>

            <div className="impact-cards">
              <article className="impact-card reveal reveal-zoom">
                <strong>4,5 Md Ar</strong>
                <span>budget global indicatif du programme de renforcement</span>
              </article>
              <article className="impact-card reveal reveal-zoom">
                <strong>24/7</strong>
                <span>veille analytique, alertes et suivi des signaux citoyens</span>
              </article>
              <article className="impact-card reveal reveal-zoom">
                <strong>100%</strong>
                <span>approche agrégée, sans ciblage individuel des citoyens</span>
              </article>
              <article className="impact-card reveal reveal-zoom">
                <strong>HA</strong>
                <span>architecture préparée pour haute disponibilité et audit</span>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="reveal reveal-left">
            <p className="eyebrow">Rejoignez le mouvement</p>
            <h2>Connectons nos idées. Innovons ensemble. Transformons Madagascar.</h2>
            <p>
              FINIA Madagascar rassemble institutions, talents, chercheurs, entrepreneurs, enseignants et passionnés de
              tech autour d’un écosystème numérique fort, inclusif et durable.
            </p>
          </div>
          <a className="btn btn-primary reveal reveal-right reveal-zoom" href="mailto:contact@finia.mg">
            <span>Devenir partenaire</span>
            <Send aria-hidden="true" />
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src="/images/image1.jpeg" alt="Logo FINIA Madagascar" />
          <p>Fédération de l’Innovation Numérique et de l’Intelligence Artificielle.</p>
        </div>
        <div>
          <strong>Axes</strong>
          <a href="#programmes">Formation numérique</a>
          <a href="#pnic">PNIC</a>
          <a href="#impact">Impact national</a>
        </div>
        <div>
          <strong>Message</strong>
          <p>Innover aujourd’hui, construire demain.</p>
        </div>
      </footer>
    </div>
  );
}
