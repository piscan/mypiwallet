import Swal from 'sweetalert2'
export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 800,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  export const Warning = Swal.mixin({
    toast:false ,
    title : 'Keep Safe ',
    text:"Keystore file includes encrypted privatekey keep safe it. ",
    icon: 'warning',
    showCancelButton:true 
  })
