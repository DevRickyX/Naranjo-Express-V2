import { type FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { scrollIntoViewWithOffset } from "@/utils/dom";

const links = [
  { name: "Inicio", href: "home" },
  { name: "Servicios", href: "services" },
  { name: "Proyectos", href: "projects" },
  { name: "Contacto", href: "form" },
];

const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  const goTo = (id: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) scrollIntoViewWithOffset(element, 120);
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/90 text-white shadow-xl backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-naranjo-express.png" alt="Naranjo Express" width={48} height={50} className="h-11 w-auto object-contain" />
          <span className="hidden text-sm font-black uppercase tracking-[0.24em] sm:block">
            Naranjo <span className="text-[#ff7a18]">Express</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <button key={link.href} onClick={() => goTo(link.href)} type="button" className="text-sm font-bold text-slate-200 transition hover:text-[#ff7a18]">
              {link.name}
            </button>
          ))}
          <Link href="/proyectos" className="text-sm font-bold text-slate-200 transition hover:text-[#ff7a18]">
            Galería técnica
          </Link>
          <button onClick={() => goTo("form")} type="button" className="rounded-full bg-[#ff7a18] px-5 py-2.5 text-sm font-black text-black transition hover:scale-105">
            Cotizar
          </button>
        </div>

        <button className="lg:hidden" type="button" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black p-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <button key={link.href} onClick={() => goTo(link.href)} type="button" className="text-left text-lg font-bold text-slate-200">
                {link.name}
              </button>
            ))}
            <Link href="/proyectos" onClick={() => setOpen(false)} className="text-lg font-bold text-[#ff7a18]">
              Galería técnica
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
