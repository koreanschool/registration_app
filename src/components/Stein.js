import SteinStore from 'stein-js-client';

const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/5d3fb20987c49c04cac13693"
);
const username = "admin"; //this is so bad
const password = "Office925"; //this is also super bad

function writeToDatabase(parentInfo, student) {
    let registration = {...parentInfo, ...student};
    store.append("Database", [registration], 
    {
        authentication: { username: username, password: password }
    })
    .then(res => {
        console.log(res);
        {window.location.href='/confirmation'};
    }).catch(err => {
        console.log(err);
        {window.location.href='/confirmation'};
    });
}

export default writeToDatabase;