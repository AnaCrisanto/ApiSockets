import { Schema, model } from "mongoose";

const listasSchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
      required: true,
    },
    temperatura: {
      type: Number,
      required: true,
    },
    humedad: {
      type: Number,
      required: true,
    },
    objetoDetectado: {
      type: String,
    },
    DistanciaObjeto: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("lista", listasSchema);
