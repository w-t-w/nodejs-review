const path = require('path');
const Koa = require('koa');
const KoaMount = require('koa-mount');
const KoaStatic = require('koa-static');
const factory = require('./factory');
const template_source_config = require('../source/play/template');

const PORT = 3001;

const STATIC_DIR = path.resolve(__dirname, '../source/play');

factory.injection('rpc', require('./requester/rpc'));
factory.injection('http', require('./requester/http'));

module.exports = (route_config) => {
    const koa = new Koa();

    koa.use(KoaStatic(STATIC_DIR));

    koa.use(async (ctx, next) => {
        const {url} = ctx;
        if (url === '/favicon.ico') return false;
        await next();
    });

    Object.entries(route_config).forEach(([config_pathname, config_value]) => {
        const {config, template: template_source} = config_value;
        const template = template_source_config(template_source);

        koa.use(KoaMount(config_pathname, async (ctx) => {
            const {request, response} = ctx;

            const config_real = eval(config);

            const config_transform = Object.entries(config_real).reduce((ret, [transform_key, transform_value]) => {
                ret[transform_key] = factory(transform_value);
                return ret;
            }, {});

            const config_result = {}
            await Promise.all(Object.entries(config_transform).map(([result_key, result_value]) => {
                return result_value(request.query).then(value => {
                    config_result[result_key] = value.result;
                    return value.result;
                });
            }));

            response.status = 200;

            try {
                response.body = template(config_result);
            } catch (err) {
                response.status = 500;
                response.body = err.stack;
            }
        }));
    });

    koa.listen(PORT, () => {
        console.log(`The play page is running at http://localhost:${PORT}!`);
    });
};
