import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "sound-stage",
    src: "/proyecto-laminas-led.jpg",
    title: "Montaje para eventos y escenarios",
    description:
      "Audio, iluminación, tarima y soporte técnico para activaciones, auditorios y eventos con operación confiable.",
    tag: "Audio y eventos",
  },
  {
    id: "pvc-wpc",
    src: "/proyecto-laminas-pvc.jpg",
    title: "Revestimientos PVC/WPC",
    description:
      "Láminas decorativas instaladas en muro, cortes limpios, remates y acabado tipo mármol para espacios interiores.",
    tag: "Acabados interiores",
  },
  {
    id: "cctv",
    src: "/cctv-instalacion.jpg",
    title: "Circuito cerrado de televisión",
    description:
      "Cámaras, cableado, canalización, puntos técnicos y configuración de monitoreo local o remoto.",
    tag: "Seguridad",
  },
];

const Equipment: FC = () => (
  <section id="projects" className="relative overflow-hidden bg-[#070707] py-24 text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.24),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_28%)]" />
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#ff7a18]">Proyectos destacados</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
            Experiencias reales que hablan por nuestro trabajo.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Cada instalación reúne planificación, precisión técnica y acabados pensados para espacios comerciales, corporativos, residenciales y eventos.
          </p>
        </div>
        <Link
          href="/proyectos"
          className="inline-flex w-fit rounded-full border border-[#ff7a18]/60 px-6 py-3 text-sm font-bold text-[#ff7a18] transition hover:bg-[#ff7a18] hover:text-black"
        >
          Ver galería completa
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur"
          >
            <div className="relative h-[26rem] w-full overflow-hidden bg-black">
              <Image src={project.src} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-[#ff7a18] px-4 py-2 text-xs font-black uppercase tracking-wide text-black">
                {project.tag}
              </span>
            </div>
            <div className="p-7">
              <h3 className="text-2xl font-black">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-white/10 bg-[#111] p-5 shadow-2xl">
          <div className="mx-auto max-w-[360px] overflow-hidden rounded-[1.5rem] bg-black">
            <video className="aspect-[9/16] w-full object-cover" controls muted playsInline preload="metadata">
              <source src="/video-explicativo.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
          <div className="p-5 text-center lg:text-left">
            <h3 className="text-2xl font-black text-[#ff7a18]">Video explicativo</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Presentación vertical de servicios, procesos de instalación y soluciones ejecutadas por Naranjo Express.
            </p>
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-[#111] p-5 shadow-2xl">
          <div className="mx-auto max-w-[360px] overflow-hidden rounded-[1.5rem] bg-black">
            <video className="aspect-[9/16] w-full object-cover" controls playsInline preload="metadata">
              <source src="/video-trabajando.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
          <div className="p-5 text-center lg:text-left">
            <h3 className="text-2xl font-black text-[#ff7a18]">Trabajo en ejecución</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Registro de instalación real, personal técnico, herramientas y avances en obra.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
);
export default Equipment;
