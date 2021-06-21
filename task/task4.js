let bio = {
    name : 'Muhammad Alief Abdussalam',
    email : 'aliefabdussalam766@gmail.com',
    hobby : 'reading',
}
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    ...bio,
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
console.log(data);
let { street, suite, city, zipcode } = data.address;
console.log(`${street},${city}`);