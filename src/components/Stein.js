import SteinStore from 'stein-js-client';

const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/5d3fb20987c49c04cac13693"
);
const username = "admin"; //this is so bad
const password = "Office925"; //this is also super bad

function writeToDatabase(parentInfo, student) {
    let registration = {...parentInfo, ...student};
    writeRegistration(registration);
}

function writeRegistration(registration) {
    store.append("Database", [registration], 
    {
        authentication: { username: username, password: password }
    })
    .then(res => {
        // console.log(res);
        {window.location.href='/confirmation'};
    }).catch(err => {
        // console.log(err);
        {window.location.href='/confirmation'};
    });
}

async function searchDatabase(email) {
    // console.log("em: " + email);
    return await store.read("Semester1",     {
        authentication: { username: username, password: password },
        search: { email: email }
    })
    .then(data => {
        // console.log("Found " + data.length + " student(s): ");
        // data.forEach(element => {
        //     console.log(element.engName);
        // });
        // console.log(" Would you like to re-register them?");
        return data;
      }).catch(err => {
        console.log(err);
    });
}

export default {writeToDatabase, searchDatabase, writeRegistration};