import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Modelo Tosador.
 */
export const TosadorModel = types.model("Tosador").props({
  id: types.identifierNumber,
  nome: types.maybe(types.string),
  dataNascimento: types.maybe(types.string),
  status: types.maybe(types.string),
  petId: types.maybe(types.integer),
})

type TosadorType = Instance<typeof TosadorModel>
export interface Tosador extends TosadorType {}
type TosadorSnapshotType = SnapshotOut<typeof TosadorModel>
export interface TosadorSnapshot extends TosadorSnapshotType {}
export const createTosadorDefaultModel = () => types.optional(TosadorModel, {})
