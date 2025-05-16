
import React from "react";

export interface AlertProps {
  title?: string;
  description?: string;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "solid" | "bordered" | "flat" | "faded";
  hideIconWrapper?: boolean;
  isVisible?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  endContent?: React.ReactNode;
}

export const Alert = ({
  title,
  description,
  color = "default",
  variant = "bordered",
  hideIconWrapper = false,
  isVisible = true,
  className = "",
  children,
  onClose,
  endContent
}: AlertProps) => {
  const [visible, setVisible] = React.useState(isVisible);

  React.useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  if (!visible) return null;

  const getColorClasses = () => {
    switch (color) {
      case "primary":
        return variant === "bordered" 
          ? "border-blue-500 bg-blue-50 text-blue-800" 
          : variant === "solid" 
            ? "bg-blue-500 text-white" 
            : variant === "flat"
              ? "bg-blue-700 text-white"
              : "bg-blue-100 text-blue-800";
      case "secondary":
        return variant === "bordered" 
          ? "border-purple-500 bg-purple-50 text-purple-800" 
          : variant === "solid" 
            ? "bg-purple-500 text-white" 
            : variant === "flat"
              ? "bg-purple-700 text-white"
              : "bg-purple-100 text-purple-800";
      case "success":
        return variant === "bordered" 
          ? "border-green-500 bg-green-50 text-green-800" 
          : variant === "solid" 
            ? "bg-green-500 text-white" 
            : variant === "flat"
              ? "bg-green-700 text-white"
              : "bg-green-100 text-green-800";
      case "warning":
        return variant === "bordered" 
          ? "border-yellow-500 bg-yellow-50 text-yellow-800" 
          : variant === "solid" 
            ? "bg-yellow-500 text-white" 
            : variant === "flat"
              ? "bg-yellow-700 text-white"
              : "bg-yellow-100 text-yellow-800";
      case "danger":
        return variant === "bordered" 
          ? "border-red-500 bg-red-50 text-red-800" 
          : variant === "solid" 
            ? "bg-red-500 text-white" 
            : variant === "flat"
              ? "bg-red-700 text-white"
              : "bg-red-100 text-red-800";
      default:
        return variant === "bordered" 
          ? "border-gray-300 bg-gray-50 text-gray-800" 
          : variant === "solid" 
            ? "bg-gray-500 text-white" 
            : variant === "flat"
              ? "bg-gray-700 text-white"
              : "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className={`relative rounded-lg p-4 ${variant === "bordered" ? "border" : ""} ${getColorClasses()} ${className}`}>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex flex-col">
          {title && <h5 className="text-base font-medium mb-1">{title}</h5>}
          {description && <p className="text-sm opacity-90">{description}</p>}
          {children}
        </div>
        {endContent && <div>{endContent}</div>}
      </div>
      {onClose && (
        <button
          onClick={() => {
            setVisible(false);
            onClose();
          }}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-black/10 transition-colors"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M18 6L6 18M6 6L18 18" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export interface ButtonProps {
  children?: React.ReactNode;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "full";
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  className?: string;
  onPress?: () => void;
}

export const Button = ({
  children,
  color = "primary",
  variant = "solid",
  size = "md",
  radius = "md",
  fullWidth = false,
  disabled = false,
  isLoading = false,
  startContent,
  endContent,
  className = "",
  onPress,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const getColorClasses = () => {
    switch (color) {
      case "primary":
        return variant === "solid" 
          ? "bg-blue-600 text-white hover:bg-blue-700" 
          : variant === "bordered" 
            ? "border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50" 
            : variant === "light" 
              ? "bg-blue-100 text-blue-600 hover:bg-blue-200" 
              : variant === "flat" 
                ? "bg-blue-500 text-white hover:bg-blue-600" 
                : variant === "faded" 
                  ? "bg-blue-100 text-blue-600 hover:bg-blue-200" 
                  : variant === "shadow" 
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50 hover:shadow-blue-500/40"
                    : "text-blue-600 hover:bg-blue-50"; // ghost
      case "secondary":
        return variant === "solid" 
          ? "bg-purple-600 text-white hover:bg-purple-700" 
          : variant === "bordered" 
            ? "border-2 border-purple-600 text-purple-600 bg-transparent hover:bg-purple-50" 
            : variant === "light" 
              ? "bg-purple-100 text-purple-600 hover:bg-purple-200" 
              : variant === "flat" 
                ? "bg-purple-500 text-white hover:bg-purple-600" 
                : variant === "faded" 
                  ? "bg-purple-100 text-purple-600 hover:bg-purple-200" 
                  : variant === "shadow" 
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40"
                    : "text-purple-600 hover:bg-purple-50"; // ghost
      case "success":
        return variant === "solid" 
          ? "bg-green-600 text-white hover:bg-green-700" 
          : variant === "bordered" 
            ? "border-2 border-green-600 text-green-600 bg-transparent hover:bg-green-50" 
            : variant === "light" 
              ? "bg-green-100 text-green-600 hover:bg-green-200" 
              : variant === "flat" 
                ? "bg-green-500 text-white hover:bg-green-600" 
                : variant === "faded" 
                  ? "bg-green-100 text-green-600 hover:bg-green-200" 
                  : variant === "shadow" 
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/50 hover:shadow-green-500/40"
                    : "text-green-600 hover:bg-green-50"; // ghost
      case "warning":
        return variant === "solid" 
          ? "bg-yellow-600 text-white hover:bg-yellow-700" 
          : variant === "bordered" 
            ? "border-2 border-yellow-600 text-yellow-600 bg-transparent hover:bg-yellow-50" 
            : variant === "light" 
              ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200" 
              : variant === "flat" 
                ? "bg-yellow-500 text-white hover:bg-yellow-600" 
                : variant === "faded" 
                  ? "bg-yellow-100 text-yellow-600 hover:bg-yellow-200" 
                  : variant === "shadow" 
                    ? "bg-yellow-500 text-white shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/40"
                    : "text-yellow-600 hover:bg-yellow-50"; // ghost
      case "danger":
        return variant === "solid" 
          ? "bg-red-600 text-white hover:bg-red-700" 
          : variant === "bordered" 
            ? "border-2 border-red-600 text-red-600 bg-transparent hover:bg-red-50" 
            : variant === "light" 
              ? "bg-red-100 text-red-600 hover:bg-red-200" 
              : variant === "flat" 
                ? "bg-red-500 text-white hover:bg-red-600" 
                : variant === "faded" 
                  ? "bg-red-100 text-red-600 hover:bg-red-200" 
                  : variant === "shadow" 
                    ? "bg-red-500 text-white shadow-lg shadow-red-500/50 hover:shadow-red-500/40"
                    : "text-red-600 hover:bg-red-50"; // ghost
      default:
        return variant === "solid" 
          ? "bg-gray-800 text-white hover:bg-gray-900" 
          : variant === "bordered" 
            ? "border-2 border-gray-600 text-gray-600 bg-transparent hover:bg-gray-50" 
            : variant === "light" 
              ? "bg-gray-100 text-gray-600 hover:bg-gray-200" 
              : variant === "flat" 
                ? "bg-gray-500 text-white hover:bg-gray-600" 
                : variant === "faded" 
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200" 
                  : variant === "shadow" 
                    ? "bg-gray-500 text-white shadow-lg shadow-gray-500/50 hover:shadow-gray-500/40"
                    : "text-gray-600 hover:bg-gray-50"; // ghost
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-xs py-1 px-3";
      case "lg":
        return "text-base py-3 px-6";
      default:
        return "text-sm py-2 px-4";
    }
  };

  const getRadiusClasses = () => {
    switch (radius) {
      case "sm":
        return "rounded";
      case "lg":
        return "rounded-xl";
      case "full":
        return "rounded-full";
      default:
        return "rounded-md";
    }
  };

  return (
    <button
      onClick={onPress}
      disabled={disabled || isLoading}
      className={`
        ${getColorClasses()} 
        ${getSizeClasses()} 
        ${getRadiusClasses()} 
        ${fullWidth ? "w-full" : ""} 
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} 
        transition-all duration-200 font-medium flex items-center justify-center gap-2
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && startContent && <span>{startContent}</span>}
      {children}
      {endContent && <span>{endContent}</span>}
    </button>
  );
};
