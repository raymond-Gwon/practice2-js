// Class and callback

class Counter {
    constructor(runEvery5times) {
        this.counter = 0;
        this.callback = runEvery5times;
    }
    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);   // runEvery5times 인자가 있을때만 출력함.
        }
    }
}

function printSomething(num) {
    console.log(`Wow it's ${num}`);
}

const coolCounter = new Counter(printSomething);
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

