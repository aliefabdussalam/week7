math = 80
science = 70
ind = 70
eng = 80

rate = (math + science + ind + eng) / 4; 
console.log(rate)
function gradeCheck(nilai){
    if(nilai >= 90){
      console.log('nilai a')
    } else if (nilai >= 80){
      console.log('nilai b')
    }else if (nilai >= 70){
      console.log('nilai c')
    }else if (nilai >= 60){
      console.log('nilai d')  
    }else if (nilai >= 50){
      console.log('nilai e')  
    }else 
    console.log("nilai harus di isi")
  }
  gradeCheck(rate);