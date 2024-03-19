export function getContrastRatio(color1, color2) {
  // Convertir colores a luminancias
  const luminance1 = getLuminance(color1);
  const luminance2 = getLuminance(color2);

  // Calcular el contraste
  const contrastRatio =
    (Math.max(luminance1, luminance2) + 0.05) /
    (Math.min(luminance1, luminance2) + 0.05);
  return contrastRatio;
}

function getLuminance(color) {
  // Extraer los componentes de color (R, G, B)
  const r = color[0] / 255; // Normalizar valores de 0 a 1
  const g = color[1] / 255;
  const b = color[2] / 255;

  // Calcular luminancia según la fórmula de sRGB
  const luminance =
    0.2126 * adjustGamma(r) + 0.7152 * adjustGamma(g) + 0.0722 * adjustGamma(b);
  return luminance;
}

function adjustGamma(color) {
  // Ajustar gamma según la fórmula de sRGB
  return color <= 0.03928
    ? color / 12.92
    : Math.pow((color + 0.055) / 1.055, 2.4);
}

export const hex2rgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b];
};
