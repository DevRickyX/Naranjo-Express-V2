import { scrollIntoViewWithOffset } from "@/utils/dom";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const services = [
  "Audio profesional y eventos",
  "CCTV y seguridad electrónica",
  "Tarimas y luminarias",
  "Láminas PVC y WPC",
  "Espejos con cinta LED",
  "Obra blanca y mantenimiento",
];

const links = [
  { name: "Inicio", href: "home" },
  { name: "Servicios", href: "services" },
  { name: "Proyectos", href: "projects" },
  { name: "Contacto", href: "form" },
];

const Footer: FC = () => {
  const goTo = (id: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const scroll = document.getElementById(id);
    if (scroll) scrollIntoViewWithOffset(scroll, 150);
  };

  return (
    <footer className="border-t-4 border-[#ff7a18] bg-black text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <Image src="/logo-naranjo-express.png" alt="Naranjo Express" width={86} height={86} className="h-20 w-auto object-contain" />
            <div>
              <h2 className="text-xl font-black uppercase tracking-[0.24em] text-white">
                Naranjo <span className="text-[#ff7a18]">Express</span>
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">Construimos calidad que perdura</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
            Soluciones integrales en instalaciones técnicas, audio profesional, seguridad electrónica, acabados arquitectónicos, mantenimiento y adecuaciones para espacios comerciales, residenciales y corporativos.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.instagram.com/solucionesnaranjoexpress/" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#ff7a18] transition hover:bg-[#ff7a18] hover:text-black">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/grangelramirez" target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#ff7a18] transition hover:bg-[#ff7a18] hover:text-black">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="https://wa.me/573042026189?text=Hola,%20Naranjo%20Express,%20necesito%20una%20cotizaci%C3%B3n." target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[#ff7a18] transition hover:bg-[#ff7a18] hover:text-black">
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#ff7a18]">Servicios</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#ff7a18]">Navegación</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
            {links.map((link) => (
              <button key={link.href} onClick={() => goTo(link.href)} type="button" className="w-fit transition hover:text-[#ff7a18]">
                {link.name}
              </button>
            ))}
            <Link href="/proyectos" className="w-fit transition hover:text-[#ff7a18]">
              Galería completa
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#ff7a18]">Contacto</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm leading-7 text-slate-400">
            <a href="tel:+573042026189" className="transition hover:text-[#ff7a18]">+57 304 202 6189</a>
            <a href="mailto:naranjoexpress27@gmail.com" className="transition hover:text-[#ff7a18]">naranjoexpress27@gmail.com</a>
            <span>Montería, Córdoba, Colombia</span>
            <span>Atención a proyectos residenciales, comerciales y corporativos.</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-slate-500">
        © 2025 Naranjo Express. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
