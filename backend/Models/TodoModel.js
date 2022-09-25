import { Sequelize } from "sequelize";
import db from "../Config/Database.js";

const {DataTypes}=Sequelize;
const Todo=db.define("tbl_todolist",{
    todo:DataTypes.STRING
},{
    freezeTableName:true
});

export default Todo;

(async() =>{
    await db.sync();
})();