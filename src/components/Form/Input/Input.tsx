import { type ComponentPropsWithRef, forwardRef } from "react";
import cs from "@/utils/cs";
import RequiredStar from "@/components/Form/RequiredStar";

type InputProps = {
  label: string;
  description?: string;
  error?: string;
  warning?: string;
  leftIcon?: JSX.Element;
} & ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, description, leftIcon, error, warning, ...props }, ref) => (
    <label className="flex flex-col gap-1 font-medium">
      {props.required === true ? (
        <div className="flex flex-col">
          <div className="flex items-center gap-1 capitalize">
            {label}
            <RequiredStar />
          </div>
          {description !== undefined && <span className="text-sm normal-case">{description}</span>}
        </div>
      ) : (
        <div className="flex flex-col capitalize">
          {label}
          {description !== undefined && <span className="text-sm normal-case">{description}</span>}
        </div>
      )}

      <div className="relative flex items-center gap-2">
        {leftIcon !== undefined && (
          <div className="pointer-events-none absolute left-0 flex h-full w-10 items-center justify-center">
            {leftIcon}
          </div>
        )}
        <input
          {...props}
          ref={ref}
          className={cs(
            "w-full rounded-xl border border-white/10 bg-[#171717] px-4 py-3 text-base font-normal text-white placeholder-slate-500 transition ease-in-out focus:border-[#ff7a18] focus:bg-[#171717] focus:outline-none",
            leftIcon !== undefined && "pl-8",
            className
          )}
        />
      </div>

      {error !== undefined && <span className="text-sm font-medium text-red-500">{error}</span>}
      {warning !== undefined && <span className="text-sm font-medium">{warning}</span>}
    </label>
  )
);

Input.displayName = "Input";

export default Input;
