module.exports = (sequelize, DataTypes) =>{
    const Chat = sequelize.define('Chat', {
        name: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        sender: {
            type: DataTypes.STRING(),
            allowNull: true,
        }
      
    });
    
    Chat.associate = (models)=>{
        

        // Chat.hasMany(models.Document);
        // models.Document.belongsTo(Chat);
        
        // user.hasMany(models.Certification);
        // models.Certification.belongsTo(user);

        // user.hasMany(models.SellerService);
        // models.SellerService.belongsTo(user);

        // user.hasMany(models.Gallery);
        // models.Gallery.belongsTo(user);

        // user.hasOne(models.Favourite);
        // models.Favourite.belongsTo(user);

        // user.hasOne(models.SellerPlan);
        // models.SellerPlan.belongsTo(user);

        // user.hasOne(models.Business);
        // models.Business.belongsTo(user);

        // user.hasOne(models.EmailVerification);
        // models.EmailVerification.belongsTo(user);

        // user.hasMany(models.Favourite);
        // models.Favourite.belongsTo(user,{as: 'Seller',foreignKey: 'sellerId' });

        // user.hasMany(models.Booking);
        // models.Booking.belongsTo(user,{as: 'Seller',foreignKey: 'sellerId' });

        // user.hasMany(models.Booking);
        // models.Booking.belongsTo(user);
        
        // user.hasMany(models.StripeSubscription);
        // models.StripeSubscription.belongsTo(user);
        
        // user.hasMany(models.Notification);
        // models.Notification.belongsTo(user);
        
        // user.hasMany(models.Notification);
        // models.Notification.belongsTo(user,{as: 'Seller',foreignKey: 'sellerId' });

        // user.hasMany(models.Availablity);
        // models.Availablity.belongsTo(user);

        // user.hasMany(models.CancelBooking);
        // models.CancelBooking.belongsTo(user);

        // user.hasMany(models.Rating);
        // models.Rating.belongsTo(user,{as: 'Seller',foreignKey: 'sellerId' });
        
        // user.hasMany(models.Rating);
        // models.Rating.belongsTo(user);
        
        // user.hasMany(models.PaymentHistory);
        // models.PaymentHistory.belongsTo(user);
        


      

        // User.hasOne(models.Booking);
        // models.Booking.belongsTo(User,{as: 'Driver',foreignKey: 'DriverId' }); 

        // User.hasOne(models.Booking);
        // models.Booking.belongsTo(User,{as: 'User',foreignKey: 'UserId' }); 

    }
    return Chat;
};