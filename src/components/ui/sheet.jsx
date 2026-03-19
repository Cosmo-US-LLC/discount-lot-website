import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const SheetContext = React.createContext(null);

function Sheet({ open: openProp, defaultOpen = false, onOpenChange, children }) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : uncontrolledOpen;

  const setOpen = (value) => {
    if (!isControlled) setUncontrolledOpen(value);
    onOpenChange?.(value);
  };

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  );
}

function useSheet() {
  const ctx = React.useContext(SheetContext);
  if (!ctx) throw new Error("Sheet components must be used within <Sheet>");
  return ctx;
}

function SheetTrigger({ asChild, children }) {
  const { setOpen } = useSheet();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (event) => {
        children.props.onClick?.(event);
        setOpen(true);
      },
    });
  }

  return (
    <button type="button" onClick={() => setOpen(true)}>
      {children}
    </button>
  );
}

function SheetClose({ asChild, children }) {
  const { setOpen } = useSheet();

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (event) => {
        children.props.onClick?.(event);
        setOpen(false);
      },
    });
  }

  return (
    <button type="button" onClick={() => setOpen(false)}>
      {children}
    </button>
  );
}

function SheetOverlay(props) {
  return (
    <div
      {...props}
      className={cn(
        "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity",
        props.className,
      )}
    />
  );
}

function SheetContent({ side = "right", className, children, ...props }) {
  const { open, setOpen } = useSheet();

  if (typeof document === "undefined") return null;

  const baseSide =
    side === "left"
      ? "top-0 left-0"
      : side === "top"
        ? "top-0 left-0 right-0"
        : side === "bottom"
          ? "bottom-0 left-0 right-0"
          : "top-0 right-0";

  return createPortal(
    open ? (
      <>
        <SheetOverlay onClick={() => setOpen(false)} />
        <div
          role="dialog"
          aria-modal="true"
          {...props}
          className={cn(
            "fixed z-50 flex h-full w-[80%] max-w-xs flex-col bg-white p-4 text-[#111827] shadow-xl transition-transform",
            baseSide,
            className,
          )}
        >
          <SheetClose asChild>
            <button
              type="button"
              aria-label="Close"
              className="mb-4 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#e5e7eb] bg-white text-[#4b5563] shadow-sm"
            >
              <X className="h-4 w-4" />
            </button>
          </SheetClose>
          {children}
        </div>
      </>
    ) : null,
    document.body,
  );
}

export { Sheet, SheetTrigger, SheetContent, SheetClose };

