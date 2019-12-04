let input = [
    81157,
    80969,
    113477,
    81295,
    70537,
    90130,
    123804,
    94276,
    139327,
    123719,
    107814,
    122142,
    61204,
    135309,
    62810,
    85750,
    132568,
    76450,
    122948,
    124649,
    102644,
    80055,
    60517,
    125884,
    125708,
    99051,
    137158,
    100450,
    55239,
    66758,
    123848,
    88711,
    113047,
    125528,
    59285,
    103978,
    93047,
    98038,
    143019,
    92031,
    54353,
    115597,
    105629,
    80411,
    134966,
    135473,
    77357,
    65776,
    71096,
    66926,
    97853,
    80349,
    141914,
    127221,
    102492,
    143587,
    111493,
    84711,
    59826,
    135652,
    103334,
    138211,
    65088,
    82244,
    95011,
    78760,
    56691,
    62070,
    146134,
    81650,
    76904,
    98838,
    89629,
    59950,
    50390,
    78616,
    99731,
    53831,
    81273,
    103980,
    58485,
    137684,
    142457,
    111050,
    141916,
    55567,
    141945,
    100794,
    136425,
    77911,
    137114,
    77450,
    132048,
    143066,
    136805,
    114135,
    61565,
    67286,
    85512,
    137493,
];

function calculateFuel(mass: number): number {
    const fuel = Math.floor(mass / 3) - 2;
    if (fuel < 0) {
        return 0
    }
    else {
        return fuel
    }
}

function calculateTotalFuel(mass: number): number {
    let totalFuel = 0

    do {
        const fuel = calculateFuel(mass)
        if (fuel === 0) {
            break
        }

        totalFuel += fuel
        mass = fuel
    } while (true)

    return totalFuel
}

function calculate(input: Array<number>): number {
    return input.map(calculateTotalFuel).reduce((a, b) => a + b)
}

console.log(calculate(input))
