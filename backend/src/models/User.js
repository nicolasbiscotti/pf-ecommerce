const { DataTypes } = require("sequelize");
// To encrypt the password
const crypto = require("crypto");
const bcrypt = require("bcrypt");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return () => this.getDataValue("password");
        },
        defaultValue: () => crypto.randomBytes(10).toString("hex"),
      },
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      verificationToken: {
        type: DataTypes.STRING,
        allowNull: false,
        // index: true,
        unique: true,
        defaultValue: () => crypto.randomBytes(20).toString("hex"),
      },
      firstName: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        validator: {
          isEmail: true,
        },
        allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      type: {
        type: DataTypes.ENUM("user", "client", "admin"),
        defaultValue: "user",
      },
    },
    { timestamps: false }
  );
  const generateHash = (password) => bcrypt.hash(password, 12);

  const setPassword = async (user) => {
    if (user.changed("password")) {
      user.password = await generateHash(user.password());
    }
  };
  // Sequelize hooks fot set password before create an user or update user password field.
  User.beforeCreate(setPassword);
  User.beforeUpdate(setPassword);

  // add functionality to the User prototype to compare if a plain password encrypt to the saved hash.
  User.prototype.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password());
  };
};
