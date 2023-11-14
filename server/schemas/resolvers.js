const { User, Book } = require('./models');
const { signToken, AuthenticationError } = require('../utils/auth');
const resolvers = {
    Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError('You need to be logged in!');
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { book }, context) => {
        console.log('saving book')
      if (context.user) {
        const update = await User.findOneAndUpdate(
          {_id: context.user._id},
          {$pull: {savedBooks: {bookID} } },
          {new: true}
        )
        return removeBook;
      }
      throw new AuthenticationError('You need to be signed in to save a book');
    }}
}
module.exports = resolvers;