const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal > nilaiAkhir) { 
      console.log("nilai Akhir harus lebih besar dari nilai Awal")
      return
    }
      if (dataArray.length <= 5) {
      console.log("Jumlah angka dalam dataArray harus lebih dari 5")
      
    }
  
    let list = [];
    for (let i = 0; i < dataArray.length; i++){
      if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
        list.push(dataArray[i])
      }
    }
    
    if (list.length > 0) {
      
      return console.log(list);
    }
    else{
      
      return console.log("Nilai tidak ditemukan")
    }
    
  }
  
  seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
  seleksiNilai(3, 31 , [2, 25, 4, 14, 17, 30, 8]);
  seleksiNilai(4, 17 , [2, 25, 4]);
  seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 16])