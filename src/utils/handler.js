import template from '../templates/default.hbs';

const convert = obj => {
    return JSON.parse(template(obj));
};

export { convert };
