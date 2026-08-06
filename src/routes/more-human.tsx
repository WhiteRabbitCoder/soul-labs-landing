import { createFileRoute } from "@tanstack/react-router";

import { ChimeraArtwork } from "@/components/brand/ChimeraArtwork";
import { NextChapter } from "@/components/editorial/NextChapter";
import { PageHero } from "@/components/editorial/PageHero";
import { SectionHeading } from "@/components/editorial/SectionHeading";
import { humanPrinciples, siteRoutes } from "@/content/site";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/more-human")({
  head: () =>
    pageMeta(
      "More Human — Principios de IA de Soul Labs",
      "IA con humanos, no en vez de humanos: criterio, incertidumbre visible, supervisión proporcional y límites responsables.",
      "/more-human",
    ),
  component: MoreHumanPage,
});

function MoreHumanPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="More Human"
        tone="dark"
        title={
          <>
            La inteligencia también
            <br />
            <em>sabe cuándo preguntar.</em>
          </>
        }
        lead="No construimos sistemas para borrar a las personas del proceso. Los construimos para que tengan más capacidad, mejor contexto y tiempo para ejercer criterio."
        art={
          <div className="moon-scene">
            <div className="moon-scene__orbit" aria-hidden="true" />
            <ChimeraArtwork variant="contemplating" eager breathe />
            <span>CRITERIO / INCERTIDUMBRE</span>
          </div>
        }
        footer={<p className="manifesto-line">IA con humanos, no IA en vez de humanos.</p>}
      />

      <section className="manifesto-section">
        <div className="shell manifesto-section__grid">
          <p className="manifesto-section__label">Manifiesto / 03—A</p>
          <div className="manifesto-section__text">
            <p>
              Creemos en una inteligencia artificial que amplía la posibilidad humana sin apropiarse
              de su voz.
            </p>
            <p>
              Que puede trabajar rápido y, aun así, detenerse. Que reconoce la diferencia entre una
              coincidencia y una certeza. Que deja rastro, acepta corrección y sabe transferir una
              situación a alguien con contexto y responsabilidad.
            </p>
            <p>
              More Human no es una capa emocional sobre la tecnología. Es una forma de decidir qué
              construimos, cómo lo probamos y cuándo preferimos no automatizar.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section principles-section">
        <div className="shell">
          <SectionHeading
            index="03—B"
            eyebrow="Principios de diseño"
            title={
              <>
                Cinco compromisos
                <br />
                <em>para sistemas reales.</em>
              </>
            }
          />
          <ol className="principles-list">
            {humanPrinciples.map((principle) => (
              <li key={principle.index}>
                <span>{principle.index}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="delegation-section">
        <div className="shell">
          <SectionHeading
            index="03—C"
            eyebrow="Mapa de delegación"
            inverse
            title={
              <>
                La autonomía depende
                <br />
                <em>del impacto.</em>
              </>
            }
            description="No existe un único nivel correcto. Diseñamos una supervisión proporcional a la reversibilidad, la sensibilidad y la incertidumbre."
          />
          <div className="delegation-scale" role="list">
            <article role="listitem">
              <span>01 / Preparar</span>
              <h3>La IA propone</h3>
              <p>Busca, ordena, resume o crea una primera versión.</p>
              <strong>Revisión humana normal.</strong>
            </article>
            <article role="listitem">
              <span>02 / Recomendar</span>
              <h3>La IA orienta</h3>
              <p>Expone opciones, razones y nivel de confianza.</p>
              <strong>La persona decide.</strong>
            </article>
            <article role="listitem">
              <span>03 / Ejecutar</span>
              <h3>La IA actúa dentro de límites</h3>
              <p>Opera tareas acotadas, reversibles y observables.</p>
              <strong>Escalamiento disponible.</strong>
            </article>
            <article role="listitem">
              <span>04 / Reservar</span>
              <h3>La persona conserva el momento</h3>
              <p>Asume decisiones sensibles, ambiguas o de alto impacto.</p>
              <strong>No se delega por completo.</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section uncertainty-section">
        <div className="shell uncertainty-section__grid">
          <div>
            <p className="chapter-label">
              <span aria-hidden="true">PROTOCOLO</span>
              Cuando no sabe
            </p>
            <h2>La respuesta correcta puede ser pedir ayuda.</h2>
          </div>
          <ol>
            <li>
              <span>01</span>Reconocer que falta contexto o que la confianza es insuficiente.
            </li>
            <li>
              <span>02</span>Expresar el límite sin disfrazarlo de certeza.
            </li>
            <li>
              <span>03</span>Pedir la información estrictamente necesaria.
            </li>
            <li>
              <span>04</span>Escalar a una persona con el contexto ya recogido.
            </li>
          </ol>
        </div>
      </section>

      <NextChapter
        route={siteRoutes[4]!}
        prompt="Poner los principios a prueba"
        title="Un laboratorio donde también documentamos lo que falla."
      />
    </>
  );
}
