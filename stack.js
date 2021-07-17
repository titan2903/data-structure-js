//! javascript menggunakan stack di internal language nya
//! Stacl istilahnya LIFO (Last In First Out)

function createStack() {
    const array = []

    return {
        push: function(item) {
            array.push(item)
        },
        pop: function() {
            array.pop()
        },
        peek: function() {
            return array[array.length - 1]
        },
        size: function() {
            return array.length
        }
    }
}


const bookStack = createStack()
bookStack.push("The Effective Engineer")
bookStack.push("The Pragmatic Programmer")
bookStack.push("Start with why")


console.log(bookStack.peek())
bookStack.pop()
bookStack.pop()
console.log(bookStack.peek())
bookStack.pop()
console.log(bookStack.size())
