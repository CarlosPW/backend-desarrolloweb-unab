import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  direccion: {
    type: String,
    required: [true, "La dirección es requerida"],
  },
  telefono: {
    type: String,
    required: [true, "El teléfono es requerido"],
    trim: true,
    maxlength: [100, "El teléfono no puede tener más de 100 caracteres"],
  },
  descripcion: {
    type: String,
    required: [true, "La descripción es requerida"],
  },
  latitud: {
    type: Number,
    required: [true, "La latitud es requerida"],
  },
  longitud: {
    type: Number,
    required: [true, "La longitud es requerida"],
  },
});

export default mongoose.model("Reports", ReportSchema);
