/*
 * Primitive Type - Immutability
*/

let name = 'Qara';
// let name2 = 'Humbatov';

let name2 = name;
name2 = 'Humbatov';

console.log(name);
console.log(name2);

/*
 * Object Type - Immutability
*/

const user = {
    name: 'Qara',
    isActive: true,
}

// CLONING
// const user2 = {...user};
const user2 = Object.assign({}, user);
user2.name = 'Humbatov';

console.log(user);
console.log(user2);