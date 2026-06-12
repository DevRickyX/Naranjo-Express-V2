import { type FC } from "react";
import Image from "next/image";
import { MdAutoAwesome, MdOutlineSecurity, MdOutlineSurroundSound } from "react-icons/md";
import { BoltIcon, BuildingOffice2Icon, Squares2X2Icon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

const featured = [
  {
    title: "Sonido, tarimas y luminarias",
    label: "Audio y eventos",
    image: "/proyecto-laminas-led.jpg",
    icon: MdOutlineSurroundSound,
    description:
      "Adecuamos auditorios, locales y eventos masivos con audio profesional, distribución de señal, montaje de tarima, luminarias y soporte técnico durante la operación.",
    scope: "Planeación del montaje, ubicación de equipos, conexión, prueba de señal y entrega operativa.",
  },
  {
    title: "CCTV y seguridad técnica",
    label: "Seguridad",
    image: "/cctv-instalacion.jpg",
    icon: MdOutlineSecurity,
    description:
      "Instalamos cámaras de seguridad, puntos técnicos, cableado, canalización y configuración de monitoreo para viviendas, oficinas, locales y zonas comunes.",
    scope: "Revisión de cobertura, montaje de cámaras, organización del cableado y configuración de visualización.",
  },
  {
    title: "Láminas PVC y WPC",
    label: "Revestimientos",
    image: "/proyecto-laminas-pvc.jpg",
    icon: Squares2X2Icon,
    description:
      "Transformamos paredes interiores con láminas decorativas tipo mármol, paneles WPC, cortes a medida, remates limpios y acabados resistentes para alto tráfico.",
    scope: "Medición, modulación, corte, fijación, esquineros, sellado y limpieza final del área.",
  },
  {
    title: "Espejos con cinta LED",
    label: "Acabados LED",
    image: "/proyecto-sonido-eventos.png",
    icon: MdAutoAwesome,
    description:
      "Diseñamos e instalamos espejos decorativos con iluminación perimetral, conexión eléctrica oculta y fijación segura para baños, locales y espacios comerciales.",
    scope: "Toma de medidas, preparación eléctrica, instalación del espejo y prueba de iluminación.",
  },
];

const compact = [
  {
    title: "Electricidad y puntos técnicos",
    icon: BoltIcon,
    description: "Tomas, interruptores, luminarias, canalización, organización de cableado y mantenimiento eléctrico básico.",
  },
  {
    title: "Adecuaciones interiores",
    icon: BuildingOffice2Icon,
    description: "Preparación de espacios, acabados, ajustes locativos y mejoras funcionales para locales y viviendas.",
  },
  {
    title: "Mantenimiento y obra blanca",
    icon: WrenchScrewdriverIcon,
    description: "Corrección de detalles, pintura, reparaciones, remates y entrega del espacio listo para uso.",
  },
];

const Services: FC = () => (
  <section id="services" className="bg-[#f4f4f4] py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[#ff7a18]">Servicios principales</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-black sm:text-5xl">
          Soluciones técnicas con acabado profesional.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Cada servicio se presenta como una solución completa: diagnóstico, instalación, prueba técnica y entrega final con el sello de Naranjo Express.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {featured.map((service) => (
          <article key={service.title} className="group overflow-hidden rounded-[2rem] bg-[#151515] shadow-2xl ring-1 ring-black/10">
            <div className="relative h-[23rem] w-full overflow-hidden bg-black sm:h-[28rem]">
              <Image src={service.image} alt={service.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute left-6 top-6 rounded-full bg-[#ff7a18] px-5 py-2 text-xs font-black uppercase tracking-wide text-black">
                {service.label}
              </span>
            </div>
            <div className="p-7 text-white sm:p-9">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff7a18] text-black">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-black tracking-tight">{service.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{service.description}</p>
              <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-sm font-semibold leading-7 text-slate-200">
                Alcance técnico: {service.scope}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {compact.map((service) => (
          <article key={service.title} className="rounded-[2rem] bg-white p-7 shadow-lg ring-1 ring-black/5">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-[#ff7a18]">
              <service.icon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-black text-black">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
