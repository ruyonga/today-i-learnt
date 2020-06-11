2.4.div(4)
0.6

val  i: Int = 6
val b1 = i.toDouble()

println(i)
6

val oneMillion = 1_000_0000

var fish = 1
fish = 2


val aquarium = 1
aquarium = 2
error: val cannot be reassigned
aquarium = 2
^

var fish: Int  = 2
var lakes: Double = 2.5

println(lakes)
2.5

val numberOfFish = 5
val numberOfPlats = 12
"I have $numberOfFish fish and $numberOfPlats plants"
I have 5 fish and 12 plants

"I have ${numberOfFish + numberOfPlats} fish and plants"
I have 17 fish and plants

if(numberOfFish > numberOfPlats) {
    println("Good ratio")
}else {
    println("Unleathy ratio")
}
Unleathy ratio

val fish = 50
if(fin in 1..100){
    println("fish")
}
error: unresolved reference: fin
if(fin in 1..100){
   ^

val fish = 50
if(fish in 1..100){
    println("fish")
}
fish

when(numberOfFish) {
    0 -> println("Empty tank")
    in 1..39 -> println("Got fish")
    else -> println("That's a lot of fish ")
}
Got fish

var rocks: Int = null
error: null can not be a value of a non-null type Int
var rocks: Int = null
                 ^

var marbles: Int? = null

var fishFoodTreats = 6
if(fishFoodTreats != null) {
    fishFoodTreats = fishFoodTreats.dec()
}

println(fishFoodTreats)
5

var fishFoodTreats = 7
fishFoodTreats = fishFoodTreats?.dec()

println(fishFoodTreats)
6

fishFoodTreats = fishFoodTreats?.dec() ?: 
        println(fishFoodTreats)

fishFoodTreats = fishFoodTreats?.dec() ?: 0
println(fishFoodTreats)
5

val  len = s!!.length
error: unresolved reference: s
val  len = s!!.length
           ^

val s = null
val len  = s!!.length
val school = listOf("mackerek", "trout", "halibut")
println(school)
error: unresolved reference: length
val len  = s!!.length
               ^

val school = listOf("mackerek", "trout", "halibut")
println(school)
[mackerek, trout, halibut]

val mylist = mutableListOf("tuna", "salmon", "shark")
println(mylist)
[tuna, salmon, shark]

mylist.remove("shark")
println(mylist)
[tuna, salmon]

val school = arrayOf("shark", "salmon", "minnow")
println(java.util.Arrays.toString(school))
[shark, salmon, minnow]

val numbers = intArrayOf(1,3,4)
println(java.util.Arrays.toString(number))
error: unresolved reference: number
println(java.util.Arrays.toString(number))
                                  ^

val numbers = intArrayOf(1,3,4)
println(java.util.Arrays.toString(numbers))
[1, 3, 4]

val numbers = intArrayOf(1,2,4)
val number2 = intArrayOf(3,5,5)
val foo2 = number2 + numbers
println(foo2[5])
4

val array = Array(5){it * 2}
println(java.util.Arrays.toString(array))
[0, 2, 4, 6, 8]

val school = arrayOf("sharl", "wewe", "drdfdf")
for(e in school){
    print(e+ " ")
}
sharl wewe drdfdf 

for((index, element) in school.withIndex()){
    println("Item st $index is $element")
}
Item st 0 is sharlItem st 1 is weweItem st 2 is drdfdf

for((index, element) in school.withIndex()){
    println("Item st $index is $element \n")
}

Item st 0 is sharl 
Item st 1 is wewe 
Item st 2 is drdfdf 

for (i in 1..5) print(i)
12345

for(i in 5 downTo 1) print (i)
54321

for (i in 3..6 step 2) print(i)
35

var bubbles = 0
while (bubbles < 500){
    bubbles++
}
println("$bubbles bubles in water \n")
500 bubles in water 

do {
    bubbles--
}while (bubbles > 50)
println("$bubbles bubble sin water \n")
50 bubble sin water 


repeat(2) {
    println("A fish is swimming")
}

- Kotlin types can't be implicity converted, you have to use casting
- Variables declared with val can only be assinged one.
- Kotlin variables are not nullable by defualt, use ? to make the variable nullable        
- for loops can loop through the index and elements of an array at the same time.
- Arrays and lists can have single type or mixed types
- Arrays and lists can be nested (have an array inside a list and a list in an array)        
- You cab create loops with for, while, do/while, repeat
- The when statment is Kotlin's version of the switch statment, but when is more flexible