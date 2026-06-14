import { Schema, model } from "mongoose";

const BarberoSchema = new Schema(
  {
    nombres: {
      type: String,
      required: true,
    },

    apellidos: {
      type: String,
      required: true,
    },

    especialidad: {
      type: String,
      required: true,
    },

    activo: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default model("Barbero", BarberoSchema);