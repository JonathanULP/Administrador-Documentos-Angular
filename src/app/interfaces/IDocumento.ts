export interface IDocumento {
  documentos: Documento[];
}

export interface Documento {
  _id: string;
  nameDocument: string;
  created: string;
  pathDocument: string;
  description: string;
  tag: string;
  state: boolean;
  public: boolean;
  id_usuario: string;
}
