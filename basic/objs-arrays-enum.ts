/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'yota',
    age: 30,
    hobbies: ['sports','cooking'],
    role: [2, 'author'],
};

person.role.push('admin');

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
} */
enum Role {
    ADMIN, READ_ONLY, AUTHOR
};

const person = {
    name: 'yota',
    age: 30,
    hobbies: ['sports','cooking'],
    role: Role.AUTHOR,
};

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR) {
    console.log(typeof Role.AUTHOR, Role.AUTHOR);
    console.log('管理者ユーザーです');
}