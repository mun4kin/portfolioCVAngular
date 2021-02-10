import { IProfile } from '../types/mainInfo.type';


export const usersMock:IProfile[] = [
  {
    mainInfo: {
      name: 'Anton',
      surname: 'Pugachev',
      position: 'Software Developer (Front End)',
      experience: '5+',
      phone: '+7 (916) 111 75 14',
      git: 'https://github.com/mun4kin',
      linkedIn: 'https://linkedin.com/in/anton-pugachev',
      email: 'pugachev.anton.al@gmail.com'
    },
    summary: 'I am an experienced software developer with 8 years of experience in banking, ' +
      'human resources, and logistics. I used to work with SAP products such as SAP HANA, SAP BO,' +
      ' and SAP Success Factors also I got a certificate C_HANAIMP. All of my projects were near ' +
      'Frontend Development and I dipped more and more until I decided that frontend more interesting for me.' +
      ' I have been a frontend developer since 2015. My first projects were written on Angular but I had to change ' +
      'the technology stack to React in 2018. Currently, I’m a leader and an architect of all internal portals in one of the largest banks in Russia.',
    education:
      [
        {
          beginDate: '09.2002',
          endDate: '06.2008',
          place: 'Bauman Moscow State Technical University',
          paramName: 'Software for Computers and Automation Systems (Master\'s degree)',
          imageId: 'bmstu'
        }
      ],
    job: [
      {
        beginDate: '08.2020',
        endDate: '',
        place: 'Innotech (VTB bank\'s branch)',
        paramName: 'Software architect',
        imageId: 'vtb',
        achievements: [
          { name: 'Developed micro-frontend architecture' },
          { name: 'Responsible for stream of rewriting business applications with implementation React' },
          { name: 'Built front-end part of HR services for 60,000 customers' },
        ]
      },
      {

        beginDate: '02.2016',
        endDate: '08.2020',
        place: 'PJSC Sberbank',
        paramName: 'Middle - Senior Frontend Developer',
        imageId: 'sber',
        achievements: [
          { name: 'Implemented Angular and React which resulted in Time To Market rate decrease', },
          { name: 'Built HR Ecosystem web applications for 350,000+ users', },
          { name: 'Our applications won first prize at Digital Pyramid 2020 Award ', },
          { name: 'Received highest annual rate', }
        ]
      },
      {
        beginDate: '08.2014',
        endDate: '11.2015',
        place: 'Tekora',
        paramName: 'Expert consultant',
        imageId: 'tekora',
        achievements: [
          { name: 'Developed  a lot of dashboards with html, js, jQuery, css' },
          { name: 'Huge experience with lots of SAP BO reports and Qlik products ' },
          { name: 'Transferring ABAP planing functions to ADMP and SAP HANA Views by means PAK' },
          { name: 'Optimisation SQL requests for in-memory working' }
        ]
      },
      {
        beginDate: '08.2013',
        endDate: '08.2014',
        place: 'Tern',
        paramName: 'Expert consultant',
        imageId: 'tern',
        achievements: [
          { name: 'Designed business warehouse with SAP HANA' },
          { name: 'Created dashboards by means of SAP Design Studio, SAP WebIntelligence' },
          { name: 'Created data marts and enterprise portals utilizing SAPUI5 and XS(nodeJS)' },
          { name: 'Optimisation SQL requests for in-memory working' }
        ]
      },
      {
        beginDate: '08.2014',
        endDate: '09.2013',
        place: 'BDO Unicon',
        paramName: 'Intern and junior analyst ',
        imageId: 'bdo',
        achievements: [
          { name: 'Working with SAP BW' },
          { name: 'Created dashboards by means SAP Business Objects' },
          { name: 'Writing SQL requests and creating views for SAP HANA' }
        ]
      }

    ],
    skills: [
      {
        name: 'react',
        rating: 10,
        color: '#61dafb'
      },
      {
        name: 'angular',
        rating: 8,
        color: '#dd0130'
      },
      {
        name: 'redux',
        rating: 10,
      },
      {
        image: 'rxjs',
        name: 'rxJs',
        rating: 9,
      },
      {
        color: 'e44c25',
        name: 'HTML',
        rating: 8,
      },
      {
        color: '#369ad6',
        name: 'CSS',
        rating: 7,
      },
      {
        name: 'javaScript',
        rating: 9,
        color: '#d0b531'
      },
      {
        image: 'ts',
        name: 'typeScript',
        rating: 9,
      },
      {
        color: '#77b062',
        name: 'nodeJS',
        rating: 6,
      },
      {
        image: 'sql',
        name: 'SQL',
        rating: 10,

      },
      {
        icon: 'fab fa-github',
        name: 'git',
        rating: 6.5,
      }
    ],
    softSkills: [
      { name: 'Leading a team of 8 developers' },
      { name: 'Learning new everyday' },
      { name: 'Stay focused' },
      { name: 'Agile working' },
      { name: 'Respect deadlines' },
      { name: 'Pay attention to details' }
    ],
    languages: [
      {
        flag: '🇷🇺',
        language: 'Russian',
        level: 'Native Speaker'
      },
      {
        flag: '🇺🇸',
        language: 'English',
        level: 'Upper Intermediate (CLB 7)'
      }
    ],
    hobbies: [
      { name: 'Read' },
      { name: 'Code' },
      { name: 'Travel' },
      { name: 'Tennis' },
      { name: 'Paragliding' },

    ]
  }
];
