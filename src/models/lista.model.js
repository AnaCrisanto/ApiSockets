import { Schema, model } from "mongoose";

const listasSchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
      require: true,
    },
    TemperaturaActual: Number,
    HumedadActual: Number, 
    nivelLuminosidad: Number,
    objetoDetectado: String,
    DistanciaObjeto: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("lista", listasSchema);
