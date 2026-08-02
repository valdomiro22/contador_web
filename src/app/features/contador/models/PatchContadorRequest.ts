export interface PatchContadorRequest {
  nome?: string;
  valorAtual?: number;
  incremento?: number;
  decremento?: number;
  valorInicial?: number;
  valorMinimo?: number | null;
  valorMaximo?: number | null;
  meta?: number | null;
}
