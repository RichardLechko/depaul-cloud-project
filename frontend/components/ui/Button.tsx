import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "link";
  href?: string;
  className?: string;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  href,
  className = "",
  isDisabled = false,
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded transition duration-300";

  const styles =
    variant === "link"
      ? `text-blue-600 hover:underline ${className}`
      : `text-white border-2 border-transparent ${className} ${
          isDisabled ? "cursor-not-allowed opacity-50" : "hover:border-gray-200"
        }`;

  if (variant === "link" && href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${styles}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${styles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
