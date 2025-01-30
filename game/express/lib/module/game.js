module.exports = (player_action) => {
    const game_selections = ['scissor', 'rock', 'paper'];

    if (!game_selections.includes(player_action)) {
        console.error('请输入准确的比赛游戏选项手势:【scissor rock or paper】');
        return false;
    }

    const selections_length = game_selections.length;

    const computer_random = Math.floor(Math.random() * selections_length);

    const computer_action = game_selections[computer_random];

    let player_won_index = computer_random + 1;
    if (player_won_index >= selections_length) player_won_index = 0;

    if (player_action === computer_action) {
        console.log('平局!');
        return 0;
    } else if (player_action === game_selections[player_won_index]) {
        console.log('玩家赢!');
        return 1;
    } else {
        console.log('电脑赢!');
        return -1;
    }
};
