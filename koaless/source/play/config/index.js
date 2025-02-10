const IP = '127.0.0.1',
    PORT = 3000;

const config = {
    column: {
        protocol: 'rpc',
        ip: IP,
        port: PORT,
        timeout: 6666,
        protobufFile: require('../proto/columns.proto'),
        requestStruct: 'ColumnRequest',
        responseStruct: 'ColumnResponse',
        before: (data) => {
            return data;
        },
        then: (result) => {
            return result.column;
        },
        catch: (err) => {
            console.error(err);
        }
    },
    articleList: {
        protocol: 'http',
        url: 'http://127.0.0.1:4000',
        before: (data) => {
            return data;
        },
        then: (result) => {
            return JSON.parse(result).data.list;
        },
        catch: (err) => {
            console.error(err);
        }
    }
};

module.exports = config;


