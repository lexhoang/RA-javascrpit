//////////////////////            CRUD             /////////////////////////
// let listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("Mảng ban đầu " + listNumber);

// /////    CREATE     /////
// listNumber.push(10);
// console.log("Thêm vào đầu mảng " + listNumber);
// console.log("");
// listNumber.unshift(0);
// console.log("Thêm vào cuối mảng " + listNumber);
// console.log("");

// /////    READ     /////
// for (let i = 0; i < listNumber.length; i++) {
//     console.log("Đọc các phần tử trong mảng " + listNumber[i]);
//     console.log("");
// }

// /////    UPDATE     /////
// listNumber[4] = 9;
// console.log("Thay thế giá trị cho phần tử trong mảng " + listNumber);
// console.log("");

// /////    DELETE     /////
// listNumber.splice(3, 1, 8); //Tác động trực tiếp vào mảng ban đầu
// console.log("Xóa phần tử trong mảng " + listNumber);
// console.log("");

// listNumber.slice(8, 1); //Tác động trực tiếp vào mảng ban đầu
// console.log("Xóa phần tử trong mảng " + listNumber);
// console.log("");

//////////////////////            METHOD             /////////////////////////
let listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

///////    FILTER     ///////
console.log("Tìm số chẵn bằng filter");
let filter = listNumber.filter((value, index, array) => {
    return value % 2 == 0;
})
console.log(filter);
//Trả về mang chứa các phần tử thỏa mãn điều kiện

///////    MAP     ///////
console.log("Tìm số chẵn bằng map");
let map = listNumber.map((value, index, array) => {
    return value % 2 == 0;
})
console.log(map);
//Tạo ra mảng mới có độ dài bằng mảng ban đầu và các giá trị thỏa mãn điều kiện bằng true

///////    FOR EACH     ///////
let sum = 0;
listNumber.forEach((value, index, array) => {
    sum += value;
})
console.log("sum: " + sum);
