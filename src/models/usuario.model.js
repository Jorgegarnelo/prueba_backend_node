const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Usuario = db.define(
  "usuarios",
  {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    username: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    email: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true 
    },
    password: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    role: { 
      type: DataTypes.ENUM("admin", "user"), 
      defaultValue: "user" 
    },
  },
  { timestamps: true }
);

module.exports = Usuario;