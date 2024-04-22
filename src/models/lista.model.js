import { Schema, model } from "mongoose";

const listasSchema = new Schema(
  {
    temperatura: {
      type: Number,
      required: true,
    },
    humedad: {
      type: Number,
      required: true,
    },
    distanciaObjeto: {
      type: Number,
      required: true,
    },
    Led: {
      type: Boolean,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection: apiSockets
  }
);

export default model("ListaComponentes", listasSchema);
