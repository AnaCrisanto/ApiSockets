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
    intensidadLed: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("ListaComponentes", listasSchema);
