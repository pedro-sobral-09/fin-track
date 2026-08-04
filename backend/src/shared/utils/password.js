import bcrypt from 'bcrypt';

function hashPassword(password) {
    return bcrypt.hash(password, 10); 
}

function compare(password, password2){
    return bcrypt.compare(password, password2);
}

export default {
    hashPassword,
    compare
}