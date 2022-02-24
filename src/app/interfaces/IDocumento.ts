export interface IDocumentos {
  documentos: Documento[];
}

export interface IDocumento {
  documento: Documento;
}

export interface Documento {
  _id?: string;
  nameDocument?: string;
  created?: string;
  pathDocument?: string;
  description?: string;
  tag?: string;
  state?: boolean;
  favorite?:boolean;
  public?: boolean;
  id_usuario?: string;
}

export interface Doc {
  documento?: File,
  created?: string,
  description? : string,
  tag? : string


}
