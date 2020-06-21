//Filter falsy
//removes all false values.

const x = ["a", "", 3, false, "hello", undefined]
const y = x.filter(Boolean)

console.log(y)

//implicit boolean coercion
const xx  = {}
const yx = !!xx
console.log(yx)

//array slice negative slice gets the last numbers
//positive slice get numbers from the beginning

let array = [0,1,3,4,5,6,7,7,8,4,4]
console.log(array.slice(3))
console.log(array.slice(-3))

//get date in ms
const date = new Date()
const datemx =  +date
console.log(datemx)

//Parameter validation
const isRequired = () => {throw new Error('param is required')}
const print = (value = isRequired()) =>{
    console.log(`${value}`)
}
print(2)
print()