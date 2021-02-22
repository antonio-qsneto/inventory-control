const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../model/stock")
const Estoque = mongoose.model("stock")


router.get('/estoque', (req, res)=>{
    res.render('estoque');
})

router.post("/estoque/add", (req, res)=>{
    const novoProduto = {
        produto: req.body.produto,
        valor_compra: req.body.valor_compra,
        valor_venda: req.body.valor_venda,
        quant_pecas: req.body.quant_pecas,
        quant_pvend: req.body.quant_pvend
    }

    new Estoque(novoProduto).save().then(()=>{
        console.log("Produto Cadastrado");
    }).catch((err) => {
        console.log("Erro ao cadastrar"+err);
    })
})

module.exports = router;