if (typeof window === 'undefined' || typeof self === 'undefined') {
    global.window = {};
    global.self = {};
}

const {useState} = require('react');

const {List} = require('../../../../components/build/components_index');

const App = () => {
    const [columns, setColumns] = useState(window.react_list_data);
    const [sort, setSort] = useState(window.react_list_sort);
    const [filter, setFilter] = useState(window.react_list_filter);

    return <List
        columns={columns}
        sort={(sort_action) => {
            fetch(`/api?sort=${sort_action}&filter=${filter}`)
                .then(response => response.json())
                .then(columns_result => {
                    setColumns([...columns_result]);
                    setSort(sort_action)
                })
                .catch(error => {
                    console.error(error);
                });
        }}
        filter={(filter_action) => {
            fetch(`/api?sort=${sort}&filter=${filter_action}`)
                .then(response => response.json())
                .then(columns_result => {
                    setColumns([...columns_result]);
                    setFilter(filter_action);
                })
                .catch(error => {
                    console.error(error);
                });
        }}
    />;
};

module.exports = App;
