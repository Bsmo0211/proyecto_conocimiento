import { gql } from "@apollo/client";

export const INSERT_PACIENTE = gql` 
 mutation createPaciente($datos: CreateUsuariosCreadoInput!){
  createUsuariosCreado(input: $datos){
    usuariosCreado{
      id
    }
  }
}`;
