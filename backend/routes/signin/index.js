const withPassword = require("./withPassword");
const withwebauthn = require("./withWebauthn");
const findacc = require("./findacc");

module.exports = [withPassword, findacc, withwebauthn]