// alert
// prompt - prompt('nhap so a:')
//console.log(a)

//kieu du lieu
// var, let, const, bool, float, int, string, array, object
// var: biến đơn thuần, global var
// const: hằng số , không đc phép thay đổi
// let: chỉ dùng trong 1 khối lệnh nhất định
// boolean(bool): chỉ trả về true/false
//string: xâu chuối

//var ten_bien = gia tri
// =: phép gán
// ==: so sánh ngang bằng
// ===: tuyệt đối bằng

//Ep kieu du lieu
// parseInt(): Chuyển đổi một chuỗi thành một số nguyên
// parseFloat(): Chuyển đổi một chuỗi thành một số thực
// Number(): Chuyển đổi một giá trị thành một số
// String(): Chuyển đổi một giá trị thành một chuỗi
// Boolean(): Chuyển đổi một giá trị thành một giá trị boolean

// var a = prompt("Nhap ten:");
// var b = parseInt(prompt("Nhap tuoi:"));
// var c = 2023 - b;
// console.log("Ten ban la: " + a)
// console.log("Nam sinh: " + c)

// var matches = document.getElementsByClassName("test");
// document.write("so phan tu: "+ matches.length);
// matches[0].style.fontWeight = "bold";

var a = parseInt(prompt("Nhap so a: "))
var b = parseInt(prompt("Nhap so b: "))
var c = parseInt(prompt("Nhap so c: "))
var delta = b*b-4*a*c;
var NK = -b/(2*a);
var x1 = (-b+Math.sqrt(delta))/(2*a)
var x2 = (-b-Math.sqrt(delta))/(2*a)
if(delta < 0){
    document.write("Phương trình vô nghiệm")
}else if(delta == 0){
    document.write("PT có nghiệm kép: " + NK)
}else if(delta > 0){
    document.write("Nghiệm 1: " + x1 + " " + "Nghiệm 2: " + x2)
}

var a = parseInt(prompt("Nhap so a: "))
var b = parseInt(prompt("Nhap so b: "))
var c = parseInt(prompt("Nhap so c: "))
TB = (a+b+c)/3
document.write("Trung binh điểm: " + TB)

// Bai 1
for (let i=0; i<5; i++)
{
    document.write("*****");
    document.writeln("");
}

// Bai 2
var name = prompt("Nhap ten cua ban")
var year = number(prompt("Nhap nam sinh"))
var age = 2023 - yearOfBirth
console.log("Ten cua ban la:" + name)
console.log("Tuoi cua ban la:" + year)

// Bai 3
var firstNumb=parseFloat(prompt("Nhap so thu nhat"));
var secondNumb=parseFloat(prompt("Nhap so thu hai"));
var sum = firstNumb + secondNumb;
var diff = firstNumb - secondNumb;
var multi = firstNumb * secondNumb;
var div = firstNumb / secondNumb;
document.write("Tong hai so: " + sum);
document.write("Hieu hai so: " + diff);
document.write("Tich hai so: " + multi);
document.write("Thuong hai so: " + div.toFixed(2));

// Bai 4
var diemToan=parseFloat(prompt("Nhap diem mon Toan"));
var diemLy=parseFloat(prompt("Nhap diem mon Ly"));
var diemHoa=parseFloat(prompt("Nhap diem mon Hoa"));
var diemTrungBinh=(diemToan+diemLy+diemHoa)/3;
document.write("Diem trung binh ca ba mon: " + diemTrungBinh.toFixed(2));

// Bai 5
var x=parseFloat(prompt("Nhap so x"));
var y=parseFloat(prompt("Nhap so y"));
var p=x*y;
var s=x+y;
var q=Math.pow(s,2)+p*(s-x)*(p+y);
document.write("p = " + p);
document.write("s = " + s);
document.write("q = " + q);