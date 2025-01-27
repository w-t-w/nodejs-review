console.log('geekBangIng!');

exports.name = 'Black Myth WuKong';
exports.age = 31;
exports.gender = true;
exports.hobby = {
    sports: ['basketball', 'table tennis', 'football'],
    subject: {
        math: (a, b) => {
            return a + b;
        }
    }
};

const timer = setTimeout(() => {
    console.log(exports.name);
    console.log(exports.hobby.sports.join(','));
    console.log(exports.hobby.subject.math(100, 5));

    exports.name = 'Black Myth WuKong!Loong!';
    exports.hobby.sports = ['basketball', 'Black Myth Series'];
    exports.hobby.subject.math = (a, b) => {
        return a / b;
    };

    clearTimeout(timer);
}, 666);

module.exports = {
    name: 'Gary_wtw',
    age: 32,
    gender: false,
    hobby: {
        sports: ['volleyball', 'swimming'],
        subject: {
            math: (a, b) => {
                return a + b + b;
            }
        }
    }
};
