'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Courses', [{
      course_no: 261361,
      name: 'Software Engineering',
      section: 11,
      teacher:'Lachana Ramingwong, PhD, Assistant Professor',
      description:'This course teaches students software development life cycle. Students are required to work in a team while going through software engineering activities (including requirements engineering, architectural design, detailed design, construction, quality assurance and delivery) to develop a working software (at least a prototype). Deliverables include requirements, design, test plan, and system document. The course project gives students opportunity to experience an industry like software project. Students are expected to solve the problems occurred during the software development process whether they are technical, social or ethical ones',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
