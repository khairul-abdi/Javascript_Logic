function scheduleFitness (member, startDate) {
   let count = 0, str = ''
   for (let i = startDate; i <= 31; i++) {
      str += `Tanggal ${i}: `
      if (i % 5 === 0) {
         str += `Tempat Fitness Tutup`
      } else {
         let arr = []
         for (let j = 0; j < member.length; j++) {
            if (count % member[j].frequency == 0) {
               arr.push(member[j].name)
            }
         }
         str += [...arr]
      }
      str += '\n'
      count++
   }
   return str
}
 
 // TEST CASE
 const member = [
   { name: 'Tono', frequency: 2 },
   { name: 'Anton', frequency: 4 },
   { name: 'Budi', frequency: 5 }
 ]
 
 console.log(scheduleFitness(member, 7))