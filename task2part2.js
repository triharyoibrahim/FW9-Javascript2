const name =['Abigail', 'Alexandra', 'Alison','Amanda', 'Angela', 'Bella','Carol', 
'Caroline', 'Carolyn', 'Deirdre', 'Diana' ,'Elizabeth','Ella', 'Faith', 'Olivia', 'Penelope'];

// function searchName(cari, limit) {
// 	let list = [];
//   for (let i = 0; i < name.length; i++){
//     if (name[i].indexOf(cari.toLowerCase()) != -1) {
//       list.push(name[i])
//     }
//   }
//   console.log(list.splice(0, limit))
// }

// searchName("an", 3)

//Fungsi utama
function searchName(cari, limit, callbackTampil){
    let list = [];
      for (let i = 0; i < name.length; i++){
        if (name[i].indexOf(cari.toLowerCase()) != -1) {
          list.push(name[i])
        }
      }
      let a = list.splice(0, limit)
      callbackTampil(a)
}

//Fungsi pembantu
function tampil(a){
    // console.log("coba")
    console.log(a)
}

searchName("a", 5, tampil)