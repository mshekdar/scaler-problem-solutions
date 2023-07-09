function insertNode(head, node, k) {
  var pointer = head
  if (k == 0) {
    node.next = head
    return node
  }
  for (let i = 0; i < k; i++) {
    if (pointer == null) return null
    pointer = pointer.next
  }
  node.next = pointer.next
  pointer.next = node
}

function deleteNode(head, x) {
  if (head === null) return null
  var current = head
  if (current.value === x) {
    var temp = current.next
    current.next = null
    return temp
  }
  while (current !== null) {
    if (current.next !== null && current.next.value === x) {
      current.next = current.next.next
      return head
    }
    current = current.next
  }
  return head
}


function reverse(head) {
    let prev = null
    let curr = head

    while(curr !== null) {
        next = curr.next
        curr.next = prev

        prev = curr
        curr = next
    }

    head = prev

    return head
}



