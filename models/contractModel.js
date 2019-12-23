var db = require('../utils/db');

module.exports = {
    getContracts: (id, key) => {
        if (key === 0) {
            key = "u1.id";
        } else {
            key = "t.id_user";
        }
        return db.query(`select c.*, u1.name as learner, u1.avatarLink, u2.name as learner, m.name as major_name
        from contracts as c, tutors as t, users as u1, users as u2, majors as m
        where c.id_learner = u1.id and c.id_tutor = t.id_user and c.id_tutor = u2.id and c.major = m.id and ${key} = ${id}`);
    },
    CreateContract: (id, body) => {
        return db.query(`insert into contracts (id_learner, id_tutor, StartDate, EndDate, totalPrice, status, complain, feedback, rating, DueDate, major)
        values(${body.id}, ${null}, ${null}, ${null}, ${null}, 0, '', '', ${0}, ${null}, ${1});`)
    },
    agreeToContract: (id_contract, id_tutor) => {
        let today = new Date();
        return db.query(`update contracts set id_tutor = ${id_tutor}, StartDate = ${today} where id = ${id_contract}`)
    }
}