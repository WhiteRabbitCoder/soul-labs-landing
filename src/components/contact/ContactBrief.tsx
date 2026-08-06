import { Check, Copy } from "lucide-react";
import { type FormEvent, useState } from "react";

type BriefData = {
  organization: string;
  process: string;
  outcome: string;
  people: string;
  humanBoundary: string;
  context: string;
};

const initialData: BriefData = {
  organization: "",
  process: "",
  outcome: "",
  people: "",
  humanBoundary: "",
  context: "",
};

function buildBrief(data: BriefData) {
  return [
    "DIAGNÓSTICO INICIAL — SOUL LABS",
    "",
    `Organización o equipo: ${data.organization || "Por definir"}`,
    `Proceso que consume tiempo o atención: ${data.process}`,
    `Cambio que sería valioso: ${data.outcome}`,
    `Personas involucradas o afectadas: ${data.people}`,
    `Criterio que debe permanecer humano: ${data.humanBoundary}`,
    `Contexto, herramientas o restricciones: ${data.context || "Por explorar"}`,
    "",
    "Punto de partida: diagnosticar el proceso antes de elegir una solución de IA.",
  ].join("\n");
}

export function ContactBrief() {
  const [data, setData] = useState(initialData);
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);

  const update = (field: keyof BriefData, value: string) => {
    setData((current) => ({ ...current, [field]: value }));
    setBrief("");
    setCopied(false);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBrief(buildBrief(data));
    setCopied(false);
  };

  const copyBrief = async () => {
    if (!brief) return;
    await navigator.clipboard.writeText(brief);
    setCopied(true);
  };

  return (
    <div className="contact-brief">
      <form onSubmit={onSubmit} className="contact-form">
        <div className="contact-form__intro">
          <span>01 / CONTEXTO</span>
          <h2>Empieza por el proceso, no por la herramienta.</h2>
          <p>Los campos marcados con “requerido” son necesarios para preparar el resumen.</p>
        </div>

        <div className="field-grid">
          <label className="field">
            <span>
              Organización o equipo <small>opcional</small>
            </span>
            <input
              name="organization"
              autoComplete="organization"
              value={data.organization}
              onChange={(event) => update("organization", event.target.value)}
              placeholder="Nombre o tipo de equipo"
            />
          </label>

          <label className="field field--wide">
            <span>
              ¿Qué proceso está quitando tiempo o atención? <small>requerido</small>
            </span>
            <textarea
              name="process"
              required
              rows={5}
              value={data.process}
              onChange={(event) => update("process", event.target.value)}
              placeholder="Cuéntanos cómo ocurre hoy, incluso si todavía está desordenado."
            />
          </label>

          <label className="field">
            <span>
              ¿Qué cambio sería valioso? <small>requerido</small>
            </span>
            <textarea
              name="outcome"
              required
              rows={4}
              value={data.outcome}
              onChange={(event) => update("outcome", event.target.value)}
              placeholder="Más contexto, mejor continuidad, una nueva capacidad…"
            />
          </label>

          <label className="field">
            <span>
              ¿Quiénes participan o reciben el resultado? <small>requerido</small>
            </span>
            <textarea
              name="people"
              required
              rows={4}
              value={data.people}
              onChange={(event) => update("people", event.target.value)}
              placeholder="Equipo, estudiantes, clientes, responsables…"
            />
          </label>

          <label className="field field--wide">
            <span>
              ¿Qué criterio debe seguir siendo humano? <small>requerido</small>
            </span>
            <textarea
              name="human-boundary"
              required
              rows={4}
              value={data.humanBoundary}
              onChange={(event) => update("humanBoundary", event.target.value)}
              placeholder="Decisiones sensibles, excepciones, aprobaciones, conversaciones…"
            />
          </label>

          <label className="field field--wide">
            <span>
              Contexto, herramientas o restricciones <small>opcional</small>
            </span>
            <textarea
              name="context"
              rows={4}
              value={data.context}
              onChange={(event) => update("context", event.target.value)}
              placeholder="Sistemas actuales, datos disponibles, privacidad, plazos o dudas."
            />
          </label>
        </div>

        <div className="contact-form__action">
          <button type="submit">Preparar mi diagnóstico</button>
          <p>
            Este prototipo no transmite datos. El destino del formulario está pendiente de
            confirmación; nada saldrá de tu navegador.
          </p>
        </div>
      </form>

      {brief ? (
        <section className="brief-result" aria-labelledby="brief-title">
          <div>
            <span>02 / RESUMEN PREPARADO</span>
            <h2 id="brief-title">Una conversación con mejor punto de partida.</h2>
            <p>
              Copia este diagnóstico. Cuando se confirme el canal de contacto, podrá enviarse sin
              volver a completar el proceso.
            </p>
          </div>
          <pre>{brief}</pre>
          <button type="button" onClick={copyBrief} className="copy-button">
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            {copied ? "Copiado" : "Copiar diagnóstico"}
          </button>
          <p className="sr-only" aria-live="polite">
            {copied ? "El diagnóstico se copió al portapapeles." : ""}
          </p>
        </section>
      ) : null}
    </div>
  );
}
