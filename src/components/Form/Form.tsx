import { type ComponentPropsWithoutRef, type FC } from "react";
import cs from "@/utils/cs";
import Input from "./Input";
import Textarea from "./Textarea";

type Props = {
  row?: boolean;
} & ComponentPropsWithoutRef<"form">;

type FormDefinition = FC<Props> & {
  Input: typeof Input;
  Textarea: typeof Textarea;
};

const Form: FormDefinition = ({ className, row = false, children, ...props }) => (
  <form {...props} className={cs("flex gap-2", row ? "flex-row" : "flex-col", className)}>
    {children}
  </form>
);

Form.Input = Input;
Form.Textarea = Textarea;

export default Form;
