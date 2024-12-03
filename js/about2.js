var arrtenKH = [];

function getValueUser() {
  var khachHang = new SmartPhone();
  var arrInput = Array.from(document.querySelectorAll('form input, form select'));

  for (var input of arrInput) {
    var id = input.id;
    khachHang[id] = input.value;
  }

  return khachHang;
}


document.getElementById("btnThemNV").onclick = function (event) {
  event.preventDefault();
  // tạo ra một mảng chứa dữ liệu của nhanVien

  // lấy dữ liệu nhân viên trên từng input : hàm getValueUser
  var khachHang = getValueUser();

  console.log(khachHang);
  if (validateSmartPhone(khachHang)) {
  //   var requiredFields = ['tenKH', 'cccd', 'phone', 'email', 'thetinDung', 'nganHang'];
  
    arrtenKH.push(khachHang);
    document.getElementById("formQLNV").reset();
    luuDuLieuLocalStorage("arrtenKH", arrtenKH);
    hienThiDuLieu();
  }

};
//---------HIỂN THỊ DỮ LIỆU------------

function hienThiDuLieu(arr) {
  arr = arr || arrtenKH;

  var content = arr.map(function (khachHang) {
    var newtenKH = new SmartPhone();
    Object.assign(newtenKH, khachHang);

    return `
      <tr>
            <td>${newtenKH.tenKH}</td>
            <td>${newtenKH.cccd}</td>
            td>${newtenKH.phone}</td>
            <td>${newtenKH.email}</td>
            <td>${newtenKH.theTinDung}</td>
            <td>${newtenKH.nganHang}</td>
           <td>
          <button onclick="xoaDuLieuNhanVien('${newtenKH.tenKH}')" class="btn btn-danger">Xoá</button>
          <button data-target="#myModal" data-toggle="modal" onclick="getInfoUser('${newtenKH.tenKH}')"  class="btn btn-warning ml-3">Sửa</button>
        </td>
      </tr>
    `;
  }).join('');

  document.getElementById("tableDanhSach").innerHTML = content;
}

//---------------lưu dữ liệu local----------------

 function luuDuLieuLocalStorage(key, value) {
  var stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}
//---------------LẤY dữ liệu local----------------
function layDuLieuLocalStorage(key) {
  var dataLocal = localStorage.getItem("arrtenKH");

  if (dataLocal) {
    var convertData = JSON.parse(dataLocal);
    arrtenKH.length = 0; // Clear existing array
    arrtenKH.push(...convertData);
    hienThiDuLieu();
  }
}

layDuLieuLocalStorage();
//-------------XOÁ DỮ LIỆU---------------
function xoaDuLieuNhanVien(tenKH) {
  var index = arrtenKH.findIndex(item => item.tenKH === tenKH);

  if (index !== -1) {
    arrtenKH.splice(index, 1);
    luuDuLieuLocalStorage("arrtenKH", arrtenKH);
    hienThiDuLieu();
  } else {
    alert("Không tìm thấy thông tin ");
  }
}
///-----------cập nhật----------------

function getInfoUser(tenKH) {
  var tenKHIndex = arrModel.find(sanPham => sanPham.tenKH === tenKH);

  if (tenKHIndex) {
    var arrInput = document.querySelectorAll("#myModal input, #myModal select");
    for (var htmlDom of arrInput) {
      var id = htmlDom.id;
      htmlDom.value = tenKHIndex[id];
    }
  }

  $("#myModal").modal("show");
}

function updateValueUser() {
  var khachHang = getValueUser();

  for (var i = 0; i < arrtenKH.length; i++) {
    if (khachHang.tenKH === arrtenKH[i].tenKH) {
      arrtenKH[i] = khachHang;
    }
  }

  luuDuLieuLocalStorage("arrtenKH", arrtenKH);
  hienThiDuLieu();
  document.getElementById("formQLNV").reset();
  document.getElementById("tenKH").readOnly = false;
}

document.getElementById("btnCapNhat").addEventListener("click", updateValueUser);
//--------------TÌM KÍM-------------------
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btnTimNV').addEventListener('click', function () {
    var searchValue = document.getElementById('searchName').value.toLowerCase();
    var tableRows = document.querySelectorAll('#tableDanhSach tr');

    for (var i = 0; i < tableRows.length; i++) {
      var rowData = tableRows[i].querySelectorAll('td');
      var found = false;

      for (var j = 0; j < rowData.length; j++) {
        var cellData = rowData[j].textContent.toLowerCase();
        if (cellData.indexOf(searchValue) > -1) {
          found = true;
          break;
        }
      }

      if (found) {
        tableRows[i].style.display = '';
      } else {
        tableRows[i].style.display = 'none';
      }
    }
  });
  hienThiDuLieu();
}); 

//--------------------------
// var arrtenKH = [];

// function getValueUser() {
//   var khachHang = new SmartPhone();
//   var arrInput = Array.from(document.querySelectorAll('form input, form select'));

//   arrInput.forEach(function (input) {
//     var id = input.id;
//     khachHang[id] = input.value;
//   });

//   return khachHang;
// }

// document.getElementById("btnThemNV").onclick = function (event) {
//   event.preventDefault();
//   var khachHang = getValueUser();

//   if (validateSmartPhone(khachHang)) {
//     arrtenKH.push(khachHang);
//     document.getElementById("formQLNV").reset();
//     luuDuLieuLocalStorage("arrtenKH", arrtenKH);
//     hienThiDuLieu();
//   }
// };

// function hienThiDuLieu(arr) {
//   arr = arr || arrtenKH;

//   var content = arr.map(function (khachHang) {
//     var newtenKH = new SmartPhone();
//     Object.assign(newtenKH, khachHang);

//     return `
//       <tr>
//         <td>${newtenKH.tenKH}</td>
//         <td>${newtenKH.cccd}</td>
//         <td>${newtenKH.phone}</td>
//         <td>${newtenKH.email}</td>
//         <td>${newtenKH.theTinDung}</td>
//         <td>${newtenKH.nganHang}</td>
//         <td>
//           <button onclick="xoaDuLieuNhanVien('${newtenKH.tenKH}')" class="btn btn-danger">Xoá</button>
//           <button data-target="#myModal" data-toggle="modal" onclick="getInfoUser('${newtenKH.tenKH}')" class="btn btn-warning ml-3">Sửa</button>
//         </td>
//       </tr>
//     `;
//   }).join('');

//   document.getElementById("tableDanhSach").innerHTML = content;
// }

// function luuDuLieuLocalStorage(key, value) {
//   var stringValue = JSON.stringify(value);
//   localStorage.setItem(key, stringValue);
// }

// function layDuLieuLocalStorage(key) {
//   var dataLocal = localStorage.getItem("arrtenKH");

//   if (dataLocal) {
//     var convertData = JSON.parse(dataLocal);
//     arrtenKH.length = 0;
//     arrtenKH.push(...convertData);
//     hienThiDuLieu();
//   }
// }

// layDuLieuLocalStorage();

// function xoaDuLieuNhanVien(tenKH) {
//   var index = arrtenKH.findIndex(item => item.tenKH === tenKH);

//   if (index !== -1) {
//     arrtenKH.splice(index, 1);
//     luuDuLieuLocalStorage("arrtenKH", arrtenKH);
//     hienThiDuLieu();
//   } else {
//     alert("Không tìm thấy thông tin");
//   }
// }

// function getInfoUser(tenKH) {
//   var tenKHIndex = arrtenKH.find(sanPham => sanPham.tenKH === tenKH);

//   if (tenKHIndex) {
//     var arrInput = document.querySelectorAll("#myModal input, #myModal select");
//     arrInput.forEach(function (htmlDom) {
//       var id = htmlDom.id;
//       htmlDom.value = tenKHIndex[id];
//     });
//   }

//   $("#myModal").modal("show");
// }

// function updateValueUser() {
//   var khachHang = getValueUser();

//   for (var i = 0; i < arrtenKH.length; i++) {
//     if (khachHang.tenKH === arrtenKH[i].tenKH) {
//       arrtenKH[i] = khachHang;
//     }
//   }

//   luuDuLieuLocalStorage("arrtenKH", arrtenKH);
//   hienThiDuLieu();
//   document.getElementById("formQLNV").reset();
//   document.getElementById("tenKH").readOnly = false;
// }

// document.getElementById("btnCapNhat").addEventListener("click", updateValueUser);

// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('btnTimNV').addEventListener('click', function () {
//     var searchValue = document.getElementById('searchName').value.toLowerCase();
//     var tableRows = document.querySelectorAll('#tableDanhSach tr');

//     for (var i = 0; i < tableRows.length; i++) {
//       var rowData = tableRows[i].querySelectorAll('td');
//       var found = false;

//       for (var j = 0; j < rowData.length; j++) {
//         var cellData = rowData[j].textContent.toLowerCase();
//         if (cellData.indexOf(searchValue) > -1) {
//           found = true;
//           break;
//         }
//       }

//       tableRows[i].style.display = found ? '' : 'none';
//     }
//   });

//   hienThiDuLieu();
// });

