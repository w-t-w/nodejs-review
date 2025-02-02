// const vm = require('vm');
//
// const player = {
//     name: 'black_myth_wukong',
//     age: 26,
//     gender: true,
//     hobby: {
//         sports: ['basketball', 'computer games', 'football']
//     }
// };
//
// const introduce = `<p>Hi, I'm <b>${player.name}</b>, ${player.age} year's old, a ${player.gender ? 'boy' : 'girl'}, I love <i>${player.hobby.sports.join(',')}</i></p>`;
// console.log(introduce);
//
// const introduce_vm = '`<p>Hi, I\'m <b>${player.name}</b>, ${player.age} year\'s old, a ${player.gender ? \'boy\' : \'girl\'}, I love <i>${player.hobby.sports.join(\',\')}</i></p>`';
// const introduce_ano = vm.runInNewContext(introduce_vm, {player});
// console.log(introduce_ano);
//
// const introduce_vm_ano = "`<p>Hi, I'm <b>${player.name}</b>, ${player.age} year's old, a ${player.gender ? 'boy' : 'girl'}, I love <i>${player.hobby.sports.join(',')}</i></p>`";
// const introduce_aside = vm.runInNewContext(introduce_vm_ano, {player});
// console.log(introduce_aside);
//
// const introduce_vm_aside = "`${_(\`<p>Hi, I'm <b>${player.name}</b>, ${player.age} year's old, a ${player.gender ? 'boy' : 'girl'}, I love <i>${player.hobby.sports.join(',')}</i></p>\`)}`";
// const introduce_result = vm.runInNewContext(introduce_vm_aside, {
//     player,
//     _(val) {
//         if (!val) return '';
//         return val.replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/'/g, '&#39;')
//             .replace(/"/g, '&quot;')
//     }
// });
// console.log(introduce_result);
//
// const introduce_vm_result = "`${_(\`<p>Hi, I'm <b>${player.name}</b>, ${player.age} year's old, a ${player.gender ? 'boy' : 'girl'}, I love ${include(player)}</p>\`)}`";
// const introduce_main = vm.runInNewContext(introduce_vm_result, {
//     player,
//     _(val) {
//         if (!val) return '';
//         return val.replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/'/g, '&#39;')
//             .replace(/"/g, '&quot;')
//     },
//     include(_player) {
//         return `<i>${_player.hobby.sports.join(',')}</i>`
//     }
// });
// console.log(introduce_main);
//
// const introduce_vm_source = {
//     templateA: "`${_(\`<p>Hi, I'm <b>${_player.name}</b>, ${_player.age} year's old, a ${_player.gender ? 'boy' : 'girl'}, I love ${include('templateB', {_player})}</p>\`)}`",
//     templateB: "`<i>${_player.hobby.sports.join(',')}</i>`"
// };
//
// Object.entries(introduce_vm_source).forEach(([key, value]) => {
//     introduce_vm_source[key] = vm.runInNewContext(`
//         (function (data) {
//             with(data) {
//                 return ${value};
//             }
//         });
//     `, {
//         _(val) {
//             if (!val) return '';
//             return val.replace(/&/g, '&amp;')
//                 .replace(/</g, '&lt;')
//                 .replace(/>/g, '&gt;')
//                 .replace(/'/g, '&#39;')
//                 .replace(/"/g, '&quot;');
//         },
//         include(name, data) {
//             const template = introduce_vm_source[name];
//             return template(data);
//         }
//     });
// });
//
// const templateA = introduce_vm_source['templateA'];
// const introduce_end = templateA({_player: player});
// console.log(introduce_end);

console.log('NodeJS《第二十课: NodeJS vm 模板引擎》已回顾完毕并通过!如需查看使用,将上述代码的注释剃掉删除即可!');
