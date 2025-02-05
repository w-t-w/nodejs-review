const vm = require('vm');
const fs = require('fs');

const template_source = {};

const template_context = vm.createContext({
    _(val) {
        if (!val) return '';
        return val.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;');
    },
    include(name, data) {
        const template = template_source[name] || createTemplate(name);
        return template(data);
    }
});

function createTemplate(name) {
    template_source[name] = vm.runInNewContext(`
    (function(data) {
        with(data) {
            return \`${fs.readFileSync(name, 'utf-8')}\`;
        }
    });`, template_context);
    return template_source[name];
}

module.exports = createTemplate;
