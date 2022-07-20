const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async ({ user = null, params }, res) => {
            const foundUser = await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
              });
              return res.json(foundUser);
          },
    },
    Mutation: {}
}

module.exports = resolvers;