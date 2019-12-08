const input04 = [357253, 892942];

type Tuple6 = [number, number, number, number, number, number]

const initDigits = (): Tuple6 => [0, 0, 0, 0, 0, 0]

class BruteForce {
    current: Tuple6 = initDigits()
    possiblePasswords: Array<number> = []
    leftToCheck: number = 0

    constructor(from: number, till: number) {
        this.current = this.toDigits(from)
        this.leftToCheck = till - from
    }

    run01(): number {
        while (this.leftToCheck >= 0) {
            if (this.valid01()) {
                this.possiblePasswords.push(this.toNumber())
            }
            this.next()
        }

        return this.possiblePasswords.length
    }

    run02(): number {
        while (this.leftToCheck >= 0) {
            if (this.valid02()) {
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

    valid01(): boolean {
        return this.digitsNotDecrease() && this.hasTwoAdjacentDigits()
    }

    valid02(): boolean {
        return this.digitsNotDecrease() && this.hasOnlyTwoAdjacentDigits()
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

    hasOnlyTwoAdjacentDigits(): boolean {
        const min = 0
        const max = this.current.length - 2

        for (let index in [...Array(max + 1)]) {
            const i = parseInt(index, 10)
            const num = this.current[i]

            if ((i === min || this.current[i - 1] !== num)
                && num === this.current[i + 1]
                && (i === max || this.current[i + 2] !== num)) {
                return true
            }
        }

        return false
    }
}

console.log(new BruteForce(input04[0], input04[1]).run01())
console.log(new BruteForce(input04[0], input04[1]).run02())
