const input02 = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 6, 1, 19, 1, 19, 5, 23, 2, 10, 23, 27, 2, 27, 13, 31, 1, 10, 31, 35, 1, 35, 9, 39, 2, 39, 13, 43, 1, 43, 5, 47, 1, 47, 6, 51, 2, 6, 51, 55, 1, 5, 55, 59, 2, 9, 59, 63, 2, 6, 63, 67, 1, 13, 67, 71, 1, 9, 71, 75, 2, 13, 75, 79, 1, 79, 10, 83, 2, 83, 9, 87, 1, 5, 87, 91, 2, 91, 6, 95, 2, 13, 95, 99, 1, 99, 5, 103, 1, 103, 2, 107, 1, 107, 10, 0, 99, 2, 0, 14, 0]

interface Program {
    memory: Array<number>
    address: number
    halted: boolean
}

let init = (): Program => ({
    memory: Object.assign([], input02),
    address: 0,
    halted: false,
})

let tick = (program: Program): void => {
    if (program.halted) { return }

    const opCode = program.memory[program.address]

    if (opCode == 1) {
        const arg1 = program.memory[program.memory[program.address + 1]]
        const arg2 = program.memory[program.memory[program.address + 2]]
        program.memory[program.memory[program.address + 3]] = arg1 + arg2
    } else if (opCode == 2) {
        const arg1 = program.memory[program.memory[program.address + 1]]
        const arg2 = program.memory[program.memory[program.address + 2]]
        program.memory[program.memory[program.address + 3]] = arg1 * arg2
    } else if (opCode == 99) {
        program.halted = true
    }
    program.address += 4
}

let run = (noun: number, verb: number): number => {
    let program = init()

    program.memory[1] = noun
    program.memory[2] = verb

    while (!program.halted) {
        tick(program)
    }

    return program.memory[0]
}

let aoc_02_01 = (): number => run(12, 2)

let aoc_02_02 = (): number => {
    const lookingFor = 19690720;

    for (const noun of [...Array(100).keys()]) {
        for (const verb of [...Array(100).keys()]) {
            if (run(noun, verb) == lookingFor) {
                return 100 * noun + verb
            }
        }
    }

    return 0
}

console.log(aoc_02_01())
console.log(aoc_02_02())
