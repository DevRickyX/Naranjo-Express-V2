import { type FC } from "react";
import Image from "next/image";
import { scrollIntoViewWithOffset } from "@/utils/dom";

const Hero: FC = () => (
  <section id="home" className="relative isolate overflow-hidden bg-[#050505] text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,24,0.28),transparent_30%),radial-gradient(circle_at_85%_0%,rgba(255,255,255,0.12),transparent_28%)]" />
    <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(135deg,transparent_0%,transparent_45%,rgba(255,122,24,0.28)_45%,rgba(255,122,24,0.28)_47%,transparent_47%,transparent_58%,rgba(255,122,24,0.2)_58%,rgba(255,122,24,0.2)_60%,transparent_60%)]" />
    <div className="relative mx-auto grid min-h-[86vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_0.8fr] lg:px-8">
      <div>
        <div className="mb-8 flex items-center gap-4">
          <Image src="/logo-naranjo-express.png" alt="Naranjo Express" width={120} height={120} className="h-24 w-auto object-contain" priority />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.45em] text-[#ff7a18]">Naranjo Express</p>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-300">Construimos calidad que perdura</p>
          </div>
        </div>
        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Servicios técnicos, acabados y montajes para espacios que deben funcionar y verse bien.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          Instalamos sonido para auditorios y eventos, CCTV, láminas PVC/WPC, espejos con cinta LED, luminarias, tarimas, electricidad, obra blanca y mantenimiento integral.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => {
              const services = document.getElementById("services");
              if (services) scrollIntoViewWithOffset(services, 120);
            }}
            className="rounded-full bg-[#ff7a18] px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_34px_rgba(255,122,24,0.45)] transition hover:scale-105"
            type="button"
          >
            Ver servicios
          </button>
          <button
            onClick={() => {
              const form = document.getElementById("form");
              if (form) scrollIntoViewWithOffset(form, 120);
            }}
            className="rounded-full border border-white/20 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:border-[#ff7a18] hover:text-[#ff7a18]"
            type="button"
          >
            Cotizar proyecto
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-5 rounded-[2.5rem] bg-[#ff7a18]/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
          <Image src="/proyecto-laminas-led.jpg" alt="Proyecto destacado Naranjo Express" width={900} height={620} className="h-[520px] w-full rounded-[2rem] object-cover" priority />
          <div className="absolute inset-x-8 bottom-8 rounded-3xl bg-black/75 p-5 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff7a18]">Proyectos destacados</p>
            <p className="mt-2 text-xl font-black">Experiencias reales que reflejan nuestro compromiso con la calidad, la innovación y la excelencia en cada instalación.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
