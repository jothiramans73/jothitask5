let resume = {
    "personalData" : {
        "name" : "Jothiraman S",
        "age" : 24,
        "mobileNumber" : "0123456789",
        "emailId" : "jothixyz@gmail.com"
    },

    "education" : [
        {
            "class" : 10,
            "schoolName" : "ABCDschool",
            "yearOfPassing" : 2015,
            "percentage" : "77%"
        },
        {
            "class" : 12,
            "schoolName" : "XYZschool",
            "yearOfPassing" : 2017,
            "percentage" : "68%"
        },
        {
            "degree" : "B.Sc MATHEMATICS",
            "collegeName" : "SSSS ARTS AND SCIENCE COLLEGE",
            "graduatedYear" : 2020,
            "percentage" : "63%"
        }
    ],

    "skills" : {
        "programmingLanguage" : [ "Javascript", "Python" ],
        "framework" : [ "Bootstrap", "Reactjs", "Expressjs" ],
        "techStack" : [ "MERN STACK" ],
        "versionControl" : "Git and Github"
    },

    "languages" : [ "Tamil", "English", "Telugu", "Kannada" ]
}

let keys = Object.keys(resume);  //object keys
let keysLength = keys.length;    //keys length

//////////for loop///////////

for(let i=0;i<keysLength;i++){
    console.log(keys[i]);
    console.log(resume[keys[i]]);
    console.log("\n");
}

/////for in loop/////

for(let key in resume){
    console.log(key);
    console.log(resume[key]);
    console.log("\n");
}

/////for of loop/////

for(let key of keys){
    console.log(key);
    console.log(resume[key]);
    console.log("\n");
}

/////forEach loop/////

keys.forEach((key)=>(console.log(key,"\n",resume[key],"\n")));