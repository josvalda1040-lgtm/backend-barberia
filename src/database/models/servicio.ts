import { Schema, model } from "mongoose";

const ServicioSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
    },

    descripcion: {
      type: String,
    },

    precio: {
      type: Number,
      required: true,
    },

    duracion: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Servicio", ServicioSchema);