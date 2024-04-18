import app from "./app.js";
import mongoose from "./database.js";

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Servidor escuchando en el puerto: ${process.env.SERVER_PORT}`);
})
