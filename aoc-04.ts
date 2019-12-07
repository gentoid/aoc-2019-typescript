const input04 = [357253, 892942];

type Tuple6 = [number, number, number, number, number, number]

const initDigits = (): Tuple6 => [0, 0, 0, 0, 0, 0]

class BruteForce {
    current: Tuple6 = initDigits()
    till: Tuple6 = initDigits()
    possiblePasswords: Array<number> = []
    leftToCheck: number = 0

    constructor(from: number, till: number) {
        this.till = this.toDigits(till)
        this.current = this.toDigits(from)
        this.leftToCheck = till - from
    }

    run(): number {
        while (this.leftToCheck >= 0) {
            if (this.valid()) {
                this.possiblePasswords.push(this.toNumber())
            }
            this.next()
        }

        return this.possiblePasswords.length
    }

    toDigits(num: number): Tuple6 {
        let digits = initDigits()
        const maxIndex = digits.length - 1

        for (const index in digits) {
            digits[maxIndex - parseInt(index, 10)] = num % 10
            num = Math.floor(num / 10)
        }

        return digits
    }

    toNumber(): number {
        let currentNumber = 0
        for (const index in this.current) {
            currentNumber += this.current[index]
                * 10 ** (this.current.length - 1 - parseInt(index, 10))
        }

        return currentNumber
    }

    next(): void {
        const length = this.current.length;
        this.current[length - 1] += 1

        for (let index in [...Array(length)]) {
            const revIndex = length - parseInt(index, 10)
            if (this.current[revIndex] > 9) {
                this.current[revIndex] = 0
                this.current[revIndex - 1] += 1
            }
        }

        this.leftToCheck -= 1
    }

    valid(): boolean {
        return this.digitsNotDecrease() && this.hasTwoAdjacentDigits()
    }

    digitsNotDecrease(): boolean {
        for (let index in [...Array(this.current.length - 1)]) {
            if (this.current[index] > this.current[parseInt(index, 10) + 1]) {
                return false
            }
        }
        return true
    }

    hasTwoAdjacentDigits(): boolean {
        for (let index in [...Array(this.current.length - 1)]) {
            if (this.current[index] === this.current[parseInt(index, 10) + 1]) {
                return true
            }
        }
        return false
    }
}

console.log(new BruteForce(input04[0], input04[1]).run())
