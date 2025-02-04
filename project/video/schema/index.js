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
    
    type Mutation {
        praise(id: ID!): Int!
    }
`);

schema.getQueryType().getFields().comments.resolve = () => {
    return data;
};

schema.getMutationType().getFields().praise.resolve = (source, args) => {
    const id = Number(args.id);
    const comment = data.find(item => item.id === id);
    if (comment) return ++comment['praiseNum'];
    else return 0;
}

module.exports = schema;
