
interface typeProps {
    length: number
}
function echo<T extends typeProps>(value:T):T {
    console.log(value.length)
    return value
}
const v = echo([1])

// 类中使用泛型

class Queue<T> {
    private data = []
    push(item:T) {
        return this.data.push(item)
    }
    pop() {
        return this.data.shift()
    }
}
