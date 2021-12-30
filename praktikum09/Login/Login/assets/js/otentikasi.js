function jalankanAlert() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    if (username == "hilmi0406" && password == "12345678") {
        Swal.fire(
            'Login Berhasil!',
            'Terimakasih sudah login!',
            'success'
        )
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username atau password salah!',
        })
    }
}