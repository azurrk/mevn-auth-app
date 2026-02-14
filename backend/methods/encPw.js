const bcrypt = require('bcryptjs')  

async function cryptPw (pw) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(pw, salt)
    return hash
}

async function comparePw (pw, hash) {
    return await bcrypt.compare(pw, hash)
}

module.exports.cryptPw = cryptPw
module.exports.comparePw = comparePw