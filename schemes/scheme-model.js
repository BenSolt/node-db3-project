const db = require("../data/db-config")

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

//GET (FIND STEPS) <----- add Join of steps.
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

////EDIT/UPDATE - THINK ITS WRONG!

function update(user, id) { /// NEED id paramater next to user.
    return db("schemes").update(user).where("id",id)
    // .then(([id]) => {
    //     return findById(id);
    // });
}

//Delete - THINK ITS WRONG!
function remove(id) {
    return db("schemes").where("id",id).delete()
    // .then(([id]) => {
    //     return findById(id);
    // });
}