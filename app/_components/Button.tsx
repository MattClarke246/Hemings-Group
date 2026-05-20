import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "obsidian" | "gold" | "ghost";

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  type?: never;
  onClick?: () => void;
};

type ActionButtonProps = CommonProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

type ButtonProps = LinkButtonProps | ActionButtonProps;

export default function Button(props: ButtonProps) {
  const { variant = "obsidian", children, className = "" } = props;
  const classes = `btn btn-${variant} ${className}`;

  if ("href" in props && props.href) {
    const isExternal = /^https?:|^mailto:|^tel:/.test(props.href);
    if (isExternal) {
      return (
        <a className={classes} href={props.href} onClick={props.onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link className={classes} href={props.href} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={props.type ?? "button"} onClick={props.onClick}>
      {children}
    </button>
  );
}
