'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    is_completed: DataTypes.BOOLEAN,
    is_deleted: DataTypes.BOOLEAN
  }, {});
  Task.associate = function(models) {
  };
  return Task;
};