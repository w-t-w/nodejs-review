const {buildSchema} = require('graphql');
const data = require('../data');

const schema = buildSchema(`
    type Comment {
        id: ID!
        avatar: String
        name: String
        isTop: Boolean
        content: String
        publishDate: String
        commentNum: Int
        praiseNum: Int
    }
    type Query {
        comments: [Comment]
    }
`);

schema.getQueryType().getFields().comments.resolve = () => {
    return data;
};

module.exports = schema;
