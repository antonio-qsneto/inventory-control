const mongoose = require('mongoose')

const Stock = new mongoose.Schema({
    produto: {
        type: String,
        required: true
    },
    valor_compra: {
        type: Number,
        required: true
    },
    valor_venda: {
        type: Number,
        required: true
    },
    quant_pecas: {
        type: Number,
        required: true
    },
    quant_pvend: {
        type: Number,
        required: false
    },
    sald_pecas:{
        type: Number,
        required: false
    },
    sald_prod: {
        type: Number,
        required: false
    },
    saldo_valor_compra: {
        type: Number,
        required: false
    },
    saldo_valor_venda:{
        type: Number,
        required: false
    },
},
{
    timestamps: true,
})

// Criando Model
mongoose.model('stock', Stock);