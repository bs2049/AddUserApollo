import { Sequelize } from './models/index.js';

export const dbConnecction = new Sequelize("sqlite:. \data\database.sqlite"); 