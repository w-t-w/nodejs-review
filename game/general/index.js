// const params_argv = process.argv,
//     params_argv_length = params_argv.length;
//
// const player_action = params_argv[params_argv_length - 1];
//
// const computer_selections = ['scissor', 'rock', 'paper'];
//
// console.log('第一届 NodeJS 杯《石头、剪刀与布》的游戏大赛正式开始！');
//
// if (!computer_selections.includes(player_action)) {
//     console.error('请输入准确的比赛游戏选项手势【scissor rock or paper】!');
//     process.exit(1);
// }
//
// const selections_length = computer_selections.length;
//
// const computer_random = Math.floor(Math.random() * selections_length);
//
// const computer_action = computer_selections[computer_random];
//
// let player_won_index = computer_random + 1;
// if (player_won_index >= selections_length) {
//     player_won_index = 0;
// }
//
// console.log('比赛结果为:');
// console.log(`玩家: ${player_action}, 电脑: ${computer_action}`);
// if (computer_action === player_action) {
//     console.log('平局!');
// } else if (player_action === computer_selections[player_won_index]) {
//     console.log('玩家赢!');
// } else {
//     console.log('电脑赢!');
// }

console.log('NodeJS《第二课: 简易的剪刀、石头与布的游戏》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
