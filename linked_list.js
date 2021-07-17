//! Linked list terdiri dari Node, dan di dalam node terdapat Head, value, next address or value

function createNode(value) {
    return {
        value,
        next: null,
    }
}

function createLinikedList() {
    return {
        head: null,
        tail: null,
        length: 0,
        
        push: function (value) {
            const node = createNode(value)

            // if linked list kosong
            if(this.head === null) {
                this.head = node;
                this.tail = node
                this.length += 1
                return node
            } else {
                this.tail.next = node
                this.tail = node
                this.length += 1
                return node
            }
        },
        pop: function() {            
            // jika linked list kosong
            if(this.isEmpty()) {
                return null
            }

            // jika memiliki satu node
            const node = this.tail;
            if(this.head === this.tail) {
                this.head = null
                this.tail = null
                this.length = 0
                return node
            }

            // jika memiliki > 1 node
            let current = this.head
            let penult; //satu posisi sebelum terakhir
            while (current) { // tujuan untuk mendapatkan penult
                if(current.next === this.tail) {
                    penult = current
                    break;
                }
                current = current.next
            }
            penult.next = null
            this.tail = penult
            this.length -= 1

            return node
        },
        get: function(index) {
            // jika list kosong
            if(index < 0 || index > this.length) {
                return null
            }
            
            // jika list item 1
            if(index === 0) {
                return this.head
            }
            
            // jika list item > 1
            let current = this.head;
            let i = 0

            while(i < index) {
                current = current.next
                i += 1
            }

            return current
        },
        delete: function(index) {
            // list kosong
            if(index < 0 || index > this.length) {
                return null
            }
            
            // list item 1
            if(index === 0) {
                const deleted = this.head
                this.head = this.head.next
                this.length -= 1
                return deleted
            }

            // list item > 1
            let current = this.head
            let prev;
            let i = 0

            while (i < index) {
                prev = current

                current = current.next
                i += 1
            }

            const deleted = current
            prev.next = current.next
            this.length -= 1

            return deleted
        },
        isEmpty: function() {
            return this.length === 0
        },
        print: function () {
            const values = []
            let current = this.head

            while(current) {
                values.push(current.value)
                current = current.next
            }

            return values.join(" => ")
        }
    }
}

const list = createLinikedList()
const values = ['a', 'b', 'c', 'd']
const nodes = values.map(val => {
    list.push(val)
})

console.log(list.isEmpty())
console.log(list.pop())
console.log(list.delete(1))
console.log(list.print())