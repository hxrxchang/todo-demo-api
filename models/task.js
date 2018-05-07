'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    is_completed: DataTypes.BOOLEAN,
    is_deleted: DataTypes.BOOLEAN,
    is_stared: DataTypes.BOOLEAN,
  }, { underscored: true });

  Task.associate = function(models) {
    Task.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'id',
    });
  };
  return Task;
};