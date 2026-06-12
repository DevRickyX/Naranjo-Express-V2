import { type NextPageWithLayout } from "@/pages/_app.page";
import { Footer, Navbar } from "@/pages/(page-lib)/layouts";
import Head from "next/head";
import Image from "next/image";

const gallery = [
  {
    title: "Montaje técnico para eventos",
    image: "/proyecto-laminas-led.jpg",
    service: "Sonido, tarimas y luminarias",
    description:
      "Diseño del montaje, ubicación de equipos, instalación de tarima, conexión de audio, pruebas de señal y apoyo técnico para operación en vivo.",
  },
  {
    title: "Revestimiento decorativo en muros",
    image: "/proyecto-laminas-pvc.jpg",
    service: "Láminas PVC y WPC",
    description:
      "Instalación de láminas tipo mármol en paredes interiores, cortes a medida, remates laterales, fijación estable y acabado limpio para zonas comerciales o residenciales.",
  },
  {
    title: "Sistema de vigilancia y monitoreo",
    image: "/cctv-instalacion.jpg",
    service: "CCTV y seguridad",
    description:
      "Montaje de cámaras, canalización, cableado estructurado, ubicación de puntos técnicos y configuración de monitoreo para control local o remoto.",
  },
  {
    title: "Espejos decorativos iluminados",
    image: "/proyecto-sonido-eventos.png",
    service: "Espejos con cinta LED",
    description:
      "Instalación de espejo decorativo con iluminación perimetral, conexión eléctrica oculta, fijación segura y acabado moderno para baños, locales y zonas sociales.",
  },
  {
    title: "Carpintería y adecuaciones",
    image: "/Carpenter.png",
    service: "Servicios tradicionales",
    description:
      "Trabajos de ajuste, fabricación, reparación y adecuación de elementos interiores para viviendas, locales y espacios corporativos.",
  },
  {
    title: "Obra civil y mantenimiento",
    image: "/CivilWork.png",
    service: "Construcción y mantenimiento",
    description:
      "Apoyo en adecuaciones locativas, corrección de espacios, reparaciones, preparación de áreas y soluciones técnicas complementarias.",
  },
  {
    title: "Obra blanca y pintura",
    image: "/WhiteWork.png",
    service: "Acabados interiores",
    description:
      "Terminaciones, pintura, restauración, remates y entrega de espacios listos para uso con una presentación limpia y profesional.",
  },
  {
    title: "Pulimiento y limpieza especializada",
    image: "/PolishFloors.png",
    service: "Mantenimiento de superficies",
    description:
      "Servicios de recuperación, limpieza y mantenimiento para pisos, muebles, alfombras y superficies de alto uso.",
  },
];

const Proyectos: NextPageWithLayout = () => (
  <main className="bg-[#f4f4f4]">
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[#ff7a18]">Galería de proyectos</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
          Soluciones ejecutadas en instalación, acabados, seguridad y mantenimiento.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Experiencias reales que reflejan nuestro compromiso con la calidad, la innovación y la excelencia en cada instalación.
        </p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {gallery.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5">
            <div className="relative h-[30rem] w-full bg-black">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-7">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ff7a18]">{item.service}</p>
              <h2 className="mt-3 text-2xl font-black text-black">{item.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
);

Proyectos.getLayout = (page) => (
  <>
    <Head>
      <title>Galería de proyectos | Naranjo Express</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="/logo-naranjo-express.png" />
    </Head>
    <Navbar />
    {page}
    <Footer />
  </>
);

export default Proyectos;
