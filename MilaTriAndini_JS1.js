// Contoh penggunaan if-else
let nilai = 75;

if (nilai >= 70) {
    console.log("Lulus");
} else {
    console.log("Tidak Lulus");
}

// Contoh nested if
let angka = 10;

if (angka > 0) {
    if (angka % 2 === 0) {
        console.log("Angka genap");
    } else {
        console.log("Angka ganjil");
    }
} else {
    console.log("Angka nol atau negatif");
}
// Contoh switch case
let hari = "Senin";

switch (hari) {
    case "Senin":
        console.log("Hari kerja");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Hari libur");
        break;
    default:
        console.log("Hari tidak valid");
}

// Contoh for statement
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Contoh while
let counter = 0;
while (counter < 5) {
    console.log("Iterasi ke-" + counter);
    counter++;
}

// Contoh do while
let counter2 = 0;
do {
    console.log("Iterasi ke-" + counter2);
    counter2++;
} while (counter2 < 5);

// Contoh function
function tambah(a, b) {
    return a + b;
}

let hasilTambah = tambah(3, 5);
console.log("Hasil penjumlahan: " + hasilTambah);