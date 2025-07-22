export function formatarMoeda(valor) {
  const numeros = valor.replace(/\D/g, '');
  const inteiro = numeros === '' ? '0' : numeros;
  const centavos = (parseInt(inteiro, 10) / 100).toFixed(2);
  return `R$ ${centavos.replace('.', ',')}`;
}