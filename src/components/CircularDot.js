import { motion } from "motion/react";

const CircularPartition = ({ size = 120, stroke = 6, segments = 12 }) => {
  const center = size / 2;
  const radius = (size - stroke) / 2;

  const lines = Array.from({ length: segments }).map((_, i) => {
    const angle = (i / segments) * 2 * Math.PI;
    const x1 = center + radius * Math.cos(angle);
    const y1 = center + radius * Math.sin(angle);
    const x2 = center + (radius - 10) * Math.cos(angle); // inner end of tick
    const y2 = center + (radius - 10) * Math.sin(angle);

    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#04998a"
        strokeWidth={2}
        strokeLinecap="round"
      />
    );
  });

  return (
    <svg width={size} height={size}>
      {lines}
    </svg>
  );
};

export default CircularPartition;
