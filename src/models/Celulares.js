import { Schema, model } from "mongoose"

const celularEsquema = new Schema(
    {
        clave: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        marca: {
            type: String,
            required: true,
        },
        precio: {
            type: String,
            required: true,
        },
        fechaLanzamiento: {
            type: String,
            required: true,
        },
        RAM: {
            type: Boolean,
            default: false,
        },
        almacenamiento: {
            type: String,
            required: true,
        },
        cantCamaras: {
            type: Number,
            default: false,
        },

    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model("Celulares", celularEsquema);
