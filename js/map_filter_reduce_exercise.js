"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// .filter create array o f objects
let filterUsers = users.filter(user => user.languages.length >= 3);
console.log(filterUsers);

// .map create an array of strings
let usersEmail = users.map(user => user.email);
console.log(usersEmail);

// .reduce to get total years
let totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(totalYears);

// calculate average years
let avgerageYears = totalYears / users.length;
console.log(avgerageYears);

// .reduce to get the longest email of the users
let longEmail = users.reduce((email, user) => {
    if (user.email.length < email.length) {
        return email;
    } else {
        return user.email
    }
}, '')
console.log(longEmail);

let userNames = users.reduce((total, user, index) => {
    if (index === users.length - 1) {
        return total + user.name;
    } else {
        return total + user.name
    }
}, '')
console.log(`Your instructors are:  ${userNames}`);

// bonus: .reduce to get the list of languages
let languagesList = users.reduce((languages, user) => {
    user.languages.forEach((language) => {
        if(!languages.includes(language)) {
            languages.push(language);
        }
    });
    return languages;
}, [])
