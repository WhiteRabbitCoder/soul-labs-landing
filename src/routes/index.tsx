import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/soul/Navbar";
import { Hero } from "@/components/soul/Hero";
import { QueHacemos } from "@/components/soul/QueHacemos";
import { Problema } from "@/components/soul/Problema";
import { Manifiesto } from "@/components/soul/Manifiesto";
import { Capacidades } from "@/components/soul/Capacidades";
import { Diferenciales } from "@/components/soul/Diferenciales";
import { Casos, Metodo } from "@/components/soul/CasosMetodo";
import { Contacto, Footer } from "@/components/soul/ContactoFooter";

const title = "Soul Labs — Más tiempo para lo humano";
const description =
  "Software factory y laboratorio de IA aplicada: agentes, automatización y productos que recuperan horas de tu equipo sin retirar el criterio humano.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QueHacemos />
        <Problema />
        <Manifiesto />
        <Capacidades />
        <Diferenciales />
        <Casos />
        <Metodo />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
