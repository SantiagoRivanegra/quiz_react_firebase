const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('quiz', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM('multiple','boolean'),
      allowNull: false
    },
    questions: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM('art', 'sports', 'history'),
      allowNull: false
    },
    difficulty: {
      type: DataTypes.ENUM('easy', 'medium', 'hard'),
      allowNull: false
    },
    time: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    score: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false
  });
};