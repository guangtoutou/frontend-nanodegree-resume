/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "James Ni",
	"role": "Web Developer",
	"contact": {
		"mobile": "+86 186-2195-4080",
		"email": "ni.ningning@gmail.com",
		"github": "guangtoutou",
		"location": "Shanghai, China"
	},
	"pic": "images/fry.jpg",
	"welcomeMsg": "hello",
	"skills": "html,javascript,css"
}

var work = [{
	"employer": "Unilever",
	"title": "IT Manager",
	"date": "Jun 2007 to Jul 2015",
	"location": "Shanghai, China",
	"description": "Develop IT strategy for sales, marketing, ecommerce to support long-term business growth; Probe business needs of IT initiatives, propose solution, drive alignment across functions/leadership team, lead the implementation and post evaluation; Touch base with Unilever global business/IT team, adapt global key strategy/projects, and drive the business benefit locally; Identify and resolve technical, operational and organizational problems; Drive service level of ongoing systems, ensure a stable business daily operation"
},
{
	"employer": "Pepsico",
	"title": "IT supervisor",
	"date": "May 2007",
	"location": "Shanghai, China",
	"description": "Lead and deliver Sales Force Automation Solution and Distributor Management System (ERP for distributors of Unilever) in China"
}]

var projects = [{
	"title": "Trade Promotion Management",
	"date": "Jul 2012 to Nov 2013",
	"description": "Optimize 500+m euro/year promotion investment by implementing SAP Trade Promotion Module, which integrates promotion end-to end process from planning, execution, claim and post evaluation",
	"image": "images/197x148.gif"
},
{
	"title": "Integrated Distribution & Retail Execution System",
	"date": "Nov 2011 to Jun 2012",
	"description": "An android mobile solution for 10,000+ promoters, aim to track 6P execution in store and provide sales team with real-time, actionable information",
	"image": "images/197x148.gif"
}]

var education = [{
	"school":"Shanghai Jiao Tong University",
	"degree": "bachelor",
	"date": "Sep 1999 to Jun 2003",
	"location": "Shanghai, China",
	"major": "Environmental Engineering"
}]

//bio
$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

$("#topContacts").append(HTMLmobile.replace("%data%",bio.contact.mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contact.email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contact.github));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contact.location));

$("#header").append(HTMLbioPic.replace("%data%",bio.pic));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg));


$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills.replace("%data%",bio.skills));

//Work Experience

for (var i = 0; i < work.length; i++) {
	$("#workExperience").append(HTMLworkStart);
	$(".work-entry").eq(i).append(HTMLworkEmployer.replace("%data%",work[i].employer)+HTMLworkTitle.replace("%data%",work[i].title));
	$(".work-entry").eq(i).append(HTMLworkDates.replace("%data%",work[i].date));
	$(".work-entry").eq(i).append(HTMLworkLocation.replace("%data%",work[i].location));
	$(".work-entry").eq(i).append(HTMLworkDescription.replace("%data%",work[i].description));
}

//projects
$("#projects").append(HTMLprojectStart);
for (var i = 0; i < work.length; i++) {
	$(".project-entry").append(HTMLprojectTitle.replace("%data%",projects[i].title));
	$(".project-entry").append(HTMLprojectDates.replace("%data%",projects[i].date));
	$(".project-entry").append(HTMLprojectDescription.replace("%data%",projects[i].description));
	$(".project-entry").append(HTMLprojectImage.replace("%data%",projects[i].image));
}

//education
$("#education").append(HTMLschoolStart);
for (var i = 0; i < education.length; i++) {
	$(".education-entry").append(HTMLschoolName.replace("%data%",education[i].school) + HTMLschoolDegree.replace("%data%",education[i].degree));
	$(".education-entry").append(HTMLschoolDates.replace("%data%",education[i].date));
	$(".education-entry").append(HTMLschoolLocation.replace("%data%",education[i].location));
	$(".education-entry").append(HTMLschoolMajor.replace("%data%",education[i].major));
}

$(document).click(function(loc){
	console.log("X=" + loc.pageX + ", Y=" + loc.pageY);
})
