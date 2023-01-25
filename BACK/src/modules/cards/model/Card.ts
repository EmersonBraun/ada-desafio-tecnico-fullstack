import mongoose from 'mongoose'

const CardSchema = new mongoose.Schema(
    {
        titulo : { type: String, required: true },
        conteudo: { type: String, required: true },
        lista: { type: String, required: true },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
)

const CardModel = mongoose.model('Card', CardSchema)
export { CardModel }
