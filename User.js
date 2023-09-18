class User {
    constructor() {
        this.registrationForm = document.getElementById("form");
        this.dataTabel = document.getElementById("dataTabel");
        this.namaInput = document.getElementById("nama");
        this.umurInput = document.getElementById("umur");
        this.uangSanguInput = document.getElementById("uangSangu");

        this.registrationForm.addEventListener("submit", (event) => {
            event.preventDefault();
            this.submitForm();
        });
    }

    submitForm() {
        const nama = this.namaInput.value;
        const umur = parseInt(this.umurInput.value);
        const uangSangu = parseInt(this.uangSanguInput.value);

        // Validasi input
        if (nama.length < 10) {
            Swal.fire({
                title: 'Gagal!',
                text: 'Nama minimal 10 karakter!',
                icon: 'error',
                confirmButtonText: 'Kembali'
            })            
            return;
        }

        if (umur < 25) {
            Swal.fire({
                title: 'Gagal!',
                text: 'Umur minimal 25 tahun!',
                icon: 'error',
                confirmButtonText: 'Kembali'
            })
            return;
        }

        if (uangSangu < 100000 || uangSangu > 1000000) {
            Swal.fire({
                title: 'Gagal!',
                text: 'Uang sangu harus antara Rp100.000 dan Rp1.000.000!!',
                icon: 'error',
                confirmButtonText: 'Kembali'
            })
            return;
        }

        this.addToTable(nama, umur, uangSangu);
        this.updateResume();

        // Menghapus nilai di form
        this.namaInput.value = "";
        this.umurInput.value = "";
        this.uangSanguInput.value = "";

        Swal.fire({
            title: 'Berhasil!!',
            text: 'Pendaftaran berhasil',
            icon: 'success',
            confirmButtonText: 'Kembali'
        })   
    }

    // Method untuk menambahkan baris baru di tabel
    addToTable(nama, umur, uangSangu) {
        const newRow = this.dataTabel.insertRow(this.dataTabel.rows.length);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.innerHTML = nama;
        cell2.innerHTML = umur;
        cell3.innerHTML = uangSangu;
    }

    // Mengupdate Resume
    updateResume() {
        const rows = this.dataTabel.rows;
        let totalUangSaku = 0;
        let totalUmur = 0;

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const uangSangu = parseInt(row.cells[2].innerHTML);
            const umur = parseInt(row.cells[1].innerHTML);

            totalUangSaku += uangSangu;
            totalUmur += umur;
        }

        const averageUangSaku = totalUangSaku / rows.length;
        const averageUmur = totalUmur / rows.length;
        console.log(averageUmur)

        document.getElementById("averageUangSaku").textContent = averageUangSaku.toFixed(1);
        document.getElementById("averageUmur").textContent = averageUmur.toFixed(1);
    }
}
const formHandler = new User();