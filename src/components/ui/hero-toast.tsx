
import { toast } from "@/components/ui/sonner";

interface ToastOptions {
  title?: string;
  description?: string;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  duration?: number;
}

export const addToast = (options: ToastOptions) => {
  const {
    title,
    description = "",
    color = "default",
    duration = 3000,
  } = options;

  // Map Hero UI color to sonner variant
  const getVariant = () => {
    switch (color) {
      case "success":
        return "success";
      case "danger":
        return "destructive";
      case "warning":
        return "warning";
      case "primary":
        return "primary";
      case "secondary":
        return "secondary";
      default:
        return "default";
    }
  };

  toast[getVariant()]?.(title || description, {
    description: title ? description : undefined,
    duration,
    action: {
      label: "×",
      onClick: () => toast.dismiss(),
    },
  });
};
