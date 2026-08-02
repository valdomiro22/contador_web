export interface PatchContadorRequest {
  nome?: string;
  valorAtual?: number;
  incremento?: number;
  decremento?: number;

  valorInicial?: number | null;
  valorMinimo?: number | null;
  valorMaximo?: number | null;
  meta?: number | null;

  mostrarBotaoReset?: boolean;
  mostrarBotaoEditar?: boolean;
  subtracaoComoPrincipal?: boolean;
  mostrarLimites?: boolean;
  confirmarAntesResetar?: boolean;
  efeitoVisualAoClicar?: boolean;
}