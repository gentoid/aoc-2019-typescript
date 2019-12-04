const input02 = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 6, 1, 19, 1, 19, 5, 23, 2, 10, 23, 27, 2, 27, 13, 31, 1, 10, 31, 35, 1, 35, 9, 39, 2, 39, 13, 43, 1, 43, 5, 47, 1, 47, 6, 51, 2, 6, 51, 55, 1, 5, 55, 59, 2, 9, 59, 63, 2, 6, 63, 67, 1, 13, 67, 71, 1, 9, 71, 75, 2, 13, 75, 79, 1, 79, 10, 83, 2, 83, 9, 87, 1, 5, 87, 91, 2, 91, 6, 95, 2, 13, 95, 99, 1, 99, 5, 103, 1, 103, 2, 107, 1, 107, 10, 0, 99, 2, 0, 14, 0]

interface ComputerState {
    state: Array<number>
    opCodeCounter: number
    halted: boolean
}

class Computer implements ComputerState {
    state: Array<number> = []
    opCodeCounter = 0
    halted = false

    constructor(initState: Array<number>) {
        this.state = initState
    }

    run(): Array<number> {
        this.state[1] = 12
        this.state[2] = 2
        while (!this.halted) {
            this.tick()
        }

        return this.state
    }

    tick() {
        if (this.halted) { return }

        const opCodePosition = this.opCodeCounter * 4
        const opCode = this.state[opCodePosition]

        if (opCode == 1) {
            const arg1 = this.state[this.state[opCodePosition + 1]]
            const arg2 = this.state[this.state[opCodePosition + 2]]
            this.state[this.state[opCodePosition + 3]] = arg1 + arg2
        } else if (opCode == 2) {
            const arg1 = this.state[this.state[opCodePosition + 1]]
            const arg2 = this.state[this.state[opCodePosition + 2]]
            this.state[this.state[opCodePosition + 3]] = arg1 * arg2
        } else if (opCode == 99) {
            this.halted = true
        }
        this.opCodeCounter += 1
    }
}

console.log((new Computer(input02)).run()[0])
