// CustomScrollbar.tsx
import { forwardRef } from "react";
import type { ReactNode } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

interface CustomScrollbarProps {
  children: ReactNode;
  className?: string;
}

const CustomScrollbar = forwardRef<any, CustomScrollbarProps>(({ children }, ref) => {
  return (
    <SimpleBar
      ref={ref}
      style={{ maxHeight: "100vh" }}
      autoHide={false}
      className="custom-scrollbar"
      timeout={100}
    >
      {children}
      <style jsx global>{`
        .simplebar-scrollbar::before {
          background: linear-gradient(45deg, #00aeff, #a64bf4) !important;
          border-radius: 10px !important;
          width: 12px !important;
          opacity: 1 !important;
        }
        .simplebar-track {
          background: transparent !important;
          width: 14px !important;
        }
        .simplebar-scrollbar.simplebar-visible:before {
          opacity: 1 !important;
        }
      `}</style>
    </SimpleBar>
  );
});

CustomScrollbar.displayName = 'CustomScrollbar';
export default CustomScrollbar;
