const vm = require('vm');

const template_context = vm.createContext({});

function createTemplate(template_content) {
    return vm.runInNewContext(`
        (function(data) {
            with(data) {
                return \`${template_content}\`;
            }
        });
    `, template_context);
}

module.exports = createTemplate;
