import { type FC, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormSchema } from "@/server/api/routers/form/schemas";
import cs from "@/utils/cs";
import Form from "@/components/Form";
import { CheckIcon } from "@heroicons/react/24/solid";
import { env } from "@/env.mjs";

const contactLinks = [
  {
    label: "+57 304 202 6189",
    icon: <FaPhone className="h-5 w-5" />,
    url: "tel:+573042026189",
  },
  {
    label: "naranjoexpress27@gmail.com",
    icon: <FaEnvelope className="h-5 w-5" />,
    url: "mailto:naranjoexpress27@gmail.com",
  },
  {
    label: "Montería, Córdoba",
    icon: <FaMapMarkerAlt className="h-5 w-5" />,
    url: "https://goo.gl/maps/Hc6nVUBPKF2V24T86",
  },
] as const;

const FormSection: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  async function handleSubmit(data: FormSchema): Promise<void> {
    setIsSubmitting(true);

    try {
      const res = await fetch(`https://formsubmit.co/${env.NEXT_PUBLIC_CLIENT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _captcha: false,
        }),
      });

      if (res.status === 200) {
        setIsSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  }

  return (
    <section id="form" className="relative overflow-hidden bg-[#f4f4f4] px-6 py-24 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-40 bg-black" />
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-black p-8 text-white sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,24,0.28),transparent_38%)]" />
            <div className="relative">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#ff7a18]">Contacto</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Solicita una cotización</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Cuéntanos los detalles de tu proyecto y nuestro equipo se pondrá en contacto contigo para orientar el servicio que necesitas.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                {contactLinks.map(({ label, icon, url }) => (
                  <a
                    key={label}
                    href={url}
                    target={url.startsWith("http") ? "_blank" : undefined}
                    rel={url.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-200 transition hover:border-[#ff7a18]/60 hover:text-[#ff7a18]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff7a18] text-black">{icon}</span>
                    {label}
                  </a>
                ))}
              </div>

              <a
                href="https://wa.me/573042026189?text=Hola,%20Naranjo%20Express,%20necesito%20una%20cotizaci%C3%B3n."
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ff7a18] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-105"
              >
                <FaWhatsapp className="h-5 w-5" />
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          <Form
            className="bg-[#111] p-8 text-white sm:p-12"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <Form.Input
              label="Nombre"
              required
              {...form.register("name")}
              placeholder="Tu nombre"
              error={form.formState.errors.name?.message}
            />

            <Form.Input
              label="Correo"
              required
              {...form.register("email")}
              placeholder="correo@email.com"
              error={form.formState.errors.email?.message}
            />

            <Form.Textarea
              label="Mensaje"
              placeholder="Cuéntanos qué servicio necesitas, ubicación y detalles principales del proyecto."
              required
              {...form.register("message")}
              className="h-48 max-h-48 overflow-y-scroll"
            />

            <button
              type="submit"
              className={cs(
                "mt-8 self-end rounded-full px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_28px_rgba(255,122,24,0.32)] transition duration-300",
                isSubmitting && "cursor-not-allowed opacity-50",
                isSuccess ? "cursor-not-allowed bg-green-500 text-white" : "bg-[#ff7a18] hover:-translate-y-1 hover:scale-105 hover:bg-[#ff9a3d] active:scale-95"
              )}
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? (
                "Enviando..."
              ) : isSuccess ? (
                <span className="flex items-center gap-2">
                  Enviado
                  <CheckIcon className="h-5 w-5" />
                </span>
              ) : (
                "Enviar solicitud"
              )}
            </button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
