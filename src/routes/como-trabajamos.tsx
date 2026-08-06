import { createFileRoute } from "@tanstack/react-router";

import { ChimeraArtwork } from "@/components/brand/ChimeraArtwork";
import { NextChapter } from "@/components/editorial/NextChapter";
import { PageHero } from "@/components/editorial/PageHero";
import { SectionHeading } from "@/components/editorial/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { methodSteps, siteRoutes } from "@/content/site";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/como-trabajamos")({
  head: () =>
    pageMeta(
      "Cómo trabajamos — Soul Labs",
      "Escuchamos, mapeamos, cocreamos, pilotamos y medimos sistemas de IA con límites claros y aprendizaje continuo.",
      "/como-trabajamos",
    ),
  component: MethodPage,
});

const gates = [
  {
    question: "¿Existe una necesidad clara?",
    ifNo: "Volvemos a escuchar. No convertimos una intuición vaga en un proyecto costoso.",
  },
  {
    question: "¿La IA aporta una ventaja real?",
    ifNo: "Proponemos una solución más simple o recomendamos no intervenir con IA.",
  },
  {
    question: "¿El riesgo puede gobernarse?",
    ifNo: "Reducimos el alcance, aumentamos supervisión o pausamos la hipótesis.",
  },
] as const;

function MethodPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Cómo trabajamos"
        tone="light"
        title={
          <>
            Avanzar no es correr.
            <br />
            <em>Es aprender con dirección.</em>
          </>
        }
        lead="Tratamos cada proyecto como una hipótesis que debe entenderse, probarse y gobernarse. La técnica importa; el contexto decide para qué usarla."
        art={
          <div className="leaping-scene">
            <div className="leaping-scene__path" aria-hidden="true" />
            <ChimeraArtwork variant="leaping" eager />
            <span>PROGRESO GUIADO / 02</span>
          </div>
        }
        footer={
          <p className="page-hero__note">
            Un método reversible: cada etapa produce una decisión, no una obligación de continuar.
          </p>
        }
      />

      <section className="content-section method-map">
        <div className="shell">
          <SectionHeading
            index="02—A"
            eyebrow="Ocho movimientos"
            title={
              <>
                Del agua quieta
                <br />
                <em>al aprendizaje en producción.</em>
              </>
            }
            description="El proceso se adapta al riesgo y al conocimiento disponible; la secuencia no elimina la necesidad de volver atrás."
          />
          <ol className="method-map__list">
            {methodSteps.map((step, index) => (
              <Reveal key={step.title} as="li" delay={(index % 4) * 0.04}>
                <span className="method-map__index">{step.index}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <span className="method-map__signal" aria-hidden="true" />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="decision-gates">
        <div className="shell">
          <SectionHeading
            index="02—B"
            eyebrow="Puertas de decisión"
            inverse
            title={
              <>
                Tres preguntas antes
                <br />
                <em>de aumentar la apuesta.</em>
              </>
            }
          />
          <div className="decision-gates__grid">
            {gates.map((gate, index) => (
              <article key={gate.question}>
                <span>GATE / 0{index + 1}</span>
                <h3>{gate.question}</h3>
                <p>
                  <strong>Si la respuesta es no:</strong> {gate.ifNo}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section pilot-section">
        <div className="shell pilot-section__grid">
          <div>
            <p className="chapter-label">
              <span aria-hidden="true">PILOTO</span>
              Pequeño, observable, reversible
            </p>
            <h2>Probar antes de prometer.</h2>
          </div>
          <div className="pilot-section__content">
            <p>
              Un piloto útil no es una demo pulida. Es una forma controlada de responder si la
              solución ayuda, qué excepciones aparecen, cuánto criterio requiere y qué condiciones
              necesita para operar con responsabilidad.
            </p>
            <dl>
              <div>
                <dt>Alcance</dt>
                <dd>Una tarea, un grupo o una ruta suficientemente concreta.</dd>
              </div>
              <div>
                <dt>Observación</dt>
                <dd>Calidad, utilidad, fallos, carga humana y efectos no previstos.</dd>
              </div>
              <div>
                <dt>Salida</dt>
                <dd>Escalar, ajustar, cambiar de enfoque o pausar con evidencia.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <NextChapter
        route={siteRoutes[3]!}
        prompt="El criterio detrás del método"
        title="Qué delegamos, qué supervisamos y qué no soltamos."
      />
    </>
  );
}
