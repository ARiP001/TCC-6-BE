import { Sequelize } from "sequelize";

const db = new Sequelize('notes-arif','root','RiATHgaming*$99', {
    host:'34.128.89.90',
    dialect:'mysql'
})

export default db;