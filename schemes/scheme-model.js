const db = require("../data/dbConfig")

module.exports = {
    find,
    findById, 
    findSteps,
    add,
    update,
    remove
};

//GET (FIND)
function find() {
    //select * from users
    return db.select("*").from("schemes");
}

//GET (FIND BY ID)
function findById(userId) {
    //select * from users id 
    return db("schemes")
    .where({id: userId})
    .first(); // = same as-> const user = users[0]
}

//GET (FIND STEPS)
function findSteps(userId) {
    return db.select("*").from("schemes")
    .where({id: userId})
}

//POST (CREATE)
function add(user) {
    return db("schemes").insert(user)
    //option 1.
    // .then(ids => {
    //     return findById (ids[0]);
    // });
    
    //option 2.
    .then(([id]) => {
        return findById(id);
    });
}

////EDIT/UPDATE - correct???????????

function update(user) {
    return db("schemes").update(user)
    .then(([id]) => {
        return findById(id);
    });
}

//Delete - correct ???????
function remove(user) {
    return db("schemes").remove(user)
    // .then(([id]) => {
    //     return findById(id);
    // });
}