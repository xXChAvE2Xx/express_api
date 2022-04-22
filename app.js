const express = require('express');
const app = express()
const port = 3000 //localhost:3000
//Esto es un endpoint
//routes
//Methods HTTP: GET, POST, PUT, DELETE
app.get('/v1/explorer', (req, res) =>{
    console.log(`GET Explorer V1 API ${new Date()}`)
    const explorer1 = {id:1, name: "Raul Chavez"}
    const explorer2 = {id:2, name: "Hiromi Chavez"}
    const explorers = [explorer1, explorer2]

    // HTTP CODE STATUS: 200 OK, 404: NOT FOUND, 500: ERROR INTERNO
    res.status(200).json(explorers)
})

app.get('/v1/explorer/:id', (req, res) =>{
    console.log(`GET BY ID Explorer V1 API ${new Date()}`)
    const explorer1 = {id:1, name: "Raul Chavez"}
    // HTTP CODE STATUS: 200 OK, 404: NOT FOUND, 500: ERROR INTERNO
    res.status(200).json(explorer1)
})


app.post('/v1/explorer', (req, res) =>{
    console.log(`POST Explorer V1 API ${new Date()}`)
    //agregar la logia para persisitir
    console.log(req.body)
    res.status(201).json({messagfe: "Exito"})
})

app.put('/v1/explorer/:1', (req, res) =>{
    console.log(`PUT Explorer V1 API ${new Date()}`)
    //agregar la logia para actualizar
    console.log(req.body) //Parametros para actualizar
    console.log(req.params.id)
    res.status(200).json({messagfe: "Se actualizo el registro"})
})

app.delete('/v1/explorer/:1', (req, res) =>{
    console.log(`DELETE Explorer V1 API ${new Date()}`)
    //agregar la logia para eliminar el registro enviado
    res.status(200).json({messagfe: "Se elimino el registro"})
})

app.listen(port, () =>{
    console.log("Server is runnig!");
})

