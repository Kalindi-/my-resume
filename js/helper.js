// HTML strings to be used multiple times and filled with my data,  in the %data%.


//basic info
var HTMLheaderMain = '<div id="peer"><div id="intro"></div><div id="image"></div></div>'
var HTMLheaderName = '<h1 id="name">Me: %data%</h1>';
var HTMLheaderRole = '<hr><br><span class="white-text" id="role">%data%</span>';

//contacts
//var HTMLcontactGeneric = '<li><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLcontactsStart = '<div class="topContacts"><ul id="topContacts" class="orange-text"> Contacts:</ul></div>';
var HTMLmobile = '<li><span class="orange-text">mobile </span><span class="red-text"> <i class="fa fa-phone fa-lg"> </i> </span><span class="white-text"> %data%</span></li>';
var HTMLemail = '<li><span class="orange-text">email </span><span class="red-text"> <i class="fa fa-envelope"> </i> </span><span class="white-text"> %data%</span></li>';
var HTMLgithub = '<li><span class="orange-text">github </span><span class="red-text"> <i class="fa fa-github fa-lg"> </i> </span><a class="white-text" href="%data%"> %data1%</a></li>';

//private info
var HTMLlocation = '<li> <span class="orange-text">location </span><span class="red-text"> <i class="fa fa-globe fa-lg world"></i> </span><span class="white-text"> %data%</span></li>';

// var HTMLbioPic = '<img src="%data%" id="biopic">';
var HTMLbioPic = '%data%';

var HTMLwelcomeMsg = '<p id="welcome-message" class="white-text">%data%</p>';

//html for button
var HTMLbutton = '<br><div id="button-div"><p id="button-text"></p><button>%data%</button></div>';

//skills
var HTMLskillsStart = '<div id="skills-div"><ul id="skills" class="orange-text">Skills at a Glance:</ul>';
var HTMLskills = '<li><span class="white-text">%data%</span></li>';
var HTMLskillsEnd = '</div>'

//works structure
var HTMLworkStart = '<details class="work-entry col-1-5"></details>';
var HTMLimage = '<summary>%data%</summary>';
var HTMLworkEmployer = '<h4>%data%</h4>';
var HTMLworkTitle = ' <p class="work-text"> %data% <br>';
var HTMLworkDates = '<span class="date-text right">%data%</span><br>';
var HTMLworkLocation = '<span class="location-text right">%data%</span><br>';
var HTMLworkDescription = '<span class="description">%data%</span></p>';


//projects structure
var HTMLprojectStart = '<div class="project-entry col-2-5"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImage = '<img src="%data%" class="project-img">';

//schools structure
var HTMLschoolStart = '<details class="education-entry col-1"></details>';
var HTMLschoolImage = '<summary>%data%</summary>';
var HTMLschoolUrl = '<p class="school-text"> <a href="%data%">';
var HTMLschoolName = '  %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolDegree = '<span class="description">%data%</span></p>';

//courses structure
var HTMLcoursesTitle = '<h3>Courses</h3>';
var HTMLcoursesStart = '<div class="course-entry col-1-5"></div>';
var HTMLurl = '<a href="%data%">';
var HTMLtitle = '%data%</a><br>';
var HTMLschool = '<div class="location-text"> %data%</div>';
var HTMLdates = '<div class="date-text">%data%</div><br><br><br>';


//my google maps
var googleMap = '<div id="map"></div>';
var googleMap2 = '<div id="map2"></div>';


