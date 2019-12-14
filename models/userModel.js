var db = require('../utils/db');

module.exports = {
    getAll: (key, value) => {
        if (key)
            return db.query(`SELECT * FROM USERs WHERE ${key} LIKE ${value}`);
        return db.query(`SELECT * FROM USERs`);
    },
    getByEmail: email => {
        return db.query(`SELECT * FROM USERs WHERE email = '${email}'`);
    },
    getByFacebookId: id => {
        return db.query(`SELECT * FROM USERs WHERE accType = 1 AND id_social = '${id}'`);
    },
    getByGoogleId: id => {
        return db.query(`SELECT * FROM USERs WHERE accType = 2 AND id_social = '${id}'`);
    },
    register: user => {
        return db.add(user);
    },
    addFacebookUser: (user, role) => {
        return db.addFacebookUser(user, role);
    },
    addGoogleUser: (user, role) => {
        return db.addGoogleUser(user, role);
    },
    addTutor: (user, id) => {
        return db.addTutor(user, id);
    },
    getLearnerDetail: (id) => {
        return db.getLearnerDetail(id);
    },
    getTutorDetail: (id) => {
        return db.getTutorDetail(id);
    },
    getByID: (id) => {
        return db.query(`select * from users where id = ${id}`);
    },
}