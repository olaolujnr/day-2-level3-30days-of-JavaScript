/*'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
' Count the number of word love in this sentence.*/

let loveText = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let pattern = /love/gi
console.log(loveText.match(pattern))

/*Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction' */
let sentence = 'You cannot end a sentence with because because because is a conjunction'
let because = /because/gi
console.log(sentence.match(because))

/*Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' */
let salaryPerMonth = 5000
let annualBonus = 10000
let onlineCoursesPerMonth = 15000

let salaryPerYear = salaryPerMonth*12
let onlineCoursesPerYear = onlineCoursesPerMonth*12

let totalAnnualIncome = salaryPerYear + annualBonus + onlineCoursesPerYear
console.log(totalAnnualIncome)