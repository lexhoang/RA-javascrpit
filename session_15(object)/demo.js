/* name,  age ,address : thuộc tính (property), thuộc tính ngăn cách với nhau bởi dấu " , "
        talk : phương thức của đối tượng

        CRUD---> create,read,update,delete

*/
// let person_1 = {
//     name: "Hoang",
//     age: 23,
//     address: {
//         district: "Cầu Giấy",
//         street: "Yên Hòa"
//     },
//     talk: function () {
//         console.log("Hello");
//     }
// }

// //CREATE:
// // let a = 7;
// // let b = a;
// // a = 9;
// // console.log(b);
// // let student = {
// //     name: "mini",
// // }
// // let duong = student;
// // student.name = "Đạt"
// // console.log(duong);

// // //READ
// // for (let key in person_1) {
// //     console.log(person_1[key]);
// // }

// // //UPDATE
// // console.log(person_1);
// // person_1.age = 30;
// // console.log(person_1);

// // //DELETE
// // delete person_1.address;
// // console.log(person_1);

// // //Spread dạng shallow clone
// // let person_2 = { ...person_1 };
// // console.log(person_2);

// // person_1.address.district = "Hoa Bằng";
// // console.log(person_2);

// //Object.assign dạng shallow clone
// // let person_2 = Object.assign({}, person_1);
// // console.log("person_2", person_2);

// // person_1.address.district = "Hoa Bằng"
// // console.log("person_2", person_2);

// // //DEEP clone
// // let person_2 = JSON.parse(JSON.stringify(person_1));
// // person_1.address.district = "Hoa Bằng"
// // console.log(person_1);
// // console.log(person_2);


//Object constructor bản thiết kế

function User(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}
let hoang = new User("Hoang", "Lê", 23);
let son = new User("Son", "Nguyễn", 32);
console.log(hoang);
console.log(son);

//New Set,
// let array = [1, 2, 4, 5, 3, 6, 6, 3, 32, 35];
// let result = new Set(array);
// console.log("result: ", result);

//New Date
let date = new Date();
console.log(date.getFullYear());
