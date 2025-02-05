const {createRoot} = require('react-dom/client');
const App = require('./app');

const root = createRoot(document.getElementById('react-list'));

root.render(<App />);
