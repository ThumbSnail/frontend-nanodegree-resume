/*
	
	eval() discovered via:
	stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript
	And more info:
	stackoverflow.com/questions/197769/when-is-javascripts-eval-not-evil
*/

function propToVarName(property) {
	return eval('HTML' + property);
}

/*
 * JSONs containing all the resume data by section:
*/

var bio = {
	'name': 'Jeff Derrenberger',
 	'role': 'Front-End Web Developer',
 	'contacts': {
 		'mobile': '(555) 555-5555',
 		'email': 'thumbsnailstudios@gmail.com',
 		'github': 'ThumbSnail',
 		'twitter': '@...I don\'t use Twitter',
 		'location': 'Seattle, WA'
 	},
 	'welcomeMessage': 'Hey, hey, you found my resume!  But you\'re still hungry...',
 	'skills': ['programming', 'writing', 'teaching'],
 	'bioPic': 'images/JeffPic.jpg',
 	display: function() {
 		//fill in the header:
 		$('#header').prepend(HTMLheaderName.replace('%data%', this.name));
 		$('#name').after(HTMLheaderRole.replace('%data%', this.role));

 		//fill in the contact info:
 		for (prop in this.contacts) {
 			$('#topContacts').append(propToVarName(prop).replace('%data%', this.contacts[prop]));
 		}

 		//add the picture
 		$('#header').append(HTMLbioPic.replace('%data%', this.bioPic));

 		//add welcome message
 		$('#header').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));

 		//list the skills
 		$('#header').append(HTMLskillsStart);
 		for (var i = 0; i < this.skills.length; i++) {
 			$('#skills').append(HTMLskills.replace('%data%', this.skills[i]));
 		}
 	}
};

var education = {
	'schools': [
		{
			'name': 'University of California--San Diego',
			'location': 'La Jolla, CA',
			'degree': 'B.A.',
			'major': 'Linguistics',
			'dates': 2008,
			'url': 'http://www.ucsd.edu'
		},
		{
			'name': 'UCSD Extension',
			'location': 'La Jolla, CA',
			'degree': 'Certification',
			'major': 'Teaching English as a Foreign Language',
			'dates': 2009,
			'url': 'http://extension.ucsd.edu'
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-End Web Developer Nanodegree',
			'school': 'Udacity',
			'date': 2016,
			'url': 'http://www.udacity.com'
		},
		{
			'title': 'Front-End Development Certification',
			'school': 'Free Code Camp',
			'date': 2016,
			'url': 'http://www.freecodecamp.com'
		}
	],
	display: function() {
		//Physical Schools:
		for (var i = 0; i < this.schools.length; i++) {
			//the div to hold the school info
			$('#education').append(HTMLschoolStart);

			//University link
			var nameUrl = HTMLschoolName.replace('%data%', this.schools[i].name);
			nameUrl = nameUrl.replace('#', this.schools[i].url);
			$('.education-entry').last().append(nameUrl);

			//Date / Place
			$('.education-entry').last().append(HTMLschoolDates.replace('%data%', this.schools[i].dates));
			$('.education-entry').last().append(HTMLschoolLocation.replace('%data%', this.schools[i].location));

			//Degree / Major
			var degMaj = HTMLschoolDegree.replace('%data%', this.schools[i].degree)
						+ HTMLschoolMajor.replace('%data%', this.schools[i].major);
			$('.education-entry').last().append(degMaj);
		}

		//Online classes:
		$('#education').append(HTMLonlineClasses);
		for (var i = 0; i < this.onlineCourses.length; i++) {
			//the div to hold the school info
			$('#education').append(HTMLschoolStart);

			//Online school's link:
			var schoolUrl = HTMLonlineSchool.replace('%data%', this.onlineCourses[i].school);
			schoolUrl = schoolUrl.replace('#', this.onlineCourses[i].url);
			$('.education-entry').last().append(schoolUrl);

			//Date
			$('.education-entry').last().append(HTMLonlineDates.replace('%data%', this.onlineCourses[i].date));

			//Degree type
			$('.education-entry').last().append(HTMLonlineTitle.replace('%data%', this.onlineCourses[i].title));
		}
	}
};

var work = {
	'jobs': [
		{
			'employer': 'Self / Upwork',
			'title': 'Freelance Writer',
			'location': 'Seattle, WA',
			'dates': 'June 2015 - Oct 2015',
			'description': 'Primarily worked as an iPad game reviewer at iPadGamesZone.com.'
							+ ' Also did various editing and transcription jobs.'
		},
		{
			'employer': 'Self / ThumbSnail Studios',
			'title': 'Mobile Game Developer',
			'location': 'Seattle, WA',
			'dates': 'May 2014 - May 2015',
			'description': 'Developed three games for Android/iOS, using C++/Cocos2d-x and C#/Unity.'
							+ ' Did all the design, programming, testing, artwork, and music/sound.'
		},
		{
			'employer': 'English Program in Korea (EPIK)',
			'title': 'English as a Foreign Language Teacher',
			'location': 'Geoje-do, South Korea',
			'dates': 'August 2009 - January 2010',
			'description': 'Taught 1st through 6th grades at three different schools.'
		}
	],
	display: function() {
/* KEY ATTENTION :  write this functioN!*/
	}
};

var projects = {
	'portfolio': [
		{
			'title': 'Climby Charts',
			'date': 'Released May 2015',
			'description': 'Humorous game about trying to get noticed in the sea of a million apps.'
							+ ' Made with C# and Unity.',
			'images': [
				'images/ClimbyCharts1x.png',
				'images/ClimbyCharts2x.png'
			]
		},
		{
			'title': 'Super Hearts',
			'date': 'Released March 2015',
			'description': 'The classic card game "Hearts" with a double deck and all kinds of features.'
							+ ' Made with C++ and Cocos2d-x.',
			'images': [
				'images/SuperHearts1x.png',
				'images/SuperHearts2x.png'
			]
		},
		{
			'title': 'Super Sevens',
			'date': 'Released Nov/Dec 2014',
			'description': 'The classic card game "Sevens" with all kinds of features.'
							+ ' Made with C++ and Cocos2d-x.',
			'images': [
				'images/SuperSevens1x.png',
				'images/SuperSevens2x.png'
			]
		}
	],
	display: function() {
/* KEY ATTENTION :  write this functioN!*/
	}
};


bio.display();
education.display();