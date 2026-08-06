import { createFileRoute } from "@tanstack/react-router";

import { ChimeraArtwork } from "@/components/brand/ChimeraArtwork";
import { EvidenceStatus } from "@/components/editorial/EvidenceStatus";
import { NextChapter } from "@/components/editorial/NextChapter";
import { PageHero } from "@/components/editorial/PageHero";
import { SectionHeading } from "@/components/editorial/SectionHeading";
import { siteRoutes } from "@/content/site";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/laboratorio")({
  head: () =>
    pageMeta(
      "Laboratorio — Soul Labs",
      "Hipótesis, pilotos y aprendizajes de IA aplicada, con estados editoriales honestos y sin métricas inventadas.",
      "/laboratorio",
    ),
  component: LaboratoryPage,
});

function LaboratoryPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Laboratorio"
        tone="orange"
        title={
          <>
            Lo que funcionó.
            <br />
            Lo que falló.
            <br />
            <em>Lo que aprendimos.</em>
          </>
        }
        lead="Un laboratorio no es una vitrina de certezas. Es el lugar donde convertimos preguntas en pruebas y las pruebas en decisiones documentadas."
        art={
          <div className="lab-scene">
            <span>SL / FIELD NOTE / 04</span>
            <div className="lab-scene__frame">
              <ChimeraArtwork variant="resting" eager />
            </div>
            <p>Observar también es producir conocimiento.</p>
          </div>
        }
        footer={
          <div className="hero-footnotes hero-footnotes--dark">
            <span>Sin logos prestados</span>
            <span>Sin cifras sin contexto</span>
            <span>Sin esconder los fallos</span>
          </div>
        }
      />

      <section className="content-section origin-section">
        <div className="shell origin-section__grid">
          <div>
            <p className="chapter-label">
              <span aria-hidden="true">04—A</span>
              Historia fundacional
            </p>
            <h2>La pregunta que abre el laboratorio.</h2>
          </div>
          <div className="origin-section__story">
            <p>
              Soul Labs parte de una convicción: la inteligencia artificial puede mejorar cómo
              trabajan las empresas cuando se diseña a favor de las personas que sostienen sus
              procesos.
            </p>
            <p>
              Eso exige algo más que integrar un modelo. Exige escuchar, encontrar un problema digno
              de resolver, probar con límites y aceptar que una hipótesis puede cambiar o detenerse.
            </p>
            <aside>
              <span>Estado editorial</span>
              <strong>
                La cronología detallada, los hitos fundacionales y el piloto inicial deben validarse
                con el equipo antes de publicarse como hechos.
              </strong>
            </aside>
          </div>
        </div>
      </section>

      <section className="evidence-register">
        <div className="shell">
          <SectionHeading
            index="04—B"
            eyebrow="Registro de evidencia"
            inverse
            title={
              <>
                Decir qué sabemos
                <br />
                <em>y cómo lo sabemos.</em>
              </>
            }
            description="Cada publicación debe indicar alcance, fuente, fecha y estado. Hasta entonces, el vacío se nombra."
          />
          <div className="evidence-grid">
            <EvidenceStatus status="confirmed" label="Tesis de marca" title="Tecnología con alma">
              El propósito, los principios More Human y el enfoque de diagnóstico están definidos en
              la estrategia de marca.
            </EvidenceStatus>
            <EvidenceStatus
              status="testing"
              label="Línea de trabajo"
              title="IA aplicada a conversaciones"
            >
              Educación y operaciones conversacionales son el foco inicial; las soluciones concretas
              se validan proceso por proceso.
            </EvidenceStatus>
            <EvidenceStatus status="pending" label="Caso publicable" title="Piloto inicial">
              Faltan contexto autorizado, alcance, responsables, metodología y resultados
              verificables para convertirlo en caso.
            </EvidenceStatus>
            <EvidenceStatus status="pending" label="Métrica" title="Horas recuperadas">
              No existe todavía una cifra documentada que pueda prometerse de forma general o
              atribuirse a un cliente.
            </EvidenceStatus>
            <EvidenceStatus status="pending" label="Prueba social" title="Testimonios y logos">
              No se publicarán hasta contar con autorización y evidencia de una relación real.
            </EvidenceStatus>
            <EvidenceStatus
              status="testing"
              label="Formato editorial"
              title="Notas del laboratorio"
            >
              El sitio queda preparado para registrar hipótesis, condiciones, fallos, decisiones y
              próximos pasos.
            </EvidenceStatus>
          </div>
        </div>
      </section>

      <section className="content-section experiment-template">
        <div className="shell">
          <SectionHeading
            index="04—C"
            eyebrow="Anatomía de un experimento"
            title={
              <>
                Una historia que se puede
                <br />
                <em>auditar, no solo admirar.</em>
              </>
            }
          />
          <div className="experiment-template__grid">
            <article>
              <span>01</span>
              <h3>Pregunta</h3>
              <p>Qué proceso o comportamiento queríamos comprender.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Hipótesis</h3>
              <p>Qué cambio esperábamos y bajo qué condiciones.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Prueba</h3>
              <p>Alcance, participantes, duración, datos y salvaguardas.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Observación</h3>
              <p>Resultados, excepciones y efectos no previstos.</p>
            </article>
            <article>
              <span>05</span>
              <h3>Decisión</h3>
              <p>Mejorar, escalar, cambiar de enfoque o pausar.</p>
            </article>
          </div>
        </div>
      </section>

      <NextChapter
        route={siteRoutes[5]!}
        prompt="Trae una pregunta al laboratorio"
        title="Cuéntanos el proceso antes de elegir la herramienta."
      />
    </>
  );
}
