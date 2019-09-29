/* eslint-disable no-lone-blocks */
const {Sequelize,Model} = require('sequelize');

class Course extends Model{}{
    Course.init({   
        course_id:{
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        course_name:{
            type: Sequelize.STRING,
            allowNull: false
            
        },
        section:{
            type: Sequelize.BIGINT,
            allowNull: false
        },
        teacher:{
            type: Sequelize.BIGINT,
            allowNull: false
        }
    },
    {
        Sequelize,
        modelName: 'Course'
    })
}