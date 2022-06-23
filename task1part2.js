//1. indexOf()
//untuk mengembalikan posisi index berdasarkan suatu elemen
const tampil = ["pisang", "semangka", "durian"]
console.log(tampil.indexOf("semangka"))

//2. toLowerCase()
//untuk merubah semua huruf menjadi huruf kecil
const kecil = "JADI KECIL"
console.log(kecil.toLowerCase())

//3. push()
//untuk menambahkan elemen di dalam array
nomor = [0,2,1]
nomor.push(4)
console.log(nomor)

//4. repeat()
//untuk duplikasi 
const nama = "bootcamp"
console.log(nama.repeat(3))

//5. concat()
//untuk menggabungkan dua string
const namaDepan = "Rizki"
const namaBelakang = "Ibrahim"
let gabung = namaDepan.concat(namaBelakang)
console.log(gabung)

//6. replace()
//untuk mengganti string 
const ganti = "fazztrack"
const ubah = ganti.replace(ganti,"web 6")
console.log(ubah)

//7. toString()
//untuk menjadikan sebuah data menjadi string
const data = 45
console.log(data.toString())


//8. join()
//menggabungkan elemen array ke string 
satu = ["gabung",2,3]
console.log(satu.join(" "))

//9. splice()
//untuk memotong elemen array
a = ["satu","dua","tiga"]
console.log(a.splice(0,1))

//10. reverse()
//untuk merubah urutan elemen dalam array, urutan terakhir menjadi awal dan sebaliknya
balik = [7,8,9,10]
balik.reverse()
console.log(balik)

