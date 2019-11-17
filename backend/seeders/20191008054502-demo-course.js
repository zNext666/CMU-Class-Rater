'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Courses', [{
      course_no: "261361",
      name: 'Software Engineering',
      section: 11,
      teacher:'Lachana Ramingwong, PhD, Assistant Professor',
      description:'This course teaches students software development life cycle. Students are required to work in a team while going through software engineering activities (including requirements engineering, architectural design, detailed design, construction, quality assurance and delivery) to develop a working software (at least a prototype). Deliverables include requirements, design, test plan, and system document. The course project gives students opportunity to experience an industry like software project. Students are expected to solve the problems occurred during the software development process whether they are technical, social or ethical ones',
      credit:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "269340",
      name: 'Data Centric Application Development',
      section: 11,
      teacher:'Pruet Boonma, Ph.D.',
      description:'coures description...',
      credit:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "261434",
      name: 'Network Design and Mangement',
      section: 11,
      teacher:'Aj.Yuthapong',
      description:'coures description...',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "206161",
      name: 'Calculus 1 For Engineering',
      section: 11,
      teacher:'Aj.Bancha Panyapak',
      description:' Introduction to vector, derivatives of functions of one variable and applications and indefinite and definite integrals and applications.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "269360",
      name: 'Platform Programming',
      section: 11,
      teacher:'Aj.Pruet Boonma',
      description:'Introduction to platform programming.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "269370",
      name: 'Project Management for ISNE',
      section: 11,
      teacher:'Sakkasit Ramingwong',
      description:'Concepts of project management, Ethics in information system and network engineering, Business concepts in information system and network industry, Project initiation for information system and network engineering, Project definition for information system and network engineering, Project planning for information system and network engineering, Project implementation for information system and network engineering, Project deployment for information system and network engineering, Project service and maintenance for information system and network engineering, Project decommissioning for information system and network engineering.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "261446",
      name: 'Information Systems',
      section: 11,
      teacher:'Kenneth Cosh',
      description:'Introduction to information systems and roles of information systems in organizations. Characteristics of organizations. Ethical and social impact of information systems. Computer and information processing. Telecommunications. Organizations planning and designing with information systems. Management information systems. Executive information systems. Decision support systems. Expert systems. Interorganizational and international information systems.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "269341",
      name: 'Data Warehousing and Business Intelligence for Information Systems and Network Engineering',
      section: 11,
      teacher:'Juggapong Natwichai',
      description:'Introduction to data warehousing for information systems and network engineering, Business intelligence and key performance indicators, Granularity management, Data modeling for data warehousing, Data warehousing and business intelligence system design, Data extraction, Data transformation, Data loading, Data warehousing and business intelligence deployment and administration, Reporting in business intelligence, Performance tuning for data warehousing and business intelligence, Case studies in data warehousing and business intelligence for information systems and network engineering.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "261433",
      name: 'Network Programming',
      section: 11,
      teacher:'Pruet Boonma',
      description:'Introduction to network programming. Open System Interconnectivity reference model: programming point of view. Client-Server working model and implementation. Transmission Control Protocol sockets. Input/Output multiplexing. User Datagram Protocol sockets. Raw sockets. Name and addressing conversion. Daemon process and superserver. Threading. Advanced issues in networking programming.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "259194",
      name: 'Learning Through Activities 4',
      section: 11,
      teacher:'Dome Potikanond',
      description:' Specify the description in regard to the following Activities to promote skills/moral and ethical behaviors in addition to development of personality, art and culture, local wisdom, environmental preservation as well as community-based economy by students under supervision of advisors and/or joint supervision with the government or private organizations',
      credit: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "269491",
      name: 'Project Survey',
      section: 11,
      teacher:'Staff',
      description:' This course is for the students who will enroll the course 269492 “Project” in the next semester. The students have to survey and research to select topics for projects and methods to do projects. The students have to report the plan and time schedule for the approval of project in the next semester. The report evaluation result is S or U.',
      credit: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "261498	",
      name: 'ENG: Selected Topics in Computer Networks',
      section: 11,
      teacher:'Yutthapong Somchit',
      description:'Selected topics of current interests and new developments in various fields of computer networking.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "001101",
      name: 'Fundamental English 1',
      section: 1,
      teacher:'Assistant',
      description:' Communication in English for everyday interactions. Basic listening, speaking, reading and writing skills in various social and cultural contexts for life-long learning.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "207105	",
      name: 'Physics for Engineering and Agro-Industry Students 1',
      section: 11,
      teacher:'Co-Instructor',
      description:' Structure and domain of physics. Newton’s laws of motion, motion of objects, work and energy, motion of rigid bodies. Properties of matter. Hydrostatics and hydrodynamics. Vibrations and waves. Nature of sound wave. Temperature and heat. Thermodynamics and kinetic theory.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "259104",
      name: 'Engineering Drawing',
      section: 11,
      teacher:'Sakgasem Ramingwong',
      description:'Introduction to engineering drawing, drawing instruments and lettering, applied geometries, theory of Orthographic projection and drawing, dimensioning and tolerancing, pictorial drawing, sections and conventions, auxiliary views and development, freehand sketches, detail and assembly drawing, basic descriptive geometries and applications, basic computer-aided drawing.T',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "261102",
      name: 'Computer Programming',
      section: 11,
      teacher:'Karn Patanukom',
      description:'Introduction to computer programming. Variables and data types, Operators. Flow of control. File input/output. Subroutines. Arrays. Objects and classes. Command line arguments. Basic algorithms.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "001102",
      name: 'Fundamental English 2',
      section: 11,
      teacher:'Staff',
      description:'Communication in English for everyday interactions. More advanced listening, speaking, reading and writing skills in various social and cultural contexts for life-long learning.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "261205",
      name: 'Data Structures and Algorithms',
      section: 11,
      teacher:'Kenneth Cosh',
      description:' Concept of data structure. Complexity analysis. Pointer. Objects and classes. Arrays and vectors. Linked List. Stacks, queues and priority queues. Recursion. Sorting algorithms. Hashing. Memory management. String comparison.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "269103",
      name: ' Programming for Information Systems and Network Engineering',
      section: 11,
      teacher:'Trasapong Thaiupathump',
      description:'Modular program design approach, Large-scale application development for information processing, Network application development, Team development, Source code repository, Program unit test.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "269130",
      name: 'Fundamentals of Data and Computer Communications for Information Systems and Network Engineering',
      section: 11,
      teacher:'Karn Patanukhom',
      description:'Introduction to data communication and computer network. Mathematical fundamentals for data communication. Basic signal processing and signal analysis. Fundamentals of modulation techniques. Multiplexing and multiple access protocols. Transmission medium. Data compression. Error detection and error control. Information security. Multimedia data.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "356100",
      name: 'Animals World',
      section: 11,
      teacher:'Watcharapong Naraballobh',
      description:'Study of animals world including wild animal, pet, livestock and fantastic animals. Management of environmental well-being in animals. Conservation in range management of sustainable animal husbandry. Relationship between animals and various species and environments.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "013110",
      name: 'Psychology and Daily Life',
      section: 1,
      teacher:'Chatwiboon Peisel',
      description:' Psychology and daily life. Individual factors. Interpersonal factors. Social factors.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "602102",
      name: 'Life and Alternative Energy',
      section: 1,
      teacher:'Sasitorn Wongroung	',
      description:'Present energy problems, alternative energy, alternative energy in daily life and energy of country, including barrier and its solving.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "269105",
      name: 'ISNE Lab 1',
      section: 011,
      teacher:'Kenneth Cosh',
      description:' High-level software description. Software development using integrated development environment. Software unit testing. Versioning systems. Documentation. Software development best-practice.',
      credit: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "001201",
      name: 'Critical Reading and Effective Writing',
      section: 1,
      teacher:'Staff',
      description:'English language skills for critical reading from different sources and media and effective writing on topics of students’ interests.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "001225",
      name: 'English in Science and Technology Context',
      section: 1,
      teacher:'Staff',
      description:' Specific language functions, components and skills for effective communication in science and technology contexts.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "259103",
      name: 'Engineering Materials',
      section: 1,
      teacher:'Anirut Chaijaruwanich',
      description:' Background and classification of engineering materials: metals, plastics, ceramic, asphalt, wood and concrete. Production processes for product using engineering materials. Macro and microstructures of engineering materials. Imperfections in solids; Phase equilibrium. Properties of material. Mechanical testing. Hardening and heat treatment processes. Corrosion reactions and corrosion control.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "261342	",
      name: 'Fundamentals of Database Systems',
      section: 1,
      teacher:'Juggapong Natwichai	',
      description:' Database concepts. Data modeling. Database design and engineering. Data model improvement. Query language. Physical database design. Efficient data retrieval and indexing. Query optimization. Basic concept of transaction, concurrency and recovery techniques. Trends in database systems technology.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "261343",
      name: 'Database System Laboratory',
      section: 1,
      teacher:'Juggapong Natwichai',
      description:'Database management system software installation. Database design. Query language. Database administration. Database application development.',
      credit: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "269210",
      name: 'Computer Architecture for Information Systems and Network Engineering',
      section: 1,
      teacher:'Sansanee Auephanwiriyakul	',
      description:'Overview of computer organization and architecture. Computer evaluation and performance measurement. Number systems and computer arithmetic. Digital logic. Computer function and interconnection. Cache memory. Internal memory. External memory. Virtual memory. Instruction sets: Characteristics and functions. Instruction sets: addressing modes and formats. Processor structure and function. Advanced technology in computer architecture.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "057132",
      name: 'Happy Life in Camping',
      section: 1,
      teacher:'Chinawat Kaiket ',
      description:'Introduction to camping, philosophy and objectives. Kinds of camping. Camping activities. Nature study, forest and conservation. Planning of camping management and camping leader. Camping evaluation and practice on camping activities.',
      credit: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "705191",
      name: 'Smart Consumer',
      section: 1,
      teacher:'Ek Bunchua ',
      description:'Roles of marketing in everyday life, understanding business marketing strategies, knowing consumer right, knowing how to be a smart consumer in sufficiency economy.',
      credit: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "801100",
      name: 'Architecture in Everyday Life',
      section: 1,
      teacher:'Ronawee Suwantamalee',
      description:'The difference between building and architecture, Basic sciences and arts of architecture, Aesthetics in architecture, Architecture in everyday life, Styles and fashions of architecture, Roles and responsibilities of architects, How to start working with architects, Ideal architects versus ideal clients, Basic building laws and regulations, Basic building materials, How to read and understand architectural drawings, Fung-Shi and belief system in the understanding of architect, Past, Present and future of Thai and Lanna architecture, Green architecture and its sustainability.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "050106",
      name: 'Humanistic arts',
      section: 3,
      teacher:'Naruemol Teerawat',
      description:'The study of nature and the meaning of humanity to understand oneself and others; humanity in today’s environment; the purpose of human life; paths to fulfillment through humanistic arts, factual knowledge and installation of values; living and working together peacefully and with a sense of social responsibility.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "103262",
      name: 'Vocal and chorus	',
      section: 1,
      teacher:'Khanithep Pitupumnak',
      description:'Vocal, improving singing technique; voices and ears training; musical notation reading for vocal and chorus performs; chorus group performance.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "356102",
      name: 'Ornamental aquatic animals',
      section: 1,
      teacher:'Mintra Seel- audom',
      description:'Overview of ornamental aquatic animals, ornamental aquatic animals behavior, invertebrate ornamental aquatic animals, vertebrate ornamental aquatic animals, business of ornamental aquatic animals, ornamental aquatic animals for research, ornamental aquatic animals and human credulity, ornamental aquatic animals and environment, invasive ornamental aquatic animal species, and genetic improvement ornamental aquatic animal species.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "057137",
      name: 'Sports for health	',
      section: 1,
      teacher:'Sarawut Pongpipat	',
      description:'Team sports, individual sports and in-door sports to promote exercise, physical health, mental health and social health. (Select 1 team sport 1 individual sport and 1 in door sport)',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "057122",
      name: 'Swimming for life and exercise',
      section: 1,
      teacher:'Natchajarn Rodwattanadisakul',
      description:'The principles of exercise for health by Swimming. Warm up and cool down. Principles of breathing and movement under water. Using body physically to swim in each style. Helping others from dangers in swimming. Swimming for health and participation in competition at different levels. Benefits and etiquette for players and spectators.',
      credit: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "011152",
      name: 'Ethics for good qual of life	',
      section: 1,
      teacher:'Parud Boonsriton',
      description:'Basic concepts of ethics. Ethical theories of life. Problems of life in contemporary society. Good quality of life. Ethical approaches to achieve good quality of life.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "261112",
      name: 'Game Appreciation',
      section: 1,
      teacher:'Sakkasit Ramingwong',
      description:'History of games and gaming industry. Components and characteristics of games. Overview of gaming technology. Concept of game development. Classification of games. First and second generations of games. Third and fourth generations of games. Fifth and sixth generations of games. Seventh and eithth generations of games. Effects of game in Thai society. Effects of game in international society. Case studies.',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      course_no: "261111",
      name: 'Internet and Online Community',
      section: 1,
      teacher:'Navadon Khunlertgit',
      description:'',
      credit: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Courses', null, {});
  }
};
