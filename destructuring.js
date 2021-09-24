const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '01717555555', address: 'chandpur', dress: 'silver' };

/* declear variable in one line to access property */
const { phone, price, dress, id } = fish;

// const phone = fish.phone;
// const id = fish.id;
// const name = fish.name;

console.log(dress, phone)
console.log(id, phone)


const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food);