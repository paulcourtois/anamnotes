const Message = require('../../models/message')

module.exports = {
  messages: async () => {
    try {
      const messagesFetched = await Message.find({});
      return messagesFetched.map(message => {
        return {
          ...message._doc,
          _id: message.id,
          createdAt: new Date(message._doc.createdAt).toISOString(),
        }
      })
    } catch (err){
      throw err ;
    }
  },

  createMessage: async (args) => {
    try {
      const { content, author } = args.message;
      const message = new Message({
        content,
        author,
      })
      const newMessage = await message.save();
      return { ...newMessage._doc, _id: newMessage.id}
    } catch (err){
      throw err ;
    }
  },
}