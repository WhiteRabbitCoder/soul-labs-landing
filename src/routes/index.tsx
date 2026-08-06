import { createFileRoute } from "@tanstack/react-router";

import { ChimeraArtwork } from "@/components/brand/ChimeraArtwork";
import { EvidenceStatus } from "@/components/editorial/EvidenceStatus";
import { NextChapter } from "@/components/editorial/NextChapter";
import { SectionHeading } from "@/components/editorial/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { InlineLink } from "@/components/site/InlineLink";
import { audienceSignals, capabilities, methodSteps, siteRoutes } from "@/content/site";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Soul Labs — IA aplicada, más tiempo para lo humano",
      "Creamos agentes, productos y sistemas de IA para pensar, crear y operar mejor sin retirar el criterio humano.",
    ),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="shell home-hero__grid">
          <div className="home-hero__copy">
            <p className="chapter-label">
              <span aria-hidden="true">00</span>
              Tecnología con alma
            </p>
            <h1 id="home-title">
              More
              <em>
                Human<span className="hero-title-period">.</span>
              </em>
            </h1>
            <p className="home-hero__definition">
              Creamos agentes, productos y sistemas de IA para pensar, crear y operar mejor,{" "}
              <strong>sin retirar el criterio humano.</strong>
            </p>
            <div className="home-hero__actions">
              <InlineLink to="/contacto">Cuéntanos qué te está quitando tiempo</InlineLink>
              <InlineLink to="/soluciones">Explorar lo que construimos</InlineLink>
            </div>
          </div>

          <div className="observation-scene" aria-label="Escena de escucha y diagnóstico">
            <div className="observation-scene__coordinates" aria-hidden="true">
              SL—OBS / 00
              <br />
              Escuchar antes de intervenir
            </div>
            <div className="observation-scene__halo" aria-hidden="true" />
            <ChimeraArtwork variant="listening" eager breathe />
            <div className="observation-scene__water" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <p>
              La primera capacidad no es responder.
              <br />
              Es saber qué observar.
            </p>
          </div>

          <div className="home-hero__sequence" aria-label="Secuencia de trabajo">
            <span>Observar</span>
            <i aria-hidden="true" />
            <span>Comprender</span>
            <i aria-hidden="true" />
            <span>Ampliar</span>
          </div>
        </div>
      </section>

      <section className="definition-band">
        <div className="shell definition-band__grid">
          <Reveal className="definition-band__statement">
            <p className="chapter-label chapter-label--inverse">
              <span aria-hidden="true">Tesis</span>
              IA aplicada
            </p>
            <h2>
              La inteligencia artificial no es solo una forma de automatizar.
              <em> Es una nueva herramienta de trabajo.</em>
            </h2>
          </Reveal>
          <Reveal className="definition-band__detail" delay={0.08}>
            <p>
              Puede ayudar a investigar, crear, aprender, coordinar y decidir. Nuestro trabajo es
              convertir esa capacidad en productos y sistemas útiles, transparentes y acordes con el
              riesgo real.
            </p>
            <p>
              A veces eso recupera horas. Otras veces mejora una conversación, organiza conocimiento
              o permite intentar algo que antes no era viable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="content-section capabilities-section">
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="Campo de trabajo"
            title={
              <>
                Construimos capacidad,
                <br />
                <em>no una promesa universal.</em>
              </>
            }
            description="Partimos del problema y elegimos la forma de IA que aporte valor sin esconder sus límites."
          />
          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 0.05}>
                <article className="capability-card">
                  <span className="capability-card__index">{capability.index}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <ul>
                    {capability.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="section-action">
            <InlineLink to="/soluciones">Ver capacidades y límites</InlineLink>
          </div>
        </div>
      </section>

      <section className="human-preview">
        <div className="shell human-preview__grid">
          <div className="human-preview__index" aria-hidden="true">
            03 / MORE HUMAN
          </div>
          <Reveal className="human-preview__quote">
            <p>“IA con humanos, no IA en vez de humanos.”</p>
          </Reveal>
          <div className="human-preview__copy">
            <h2>El criterio no es una fricción que debamos eliminar.</h2>
            <p>
              Diseñamos supervisión, trazabilidad, capacidad de pedir ayuda y límites acordes con el
              impacto. Una buena solución también puede concluir que algo no debería delegarse por
              completo.
            </p>
            <InlineLink to="/more-human" inverse>
              Leer nuestros principios
            </InlineLink>
          </div>
        </div>
      </section>

      <section className="content-section method-preview">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="Método"
            title={
              <>
                Antes del modelo,
                <br />
                <em>entendemos el trabajo.</em>
              </>
            }
            description="Un proceso de escucha, prueba y aprendizaje que permite avanzar sin fingir certeza."
          />
          <ol className="method-preview__steps">
            {methodSteps.slice(0, 4).map((step) => (
              <li key={step.title}>
                <span>{step.index}</span>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="section-action">
            <InlineLink to="/como-trabajamos">Recorrer el método completo</InlineLink>
          </div>
        </div>
      </section>

      <section className="content-section audience-section">
        <div className="shell audience-section__grid">
          <div>
            <p className="chapter-label">
              <span aria-hidden="true">Foco inicial</span>
              Dónde empezamos
            </p>
            <h2>Procesos ricos en conversación, conocimiento y decisiones repetidas.</h2>
          </div>
          <ul>
            {audienceSignals.map((signal, index) => (
              <li key={signal}>
                <span>0{index + 1}</span>
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-section evidence-preview">
        <div className="shell">
          <SectionHeading
            index="04"
            eyebrow="Laboratorio"
            title={
              <>
                Evidencia antes que
                <br />
                <em>teatro de cifras.</em>
              </>
            }
            description="Separamos lo que sabemos, lo que estamos probando y lo que todavía no podemos afirmar."
          />
          <div className="evidence-grid evidence-grid--home">
            <EvidenceStatus
              status="confirmed"
              label="Principio"
              title="Diagnóstico antes de solución"
            >
              El proceso y sus personas definen la intervención; la herramienta viene después.
            </EvidenceStatus>
            <EvidenceStatus
              status="testing"
              label="Trabajo de laboratorio"
              title="Aprendizaje en producción"
            >
              Los pilotos se observan para encontrar utilidad, excepciones y efectos que el diseño
              inicial no anticipó.
            </EvidenceStatus>
            <EvidenceStatus status="pending" label="Publicación" title="Resultados auditables">
              Las métricas y casos se publicarán cuando tengan contexto, alcance y una fuente
              verificable.
            </EvidenceStatus>
          </div>
        </div>
      </section>

      <NextChapter
        route={siteRoutes[1]!}
        prompt="Siguiente capítulo"
        title="De la posibilidad a una solución concreta."
      />
    </>
  );
}
