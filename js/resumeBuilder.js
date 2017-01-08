/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var formattedName = HTMLheaderName.replace("%data%", "James Ni");
 var formattedRole = HTMLheaderRole.replace("%data%", "IT Manager");

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
