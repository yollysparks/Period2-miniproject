var mongoose = require("mongoose");
var Position = require("../models/position");
var User = require("../facades/userFacade");


async function login(username, password, longitude, latitude, distance) {

    try {
        const user = await db.findUser(username, password);
        if (user != null) {
            const loc = {
                'type': 'point',
                'coordinates': [longitude, latitude]
            }
            const pos = Position.findOneAndUpdate({user:user.id}, {user: user, loc: loc}, {upsert: true}).exec();

            const friends = findFriends(loc, distance*1000);
            return friends;
        }
        else {
            throw {msg: "Wrong username or password", status: 403};
        }
    }
    catch (err) {
        throw err;
    }
}
async function findFriends(point, dist) {
    return Position.find(
        {
            loc:
            { $near: {
                $geometry: point,
                $maxDistance: dist
            }}
        }
    );
}

module.exports = login;