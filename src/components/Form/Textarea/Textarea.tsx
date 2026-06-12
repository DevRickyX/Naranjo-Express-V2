import { type ComponentPropsWithRef, forwardRef } from "react";
import RequiredStar from "@/components/Form/RequiredStar";
import cs from "@/utils/cs";

type Props = {
  label: string;
  description?: string;
  error?: string;
} & ComponentPropsWithRef<"textarea">;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, className, description, error, ...props }, ref) => (
    <label className="flex flex-col gap-1 font-medium">
      {props.required === true ? (
        <div className="flex flex-col">
          <div className="flex gap-1 capitalize">
            {label}
            <RequiredStar />
          </div>
          {description != null && <span className="text-sm">{description}</span>}
        </div>
      ) : (
        <div className="flex flex-col capitalize">
          {label}
          {description != null && <span className="text-sm normal-case">{description}</span>}
        </div>
      )}

      <textarea
        ref={ref}
        className={cs(
          "block w-full rounded-xl border border-white/10 bg-[#171717] px-4 py-3 text-base font-normal text-white placeholder-slate-500 transition ease-in-out focus:border-[#ff7a18] focus:bg-[#171717] focus:outline-none",
          className
        )}
        {...props}
      />

      {error != null && <span className="text-sm font-medium text-red-500">{error}</span>}
    </label>
  )
);

Textarea.displayName = "Textarea";

export default Textarea;
