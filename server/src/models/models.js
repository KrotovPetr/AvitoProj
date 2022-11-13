const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Article = sequelize.define('article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    by: {type: DataTypes.STRING, allowNull: false},
    time: {type: DataTypes.TIME, allowNull: false},
    content:{type: DataTypes.TEXT, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    type: {type:DataTypes.STRING, allowNull:false},
    url: {type:DataTypes.STRING, allowNull:false},
    rating:{type: DataTypes.INTEGER, allowNull: false},
    kids: {type:DataTypes.ARRAY, allowNull:false},
})

const Comments = sequelize.define('comment',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    by: {type: DataTypes.STRING, allowNull: false},
    time: {type: DataTypes.TIME, allowNull: false},
    content:{type: DataTypes.TEXT, allowNull: false},
    type: {type:DataTypes.STRING, allowNull:false},
    kids: {type:DataTypes.ARRAY, allowNull:false},
    parent: {type:DataTypes.INTEGER, allowNull:true},
})

Article.hasMany(Comments)
Comments.belongsTo(Article)