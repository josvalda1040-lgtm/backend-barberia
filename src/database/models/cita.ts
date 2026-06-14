import { Schema, model } from "mongoose";

export const ESTADOS_CITA = [
  "PENDIENTE",
  "CONFIRMADA",
  "COMPLETADA",
  "CANCELADA",
] as const;

const CitaSchema = new Schema(
  {
    cliente: {
      type: Schema.Types.ObjectId,
      ref: "Cliente",
      required: true,
    },

    barbero: {
      type: Schema.Types.ObjectId,
      ref: "Barbero",
      required: true,
    },

    servicio: {
      type: Schema.Types.ObjectId,
      ref: "Servicio",
      required: true,
    },

    fecha: {
      type: Date,
      required: true,
    },

    estado: {
      type: String,
      enum: ESTADOS_CITA,
      default: "PENDIENTE",
    },
  },
  { timestamps: true }
);

export default model("Cita", CitaSchema);