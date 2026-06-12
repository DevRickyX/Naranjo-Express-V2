import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string({
      required_error: "Su nombre es requerido",
    })
    .trim()
    .min(2, {
      message: "Su nombre debe tener al menos 2 caracteres",
    }),
  email: z.string().email({
    message: "Debe ingresar un email válido",
  }),
  message: z.string().trim(),
});

export type FormSchema = z.infer<typeof formSchema>;
