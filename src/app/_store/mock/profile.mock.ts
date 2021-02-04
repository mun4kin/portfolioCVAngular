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
    summary: 'I am an experienced software developer with 8 years of experience in banking, human resources, and logistics. ' +
      'I used to work with SAP products such as SAP HANA, SAP BO, and SAP Success Factors also i got a certificate C_HANAIMP.' +
      ' All of my projects were near Frontend Development and I dipped more and more until I decided that frontend more interesting for me.' +
      ' I have been a frontend developer since 2015. My first projects was written on Angular ' +
      'but I had to change the technology stack to React at 2018. Currently, ' +
      'I’m a leader and an  architect of all internal portals in large bank of Russia.',
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
        achievements: [{ name: 'Began stream of rewriting business applications with implementation React' }, { name: 'Built front-end part of HR services for customers' }, ]
      },
      {

        beginDate: '02.2015',
        endDate: '08.2020',
        place: 'PJSC Sberbank',
        paramName: 'Middle - Senior Frontend Developer',
        imageId: 'sber',
        achievements: [
          { name: 'Implemented Angular and React which resulted in Time To Market rate decrease', },
          { name: 'Built HR Ecosystem web applications for 350.000+ users', },
          { name: 'Our applications won first prize at Digital Pyramid 2020 Award ', },
          { name: 'Received highest annual rate', }
        ]
      },
      {

        beginDate: '01.2014',
        endDate: '02.2015',
        place: 'Tekora',
        paramName: 'Expert consultant',
        imageId: 'tekora',
        achievements: [{ name: 'Developed  a lot of dashboards with html, js, jQuery, css', }, { name: 'Experience with lots of SAP and Qlik products ', }]
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
    ]

  }
];
