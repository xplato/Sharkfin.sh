export default function BlurStrip({
  position = "bottom",
}: {
  position?: "top" | "bottom";
}) {
  const direction = position === "top" ? "to top" : "to bottom";

  const layers = [
    {
      blur: "1.125px",
      mask: `linear-gradient(${direction}, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 60%)`,
      zIndex: 1,
    },
    {
      blur: "2.25px",
      mask: `linear-gradient(${direction}, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 80%)`,
      zIndex: 2,
    },
    {
      blur: "4.5px",
      mask: `linear-gradient(${direction}, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`,
      zIndex: 3,
    },
    {
      blur: "9px",
      mask: `linear-gradient(${direction}, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%)`,
      zIndex: 4,
    },
    {
      blur: "18px",
      mask: `linear-gradient(${direction}, rgba(0,0,0,0) 80%, rgba(0,0,0,1) 100%)`,
      zIndex: 5,
    },
  ];

  return (
    <div
      className={`pointer-events-none fixed right-0 left-0 z-0 h-16 ${
        position === "top" ? "top-0" : "bottom-0"
      }`}
    >
      {layers.map((layer, i) => (
        <div
          key={i}
          className="pointer-events-none absolute inset-0"
          style={{
            backdropFilter: `blur(${layer.blur})`,
            WebkitBackdropFilter: `blur(${layer.blur})`,
            maskImage: layer.mask,
            WebkitMaskImage: layer.mask,
            zIndex: layer.zIndex,
          }}
        />
      ))}
    </div>
  );
}
