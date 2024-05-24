// iterate overall for loops(for, for in, for each, for of)

let empdet = [{
    "name" : "Keerthana Ravi",
    "designation" : "Developer",
    "email" : "xyz@ijk.com",
    "mobile" : "1234456",
    "Address" : "India",
    "Education" : "MCA",
    "experience" : "2 Years",
    "Achievements" : "More prizes of cultural activities"
},
{
    "experience" : "2 Years",
    "Education" : "MCA",
    "Companyname" : "xyz tech solution",
    "Achievements" : "Project on IRIS"
},
{
    "Education" : "MCA",
    "institute" : "Madras university",
    "percentage" : "67%",
    "experience" : "2 Years",
    "Achievements" : "Project on IRIS"
},
{
    "skills" : "fullstack developer",
    "languages" : "English",
    "Education" : "Diploma in Beautician",
    "Achievements" : "Certified Hairstylist and beautician",
    "experience" : "2 Years",
}
];

// For

for(let i = 0; i<empdet.length; i++){
    console.log("For loop Answer is : ", empdet[i]);
}

// For each

empdet.forEach(element => {
    console.log("For Each Answer is : ",element.experience);
});

// // For in

for (const a in empdet) {
    if (empdet.hasOwnProperty(a)) {
        const element = empdet[a];
        console.log("For IN Answer is : ",element.Education);
        
    }
}

// // For of
for (const num of empdet) {
    console.log("For Of Answer is : ",num.Achievements);
}