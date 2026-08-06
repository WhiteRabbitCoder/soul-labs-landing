import { createFileRoute } from "@tanstack/react-router";

import { ChimeraArtwork } from "@/components/brand/ChimeraArtwork";
import { NextChapter } from "@/components/editorial/NextChapter";
import { PageHero } from "@/components/editorial/PageHero";
import { SectionHeading } from "@/components/editorial/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { InlineLink } from "@/components/site/InlineLink";
import { capabilities, siteRoutes } from "@/content/site";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/soluciones")({
  head: () =>
    pageMeta(
      "Soluciones de IA aplicada — Soul Labs",
      "Agentes, copilotos, productos, sistemas de conocimiento, software e inteligencia aplicada con límites y escalamiento humano.",
      "/soluciones",
    ),
  component: SolutionsPage,
});

const conversationalCapabilities = [
  {
    title: "Agendamiento y continuidad",
    text: "Coordinar próximos pasos, mantener contexto y evitar que una conversación valiosa se pierda entre canales.",
  },
  {
    title: "Entrevistas estructuradas",
    text: "Recoger información con una pauta clara, reconocer respuestas incompletas y derivar situaciones sensibles.",
  },
  {
    title: "Orientación personalizada",
    text: "Adaptar explicaciones y rutas usando contexto permitido, sin presentar recomendaciones como certezas.",
  },
  {
    title: "Trazabilidad y escalamiento",
    text: "Registrar qué ocurrió, conservar la posibilidad de revisión y transferir a una persona cuando corresponde.",
  },
] as const;

function SolutionsPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Soluciones"
        tone="paper"
        title={
          <>
            IA que se integra
            <br />
            <em>al trabajo real.</em>
          </>
        }
        lead="No empezamos por un agente, un modelo o una automatización. Empezamos por la capacidad que hace falta y por las personas que convivirán con ella."
        art={
          <div className="resting-scene">
            <span aria-hidden="true">OBS / COMPRENDER</span>
            <ChimeraArtwork variant="resting" eager breathe />
            <p>La pausa también es parte del sistema.</p>
          </div>
        }
        footer={
          <div className="hero-footnotes">
            <span>Herramientas antes que reemplazos</span>
            <span>Alcance antes que promesas</span>
            <span>Escalamiento antes que silencio</span>
          </div>
        }
      />

      <section className="content-section solution-capabilities">
        <div className="shell">
          <SectionHeading
            index="01—A"
            eyebrow="Capacidades"
            title={
              <>
                Cuatro formas de
                <br />
                <em>crear inteligencia útil.</em>
              </>
            }
            description="Pueden combinarse en una solución; ninguna debe imponerse si el proceso no la necesita."
          />
          <div className="solution-dossiers">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} className="solution-dossier" delay={index * 0.04}>
                <div className="solution-dossier__number">SL / {capability.index}</div>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
                <ul>
                  {capability.examples.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="conversation-field">
        <div className="shell">
          <SectionHeading
            index="01—B"
            eyebrow="Especialidad inicial"
            inverse
            title={
              <>
                Conversaciones de alto volumen,
                <br />
                <em>sin perder el hilo humano.</em>
              </>
            }
            description="Un territorio especialmente relevante para educación, academias, bootcamps y operaciones que viven entre preguntas, seguimientos y decisiones repetidas."
          />
          <div className="conversation-grid">
            {conversationalCapabilities.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section boundary-section">
        <div className="shell">
          <SectionHeading
            index="01—C"
            eyebrow="Límites de diseño"
            title={
              <>
                Resolver bien también significa
                <br />
                <em>saber cuándo detenerse.</em>
              </>
            }
          />
          <div className="boundary-table">
            <div className="boundary-table__column">
              <p className="boundary-table__label">La IA puede asumir</p>
              <ul>
                <li>Trabajo repetible con reglas y contexto suficiente.</li>
                <li>Búsqueda, síntesis y preparación de opciones.</li>
                <li>Continuidad, clasificación y coordinación.</li>
                <li>Primeras versiones que una persona puede revisar.</li>
              </ul>
            </div>
            <div className="boundary-table__column boundary-table__column--human">
              <p className="boundary-table__label">La persona conserva</p>
              <ul>
                <li>Decisiones de impacto alto o difícilmente reversibles.</li>
                <li>Excepciones donde faltan contexto o precedentes.</li>
                <li>Conversaciones sensibles que requieren presencia.</li>
                <li>Responsabilidad, consentimiento y criterio final.</li>
              </ul>
            </div>
          </div>
          <div className="section-action section-action--split">
            <p>Si una automatización no conviene, lo diremos.</p>
            <InlineLink to="/more-human">Ver los principios More Human</InlineLink>
          </div>
        </div>
      </section>

      <section className="outcomes-strip">
        <div className="shell outcomes-strip__grid">
          <div>
            <span>Empresa</span>
            <strong>Continuidad y procesos observables.</strong>
          </div>
          <div>
            <span>Equipo</span>
            <strong>Más capacidad y menos trabajo mecánico.</strong>
          </div>
          <div>
            <span>Persona atendida</span>
            <strong>Respuestas útiles y salida humana disponible.</strong>
          </div>
        </div>
      </section>

      <NextChapter
        route={siteRoutes[2]!}
        prompt="Cómo lo hacemos"
        title="Del problema observado a un piloto responsable."
      />
    </>
  );
}
