const Koa = require('koa');
const moduleLibrary = require('../module');

const game_config = {
    '-1': '你输了!',
    0: '平局!',
    1: '你赢了!'
};

const player_won_code = 1,
    player_same_code = 9;

let player_won_count = 0,
    player_same_count = 0,
    player_won_sum = 3,
    last_player_action = null;

const koa = new Koa();

koa.use(async (ctx, next) => {
    const {request, response} = ctx;
    const {query: {action}} = request;

    if (player_won_count >= player_won_sum || player_won_sum === player_same_code) {
        response.status = 500;
        response.body = '你太厉害了!我不跟你玩儿了!';
        return false;
    }

    if (player_same_count >= player_won_sum) {
        player_won_sum = player_same_code;
        response.statu = 400;
        response.body = '你作弊!';
        return false;
    }

    if (last_player_action && action === last_player_action) {
        player_same_count++;
    } else {
        player_same_count = 0;
    }
    last_player_action = action;

    await next();

    if (ctx.player_won) player_won_count++;
});

koa.use(async ctx => {
    const {request, response} = ctx;
    const {query: {action}} = request;

    await new Promise(resolve => {
        const timer = setTimeout(() => {
            const result = moduleLibrary.game(action);
            if (result === player_won_code) ctx.player_won = true;
            response.status = 200;
            response.type = 'application/json';
            response.body = game_config[result];
            resolve();
            clearTimeout(timer);
        }, 999);
    });
});

module.exports = koa;
