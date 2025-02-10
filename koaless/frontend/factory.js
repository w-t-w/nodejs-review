const factory_source = {};

const factory = function (config) {
    const {before: before_config, then: then_config, cache: catch_real_config, protocol} = config;
    const before = before_config || (data => data),
        then = then_config || (data => data),
        catch_config = catch_real_config || (error => error);

    const requester_config = factory_source[protocol];
    requester_config.compile(config);

    return async (data) => {
        try {
            data = before(data);
        } catch (err) {
            catch_config(err);
            return Promise.resolve(null);
        }

        return {
            result: await requester_config.request(data)
                .then(then)
                .catch(catch_config)
        };
    };
};

factory.injection = (protocol, requester) => {
    factory_source[protocol] = requester;
};

module.exports = factory;
