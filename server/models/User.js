module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
    
    });
    
    User.associate = (models)=>{
        User.hasMany(models.Chat);
        models.Chat.belongsTo(User,{as: 'Sender',foreignKey: 'SenderId' });

        User.hasMany(models.Chat);
        models.Chat.belongsTo(User,{as: 'Receiver',foreignKey: 'ReceiverId' });
    }
    return User;
    
};