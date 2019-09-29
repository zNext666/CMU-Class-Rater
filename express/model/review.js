/* eslint-disable no-lone-blocks */
const {Sequelize,Model} = require('sequelize');
class Review extends Model{}{
    Review.init({   
        cid:{
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        uid:{
            type: Sequelize.BIGINT,
            allowNull: false, 
        },
        rate:{
            type: Sequelize.FLOAT,
            allowNull: true
        },
        comment:{
            type: Sequelize.TEXT,
            allowNull: true
        }
    },
    {
        Sequelize,
        modelName: 'Review'
    })
}