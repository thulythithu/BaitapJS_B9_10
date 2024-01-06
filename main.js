function layTenNv() {
  var dsTr = document.querySelectorAll("#tableDanhSach");
  console.log(dsTr);
}
var dsnv = [];
function btnthemNV() {
  console.log("yes");

  var tK = document.getElementById("tknv").value;
  var hoTen = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var matKhau = document.getElementById("password").value;
  var ngayLam = document.getElementById("datepicker").value;
  var luongCoBan = document.getElementById("luongCB").value * 1;
  var chucVu = document.getElementById("chucvu").value;
  var gioLam = document.getElementById("gioLam").value * 1;
  var nv = {
    tK: tK,
    hoTen: hoTen,
    email: email,
    matKhau: matKhau,
    ngayLam: ngayLam,
    luongCoBan: luongCoBan,
    chucVu: chucVu,
    gioLam: gioLam,
  };

  dsnv.push(nv);
  var contentHTML = "";
  for (var i = 0; i < dsnv.length; i++) {
    var data = dsnv[i];
    var trString = `<tr>
    <td>${data.tK}</td>
    <td>${data.hoTen}</td>
    <td>${data.email}</td>
    <td>0</td>
    <td> <button class='btn btn-danger'>Delete</button></td>
    </tr>`;
    contentHTML = contentHTML + trString;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
