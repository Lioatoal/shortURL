import Sequelize from 'sequelize'
import { BaseModel, sequelize } from './index'

const shortURL = Object.assign({
  id: {
    type: Sequelize.INTEGER, allowNull: true, primaryKey: true, autoIncrement: true,
  },
  orgUrl: { type: Sequelize.TEXT, allowNull: false },
  newUrl: { type: Sequelize.TEXT, allowNull: false },
}, BaseModel)

const options = {
  indexes: [
    {
      fields: ['id'],
    },
  ],
}

export default sequelize.define('short_url', shortURL, options)
