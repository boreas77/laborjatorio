export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function labelFromPricing(pricing: string) {
  const labels: Record<string, string> = {
    gratis: "Gratis",
    "gratis-con-plan-pago": "Gratis con plan de pago",
    pago: "Pago",
    "pago-unico": "Pago único",
    suscripcion: "Suscripción"
  };

  return labels[pricing] ?? pricing;
}

export function labelFromDifficulty(difficulty: string) {
  const labels: Record<string, string> = {
    facil: "Fácil",
    media: "Media",
    alta: "Alta"
  };

  return labels[difficulty] ?? difficulty;
}

export function labelFromStatus(status: string) {
  const labels: Record<string, string> = {
    "uso-actual": "Uso actual",
    probada: "Probada",
    pendiente: "Pendiente",
    descartada: "Descartada",
    imprescindible: "Imprescindible",
    importante: "Importante",
    opcional: "Opcional",
    secundaria: "Secundaria",
    "en-prueba": "En prueba",
    abandonada: "Abandonada"
  };

  return labels[status] ?? status;
}
