import { Sequelize } from 'sequelize';

// Option 1: Passing parameters separately
const sequelize = new Sequelize('hamonoco', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT+9'
  },
  logging: false
});

export { sequelize };
