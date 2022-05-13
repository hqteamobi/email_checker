const email = document.getElementById('email')
const alert = document.querySelector('.alert')

//Biểu thức chính quy cho email
const patternEmail = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/
function checkText() {
  if (email.value.length == 0) {
    // chưa nhập email thì thông báo mất đi
    alert.style.padding = '0'
    // set nội dung thông báo trống
    alert.textContent = ''
  } else {
    // Đã nhập  gì đó vào email
    if (email.value.match(patternEmail)) {
      // đúng định dạng
      alert.textContent = 'Email hợp lệ'
      alert.style.color = '#14f0ba'
    } else {
      console.log('khong dung')
      // không đúng định dạng
      alert.style.padding = '0px 20px'
      alert.textContent = 'Email không hợp lệ'
      alert.style.color = '#f01448'
    }
  }
}

email.addEventListener('keyup', () => {
  checkText()
})

// Mở chương trình lên thì check ngay là có gì trong email hay chưa
// nếu chưa thì đóng thông báo lại

checkText()
