import { createFileRoute } from "@tanstack/react-router";

import { ChimeraArtwork } from "@/components/brand/ChimeraArtwork";
import { ContactBrief } from "@/components/contact/ContactBrief";
import { PageHero } from "@/components/editorial/PageHero";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/contacto")({
  head: () =>
    pageMeta(
      "Contacto — Soul Labs",
      "Cuéntanos qué proceso está quitando tiempo o atención. No necesitas saber qué agente, producto o herramienta de IA quieres.",
      "/contacto",
    ),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="Contacto"
        tone="paper"
        title={
          <>
            Cuéntanos qué te está
            <br />
            <em>quitando tiempo.</em>
          </>
        }
        lead="No necesitas saber qué agente quieres. Empieza por contarnos el proceso, a quién afecta y qué criterio no debería desaparecer."
        art={
          <div className="contact-scene">
            <ChimeraArtwork variant="listening" eager breathe />
            <div aria-hidden="true" />
            <p>Escuchar antes de diseñar.</p>
          </div>
        }
        footer={
          <p className="page-hero__note">
            La conversación puede terminar en un agente, un producto, software a medida, una
            automatización o una recomendación de no usar IA.
          </p>
        }
      />

      <section className="content-section contact-section">
        <div className="shell">
          <ContactBrief />
        </div>
      </section>
    </>
  );
}
