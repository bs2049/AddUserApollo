import { Sequelize, DataTypes, Model } from "sequelize";
import { starterusers } from "../data/starter-users.js";

const sequelize = new Sequelize("sqlite:../data/database.sqlite");

class User extends Model {}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    email: DataTypes.TEXT,
    city: DataTypes.TEXT,
    street: DataTypes.TEXT,
    state: DataTypes.TEXT,
    zip: DataTypes.INTEGER,

  },
  {
    sequelize,
  }
);

await sequelize.sync();

// // seed the database!
await User.bulkCreate(
  starterusers.map((m) => {
    const { id, ...User } = m;
    return User;
  })
);

export { User };
