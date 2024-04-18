import mongoose from "mongoose";

mongoose.connect(process.env.CONNECTION_STRING_DB)
.then(db=> console.log("Conexión exitosa a la base de datos"))
.catch(err=>console.error(err));

export default mongoose;