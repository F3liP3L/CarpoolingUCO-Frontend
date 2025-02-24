class MessagesModel {
    constructor(level = '', content = '') {
        this.level = level;
        this.content = content;
    }
}

module.exports = MessagesModel;

const MessagesModel = require('./MessagesModel');

class ResponseEntityModel {
    constructor(data = [], messages = []) {
        this.data = data;
        this.messages = messages.map(msg => new MessagesModel(msg.level, msg.content));
    }
}

module.exports = ResponseEntityModel;
