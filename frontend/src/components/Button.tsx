import clsxm from "@/utils/clsxm";
import React from "react";

type Props = {
  children: React.ReactNode | string;
  isLoading?: boolean;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    { children, className, disabled: buttonDisabled, isLoading, ...rest },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm("btn btn-primary", "rounded", className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;
