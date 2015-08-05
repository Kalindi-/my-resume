// this page contains all the data to be put into my resume and the functions to make it happen

// basics
var bio = {
    "name" : "Kalindi Fonda",
    "role" : "learning about life and the internet",
    "age" : 27,
    "contacts" : {
        "mobile" : "+386 41 367 368",
        "email" : "kalindi.fonda(at)gmail.com",
        "github" : "https://github.com/Kalindi-",
        "location" : "45.501891, 13.501900",
        "coordinates" : [45.501891, 13.501900, "home a bit"]
    },
    "biopic" : '<svg id="biopic" xmlns="http://www.w3.org/2000/svg" version="1.0" width="236.000000pt" height="234.000000pt" viewBox="0 0 236.000000 234.000000" preserveAspectRatio="xMidYMid meet"><style>.style0{fill:  #000000;}</style><metadata>Created by potrace 1.12, written by Peter Selinger 2001-2015</metadata><g class="style0"><path  d="M156.6 50.1 c-5 4.4 -5.6 5.7 -6.2 14.2 -0.7 10 -1.2 11.9 -3.1 11.5 -2.1 -0.4 -2.4 -2.6 -0.8 -7.1 1.4 -4.1 0 -5.2 -1.5 -1.1 -1.6 4.2 -1.3 10.4 0.6 10.4 0.9 -0 1.2 0.5 0.8 1.2 -0.8 1.4 3.6 -2 4.8 -3.7 0.4 -0.6 0.8 -4 0.8 -7.6 0 -7.9 0.9 -13.1 2.1 -12.3 0.5 0.3 0.6 2.2 0.3 4.3 -0.8 5.3 1.8 10.8 5.6 11.6 2.5 0.5 2.9 1.2 3.4 5.3 0.3 2.6 0.5 8.1 0.5 12.2 -0.1 13.5 -0.1 13.2 2.1 12.5 1.1 -0.4 2 -0.2 2 0.4 0 0.6 0.9 0.2 2.1 -1 1.4 -1.4 2.9 -1.9 4.5 -1.6 1.3 0.2 2.4 -0 2.4 -0.4 0 -1.3 4.8 -1.1 5.6 0.2 0.3 0.6 0.7 5.1 0.7 10 0 4.9 0.4 8.9 0.9 8.9 0.4 -0 0.8 -0.7 0.8 -1.6 0 -1.2 0.6 -1.5 2.5 -1 1.5 0.4 2.5 0.2 2.5 -0.4 0 -0.6 0.5 -0.8 1 -0.5 0.6 0.3 1 0.2 1 -0.4 0 -0.5 0.9 -1.1 2 -1.3 1.3 -0.2 1.7 -0.7 1.2 -1.6 -0.7 -1 -1.7 -0.9 -5.1 0.3 -2.4 0.8 -4.4 1.5 -4.5 1.5 -0.1 -0 -0.2 -2.1 -0.2 -4.8 -0.1 -13.1 -0.1 -13.2 -3.5 -13.2 -1.7 -0 -3.9 0.5 -4.9 1 -1.2 0.6 -2.1 0.7 -2.5 -0 -0.3 -0.5 -1.5 -0.6 -2.8 -0.1 -1.2 0.4 -2.8 0.6 -3.4 0.4 -0.7 -0.3 -1.3 -0 -1.3 0.6 0 0.6 -0.5 1.1 -1.1 1.1 -0.6 -0 -0.8 -0.9 -0.3 -2.3 0.4 -1.2 0.7 -3 0.6 -4 0 -0.9 0.4 -1.7 1.1 -1.7 0.6 -0 0.3 -0.6 -0.7 -1.3 -1.8 -1.3 -1.7 -1.5 0.9 -3.5 1.5 -1.2 3.1 -2 3.5 -1.7 0.4 0.3 1.1 -0.2 1.4 -1.1 0.3 -0.8 1.1 -1.2 1.7 -0.8 0.7 0.4 0.9 0.3 0.6 -0.3 -0.4 -0.6 0.9 -2.1 2.8 -3.4 1.9 -1.3 3.5 -2.7 3.5 -3.2 0 -0.4 0.9 -0.7 2 -0.7 1.1 -0 2 -0.5 2 -1 0 -0.6 1.3 -1 3 -1 1.9 -0 3.3 -0.7 4 -2.1 1.1 -1.9 0.9 -2 -2.4 -1.3 -2.4 0.4 -3.6 0.2 -3.6 -0.5 0 -0.6 0.4 -1.1 0.9 -1.1 1.1 -0 2.4 -3.1 1.6 -3.8 -0.3 -0.3 -1.4 0.3 -2.5 1.3 -1.1 1 -2 1.3 -2 0.7 0 -0.7 -0.3 -1.1 -0.7 -1.1 -2 0.3 -2.1 -0.3 -0.5 -2.1 0.9 -1.2 1.7 -2.4 1.7 -2.8 0.1 -0.4 0.6 -1.7 1.3 -2.8 0.6 -1.2 0.8 -2.4 0.5 -2.8 -0.4 -0.3 -1.6 1.3 -2.8 3.6 -3.7 7.3 -9.6 8.2 -10.9 1.6 -0.6 -2.9 -5.8 -6 -10.3 -6 -1.3 -0 -2.3 -0.6 -2.3 -1.3 0 -1.6 5.6 -0.7 7.1 1.1 0.6 0.8 1.8 1.4 2.6 1.4 1.2 -0 1.2 -0.3 -0.1 -1.6 -0.9 -0.8 -1.6 -1.9 -1.6 -2.4 0 -0.4 -1.1 -1.1 -2.4 -1.4 -1.3 -0.3 -3 -0.8 -3.8 -1.1 -0.8 -0.3 -3.1 0.9 -5.2 2.6zm10.9 8.7c1.7 1 1.8 1.3 0.5 2.2 -1.1 0.7 -1.6 0.6 -1.8 -0.4 -0.2 -0.8 -1.1 -1.2 -2.3 -0.9 -1.9 0.5 -2.2 2.7 -0.3 2.9 3.3 0.2 7.4 1.8 7.1 2.7 -0.2 0.7 -2.6 1.3 -5.3 1.5 -5.5 0.3 -8.1 -1.4 -8.6 -5.8 -0.2 -2 0.3 -2.5 2.7 -3.1 3.8 -0.8 5.5 -0.6 8 0.9zm13.5 8.2c0 0.4 -0.7 2.4 -1.5 4.3 -1.4 3.4 -8.9 9.7 -11.5 9.7 -0.6 -0 -0.8 0.4 -0.5 1 0.3 0.5 0.1 1 -0.6 1 -0.7 -0 -0.9 -1 -0.6 -2.9 0.4 -1.8 0.2 -3.1 -0.5 -3.3 -0.7 -0.3 -0.9 -1.2 -0.4 -2.3 0.6 -1.6 0.9 -1.7 1.6 -0.5 0.8 1.2 1 1.1 1 -0.6 0 -1.2 1 -2.5 2.5 -3.2 1.4 -0.6 2.5 -1.5 2.4 -1.9 -0.1 -0.5 -0.1 -1.1 0 -1.5 0.1 -0.9 8.1 -0.8 8.1 0.2z"/><path class="biopic" d="M177.5 103 c-0.4 0.6 -1.3 0.9 -2.1 0.6 -0.8 -0.3 -1.4 0.1 -1.4 0.9 0 0.8 -0.6 1.5 -1.4 1.5 -0.8 -0 -1.8 0.5 -2.2 1.2 -0.4 0.6 -0.3 0.8 0.4 0.4 2.5 -1.5 2 1.4 -0.8 4.3 -1.6 1.8 -3.2 4.1 -3.5 5.2 -0.7 2.1 -0.9 2.1 -7.2 2.4l-4.1 0.2 -0.7 -4.4c-0.8 -5.2 -1.8 -4.9 -1.9 0.5 -0.1 3.1 -0.5 3.8 -2.3 4 -1.3 0.2 -2.3 0.7 -2.3 1.2 0 1.1 2.7 2 4.3 1.4 1 -0.4 1.2 3 1 16.5 -0.2 11 0.1 17.2 0.8 17.7 0.7 0.4 1 -2.2 0.9 -7.8 -0.1 -4.5 -0.1 -12.3 -0.1 -17.2l0.1 -8.9 3.9 0.7c2.9 0.4 4.3 0.1 6 -1.3 1.1 -1 2.1 -2.3 2.1 -2.9 0 -0.5 0.7 -1.2 1.5 -1.5 0.8 -0.4 2.7 -2.5 4.2 -4.9 1.5 -2.3 3.9 -5.3 5.3 -6.5 1.9 -1.6 2.2 -2.5 1.4 -3.3 -0.9 -0.9 -1.3 -0.9 -1.9 -0z"/><path class="biopic" d="M64 104 c2 1.3 5.3 1.3 4.5 -0 -0.3 -0.6 -1.8 -1 -3.3 -1 -2.1 -0 -2.4 0.2 -1.2 1z"/><path class="biopic" d="M71 104.5 c0 0.8 0.8 1.1 2 0.8 1.1 -0.3 2 -0.7 2 -0.8 0 -0.1 -0.9 -0.5 -2 -0.8 -1.2 -0.3 -2 -0 -2 0.8z"/><path class="biopic" d="M144 104.2 c0 0.4 0.7 0.8 1.5 0.8 0.8 -0 1.5 -0.4 1.5 -0.8 0 -0.5 -0.7 -0.9 -1.5 -0.9 -0.8 -0 -1.5 0.4 -1.5 0.9z"/><path class="biopic" d="M77.5 105 c0.3 0.5 1 1 1.6 1 0.5 -0 0.9 -0.5 0.9 -1 0 -0.6 -0.7 -1 -1.6 -1 -0.8 -0 -1.2 0.4 -0.9 1z"/><path class="biopic" d="M123.7 105.5 c-1.2 0.8 0.2 1.1 5.6 1.1 5.8 0.1 6.6 -0.1 4.2 -0.8 -4.7 -1.4 -8.2 -1.5 -9.8 -0.3z"/><path class="biopic" d="M90.5 106 c0.3 0.6 2 1 3.7 1 3.8 -0 3.4 -0.5 -1 -1.3 -2.1 -0.4 -3.1 -0.3 -2.7 0.3z"/><path class="biopic" d="M154.8 106.2 c0.5 0.5 1.6 0.8 2.3 0.6 0.8 -0.3 0.3 -0.7 -1 -1.1 -1.7 -0.4 -2.1 -0.3 -1.3 0.5z"/><path class="biopic" d="M165 105.9 c0 0.6 0.9 0.9 2 0.8 1.1 -0.1 2 -0.5 2 -0.9 0 -0.4 -0.9 -0.8 -2 -0.8 -1.1 -0 -2 0.4 -2 0.9z"/><path class="biopic" d="M98.5 107 c0.3 0.5 1 1 1.6 1 0.5 -0 0.9 -0.5 0.9 -1 0 -0.6 -0.7 -1 -1.6 -1 -0.8 -0 -1.2 0.4 -0.9 1z"/><path class="biopic" d="M105 106.9 c0 0.6 0.3 1.2 0.8 1.2 4.5 0.7 6.5 0.7 5.2 -0 -3 -1.7 -6 -2.2 -6 -1.2z"/><path class="biopic" d="M114.8 106.7 c-1 0.2 -1.8 0.9 -1.8 1.4 0 1 3.2 0.4 6 -1.2 1.2 -0.7 1.1 -0.8 -0.5 -0.8 -1.1 0.1 -2.8 0.3 -3.7 0.6z"/><path class="biopic" d="M47 108 c0 0.5 0.7 0.7 1.5 0.4 0.8 -0.4 1.5 -0.8 1.5 -1 0 -0.2 -0.7 -0.4 -1.5 -0.4 -0.8 -0 -1.5 0.4 -1.5 1z"/><path class="biopic" d="M94 118.4 c-4.1 0.7 -7.6 1 -7.8 0.6 -0.4 -1 -4.2 -0.1 -4.2 1 0 0.4 3.8 0.6 8.5 0.5 4.7 -0.1 8.5 0.2 8.5 0.7 0 0.4 0.7 0.8 1.6 0.8 0.8 -0 1.3 -0.4 0.9 -0.9 -0.3 -0.5 -0.1 -1.2 0.5 -1.6 0.5 -0.3 1 -0.2 1 0.3 0 1.8 4.4 2.2 6.1 0.6 1.1 -1 1.9 -1.2 2.4 -0.5 0.3 0.6 0.3 1.1 -0.2 1.1 -0.4 -0 -0.1 0.4 0.7 0.9 0.8 0.6 2.7 0.7 4.3 0.4 1.9 -0.4 3.2 -0.1 3.8 0.8 0.5 0.8 0.9 0.9 0.9 0.3 0 -0.7 2.5 -1 6.5 -1 3.6 0.1 6.5 -0.2 6.5 -0.7 0 -0.9 -1.6 -1 -10.9 -0.8 -6.7 0.2 -7.3 0.1 -6.2 -1.3 1.2 -1.4 0.6 -1.6 -5 -1.6 -3.5 -0 -7.3 -0.2 -8.4 -0.4 -1.1 -0.2 -5.4 0.1 -9.5 0.8z"/><path class="biopic" d="M75.5 120 c-0.3 0.5 0.1 1 0.9 1 0.9 -0 1.6 -0.5 1.6 -1 0 -0.6 -0.4 -1 -0.9 -1 -0.6 -0 -1.3 0.4 -1.6 1z"/><path class="biopic" d="M86.6 122.8 c-1.1 1.8 -0.9 8.9 0.8 32.2 0.5 5.8 0.5 5.8 1.7 3.7 0.5 -0.9 0.7 -2.2 0.4 -2.7 -0.4 -0.6 -0.6 -8.5 -0.6 -17.5 0.1 -14.9 -0.4 -18.7 -2.3 -15.7z"/><path class="biopic" d="M76.1 127.6 c-1.4 3.9 -0.7 20.9 1 21.9 0.4 0.3 0.8 -3.6 0.7 -8.7 -0.1 -5.1 0.1 -11 0.4 -13.1 0.8 -4.7 -0.4 -4.8 -2.1 -0.1z"/><path class="biopic" d="M98.4 151.9 c1.4 2.6 1.4 3.4 -0.2 8 -0.9 2.8 -3 6.5 -4.6 8.2 -3.3 3.4 -3.1 4.3 0.4 2.6 2.5 -1.3 6 -7.3 6.3 -10.8 0.1 -1.1 0.5 -1.9 0.9 -1.9 0.8 -0 0.4 -2.4 -1.1 -6.3 -0.6 -1.5 -1.5 -2.7 -2.1 -2.7 -0.6 -0 -0.5 1.2 0.4 2.9z"/><path class="biopic" d="M171 152.1 c0 0.5 1.1 1.4 2.5 1.9 1.9 0.7 2.5 1.7 2.5 3.9 0 1.6 -0.3 3.1 -0.7 3.3 -0.5 0.2 -1.9 1.6 -3.3 3.2l-2.5 2.9 2.5 -1.3c1.4 -0.7 3.3 -1.9 4.3 -2.8 2 -1.8 2.3 -7.1 0.5 -9.4 -1.5 -1.8 -5.8 -3.1 -5.8 -1.7z"/><path class="biopic" d="M76 153.5 c0 0.8 0.5 1.5 1 1.5 0.6 -0 1 -0.7 1 -1.5 0 -0.8 -0.4 -1.5 -1 -1.5 -0.5 -0 -1 0.7 -1 1.5z"/><path class="biopic" d="M77 157.8 c0 1.2 0.4 2.2 0.9 2.2 1 -0 0.9 -2.6 -0.2 -3.6 -0.4 -0.4 -0.7 0.2 -0.7 1.4z"/><path class="biopic" d="M63.1 161.9 c-2.1 3.8 -0.9 11.1 1.7 11.1 1.5 -0 1.5 -0.1 0 -1.6 -1.4 -1.5 -1.5 -2.2 -0.3 -6 1.4 -4.6 0.4 -6.9 -1.4 -3.5z"/><path class="biopic" d="M77.4 164 c-0.1 1.6 0.2 2.7 0.7 2.4 1.1 -0.6 1.2 -5.4 0.1 -5.4 -0.4 -0 -0.8 1.3 -0.8 3z"/><path class="biopic" d="M144.1 164.4 c-1.8 2.1 4.5 6.6 9.2 6.6 2.1 -0 3.7 -0.5 3.7 -1.1 0 -0.7 -1 -0.9 -2.5 -0.5 -3.5 0.9 -8.7 -2.2 -7.9 -4.6 0.6 -2.1 -0.9 -2.4 -2.5 -0.4z"/><path class="biopic" d="M84.5 173 c-0.3 0.5 -0.1 1 0.4 1 0.6 -0 1.1 -0.5 1.1 -1 0 -0.6 -0.2 -1 -0.4 -1 -0.3 -0 -0.8 0.4 -1.1 1z"/><path class="biopic" d="M65.8 174.7 c0.7 0.3 1.6 0.2 1.9 -0.1 0.4 -0.3 -0.2 -0.6 -1.3 -0.5 -1.1 -0 -1.4 0.3 -0.6 0.6z"/></g></svg>',
    "skills" : [
        "eye and heart to notice some things",
        "practicality: build a roof, repair a toilet",
        "motivation and concentration do tasks",
        "doing abcd"
        ],
    "welcomeMessage" : "Welcomey! This is my resume, hope you enjoy it."
};

// experiences
var education = {
    "schools" : [
        {
            "name" : "Gea College",
            "location" : "Online, Si",
            "degree" : "Associate degree in bussiness",
            "dates" : "2014 - ...",
            "url" : "http://www.gea-college.si/",
            "img" : "<img src='img/resume_img17.svg' alt='me, studying online' class='job-img'>",
            "coordinates" : [46.0569465, 14.5057515, 'online study']
        },
        {
            "name" : "AGRFT",
            "degree" : " film directing",
            "location" : "Ljubljana, Si",
            "dates" : "2008-2010",
            "url" : "http://www.agrft.uni-lj.si/",
            "img" : "<img src='img/resume_img19.svg' alt='me, learning about movies' class='job-img'>",
            "coordinates" : [46.0569465, 14.5057515, 'Ljubljana, Si']
        },
        {
            "name" : "UWCad",
            "location" : "Duino, It",
            "degree" : "International Baccalaureate",
            "dates" : "2005-2008",
            "url" : "http://www.uwcad.it/",
            "img" : "<img src='img/resume_img20.svg' alt='me, learning more' title='m' class='job-img'>",
            "coordinates" : [45.7753929, 13.6026211, 'Duino, It']
        },
        {
            "name" : "Ginnasio A. Sema",
            "degree" : " ",
            "location" : "Portoroz, Si",
            "dates" : "2003-2005",
            "url" : "http://www.ginnasiosema.net/",
            "img" : "<img src='img/resume_img21.svg' alt='me, reading reading' class='job-img'>",
            "coordinates" : [45.5142898, 13.5908455, 'Portoroz, Si']
        },
        {
            "name" : "OS Vodmat",
            "degree" : " ",
            "location" : "Ljubljana, Si",
            "dates" : "1996-1997",
            "url" : "http://www.osvodmat.si/",
            "img" : "<img src='img/resume_img22.svg' alt='me, a bit more school' class='job-img'>",
            "coordinates" : [46.0569465, 14.5057515, 'Ljubljana, Si']
        },
        {
            "name" : "SE V. de Castro",
            "location" : "Piran, Si",
            "degree" : "Primary school",
            "dates" : "1995-2003",
            "url" : "http://www.scuoladecastro.net/",
            "img" : "<img src='img/resume_img22.svg' alt='me, starting school' class='job-img'>",
            "coordinates" : [45.528319, 13.5682895, 'Piran, Si']
        }
        // Format for new entries
        //,
        // {
        //     "name" : "x",
        //     "location" : "x",
        //     "degree" : "x",
        //     "dates" : "x",
        //     "url" : "x",
        //   "img" : "x",
        //   "coordinates" : "insert_coordinates_values"
        // }
    ],
    "courses" : [
        //,
        //      "img" : "<img src='img/resume_img18.svg' alt='me, i guess, forgot where' class='job-img'>"
        {
            "title" : "Front-End Web Developer Nanodegree",
            "school" : "Udacity",
            "dates" : "summer 2015",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title" : "Introduction to Programming Nanodegree",
            "school" : "edX - MIT",
            "dates" : "summer 2015",
            "url" : "https://courses.edx.org/courses/MITx/6.00.1-x/1T2014/info"
        },
        {
            "title" : "Intro to programming Nanodegree",
            "school" : "Udacity",
            "dates" : "spring 2015",
            "url" : "https://www.udacity.com/course/introduction-to-programming-nanodegree--nd000"
        },
        {
            "title" : "Chicken Behaviour and Welfare",
            "school" : "Coursera - The University of Edinburgh",
            "dates" : "spring 2015",
            "url" : "https://www.coursera.org/course/chickens"
        },
        {
            "title" : "An Introduction to Consumer Neuroscience & Neuromarketing",
            "school" : "Coursera - Copenhagen Business School",
            "dates" : "winter 2015",
            "url" : "https://www.coursera.org/course/neuromarketing"
        },
        {
            "title" : "An Introduction to Marketing",
            "school" : "Coursera - Wharton",
            "dates" : "autumn 2014",
            "url" : "https://www.coursera.org/course/marketing"
        },
        {
            "title" : "Epidemics - Dynamics of Infectious Diseases",
            "school" : "Coursra - Penn State",
            "dates" : "winter 2015",
            "url" : "https://www.coursera.org/learn/epidemics"
        },
        {
            "title" : "Process Mining: Data science in Action",
            "school" : "Coursera - Eindhoven TU",
            "dates" : "winter 2015",
            "url" : "https://www.coursera.org/course/procmin"
        },
        {
            "title" : "Programming for Everybody (Python)",
            "school" : "Coursera - University of Michigam",
            "dates" : "autumn 2014",
            "url" : "https://www.coursera.org/course/pythonlearn"
        },
        {
            "title" : "Introduction to Interactive Programming in Python",
            "school" : "Coursera - Rice University",
            "dates" : "autumn 2014",
            "url" : "https://www.coursera.org/course/interactivepython"
        },
        {
            "title" : "Managing Your Time, Money, and Career",
            "school" : "Coursera - UCI",
            "dates" : "summer 2014",
            "url" : "https://www.coursera.org/course/managingmoney"
        },
        {
            "title" : "Principles of Economics",
            "school" : "Stanford linguita",
            "dates" : "summer 2014",
            "url" : "https://lagunita.stanford.edu/courses/HumanitiesSciences/Econ_1/Summer2015/about"
        },
        {
            "title" : "Intro to Statistics",
            "school" : "Udacity",
            "dates" : "summer 2012",
            "url" : "https://www.udacity.com/"
        },
        {
            "title" : "Artificial Intelligence for Robotics",
            "school" : "Udacity",
            "dates" : "spring 2012",
            "url" : "https://www.udacity.com/course/artificial-intelligence-for-robotics--cs373"
        },
        {
            "title" : "Introduction to Computer Science",
            "school" : "Udacity",
            "dates" : "spring 2012",
            "url" : "https://www.udacity.com/course/intro-to-computer-science--cs101"
        },
        {
            "title" : "Introduction to Artificial Intelligence",
            "school" : "aiclass",
            "dates" : "autumn 2011",
            "url" : "https://sites.google.com/site/aiclass2011archive/system/app/pages/sitemap/hierarchy"
        },
        {
            "title" : "Ontology",
            "school" : "University of Freiburg",
            "location" : "Freiburg, Germany",
            "dates" : "September 2011"
        }
        // Format of new entries
        // ,
        // {
        //     "title" : "x",
        //     "school" : "x",
        //     "dates" : "x",
        //     "url" : "x"
        // }
    ]
};


var work = {
    "jobs" : [
        {
            "job" : "baking burgers",
            "employer" : "McDonald's",
            "title" : "The lady of the burger",
            "location" : "Seiersberg, Austria",
            "dates" : "winter 2015",
            "description" : "was there to learn about big companies, learned a bit",
            "img" : "<img src='img/resume_img29.svg' alt='me, and nine cheesburgers' title='me, and nine cheesburgers' class='job-img'>",
            "coordinates" : [47.0110584, 15.3990754, 'Seiersberg, Austria']
        },
        {
            "job" : "Selling things online",
            "employer" : "online selling platforms", //"Willhaben.at, njuskalo.hr, ebay.com",
            "title" : "online putter and seller",
            "location" : "Graz, Austria",
            "dates" : "2014-2015",
            "description" : "getting rid of my own uneccesary things for a finacial reward",
            "img" : "<img src='img/resume_img4.svg' alt='me, taking photos and putting online' title='me, taking photos and putting online' class='job-img'>",
            "coordinates" : [47.070714, 15.439504, 'Graz, Austria']
        },
        {
            "job" : "Campsite helper",
            "employer" : "Camping Myvatn",
            "title" : "The walking girl",
            "location" : "Reykjahlid, Iceland",
            "dates" : "August 2014",
            "description" : "taking care of things and guests, cleaning, basic gardening, looking at the lake and the ducks",
            "img" : "<img src='img/resume_img24.svg' alt='my time there' title='my time there' class='job-img'>",
            "coordinates" : [65.64361099999999, -16.908611, 'Reykjahlid, Iceland']
        },
        {
            "job" : "helper and learner",
            "employer" : "small accountat's office, Amiz d.o.o.",
            "title" : "little helper and learner",
            "location" : "Izola, Slovenija",
            "dates" : "July 2014",
            "description" : "people's bills tell lots of truths",
            "img" : "<img src='img/resume_img14.svg' alt='me, going through bills' title='me, going through bills' class='job-img'>",
            "coordinates" : [45.5374048, 13.6600802, 'Izola, Slovenija']
        },
        {
            "job" : "Varied help at a psychiatrist’s office",
            "employer" : "psychiatrist’s office - Dr. med. psih. Juretic",
            "title" : "Secretary/administator/accomodator/receptionist",
            "location" : "Izola, Slovenija",
            "dates" : "summer 2012",
            "description" : "with people with problems, me too",
            "img" : "<img src='img/resume_img23.svg' alt='me, typing away' title='me, typing away' class='job-img'>",
            "coordinates" : [45.5374048, 13.6600802, 'Izola, Slovenija']
        },
        {
            "job" : "help organizing sport and cultural events",
            "employer" : " Local organisations ",
            "title" : "organizer, assistant, facilitator",
            "location" : "Portorose, Slovenija",
            "dates" : "2006-2014",
            "description" : "helping out for the smoothest or best course of events, also longer than a day",
            "img" : "<img src='img/resume_img13.svg' alt='me, taking kids on a walk in the mountains' title='me, taking kids on a walk in the mountains' class='job-img'>",
            "coordinates" : [45.5142898, 13.5908455, 'Portorose, Slovenija']
        },
        {
            "job" : "Organizing events for people's emotions",
            "employer" : "self",
            "title" : "organizer, facilitator",
            "location" : "various places",
            "dates" : "2006-2014",
            "description" : "events for people to find something",
            "img" : "<img src='img/resume_img12.svg' alt='me, driving the boat' title='me, driving the boat' class='job-img'>",
            "coordinates" : [45.5142898, 13.5908455, 'various places']
        },
        {
            "job" : "Various Jobs at Film festivals",
            "employer" : "LIFFE and Animateka",
            "title" : "variform assistant",
            "location" : "Ljubljana, Slovenija",
            "dates" : "2009-2011",
            "description" : "hosting talks, making video interviews, writing texts and taking care of guests",
            "img" : "<img src='img/resume_img2.svg' alt='me, interviweing a star' title=='me, interviweing a star'>",
            "coordinates" : [46.0569465, 14.5057515, 'Ljubljana, Slovenija']
        },

        {
            "job" : "Making a roof for an old house",
            "employer" : "a project",
            "title" : "Roofing assistant",
            "location" : "Bad Radkersburg, At",
            "dates" : "summer 2010",
            "description" : "working outside to fullfill dreams of manual work",
            "img" : "<img src='img/resume_img1.svg' alt='me, hammering nails' title='me, hammering nails'>",
            "coordinates" : [46.68868029999999, 15.9902556, 'Bad Radkersburg, At']
        },
        {
            "job" : "Diverse jobs with film crews: script girl, assistant",
            "employer" : "Film crews, RTVS",
            "title" : "script girl, assistan, support",
            "location" : "Ljubljana, Slovenija",
            "dates" : "spring 2009-2010",
            "description" : "a pile of people making up life",
            "img" : "<img src='img/resume_img9.svg' alt='me, following the script' title='me, following the script' class='job-img'>",
            "coordinates" : [46.0569465, 14.5057515, 'Ljubljana, Slovenija']
        },
        {
            "job" : "Fish delivery",
            "employer" : "Fish Farm",
            "title" : "fish driver - for restaurants and private clients",
            "location" : "Lucija, Slovenija",
            "dates" : "summers 2007-2008",
            "description" : "delivery drives one to many places",
            "img" : "<img src='img/resume_img16.svg' alt='me, in a fish truck' title='me, in a fish truck' class='job-img'>",
            "coordinates" : [45.5082134, 13.6031335, 'Lucija, Slovenija']
        },
        {
            "job" : "Teaching / taking care of students aged 4 to 20",
            "employer" : "primary and secondary schools - UWC project",
            "title" : "teacher - volunteer",
            "location" : "Chimborazo, Ecuador",
            "dates" : "2006-2007",
            "description" : "teaching English, offering some drawing space and playing group games",
            "img" : "<img src='img/resume_img10.svg' alt='me, learning about teaching' title='me, learning about teaching'  class='job-img'>",
            "coordinates" : [-1.4693018, -78.8169396, 'Chimborazo, Ecuador']
        },
        {
            "job" : "Talking to locals and translating for a group of doctors",
            "employer" : "MedLife",
            "title" : "translator and communicator",
            "location" : "Riobamba, Ecuador",
            "dates" : "March 2007",
            "description" : "facilitating communication between the doctors and the visitors of the mobile clincics",
            "img" : "<img src='img/resume_img6.svg' alt='me, translating' title='me, translating' class='job-img'>",
            "coordinates" : [-1.6635508, -78.654646, 'Riobamba, Ecuador']
        },
        {
            "job" : "Bar maid in a disco, making - selling drinks",
            "employer" : "klub Tivoli",
            "title" : "bar maid",
            "location" : "Portoroz, Slovenija",
            "dates" : "June-July 2007",
            "description" : "people dancing, me earning",
            "img" : "<img src='img/resume_img11.svg' alt='me, earning while pouring a drink' title='me, earning while pouring a drink' class='job-img'>",
            "coordinates" : [45.5142898, 13.5908455, 'Portoroz, Slovenija']
        },
        {
            "job" : "waiting for customers",
            "employer" : "Boat show - Eurofloats",
            "title" : "fair exhibit rapresentative",
            "location" : "Lucija, Slovenija",
            "dates" : "a week in May 2007",
            "description" : "Pontoons are not something that gets sold to passerbies, I was thus filling up the curious and setting up meetings for the occasional customers.",
            "img" : "<img src='img/resume_img7.svg' alt='me, showing a piece of wood' title='me, showing a piece of wood' class='job-img'>",
            "coordinates" : [45.5082134, 13.6031335, 'Lucija, Slovenija']
        },
        {
            "job" : "allround helper",
            "employer" : "fish farm",
            "title" : "little helper",
            "location" : "Seca, Slovenija",
            "dates" : "summers 2004-2006",
            "description" : "catching fish, feeding fish, cleaning fish, sorting fish, seeding shells",
            "img" : "<img src='img/resume_img5.svg' alt='me, and the fish' title='me, and the fish' class='job-img'>",
            "coordinates" : [45.4954628, 13.6120203, 'Seca, Slovenija']
        },
        {
            "job" : "dad's company teaches daugther work",
            "employer" : "Dad",
            "title" : "Family bussiness helper",
            "location" : "Lucija, Slovenija",
            "dates" : "between 2003-2008",
            "description" : "A diving works company, I helped on work sites, filled out bills, answered calls",
            "img" : "<img src='img/resume_img31.svg' alt='me, as a baby duck' title='me, as a baby duck' class='job-img'>",
            "coordinates" : [45.5082134, 13.6031335, 'Lucija, Slovenija']
        },
        {
            "job" : "engaged audience",
            "employer" : "TV Koper",
            "title" : "engaged viewer, and question asker",
            "location" : "Koper, Slovenija",
            "dates" : "winter-spring 2005",
            "description" : "local youth talk show, audience asking guests questions",
            "img" : "<img src='img/resume_img3.svg' alt='me, among other excited audience' title='me, among other excited audience' class='job-img'>",
            "coordinates" : [45.54805899999999, 13.7301877, 'Koper, Slovenija']
        }
        // Format for new entries
        //,
        // {
        //     "job" : "x",
        //     "employer" : "x",
        //     "title" : "x",
        //     "location" : "x",
        //     "dates" : "x",
        //     "description" : "x",
         //   "coordinates" : "insert_coordinates_values"
        // }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "my little port-folio",
            "dates" : "summer 2015",
            "description" : "getting a bit creative in more ways, than just the internet",
            "images" : [
                 "http://my-little-port-folio.appspot.com/img/folio.svg"
            ]
        },
        {
            "title" : "ipnd project",
            "dates" : "spring 2015",
            "description" : "getting to know the internet, making some internet",
            "images" : [
                 "http://my-ipnd.appspot.com/img/homepage/stage5.png"
            ]
        },
        {
            "title" : "making movies",
            "dates" : "long time ago",
            "description" : "was nice, maybe will be, <br>making movies here and there",
            "images" : [
                 "https://upload.wikimedia.org/wikipedia/commons/1/1a/Color_icon_black.svg"
            ]
        },
        // {
        //     "title" : "peoples on a pile",
        //     "dates" : "2007-2013",
        //     "description" : "organizing projects for people to find something",
        //     "images" : [
        //          "https://upload.wikimedia.org/wikipedia/commons/1/1a/Color_icon_black.svg"
        //     ]
        // },
        {
            "title" : "little christmas cards",
            "dates" : "1998-2003",
            "description" : "it was my thing to do, <br> and sparkle glue",
            "images" : [
                 "https://upload.wikimedia.org/wikipedia/commons/1/1a/Color_icon_black.svg"
            ]
        }
        // Format for new entries
        //,
        // {
        //     "title" : "x",
        //     "dates" : "x",
        //     "description" : "x",
        //     "images" : ["x", "y"]
        // }
    ]
};

var places = {
    "countries" : [

        {
            "country" : "croatia",
            "cities" :
            [
                { "city_name" : "savudrija", "coordinates" : [45.49251, 13.5059259, 'savudrija']},
                { "city_name" : "grobnik, rijeka", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "motovun", "coordinates" : [45.3359506, 13.8278605, 'motovun']},
                { "city_name" : "krknata, zaglav", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "dubrovnik", "coordinates" : [42.65066059999999, 18.0944238, 'dubrovnik']},
                { "city_name" : "dugi otok", "coordinates" : [43.9668619, 15.0908147, 'dugi otok']},
                { "city_name" : "mali losinj", "coordinates" : [44.5315814, 14.4720423, 'mali losinj'] }
             ]
        },
        {
            "country" : "Slovenija",
            "cities" : [
                { "city_name" : "piran", "coordinates" : [45.528319, 13.5682895, 'piran']},
                { "city_name" : "soca", "coordinates" : [46.3418804, 13.6664388, 'soca']},
                { "city_name" : "log pri brezovici", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "gornja radgona", "coordinates" : [46.6767099, 15.9910846, 'gornja radgona']},
                { "city_name" : "mezaklja", "coordinates" : [46.6767099, 15.9910846, 'gornja radgona']},
                { "city_name" : "kocevje", "coordinates" : [45.6409009, 14.8633128, 'kocevje'] }
             ]
        },
        {
            "country" : "monaco",
            "cities" : [
                { "city_name" : "monaco", "coordinates" : [43.73841760000001, 7.424615799999999, 'monaco'] }
             ]
        },
        {
            "country" : "andorra",
            "cities" : [
                { "city_name" : "andorra la vella", "coordinates" : [42.50631740000001, 1.5218355, 'andorra la vella'] }
             ]
        },
        {
            "country" : "spain",
            "cities" : [
                { "city_name" : "barcelona", "coordinates" : [41.3850639, 2.1734035, 'barcelona']},
                { "city_name" : "madrid", "coordinates" : [40.4167754, -3.7037902, 'madrid']},
                { "city_name" : "san sebastian", "coordinates" : [43.318334, -1.9812313, 'san sebastian']},
                { "city_name" : "tarifa", "coordinates" : [36.0143209, -5.6044497, 'tarifa']},
                { "city_name" : "gran canaria", "coordinates" : [27.9202202, -15.5474373, 'gran canaria'] }
             ]
        },
        {
            "country" : "germany",
            "cities" : [
                { "city_name" : "stuttgart", "coordinates" : [48.7758459, 9.1829321, 'stuttgart']},
                { "city_name" : "berlin", "coordinates" : [52.52000659999999, 13.404954, 'berlin']},
                { "city_name" : "bremen", "coordinates" : [53.07929619999999, 8.8016937, 'bremen']},
                { "city_name" : "dachau", "coordinates" : [48.2629984, 11.4339022, 'dachau']},
                { "city_name" : "cologne", "coordinates" : [50.937531, 6.9602786, 'cologne']},
                { "city_name" : "freiburg", "coordinates" : [47.9990077, 7.842104299999999, 'freiburg'] }
             ]
        },
        {
            "country" : "denmark",
            "cities" : [
                { "city_name" : "copenhagen", "coordinates" : [55.6760968, 12.5683371, 'copenhagen']},
                { "city_name" : "aarhus", "coordinates" : [56.162939, 10.203921, 'aarhus']},
                { "city_name" : "north denmark", "coordinates" : "insert_city_coordinates_values" }
                    //here maybe problems
             ]
        },
        {
            "country" : "norway",
            "cities" : [
                { "city_name" : "oslo", "coordinates" : [59.9138688, 10.7522454, 'oslo']},
                { "city_name" : "lofoten", "coordinates" : [68.07960899999999, 13.3741914, 'lofoten']},
                { "city_name" : "stjordal", "coordinates" : "insert_city_coordinates_values" }
             ]
        },
        {
            "country" : "finland",
            "cities" : [
                { "city_name" : "ruukki", "coordinates" : [64.6642593, 25.099411, 'ruukki']},
                { "city_name" : "helsinki", "coordinates" : [60.17332440000001, 24.9410248, 'helsinki']},
                { "city_name" : "oulu", "coordinates" : [65.0126148, 25.4714526, 'oulu'] }
             ]
        },
        {
            "country" : "poland",
            "cities" : [
                { "city_name" : "auschwitz", "coordinates" : [50.0343982, 19.2097782, 'auschwitz'] }
             ]
        },
        {
            "country" : "sweden",
            "cities" : [
                { "city_name" : "stoccholm", "coordinates" : [59.32932349999999, 18.0685808, 'stoccholm']},
                { "city_name" : "uddevalla", "coordinates" : "insert_city_coordinates_values" }
                //here maybe problems
             ]
        },
        {
            "country" : "peru",
            "cities" : [
                { "city_name" : "tumbes", "coordinates" : "insert_city_coordinates_values" }
             ]
        },
        {
            "country" : "ecuador",
            "cities" : [
                { "city_name" : "pulingui san pablo", "coordinates" : [-1.562026, -78.804163, 'pulingui san pablo']},
                // problem pulingui san pablo
                { "city_name" : "riobamba", "coordinates" : [-1.6635508, -78.654646, 'riobamba']},
                { "city_name" : "montanita", "coordinates" : [-1.8268465, -80.75297309999999, 'montanita']},
                { "city_name" : "quito", "coordinates" : [-0.1806532, -78.4678382, 'quito']},
                { "city_name" : "banos", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "tena", "coordinates" : [-0.9962972000000001, -77.81360350000001, 'tena']},
                { "city_name" : "otavalo", "coordinates" : [0.2343005, -78.2610672, 'otavalo']},
                { "city_name" : "cuenca", "coordinates" : "insert_city_coordinates_values" }
             ]
        },
        {
            "country" : "italy",
            "cities" : [
                { "city_name" : "val daosta", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "sardegna sud", "coordinates" : [41.963068, 9.184161, 'sardegna sud']},
                { "city_name" : "sardegna nord", "coordinates" : [40.2663275, 8.5797436, 'sardegna nord']},
                { "city_name" : "milano", "coordinates" : [45.4654219, 9.1859243, 'milano']},
                { "city_name" : "napoli", "coordinates" : [40.8517746, 14.2681244, 'napoli']},
                { "city_name" : "venice", "coordinates" : [45.4408474, 12.3155151, 'venice']},
                { "city_name" : "florence", "coordinates" : [43.7695604, 11.2558136, 'florence']},
                { "city_name" : "torino", "coordinates" : [45.070312, 7.686856499999999, 'torino']},
                { "city_name" : "rome", "coordinates" : [41.9027835, 12.4963655, 'rome'] }
            ]
        },
        {
            "country" : "france",
            "cities" : [
                { "city_name" : "ille de re", "coordinates" : [46.1911105, -1.3944629, 'ille de re']},
                { "city_name" : "nantes", "coordinates" : [47.218371, -1.553621, 'nantes']},
                { "city_name" : "reims", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "cannes", "coordinates" : [43.552847, 7.017369, 'cannes']},
                { "city_name" : "paris", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "brest", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "strasbourg", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "biarritz", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "pau", "coordinates" : [43.2951, -0.370797, 'pau'] }
             ]
        },
        {
            "country" : "netherlands",
            "cities" : [
                { "city_name" : "amsterdam", "coordinates" : [52.3702157, 4.895167900000001, 'amsterdam']},
                { "city_name" : "maastricht", "coordinates" : [50.8513682, 5.6909725, 'maastricht']},
                { "city_name" : "gronigen", "coordinates" : [53.2193835, 6.566501799999999, 'gronigen'] }
             ]
        },
        {
            "country" : "belgium",
            "cities" : [
                { "city_name" : "bruxelles", "coordinates" : [50.8503396, 4.3517103, 'bruxelles'] }
             ]
        },
        {
            "country" : "malaysia",
            "cities" : [
                { "city_name" : "palau redang", "coordinates" : "insert_city_coordinates_values"},
                // maybe problem
                { "city_name" : "kuala lumpur", "coordinates" : [3.139003, 101.686855, 'kuala lumpur']},
                { "city_name" : "melaka", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "up malaysia", "coordinates" : [3.0761909, 101.5903589, 'up malaysia'] }
             ]
        },
        {
            "country" : "brunei",
            "cities" : [
                { "city_name" : "brunei", "coordinates" : [4.535277, 114.727669, 'brunei'] }
             ]
        },
        {
            "country" : "singapore",
            "cities" : [
                { "city_name" : "singapore", "coordinates" : [1.352083, 103.819836, 'singapore'] }
             ]
        },
        {
            "country" : "cambodia",
            "cities" : [
                { "city_name" : "phnom penh", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "angkor watt", "coordinates" : [13.4124693, 103.8669857, 'angkor watt'] }
             ]
        },
        {
            "country" : "thailand",
            "cities" : [
                { "city_name" : "koh samui", "coordinates" : [9.5120168, 100.0135929, 'koh samui']},
                { "city_name" : "north thailand", "coordinates" : [15.870032, 100.992541, 'north thailand']},
                { "city_name" : "bangkok", "coordinates" : [13.7563309, 100.5017651, 'bangkok']},
                { "city_name" : "south thailand", "coordinates" : "insert_city_coordinates_values" }
             ]
        },
        {
            "country" : "ukraine",
            "cities" : [
                { "city_name" : "odessa", "coordinates" : [46.482526, 30.7233095, 'odessa'] }
             ]
        },
        {
            "country" : "moldova",
            "cities" : [
                { "city_name" : "chishinau", "coordinates" : [47, 28.916667, 'chishinau']},
                //{ "city_name" : "small town", "coordinates" : [35.0387149, -77.60625, 'small town']},
                { "city_name" : "transnistria", "coordinates" : [47.21529719999999, 29.4638054, 'transnistria'] }
             ]
        },
        {
            "country" : "romania",
            "cities" : [
                { "city_name" : "cluj napoca", "coordinates" : [46.766667, 23.583333, 'cluj napoca']},
                { "city_name" : "bukarest", "coordinates" : [44.4267674, 26.1025384, 'bukarest']},
                { "city_name" : "galati", "coordinates" : "insert_city_coordinates_values" }
             ]
        },
        {
            "country" : "turkey",
            "cities" : [
                { "city_name" : "turkey", "coordinates" : "insert_city_coordinates_values" }
             ]
        },
        {
            "country" : "serbia",
            "cities" : [
                { "city_name" : "beograd", "coordinates" : [44.786568, 20.4489216, 'beograd'] }
             ]
        },
        {
            "country" : "bosna in herzegovina",
            "cities" : [
                { "city_name" : "sarajevo", "coordinates" : [43.8562586, 18.4130763, 'sarajevo']},
                { "city_name" : "banja luka", "coordinates" : [44.7721811, 17.191, 'banja luka']},
                { "city_name" : "mostar", "coordinates" : [43.3422732, 17.8127536, 'mostar'] }
             ]
        },
        {
            "country" : "monte negro",
            "cities" : [
                { "city_name" : "budva", "coordinates" : [42.288056, 18.8425, 'budva'] }
             ]
        },
        {
            "country" : "united kingdom",
            "cities" : [
                { "city_name" : "manchester", "coordinates" : [53.4807593, -2.2426305, 'manchester']},
                { "city_name" : "coventry", "coordinates" : [52.406822, -1.519693, 'coventry']},
                { "city_name" : "london", "coordinates" : [51.5073509, -0.1277583, 'london']},
                { "city_name" : "bideford", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "birmingham, uk", "coordinates" : "insert_city_coordinates_values"},
                { "city_name" : "gibraltar", "coordinates" : "insert_city_coordinates_values" }
            ]
        },
        {
            "country" : "austria",
            "cities" : [
                { "city_name" : "vienna", "coordinates" : [48.2081743, 16.3738189, 'vienna']},
                { "city_name" : "graz", "coordinates" : [47.070714, 15.439504, 'graz']},
                { "city_name" : "bad radkersburg", "coordinates" : [46.68868029999999, 15.9902556, 'bad radkersburg']},
                { "city_name" : "salzburg", "coordinates" : [47.80949, 13.05501, 'salzburg']},
                { "city_name" : "linz", "coordinates" : [48.30694, 14.28583, 'linz'] }
             ]
        },
        {
            "country" : "lichenstein",
            "cities" : [
                { "city_name" : "lichenstein border", "coordinates" : [47.215514, 9.565053, 'lichenstein'] }
             ]
        },
        {
            "country" : "vatican",
            "cities" : [
                { "city_name" : "vatican", "coordinates" : [41.902916, 12.453389, 'vatican'] }
             ]
        },
        {
            "country" : "georgia",
            "cities" : [
                { "city_name" : "poti", "coordinates" : [42.141944, 41.676389, 'poti']},
                { "city_name" : "tbilisi", "coordinates" : [41.716667, 44.783333, 'tbilisi'] }
             ]
        },
        {
            "country" : "armenia",
            "cities" : [
                { "city_name" : "yerevan", "coordinates" : [40.183333, 44.516667, 'yerevan'] }
             ]
        },
        {
            "country" : "iran",
            "cities" : [
                { "city_name" : "teheran", "coordinates" : [35.696111, 51.423056, 'teheran'] }
             ]
        },
        {
            "country" : "cuba",
            "cities" : [
                { "city_name" : "varadero", "coordinates" : [23.179858, -81.1885293, 'varadero']},
                { "city_name" : "havana", "coordinates" : [23.159167, -82.271056, 'havana'] }
                //{ "city_name" : "cuban islands", "coordinates" : [22.0458752, -78.8382644, 'cuban islands'] }
             ]
        },
        {
            "country" : "tunisia",
            "cities" : [
                { "city_name" : "djerba", "coordinates" : [33.8075978, 10.8451467, 'djerba']},
                { "city_name" : "tunisia", "coordinates" : "insert_city_coordinates_values" }
                // problems here
             ]
        },
        {
            "country" : "greece",
            "cities" : [
                { "city_name" : "karpathos", "coordinates" : [35.507574, 27.2121995, 'karpathos'] }
             ]
        },
        {
            "country" : "egypt",
            "cities" : [
                { "city_name" : "sharm el-sheikh", "coordinates" : [27.9158175, 34.3299505, 'sharm el-sheikh'] }
             ]
        },
        {
            "country" : "slovakia",
            "cities" : [
                { "city_name" : "bratislava", "coordinates" : [48.1458923, 17.1071373, 'bratislava'] }
            ]
        },
        {
            "country" : "Chech republic",
            "cities" : [
                { "city_name" : "prague", "coordinates" : [50.0755381, 14.4378005, 'prague'] }
             ]
        },
        {
            "country" : "lithuania",
            "cities" : [
                { "city_name" : "villnius", "coordinates" : [54.6871555, 25.2796514, 'villnius']},
                { "city_name" : "kaunas", "coordinates" : [54.8985207, 23.9035965, 'kaunas'] }
             ]
        },
        {
            "country" : "iceland",
            "cities" : [
                { "city_name" : "Reykjahlid", "coordinates" : "insert_city_coordinates_values" }
             ]
        }

        // Format for new entries
        //,
        // {
        //     "country" : "lithuania",
        //     "cities" : [
        //         { "city_name" : "city name", "coordinates" : "insert_city_coordinates_values"},
        //         { "city_name" : "city name", "coordinates" : "insert_city_coordinates_values" }
        //      ]
        // }
    ]
};


var imgs = [
"<img src='img/resume_img3.svg' alt='me working as a fish'>",
"<img src='img/resume_img4.svg' alt='me working as a fish'>",
"<img src='img/resume_img5.svg' alt='me working as a fish'>",
"<img src='img/resume_img6.svg' alt='me working as a fish'>",
"<img src='img/resume_img7.svg' alt='me working as a fish'>",
"<img src='img/resume_img8.svg' alt='me working as a fish'>",
"<img src='img/resume_img9.svg' alt='me working as a fish'>",
"<img src='img/resume_img10.svg' alt='me working as a fish'>",
"<img src='img/resume_img11.svg' alt='me working as a fish'>",
"<img src='img/resume_img12.svg' alt='me working as a fish'>",
"<img src='img/resume_img13.svg' alt='me working as a fish'>",
"<img src='img/resume_img14.svg' alt='me working as a fish'>",
"<img src='img/resume_img15.svg' alt='me working as a fish'>",
"<img src='img/resume_img16.svg' alt='me working as a fish'>",
"<img src='img/resume_img17.svg' alt='me working as a fish'>",
"<img src='img/resume_img18.svg' alt='me working as a fish'>",
"<img src='img/resume_img19.svg' alt='me working as a fish'>",
"<img src='img/resume_img20.svg' alt='me working as a fish'>",
"<img src='img/resume_img21.svg' alt='me working as a fish'>",
"<img src='img/resume_img22.svg' alt='me working as a fish'>",
"<img src='img/resume_img23.svg' alt='me working as a fish'>",
"<img src='img/resume_img24.svg' alt='me working as a fish'>",
"<img src='img/resume_img25.svg' alt='me working as a fish'>",
"<img src='img/resume_img26.svg' alt='me working as a fish'>",
"<img src='img/resume_img27.svg' alt='me working as a fish'>",
"<img src='img/resume_img28.svg' alt='me working as a fish'>",
"<img src='img/resume_img29.svg' alt='me working as a fish'>",
"<img src='img/resume_img30.svg' alt='me working as a fish'>",
"<img src='img/resume_img31.svg' alt='me working as a fish'>"];

/************************************************************************************************/



//functions for placing content and content display



// imgs.display = function() {
//     for (image in imgs)
//         $("#workExperience").append(imgs[image]);
// }

// imgs.display = function() {
//     var formattedImages = ""
//     for (image in imgs) {
//         formattedImages += imgs[image]
//     }
//     $("#workExperience").append(formattedImages);
// }

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name );
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role );

    $("#header").prepend(HTMLheaderMain)

    $("#intro").prepend(formattedRole)
    $("#intro").prepend(formattedName)

    $("header").prepend(HTMLcontactsStart);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("%data1%", bio.contacts.github.slice(8));  // /data/g can suse if want to change all data in text
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedContacts =  formattedEmail + formattedGithub + formattedMobile + formattedLocation
    $("#topContacts").append(formattedContacts);
    $("#footerContacts").append(formattedContacts);

    if (bio.skills) {
        $("header").append(HTMLskillsStart);
        var formattedSkill = ""
        for (i = 0; len = bio.skills.length, i < len;  i++) {
            formattedSkill += HTMLskills.replace("%data%", bio.skills[i]);
        }
        $("#skills").append(formattedSkill);
        $("header").append(HTMLskillsEnd);
    }
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#image").append(formattedBioPic);

     var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
     $("#welcome").append(formattedWelcomeMessage);
}

work.display = function() {
    var formattedButton = HTMLbutton.replace("%data%", "show all");
    $("#work-h2").append(formattedButton);

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedImage = HTMLimage.replace("%data%", work.jobs[job].img);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].job); //+ " : " + work.jobs[job].title
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedWork = formattedImage + formattedEmployer + formattedTitle + formattedLocation + formattedDate + formattedDescription
        $(".work-entry:last").append(formattedWork);
    }
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",  projects.projects[project].title);
        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedImages = ""
        if (projects.projects[project].images) {
            for (image in projects.projects[project].images) {
                formattedImages += HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            }
        }
        var formattedProjects = formattedTitle + formattedDate + formattedDescription + formattedImages
        $(".project-entry:last").append(formattedProjects);
    }

}

education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolImage = HTMLschoolImage.replace("%data%", education.schools[school].img);
        var formattedUrl = HTMLschoolUrl.replace("%data%", education.schools[school].url);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDegree = HTMLschoolDegree .replace("%data%", education.schools[school].degree);
        var formattedSchool = formattedSchoolImage + formattedUrl + formattedName + formattedDates + formattedLocation + formattedDegree
        $(".education-entry:last").append(formattedSchool);
    }
    for (course in education.courses) {
        $("#courses").append(HTMLcoursesStart);
        var formattedTitle = HTMLtitle.replace("%data%", education.courses[course].title);
        var formattedSchool = HTMLschool.replace("%data%", education.courses[course].school);
        var formattedDates = HTMLdates.replace("%data%", education.courses[course].dates);
        var formattedUrl = HTMLurl.replace("%data%", education.courses[course].url);
        var formattedCourse = formattedUrl + formattedTitle + formattedSchool + formattedDates
        $(".course-entry:last").append(formattedCourse);
    }
}

//display the data
//imgs.display();
bio.display();
work.display();
projects.display();
education.display();


$(document).ready(function(){
    $("button").click(function(){
        if ( $( "button" ).text() == "show all") {
            $("details").attr("open", true);
            $( "button" ).text("hide all");
        } else if ( $( "button" ).text() == "hide all") {
            $("details").attr("open", false);
            $( "button" ).text("show all");
        }

    });
});

// google maps appending
$("#mapDiv").append(googleMap);
$("#mapDiv2").append(googleMap2);



  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */

  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.coordinates);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
        locations.push(education.schools[school].coordinates);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
    locations.push(work.jobs[job].coordinates);
    }

    return locations;
  }



function placeFinder() {

    var locations = [];
    // iterates through school locations and appends each location to the locations array
    for (var place in places.countries) {
      for (city in places.countries[place].cities) {
        locations.push(places.countries[place].cities[city].coordinates);
    }
  }

    return locations;

  }


var coordinates = locationFinder()
console.log(coordinates)

var places_coordinates = placeFinder()
console.log(places_coordinates)



var coordinates = locationFinder()
console.log(coordinates)

var places_coordinates = placeFinder()
console.log(places_coordinates)


var map;
var mgr;

var map_places;
var mgr_places;

function initialize() {
  var myOptions = {
    zoom: 1,
    center: new google.maps.LatLng(0,0),
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  map = new google.maps.Map(document.getElementById("map"), myOptions);
  mgr = new MarkerManager(map);
  map_places = new google.maps.Map(document.getElementById("map2"), myOptions);
  mgr_places = new MarkerManager(map_places);

  google.maps.event.addListener(mgr, "loaded", function() {
    //for (var i = 0; i < 1000; i++)
    for (coordinate_pair in coordinates) {
        console.log(coordinate_pair,coordinates[coordinate_pair][0], coordinates[coordinate_pair][1])
      var marker = new google.maps.Marker({
        //position: new google.maps.LatLng(Math.random() * 180 - 90, Math.random() * 360 - 180),

        position: new google.maps.LatLng(coordinates[coordinate_pair][0], coordinates[coordinate_pair][1]),
        title: coordinates[coordinate_pair][2]


// how to put info window in here? // maybe this http://you.arenot.me/2010/06/29/google-maps-api-v3-0-multiple-markers-multiple-infowindows/
     //    infoWindow = new google.maps.InfoWindow({
     //        content: coordinates[coordinate_pair][2]
     //         });

     // google.maps.event.addListener(marker, 'click', function() {
     //         infowindow.open(map, marker);
         // });


      });
      mgr.addMarker(marker, 0);
    }
    mgr.refresh();
  });
    google.maps.event.addListener(mgr_places, "loaded", function() {
    //for (var i = 0; i < 1000; i++)
    for (coordinate_pair in places_coordinates) {
        console.log(coordinate_pair,places_coordinates[coordinate_pair][0], places_coordinates[coordinate_pair][1])
      var marker = new google.maps.Marker({
        //position: new google.maps.LatLng(Math.random() * 180 - 90, Math.random() * 360 - 180),
        position: new google.maps.LatLng(places_coordinates[coordinate_pair][0], places_coordinates[coordinate_pair][1]),
        title: places_coordinates[coordinate_pair][2]
      });
      mgr_places.addMarker(marker, 0);
    }
    mgr_places.refresh();
  });
}
google.maps.event.addDomListener(window, "load", initialize);


