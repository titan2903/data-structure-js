//! Queue FIFO(First In First Out)
function createQueue() {
    const queue = []
    return {
        enqueue: function(value) {
            queue.unshift(value)
        },
        dequueue: function() {
            queue.pop()
        },
        peek: function(){
            return queue[queue.length - 1]
        },
        size: function() {
            return queue.length
        }
    }
}

const q = createQueue()
q.enqueue('Create script for data structure course')
q.enqueue('Create code example for data structure course')
q.enqueue('Record datas structure course')
q.enqueue('Vacation')

q.dequueue()
q.dequueue()
q.dequueue()

console.log(q.peek())