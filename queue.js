class Queue {
    data = []
    constructor() {
        this.currentSize = this.data.length;
        this.maxSize = 5;
    }

    inQueue(newVal) {
        if (this.currentSize > this.maxSize) {
            console.log("Queue is full");
        } else {
            this.data[this.currentSize] = newVal;
            this.currentSize++;
        }
    }

    deQueue() {
        if (this.currentSize <= 0) {
            console.log("Queue is empty");
        } else {
            for (let i = 0; i < this.data.length; i++) {
                this.data[i] = this.data[i + 1]
            }
            this.currentSize--;
            this.data.length = this.currentSize;
        }
    }

    display() {
        console.log("Queue is ", this.data)
    }

}

let queue1 = new Queue()
queue1.inQueue(20)
queue1.inQueue(30)
queue1.inQueue(40)
queue1.inQueue(50)
queue1.inQueue(60)
queue1.inQueue(70)
queue1.deQueue()

queue1.display();