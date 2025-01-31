const express = require('express');
const fs = require('fs');
const path = require('path');
const moduleLibrary = require('./lib');

const PORT = 3000;

const game_config = {
    '-1': '你输了!',
    0: '平局!',
    1: '你赢了!'
};

const player_won_code = 1,
    player_same_error_code = 9;

let player_won_count = 0,
    player_same_count = 0,
    last_player_action = null,
    player_won_sum = 3;

const TEMPLATE_DIR = path.resolve(__dirname, './source/index.html');

const app = express();

app.get('/favicon.ico', (req, res) => {
    res.status(400);
    res.send('');
    return false;
});

app.get('/game', (req, res) => {
    const {query: {action}} = req;

    if (player_won_count >= player_won_sum || player_won_sum === player_same_error_code) {
        res.status(500);
        res.end('你太厉害了!我不跟你玩儿了!');
        return false;
    }

    if (player_same_count >= player_won_sum) {
        player_won_sum = player_same_error_code;
        res.status(400);
        res.end('你作弊!');
        return false;
    }

    if (last_player_action && last_player_action === action) {
        player_same_count++;
    } else {
        player_same_count = 0;
    }
    last_player_action = action;

    const result = moduleLibrary.game(action);

    if (result === player_won_code) player_won_count++;

    res.status(200);
    res.type('application/json');
    res.end(game_config[result]);
});

app.get('/', (req, res) => {
    res.status(200);
    res.type('text/html');
    res.send(fs.readFileSync(TEMPLATE_DIR, 'utf-8'));
});

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}!`);
});


