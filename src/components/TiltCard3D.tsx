import type React from "react";

interface TiltCard3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

/**
 * Tarjeta limpia y estática (sin rotaciones 3D tilt que desorienten al usuario).
 * Conserva una transición suave de elevación y borde al hacer hover.
 */
export function TiltCard3D({
  children,
  className = "",
  style,
  ...props
}: TiltCard3DProps) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        height: "100%",
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
}
