
  export interface IUsuario {
    usuario: Usuario;
  }

  export interface Usuario {
    _id?        : string;
    name?       : string;
    email?      : string;
    password?   : string
    estado?     : boolean;

  }
