import { Schema, model } from "mongoose";

const ClienteSchema = new Schema(
  {
    nombres: {
      type: String,
      required: true,
    },

    apellidos: {
      type: String,
      required: true,
    },

    telefono: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
    },

    estado: {
      type: String,
      default: "ACTIVO",
    },
  },
  { timestamps: true }
);

export default model("Cliente", ClienteSchema);