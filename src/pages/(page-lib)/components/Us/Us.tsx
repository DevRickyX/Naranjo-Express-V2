import { type FC } from "react";

const items = [
  ["Planeación", "Revisamos el espacio, definimos puntos técnicos, materiales, medidas y alcance antes de instalar."],
  ["Instalación", "Ejecutamos cableado, fijación, cortes, montaje y pruebas con personal técnico según el servicio."],
  ["Entrega", "Validamos funcionamiento, terminaciones, seguridad y dejamos recomendaciones de uso o mantenimiento."],
];

const Nosotros: FC = () => (
  <section id="us" className="bg-black py-20 text-white">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#ff7a18]">Método de trabajo</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Calidad que se entiende desde la cotización hasta la entrega.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Naranjo Express combina servicios de construcción, mantenimiento, tecnología, seguridad, sonido y acabados para que el cliente encuentre varias soluciones en un solo proveedor.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map(([title, text], index) => (
            <article key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
              <span className="text-5xl font-black text-[#ff7a18]">0{index + 1}</span>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Nosotros;
