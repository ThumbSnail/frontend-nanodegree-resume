/*
	Sources:
	bio.displayContacts() uses eval() to take a property name and convert it to a variable name
	eval() discovered via:
	stackoverflow.com/questions/5613834/convert-string-to-variable-name-in-javascript
	And more info:
	stackoverflow.com/questions/197769/when-is-javascripts-eval-not-evil
*/

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
 		'blog': 'thumbsnail.wordpress.com',
 		'location': 'Seattle, WA'
 	},
 	'welcomeMessage': 'Hey, hey, you found my resume!  But you\'re still hungry...',
 	'skills': ['programming', 'writing', 'teaching'],
 	'bioPic': 'images/JeffPic2x.jpg',
 	display: function() {
 		//fill in the header:
 		$('#header').prepend(HTMLheaderName.replace('%data%', this.name));
 		$('#name').after(HTMLheaderRole.replace('%data%', this.role));

 		//fill in the contact info:
 		this.displayContacts('#topContacts');

 		//image
		$('#header').append(HTMLbioPic.replace('%data%', this.bioPic));

 		//add welcome message
 		$('#header').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));

 		//list the skills
 		$('#header').append(HTMLskillsStart);
 		for (var i = 0; i < this.skills.length; i++) {
 			$('#skills').append(HTMLskills.replace('%data%', this.skills[i]));
 		}
 	},
 	displayContacts: function(id) {
 		//fill in the contact info:
 		for (prop in this.contacts) {
 			$(id).append(eval('HTML' + prop).replace('%data%', this.contacts[prop]));
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
			'url': 'http://www.ucsd.edu',
			'logo': ['images/ucsdSeal1x.png', 'images/ucsdSeal2x.png']
		},
		{
			'name': 'UCSD Extension',
			'location': 'La Jolla, CA',
			'degree': 'Certification',
			'major': 'Teaching English as a Foreign Language',
			'dates': 2009,
			'url': 'http://extension.ucsd.edu',
			'logo': ['images/ucsdLogo1x.png', 'images/ucsdLogo2x.png']
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-End Web Developer Nanodegree',
			'school': 'Udacity',
			'date': 2016,
			'url': 'http://www.udacity.com',
			'logo': ['images/udacity1x.png', 'images/udacity2x.png']
		},
		{
			'title': 'Front-End Development Certification',
			'school': 'Free Code Camp',
			'date': 2016,
			'url': 'http://www.freecodecamp.com',
			'logo': ['images/freeCodeCamp1x.png', 'images/freeCodeCamp2x.png']
		}
	],
	display: function() {
		//Physical Schools:
		for (var i = 0; i < this.schools.length; i++) {
			//the div to hold the school info
			$('#education').append(HTMLschoolStart);

			//Degree / Major
			var degMaj = HTMLschoolDegree.replace('%data%', this.schools[i].degree)
						+ HTMLschoolMajor.replace('%data%', this.schools[i].major);
			$('.education-entry').last().append(degMaj);

			//logo (and srcset and alt)
			var imageAll = HTMLlogoImage.replace('%alt%', this.schools[i].name + ' logo');
			imageAll = imageAll.replace(/%pic2%/g, this.schools[i].logo[1]);
			imageAll = imageAll.replace('%pic1%', this.schools[i].logo[0]);
			$('.education-entry').last().append(imageAll);

			//University link
			var nameUrl = HTMLschoolName.replace('%data%', this.schools[i].name);
			nameUrl = nameUrl.replace('#', this.schools[i].url);
			$('.education-entry').last().append(nameUrl);

			//Date / Place
			$('.education-entry').last().append(HTMLschoolDates.replace('%data%', this.schools[i].dates));
			$('.education-entry').last().append(HTMLschoolLocation.replace('%data%', this.schools[i].location));
		}

		//Online classes:
		for (var i = 0; i < this.onlineCourses.length; i++) {
			//the div to hold the school info
			$('#education').append(HTMLschoolStart);

			//Degree type
			$('.education-entry').last().append(HTMLonlineTitle.replace('%data%', this.onlineCourses[i].title));
			
			//logo (and srcset and alt)
			var imageAll = HTMLlogoImage.replace('%alt%', this.onlineCourses[i].school + ' logo');
			imageAll = imageAll.replace(/%pic2%/g, this.onlineCourses[i].logo[1]);
			imageAll = imageAll.replace('%pic1%', this.onlineCourses[i].logo[0]);
			$('.education-entry').last().append(imageAll);

			//Online school's link:
			var schoolUrl = HTMLonlineSchool.replace('%data%', this.onlineCourses[i].school);
			schoolUrl = schoolUrl.replace('#', this.onlineCourses[i].url);
			$('.education-entry').last().append(schoolUrl);

			//Date
			$('.education-entry').last().append(HTMLonlineDates.replace('%data%', this.onlineCourses[i].date));
		}
	}
};

var work = {
	'jobs': [
		{
			'employer': 'Upwork (Self)',
			'title': 'Freelance Writer',
			'location': 'Seattle, WA',
			'dates': 'June 2015 - Oct 2015',
			'url': 'http://www.upwork.com/',
			'description': 'Primarily worked as an iPad game reviewer at iPadGamesZone.com.'
							+ ' Also did various editing and transcription jobs.',
			'logo': ['images/upwork1x.png', 'images/upwork2x.png']
		},
		{
			'employer': 'ThumbSnail Studios (Self)',
			'title': 'Mobile Game Developer',
			'location': 'Seattle, WA',
			'dates': 'May 2014 - May 2015',
			'url': 'http://thumbsnail.wordpress.com/',
			'description': 'Developed three games for Android/iOS, using C++/Cocos2d-x and C#/Unity.'
							+ ' Did all the design, programming, testing, artwork, and music/sound.',
			'logo': ['images/ThumbSnail1x.png', 'images/ThumbSnail2x.png']
		},
		{
			'employer': 'English Program in Korea (EPIK)',
			'title': 'English Teacher',
			'location': 'Geoje-do, South Korea',
			'dates': 'August 2009 - January 2010',
			'url': 'http://www.epik.go.kr/',
			'description': 'Taught 1st through 6th grades at three different schools.',
			'logo': ['images/EPIK1x.jpg', 'images/EPIK2x.jpg']
		}
	],
	display: function() {
		for (var i = 0; i < this.jobs.length; i++) {
			//the div to hold the work info:
			$('#workExperience').append(HTMLworkStart);

			//role
			$('.work-entry').last().append(HTMLworkTitle.replace('%role%', this.jobs[i].title));

			//image (and srcset and alt)
			var imageAll = HTMLlogoImage.replace('%alt%', this.jobs[i].employer.slice(0, this.jobs[i].employer.length - 7) + ' logo');
			imageAll = imageAll.replace(/%pic2%/g, this.jobs[i].logo[1]);
			imageAll = imageAll.replace('%pic1%', this.jobs[i].logo[0]);
			$('.work-entry').last().append(imageAll);

			//employer/link
			var jobAll = HTMLworkJob.replace('#', this.jobs[i].url);
			jobAll = jobAll.replace('%data%', this.jobs[i].employer);
			$('.work-entry').last().append(jobAll);

			//More details button
			$('.work-entry').last().append(HTMLmoreDetails.replace('%tag%', i + 'work'));

			//Description (with id so it can be toggled by the details button)
			var descId = HTMLworkDescription.replace('%data%', this.jobs[i].description);
			descId = descId.replace('%tag%', 'work' + i);
			$('.work-entry').last().append(descId);

			//Date and location (placed inside the More Details - Description div)
			$('#work' + i).prepend(HTMLworkLocation.replace('%data%', this.jobs[i].location));
			$('#work' + i).prepend(HTMLworkDates.replace('%data%', this.jobs[i].dates));
		}
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
			],
			'url': 'http://thumbsnail.wordpress.com/games/climbycharts',
			'alt': 'Climby Charts icon'
		},
		{
			'title': 'Super Hearts',
			'date': 'Released March 2015',
			'description': 'The classic card game "Hearts" but with a double deck and all kinds of features.'
							+ ' Made with C++ and Cocos2d-x.',
			'images': [
				'images/SuperHearts1x.png',
				'images/SuperHearts2x.png'
			],
			'url': 'http://thumbsnail.wordpress.com/games/superhearts',
			'alt': 'Super Hearts icon'
		},
		{
			'title': 'Super Sevens',
			'date': 'Released Nov 2014',
			'description': 'The classic card game "Sevens" with all kinds of features, including 10 different suits.'
							+ ' Made with C++ and Cocos2d-x.',
			'images': [
				'images/SuperSevens1x.png',
				'images/SuperSevens2x.png'
			],
			'url': 'http://thumbsnail.wordpress.com/games/supersevens',
			'alt': 'Super Sevens icon'
		}
	],
	display: function() {
		for (var i = 0; i < this.portfolio.length; i++) {
			//div to contain the projects
			$('#projects').append(HTMLprojectStart);

			//project name
			$('.project-entry').last().append(HTMLprojectTitle.replace('%data%', this.portfolio[i].title));

			//image (and srcset and alt)
			var imageAll = HTMLlogoImage.replace('%alt%', this.portfolio[i].alt);
			imageAll = imageAll.replace(/%pic2%/g, this.portfolio[i].images[1]);
			imageAll = imageAll.replace('%pic1%', this.portfolio[i].images[0]);
			$('.project-entry').last().append(imageAll);

			//link:
			$('.project-entry').last().append('<a href="' + this.portfolio[i].url + '">Android & iOS</a>');

			//More details button
			$('.project-entry').last().append(HTMLmoreDetails.replace('%tag%', i + 'project'));

			//Description (with id so it can be toggled by the details button)
			var descId = HTMLprojectDescription.replace('%data%', this.portfolio[i].description);
			descId = descId.replace('%tag%', 'project' + i);
			$('.project-entry').last().append(descId);

			//Release date (placed inside the More Details - Description div)
			$('#project' + i).prepend(HTMLprojectDates.replace('%data%', this.portfolio[i].date));}
	}
};


//Display all of the resume:
bio.display();
education.display();
work.display();
projects.display();
bio.displayContacts('#footerContacts');

//Add the map
$('#mapDiv').append(googleMap);

//handle clicks on the "More Details" buttons:
$('.more-details').click(function(event) {
    event.preventDefault();  //don't re-adjust the focus (and thus the screen)

    var clickedID = $(this).attr('id');  //each link-button has an id like:  2work
    var clickedNum = clickedID.slice(0, 1);  //grab the 2
    var clickedType = clickedID.slice(1);  //grab the work

    var detailsID = '#' + clickedType + clickedNum;  //each desc. div has an id like work2
    $(detailsID).toggle('hidden');  //either show or hide the descriptions
});
