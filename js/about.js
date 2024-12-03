// var arrtenKH = [];

// function getValueUser() {
//   var khachHang = new SmartPhone();
//   var arrInput = Array.from(document.querySelectorAll('form input, form select'));

//   for (var input of arrInput) {
//     var id = input.id;
//     khachHang[id] = input.value;
//   }

//   return khachHang;
// }


// document.getElementById("btnThemSP").onclick = function (event) {
//   event.preventDefault();
//   // tạo ra một mảng chứa dữ liệu của nhanVien

//   // lấy dữ liệu nhân viên trên từng input : hàm getValueUser
//   var khachHang = getValueUser();

//   console.log(khachHang);
//   if (validateSmartPhone(khachHang)) {
//   //   var requiredFields = ['tenKH', 'cccd', 'phone', 'email', 'thetinDung', 'nganHang'];
  
//     arrtenKH.push(khachHang);
//     document.getElementById("formQLNV").reset();
//     luuDuLieuLocalStorage("arrtenKH", arrtenKH);
//     hienThiDuLieu();
//   }

// };
// //---------HIỂN THỊ DỮ LIỆU------------

// function hienThiDuLieu(arr) {
//   arr = arr || arrtenKH;

//   var content = arr.map(function (khachHang) {
//     var newtenKH = new SmartPhone();
//     Object.assign(newtenKH, khachHang);

//     return `
//       <tr>
//             <td>${newtenKH.tenKH}</td>
//             <td>${newtenKH.cccd}</td>
//             td>${newtenKH.phone}</td>
//             <td>${newtenKH.email}</td>
//             <td>${newtenKH.theTinDung}</td>
//             <td>${newtenKH.nganHang}</td>
//            <td>
//           <button onclick="xoaDuLieuNhanVien('${newtenKH.tenKH}')" class="btn btn-danger">Xoá</button>
//           <button data-target="#myModal" data-toggle="modal" onclick="getInfoUser('${newtenKH.tenKH}')"  class="btn btn-warning ml-3">Sửa</button>
//         </td>
//       </tr>
//     `;
//   }).join('');

//   document.getElementById("tableDanhSach1").innerHTML = content;
// }

// //---------------lưu dữ liệu local----------------

//  function luuDuLieuLocalStorage(key, value) {
//   var stringValue = JSON.stringify(value);
//   localStorage.setItem(key, stringValue);
// }
// //---------------LẤY dữ liệu local----------------
// function layDuLieuLocalStorage(key) {
//   var dataLocal = localStorage.getItem("arrtenKH");

//   if (dataLocal) {
//     var convertData = JSON.parse(dataLocal);
//     arrtenKH.length = 0; // Clear existing array
//     arrtenKH.push(...convertData);
//     hienThiDuLieu();
//   }
// }

// layDuLieuLocalStorage();
// //-------------XOÁ DỮ LIỆU---------------
// function xoaDuLieuNhanVien(tenKH) {
//   var index = arrtenKH.findIndex(item => item.tenKH === tenKH);

//   if (index !== -1) {
//     arrtenKH.splice(index, 1);
//     luuDuLieuLocalStorage("arrtenKH", arrtenKH);
//     hienThiDuLieu();
//   } else {
//     alert("Không tìm thấy thông tin ");
//   }
// }
// ///-----------cập nhật----------------

// function getInfoUser(tenKH) {
//   var tenKHIndex = arrtenKH.find(khachHang => khachHang.tenKH === tenKH);

//   if (tenKHIndex) {
//     var arrInput = document.querySelectorAll("#myModal input, #myModal select");
//     for (var htmlDom of arrInput) {
//       var id = htmlDom.id;
//       htmlDom.value = tenKHIndex[id];
//     }
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
// //--------------TÌM KÍM-------------------
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

//       if (found) {
//         tableRows[i].style.display = '';
//       } else {
//         tableRows[i].style.display = 'none';
//       }
//     }
//   });
//   hienThiDuLieu();
// }); 

// // //--------------------------
// // // var arrtenKH = [];

// // // function getValueUser() {
// // //   var khachHang = new SmartPhone();
// // //   var arrInput = Array.from(document.querySelectorAll('form input, form select'));

// // //   arrInput.forEach(function (input) {
// // //     var id = input.id;
// // //     khachHang[id] = input.value;
// // //   });

// // //   return khachHang;
// // // }

// // // document.getElementById("btnThemNV").onclick = function (event) {
// // //   event.preventDefault();
// // //   var khachHang = getValueUser();

// // //   if (validateSmartPhone(khachHang)) {
// // //     arrtenKH.push(khachHang);
// // //     document.getElementById("formQLNV").reset();
// // //     luuDuLieuLocalStorage("arrtenKH", arrtenKH);
// // //     hienThiDuLieu();
// // //   }
// // // };

// // // function hienThiDuLieu(arr) {
// // //   arr = arr || arrtenKH;

// // //   var content = arr.map(function (khachHang) {
// // //     var newtenKH = new SmartPhone();
// // //     Object.assign(newtenKH, khachHang);

// // //     return `
// // //       <tr>
// // //         <td>${newtenKH.tenKH}</td>
// // //         <td>${newtenKH.cccd}</td>
// // //         <td>${newtenKH.phone}</td>
// // //         <td>${newtenKH.email}</td>
// // //         <td>${newtenKH.theTinDung}</td>
// // //         <td>${newtenKH.nganHang}</td>
// // //         <td>
// // //           <button onclick="xoaDuLieuNhanVien('${newtenKH.tenKH}')" class="btn btn-danger">Xoá</button>
// // //           <button data-target="#myModal" data-toggle="modal" onclick="getInfoUser('${newtenKH.tenKH}')" class="btn btn-warning ml-3">Sửa</button>
// // //         </td>
// // //       </tr>
// // //     `;
// // //   }).join('');

// // //   document.getElementById("tableDanhSach").innerHTML = content;
// // // }

// // // function luuDuLieuLocalStorage(key, value) {
// // //   var stringValue = JSON.stringify(value);
// // //   localStorage.setItem(key, stringValue);
// // // }

// // // function layDuLieuLocalStorage(key) {
// // //   var dataLocal = localStorage.getItem("arrtenKH");

// // //   if (dataLocal) {
// // //     var convertData = JSON.parse(dataLocal);
// // //     arrtenKH.length = 0;
// // //     arrtenKH.push(...convertData);
// // //     hienThiDuLieu();
// // //   }
// // // }

// // // layDuLieuLocalStorage();

// // // function xoaDuLieuNhanVien(tenKH) {
// // //   var index = arrtenKH.findIndex(item => item.tenKH === tenKH);

// // //   if (index !== -1) {
// // //     arrtenKH.splice(index, 1);
// // //     luuDuLieuLocalStorage("arrtenKH", arrtenKH);
// // //     hienThiDuLieu();
// // //   } else {
// // //     alert("Không tìm thấy thông tin");
// // //   }
// // // }

// // // function getInfoUser(tenKH) {
// // //   var tenKHIndex = arrtenKH.find(sanPham => sanPham.tenKH === tenKH);

// // //   if (tenKHIndex) {
// // //     var arrInput = document.querySelectorAll("#myModal input, #myModal select");
// // //     arrInput.forEach(function (htmlDom) {
// // //       var id = htmlDom.id;
// // //       htmlDom.value = tenKHIndex[id];
// // //     });
// // //   }

// // //   $("#myModal").modal("show");
// // // }

// // // function updateValueUser() {
// // //   var khachHang = getValueUser();

// // //   for (var i = 0; i < arrtenKH.length; i++) {
// // //     if (khachHang.tenKH === arrtenKH[i].tenKH) {
// // //       arrtenKH[i] = khachHang;
// // //     }
// // //   }

// // //   luuDuLieuLocalStorage("arrtenKH", arrtenKH);
// // //   hienThiDuLieu();
// // //   document.getElementById("formQLNV").reset();
// // //   document.getElementById("tenKH").readOnly = false;
// // // }

// // // document.getElementById("btnCapNhat").addEventListener("click", updateValueUser);

// // // document.addEventListener('DOMContentLoaded', function () {
// // //   document.getElementById('btnTimNV').addEventListener('click', function () {
// // //     var searchValue = document.getElementById('searchName').value.toLowerCase();
// // //     var tableRows = document.querySelectorAll('#tableDanhSach tr');

// // //     for (var i = 0; i < tableRows.length; i++) {
// // //       var rowData = tableRows[i].querySelectorAll('td');
// // //       var found = false;

// // //       for (var j = 0; j < rowData.length; j++) {
// // //         var cellData = rowData[j].textContent.toLowerCase();
// // //         if (cellData.indexOf(searchValue) > -1) {
// // //           found = true;
// // //           break;
// // //         }
// // //       }

// // //       tableRows[i].style.display = found ? '' : 'none';
// // //     }
// // //   });

// // //   hienThiDuLieu();
// // // });
// // //-----------------------------
// // var arrtenKH = [];

// // function getValueUser() {
// //   var khachHang = new SmartPhone();
// //   var arrInput = Array.from(document.querySelectorAll('form input, form select'));

// //   arrInput.forEach(function (input) {
// //     var id = input.id;
// //     khachHang[id] = input.value;
// //   });

// //   return khachHang;
// // }

// // document.getElementById("btnThemSP").onclick = function (event) {
// //   event.preventDefault();
  
// //   var khachHang = getValueUser();

// //   if (validateSmartPhone(khachHang)) {
// //     arrtenKH.push(khachHang);
// //     document.getElementById("formQLNV").reset();
// //     luuDuLieuLocalStorage("arrtenKH", arrtenKH);
// //     hienThiDuLieu();
// //   }
// // };

// // function hienThiDuLieu(arr) {
// //   arr = arr || arrtenKH;

// //   var content = arr.map(function (khachHang) {
// //     var newtenKH = new SmartPhone();
// //     Object.assign(newtenKH, khachHang);

// //     return `
// //       <tr>
// //         <td>${newtenKH.tenKH}</td>
// //         <td>${newtenKH.cccd}</td>
// //         <td>${newtenKH.phone}</td>
// //         <td>${newtenKH.email}</td>
// //         <td>${newtenKH.theTinDung}</td>
// //         <td>${newtenKH.nganHang}</td>
// //         <td>
// //           <button onclick="xoaDuLieuNhanVien('${newtenKH.tenKH}')" class="btn btn-danger">Xoá</button>
// //           <button data-target="#myModal" data-toggle="modal" onclick="getInfoUser('${newtenKH.tenKH}')" class="btn btn-warning ml-3">Sửa</button>
// //         </td>
// //       </tr>
// //     `;
// //   }).join('');

// //   document.getElementById("tableDanhSach1").innerHTML = content;
// // }

// // function luuDuLieuLocalStorage(key, value) {
// //   var stringValue = JSON.stringify(value);
// //   localStorage.setItem(key, stringValue);
// // }

// // function layDuLieuLocalStorage() {
// //   var dataLocal = localStorage.getItem("arrtenKH");

// //   if (dataLocal) {
// //     var convertData = JSON.parse(dataLocal);
// //     arrtenKH.length = 0; // Clear existing array
// //     arrtenKH.push(...convertData);
// //     hienThiDuLieu();
// //   }
// // }

// // function xoaDuLieuNhanVien(tenKH) {
// //   var index = arrtenKH.findIndex(item => item.tenKH === tenKH);

// //   if (index !== -1) {
// //     arrtenKH.splice(index, 1);
// //     luuDuLieuLocalStorage("arrtenKH", arrtenKH);
// //     hienThiDuLieu();
// //   } else {
// //     alert("Không tìm thấy thông tin ");
// //   }
// // }

// // function getInfoUser(tenKH) {
// //   var tenKHIndex = arrtenKH.find(khachHang => khachHang.tenKH === tenKH);

// //   if (tenKHIndex) {
// //     var arrInput = document.querySelectorAll("#myModal input, #myModal select");
// //     arrInput.forEach(function (htmlDom) {
// //       var id = htmlDom.id;
// //       htmlDom.value = tenKHIndex[id];
// //     });
// //   }

// //   $("#myModal").modal("show");
// // }

// // function updateValueUser() {
// //   var khachHang = getValueUser();

// //   for (var i = 0; i < arrtenKH.length; i++) {
// //     if (khachHang.tenKH === arrtenKH[i].tenKH) {
// //       arrtenKH[i] = khachHang;
// //     }
// //   }

// //   luuDuLieuLocalStorage("arrtenKH", arrtenKH);
// //   hienThiDuLieu();
// //   document.getElementById("formQLNV").reset();
// //   document.getElementById("tenKH").readOnly = false;
// // }

// // document.getElementById("btnCapNhat").addEventListener("click", updateValueUser);

// // document.addEventListener('DOMContentLoaded', function () {
// //   document.getElementById('btnTimNV').addEventListener('click', function () {
// //     var searchValue = document.getElementById('searchName').value.toLowerCase();
// //     var tableRows = document.querySelectorAll('#tableDanhSach1 tr');

// //     for (var i = 0; i < tableRows.length; i++) {
// //       var rowData = tableRows[i].querySelectorAll('td');
// //       var found = false;

// //       for (var j = 0; j < rowData.length; j++) {
// //         var cellData = rowData[j].textContent.toLowerCase();
// //         if (cellData.indexOf(searchValue) > -1) {
// //           found = true;
// //           break;
// //         }
// //       }

// //       tableRows[i].style.display = found ? '' : 'none';
// //     }
// //   });

// //   layDuLieuLocalStorage();
// //   hienThiDuLieu();
// // });
var arrModel = [];

function getValueUser() {
  var sanPham = new SmartPhone();
  var arrInput = document.querySelectorAll('form input, form select');

  for (var input of arrInput) {
    var id = input.id;
    sanPham[id] = input.value;
  }

  return sanPham;
}

document.getElementById("btnThemNV").onclick = function (event) {
  event.preventDefault();

  var sanPham = getValueUser();

  if (validateSmartPhone(sanPham)) {
    arrModel.push(sanPham);
    document.getElementById("formQLNV").reset();
    luuDuLieuLocalStorage("arrModel", arrModel);
    hienThiDuLieu();
  }
};
///----------hiển thị data------------
function hienThiDuLieu(arr) {
  arr = arr || arrModel;

  var content = arr.map(function (sanPham) {
    var newModel = new SmartPhone();
    Object.assign(newModel, sanPham);

    return `
      <tr>
        <td>${newModel.moDel}</td>
        <td>${newModel.name}</td>
        <td>${newModel.giaThue}</td>
        <td>${newModel.maIMEI}</td>
        <td>${newModel.datepicker}</td>
        <td>${newModel.tenNV}</td>
        <td>${newModel.tinhTrang}</td>
        <td>
          <button onclick="xoaDuLieuNhanVien('${newModel.moDel}')" class="btn btn-danger">Xoá</button>
          <button data-target="#myModal" data-toggle="modal" onclick="getInfoUser('${newModel.moDel}')"  class="btn btn-warning ml-3">Sửa</button>
        </td>
      </tr>
    `;
  }).join('');

  document.getElementById("tableDanhSach").innerHTML = content;
}
//-----------------VALIDATION -------------
function validateSmartPhone(sanPham) {
  var requiredFields = ['moDel', 'name', 'giaThue', 'maIMEI', 'datepicker', 'tenNV', 'tinhTrang'];

  for (var field of requiredFields) {
    if (!sanPham[field]) {
      alert("Vui lòng nhập đầy đủ thông tin cho máy!");
      return false;
    }
  }

  return true;
}
//---------------lưu dữ liệu local----------------
function luuDuLieuLocalStorage(key, value) {
  var stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}
//---------------LẤY dữ liệu local----------------  
function layDuLieuLocalStorage(key) {
  var dataLocal = localStorage.getItem("arrModel");

  if (dataLocal) {
    var convertData = JSON.parse(dataLocal);
    arrModel.length = 0; // Clear existing array
    arrModel.push(...convertData);
    hienThiDuLieu();
  }
}

layDuLieuLocalStorage();
//--------------DELETE-------------
function xoaDuLieuNhanVien(moDel) {
  var index = arrModel.findIndex(item => item.moDel === moDel);

  if (index !== -1) {
    arrModel.splice(index, 1);
    luuDuLieuLocalStorage("arrModel", arrModel);
    hienThiDuLieu();
  } else {
    alert("Không tìm thấy điện thoại có mã: " + moDel);
  }
}
//----------------CẬP NHẬT---------------
function getInfoUser(moDel) {
  var modelIndex = arrModel.find(sanPham => sanPham.moDel === moDel);

  if (modelIndex) {
    var arrInput = document.querySelectorAll("#myModal input, #myModal select");
    for (var htmlDom of arrInput) {
      var id = htmlDom.id;
      htmlDom.value = modelIndex[id];
    }
  }

  $("#myModal").modal("show");
}


function updateValueUser() {
  var sanPham = getValueUser();

  for (var i = 0; i < arrModel.length; i++) {
    if (sanPham.moDel === arrModel[i].moDel) {
      arrModel[i] = sanPham;
    }
  }

  luuDuLieuLocalStorage("arrModel", arrModel);
  hienThiDuLieu();
  document.getElementById("formQLNV").reset();
  document.getElementById("moDel").readOnly = false;
}

document.getElementById("btnCapNhat").onclick = updateValueUser;

// -------------TÌM KIẾM-------------
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
// document.getElementById('btnHome').addEventListener('click', function () {
//   loadHomePage();
// });

// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelector('#sidebar li.active a').addEventListener('click', function () {
//     loadHomePage();
//   });

//   document.querySelector('a[href="about.html"]').addEventListener('click', function (event) {
//     event.preventDefault();
//     fetch('about.html')
//       .then(response => response.text())
//       .then(data => {
//         document.getElementById('content').innerHTML = data;
//       })
//       .catch(error => console.error('Error loading about page:', error));
//   });

//   function loadHomePage() {
//     document.getElementById('content').innerHTML = `
//       <h1>Welcome to the Main Page</h1>
//       <p>This is the default content.</p>
//     `;
//   }
// });

