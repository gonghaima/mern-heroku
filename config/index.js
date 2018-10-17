// config/index.js
const dbuser = "mern";
const dbpassword = "Passw0rd";
const MONGODB_URI = `mongodb://${dbuser}:${dbpassword}@ds133360.mlab.com:33360/mern`;

module.exports = MONGODB_URI;
