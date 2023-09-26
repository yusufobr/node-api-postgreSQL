module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: null,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: null,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: null,
    },
  });
  return Posts;
};
