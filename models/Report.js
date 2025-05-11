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
    min: [-90, "La latitud debe ser mayor o igual a -90"],
    max: [90, "La latitud debe ser menor o igual a 90"],
  },
  longitud: {
    type: Number,
    required: [true, "La longitud es requerida"],
    min: [-180, "La longitud debe ser mayor o igual a -180"],
    max: [180, "La longitud debe ser menor o igual a 180"],
  },
});

export default mongoose.model("Reports", ReportSchema);
