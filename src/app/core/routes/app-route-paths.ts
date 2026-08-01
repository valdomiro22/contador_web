export class AppRoutePaths {
  private constructor() {}

  static readonly contador = 'contador';

  static readonly listaContadores = '';
  static readonly adicionarContador = 'adicionar';

  static readonly contadorPage = ':id';
  static readonly editarContador = ':id/editar';
  static readonly configuracoesContador = ':id/configuracoes';
  static readonly detalhesContador = ':id/detalhes';
  static readonly historicoContador = ':id/historico';
}
