import mongoose from 'mongoose'
import { CustomEnv } from '../util/configENV'
import { DatabaseError } from '../error'


class DatabaseConnection{
    constructor(){
        mongoose.connect(CustomEnv.db_url)
        .then((connected)=>{
            console.log("DB connected SuccessFully")
        })
        .catch((error)=>{
            console.error("Connection failed")
            throw new DatabaseError(`DB Connection failed -> ${error}`)
        })
    }
}

export default DatabaseConnection;