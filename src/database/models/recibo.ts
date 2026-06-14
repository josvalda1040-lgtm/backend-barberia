import { Schema, model } from "mongoose";

const ReciboSchema = new Schema(
  {
    pago: {
      type: Schema.Types.ObjectId,
      ref: "Pago",
      required: true,
    },

    fecha_emision: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default model("Recibo", ReciboSchema);