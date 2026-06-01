type BrandNameProps = {
  casing?: "title" | "upper";
};

export function BrandName({ casing = "title" }: BrandNameProps) {
  const parts =
    casing === "upper"
      ? { start: "LA", borja: "BORJA", end: "TORIO" }
      : { start: "La", borja: "Borja", end: "torio" };

  return (
    <span className="brand-word" aria-label="Laborjatorio">
      {parts.start}
      <span className="brand-word__borja">{parts.borja}</span>
      {parts.end}
    </span>
  );
}
