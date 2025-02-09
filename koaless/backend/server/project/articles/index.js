const service = require('../../lib');

const server = service.http;

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`The articles server is running at http://localhost:${PORT}!`);
});
