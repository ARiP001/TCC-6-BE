import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('notes',{
    owner : DataTypes.STRING,
    title : DataTypes.STRING,
    detail : DataTypes.STRING,
    tag : DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async () => {
    await db.sync();
})();