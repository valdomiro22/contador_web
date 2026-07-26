export interface PostContadorRequest {
  nome: string;
  valorAtual: number;
  incremento: number;
  decremento: number;
  valorInicial: number | null;
  valorMinimo: number | null;
  valorMaximo: number | null;
  meta: number | null;
}