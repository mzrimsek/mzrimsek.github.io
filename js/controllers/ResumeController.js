app.controller('ResumeController', ['$scope', function ($scope) {
  $scope.about = {
    name: 'Michael Zrimsek',
    title: 'Full Stack Software Engineer',
    img: 'img/profile_pic.jpg',
    desc: 'I am a ' + calcAge("1993/07/22") + ' year old Software Engineer who has been coding for about ' + (new Date().getFullYear() - 2009) + ' years, ever since I discovered how much I loved it during High School.  I am extremely passioniate about my work and am always striving to find something new and exciting to get my hands on.  Currently I am infatuated with the potential that the web has to offer as a development platform - I love keeping up on all the new technologies that are always comings out and trying to apply them to small projects, time permitting.  I enjoy the feeling of setting out to learn something new and the pride that follows the successful application of it.',
    location: 'Mayfield Heights, OH',
    email: 'mikezrimsek@gmail.com',
    website: 'http://zrimsek.com'
  };
  $scope.networks = {
    github: 'https://github.com/mzrimsek',
    linkedin: 'https://www.linkedin.com/in/mzrimsek',
    google_plus: 'https://plus.google.com/+MikeZrimsek',
    medium: 'https://medium.com/@mikezrimsek',
    codepen: 'https://codepen.io/mzrimsek',
    twitter: 'https://twitter.com/MikeZrimsek'
  };
  $scope.jobs = [
    new Job('RoviSys', 'OH', 'Software Developer', 'June 2018', null, 'https://www.rovisys.com/', 'RoviSys specializes in automation and information solutions.', []),
    new Job('Progressive Insurance', 'OH', 'Associate Applications Developer', 'July 2017', 'May 2018', 'https://www.progressive.com/', 'Progressive is one of the largest auto insurance providers in the United States, serving millions of customers.', [
      new Project('CHAI 2', 'An initiative to consume an API that utilized machine learning to deflect chat sessions where applicable. Based on the question a user asked, we used an AI trained with intents to deliver precanned responses if it would likely answer their question. Since this has been live nearly 50% of eligible chat sessions have been deferred.')
    ]),
    new Job('Kent State University Residence Services', 'OH', 'Software Engineer', 'December 2015', 'May 2017', 'https://www.kent.edu/housing', 'As a division of the Residence Services Department, one of the main goals was to build software that would not only help students living on campus, but to also those who manage the day to day operation of the buildings.', [
      new Project('Check In/Check Out', 'An application built on the .NET MVC framework to replace the existing process of checking students in and out of dorms at the start and finish of each semester. In addition to this project, there was also an accompanying Android application. My duties on this project varied from new feature implementation on both web and Android, to designing new sections of the database, to writing sections of our front-end application to utilize React. While working on this project there was a strong push toward more reusable and maintainable coding practices, including an emphasis on Test Driven Development. Throughout development, refactoring of any of the codebase currently being touched was highly encouraged.')
    ]),
    new Job('Verys', 'CA', 'Junior Web Software Engineer', 'January 2014', 'November 2015', 'http://verys.com', 'Verys - a boutique, custom software development company specializing in web and mobile applications - was recognized as one of the fastest growing companies in Orange County, CA.  I worked on several projects, but have presented the most notable ones below.', [
      new Project('TheRoadmap', 'A financial planner website originally built on a LAMP stack, but then rewritten in Java.  The application utilized the Spring framework using Thymeleaf as the templating engine, built with Gradle, running on a Tomcat server.  My duties on this project consisted of porting the codebase from PHP to Java, development and testing of new and existing features, server maintenance, and codebase upkeep.'),
      new Project('Parcel Pending', 'An electronic locker system used in apartment complex for easy, centralized package delivery.  My duties on this project revolved around doing extensive testing of both the website and the API developed for accessing information about the lockers.  Formulated thorough test cases to aid in regression testing that was required during each project sprint.')
    ])
  ];
  $scope.skills = {
    info: 'My goal is to constantly be learning something as there is always something new and exciting to try out in a project.  Below are the skills I have learned and honed through projects I have worked on both at work and in my spare time.',
    languages: [
      new Language(new Skill('C#', 95), [
        new Skill('.NET MVC', 90)
      ]),
      new Language(new Skill('JavaScript/TypeScript', 95), [
        new Skill('Angular', 80),
        new Skill('React', 70),
        new Skill('NodeJS', 75),
        new Skill('Express', 75)
      ]),
      new Language(new Skill('Java', 90), [
        new Skill('Spring', 70),
        new Skill('Android', 25)
      ]),
      new Language(new Skill('HTML5/CSS3', 85), []),
      new Language(new Skill('SQL', 65), []),
      new Language(new Skill('Go', 60), []),
      new Language(new Skill('C/C++', 40), []),
      new Language(new Skill('Python', 35), [
        new Skill('Django', 25)
      ])
    ]
  };
  $scope.schools = [
    new School('Kent State University', 'OH', 'Computer Science', 'September 2015', 'May 2017'),
    new School('Irvine Valley College', 'CA', 'Computer Science', 'September 2012', 'May 2015'),
    new School('Cal Poly Pomona', 'CA', 'Computer Science', 'September 2011', 'May 2012')
  ];
}]);

var calcAge = function (dateString) {
  var birthDate = new Date(dateString);
  var ageDif = Date.now() - birthDate.getTime();
  var ageDate = new Date(ageDif);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

function Job(company, location, title, startDate, endDate, url, desc, projects) {
  this.company = company;
  this.location = location;
  this.title = title;
  this.startDate = startDate;
  this.endDate = endDate || 'Present';
  this.url = url;
  this.desc = desc;
  this.projects = projects;
}

function Project(name, desc) {
  this.name = name;
  this.desc = desc;
}

function Language(primary, subskills) {
  this.primary = primary;
  this.subskills = subskills;
}

function Skill(name, perc) {
  var setLevel = function (perc) {
    if (perc <= 30) return 'Beginner';
    else if (perc <= 60) return 'Intermediate';
    else if (perc <= 80) return 'Experienced';
    else return 'Adept';
  };
  this.name = name;
  this.perc = perc;
  this.level = setLevel(perc);
}

function School(name, location, major, startDate, endDate) {
  this.name = name;
  this.location = location;
  this.major = major;
  this.startDate = startDate;
  this.endDate = endDate || 'Present';
}
