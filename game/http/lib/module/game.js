module.exports = (player_action) => {
    const computer_selections = ['scissor', 'rock', 'paper'];

    if (!computer_selections.includes(player_action)) {
        console.error('请输入准确的比赛游戏选项手势【scissor rock or paper】!');
        process.exit(1);
    }

    const selections_length = computer_selections.length;

    const computer_random = Math.floor(Math.random() * selections_length),
        computer_action = computer_selections[computer_random];

    let player_won_index = computer_random + 1;
    if (player_won_index >= selections_length) player_won_index = 0;

    console.log('比赛结果为:');
    console.log(`玩家: ${player_action}, 电脑: ${computer_action}`);
    if (player_action === computer_action) {
        console.log('平局!');
        return 0;
    } else if (player_action === computer_selections[player_won_index]) {
        console.log('玩家赢!');
        return 1;
    } else {
        console.log('电脑赢!');
        return -1;
    }
};
