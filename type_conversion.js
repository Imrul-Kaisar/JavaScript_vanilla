
// Converting String to Number

var n1 = Number("39.84")
var n2 = Number('')
var n3 = Number(' ')
var n4 = Number('930 978')
var n5 = Number('any strig')
var n6 = Number('true')

console.log(n1, n2, n3, n4, n5, n6)

var f1 = Number.parseInt('84.34')
console.log('\n' + f1)

var f2 = Number.parseFloat('23')
console.log('\n' + f2)

console.log('\n' + typeof(f2))

var x = '38'
var y =+ x
console.log('\n' + y + ' is a ' + typeof(y) + ' but "x" was ' + typeof(x))


var a = 'Imran'
var b =+ a
console.log('\n' + b + ' is a ' + typeof(b) + ' but "a" was ' + typeof(a))


// Converting Number to String

var str1 = String(12345)
var str2 = String(784 + 45)

console.log('\n', str1, str2)
console.log('\n', typeof(str1), typeof(str2))

var str3 = (12345).toString()
console.log('\n', typeof(str3))


// Converting Date to Number

var d = new Date()
console.log('\n', d)
console.log('\n', Number(d))



// Converting Date to String

var d1 = String(Date())
var d2 = Date().toString()
console.log('\n', d1, '\n', d2)


// Converting Booleans to Number

var bl1 = Number(true)
var bl2 = Number(false)
console.log('\n bl1 will return ' + bl1 + ' and type of bl1 is ' + typeof(bl1))
console.log('\n bl2 will return ' + bl2 + ' and type of bl1 is ' + typeof(bl2))

Number.