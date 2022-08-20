import mongoose from "mongoose";
import "dotenv/config";

class DbConnection {
    connect(){
        mongoose.connect(`${process.env.DB_URL_CONNECTION}`, (error) => {
            if(error) return console.log("Erro ao conectar com db");
            console.log("DB conectado com sucesso"); 
        })
    }
}

export default new DbConnection();