// Create linked list for 1 to N

function createList(N) {
    const newNode = (value) => {
        return {
            value,
            next: null,
        }
    }
    const head = newNode(1)
    let current = head
    for (let i = 2; i < N; i++) {
        current.next = newNode(i)
        current = current.next
    }
    return head
}

const printList = (h) => {
    let current = head
    while (current.next) {
        console.log(current.value)
        current = current.next
    }
    console.log(current.value)
}

const findSize = (h) => {
    let node = h
    let size = 1
    while (node.next) {
        size++
        node = node.next
    }
    return size + 1
}

let head = createList(5)

// console.log(head.next.next.value);
console.log('size ->', findSize(head))
console.log('print ->', printList(head))
