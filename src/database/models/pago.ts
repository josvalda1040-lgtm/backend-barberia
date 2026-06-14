import { Schema, model } from "mongoose";

export const METODOS_PAGO = [
  "EFECTIVO",
  "TARJETA",
  "QR",
] as const;

const PagoSchema = new Schema(
  {
    cita: {
      type: Schema.Types.ObjectId,
      ref: "Cita",
      required: true,
    },

    total: {
      type: Number,
      required: true,
    },

    metodo_pago: {
      type: String,
      enum: METODOS_PAGO,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Pago", PagoSchema);