if (typeof window === 'undefined' || typeof self === 'undefined') {
    global.window = {};
    global.self = {};
}

const {List} = require('../../../../components/build/components_index');

const App = (columns) => {
    return <List
        columns={columns}
        sort={() => {
        }}
        filter={() => {
        }}
    />
};

module.exports = App;
