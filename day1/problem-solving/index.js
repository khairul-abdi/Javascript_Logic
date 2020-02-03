/*
    pseudocode
   FUNCTION 'scheduleFitness' with parameter 'member' and 'startDate'
      STORE 'count' with zero
      STORE 'str' with empty string
      FOR each index of 'date' DO
         'str' ADD AND EQUAL string of 'Tanggal ' ADD index
         IF 'index' modulus 5 is EQUAL TO 0 THEN
            'str' ADD AND EQUAL strign of 'Tempat Fitness Tutup'
         ELSE
            STROE 'arr' with ampty array
            FOR j to length of member
            IF 'count' modulus member of index j and 1 is EQUAL TO 0 THEN
               member of index j and 0 PUSH TO 'arr'
            END IF
            'str' ADD AND EQUAL spread operator of 'arr'
         END IF
         'str ADD AND EQUAL line new
         count increament
      END FOR
      RETURN 'str'
   END FUNCTION
*/

let member = [
  ['Tono', 2],
  ['Anton', 4],
  ['Budi', 5]
]


function scheduleFitness (member, startDate) {
   let count = 0, str = ''
   for (let i = startDate; i <= 31; i++) {
      str += `Tanggal ${i}: `
      if (i % 5 == 0) {
         str += `Tempat Fitness Tutup`
      }else {
         let arr = []
         for (let j = 0; j < member.length; j++) {
            if (count % member[j][1] === 0) arr.push(member[j][0])
         }
         str += [...arr] //spread operator
      }
      str += '\n'
      count++
   }
return str
}


console.log(scheduleFitness(member, 8))
console.log('====================================')
console.log(scheduleFitness(member, 7))
console.log('====================================')
console.log(scheduleFitness(member, 10))



