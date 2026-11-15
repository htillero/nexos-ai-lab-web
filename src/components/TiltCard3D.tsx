import type React from "react";
import { useRef, useState } from "react";

interface TiltCard3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

/**
 * Tarjeta interactiva NextGen con inclinación 3D (perspective + rotateX/Y)
 * y reflejo dinámico de luz adaptativo (Spotlight glare).
 * Importado y adaptado de ControlFinanciero para Nexos AI Lab.
 */
export function TiltCard3D({
  children,
  className = "",
  maxTilt = 6,
  glare = true,
  style,
  ...props
}: TiltCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlight, setSpotlight] = useState({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width;
    const yPct = mouseY / height;

    // Inclinación suave
    const rY = (xPct - 0.5) * maxTilt * 2;
    const rX = -(yPct - 0.5) * maxTilt * 2;

    setRotateX(rX);
    setRotateY(rY);

    if (glare) {
      setSpotlight({
        x: xPct * 100,
        y: yPct * 100,
        opacity: 0.18,
      });
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        position: "relative",
        transition: "transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`,
        transformStyle: "preserve-3d",
        ...style
      }}
      {...props}
    >
      {children}

      {/* Reflejo de luz 3D (Spotlight glare) con tinte cian sutil */}
      {glare && (
        <div
          aria-hidden="true"
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            transition: "opacity 0.25s ease-out",
            opacity: spotlight.opacity,
            background: `radial-gradient(circle 280px at ${spotlight.x}% ${spotlight.y}%, rgba(0, 229, 255, 0.25), transparent 75%)`,
          }}
        />
      )}
    </div>
  );
}
