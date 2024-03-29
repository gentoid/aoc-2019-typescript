const input03 = [
    "R1001, D890, R317, U322, L481, D597, L997, U390, L78, D287, L401, U638, R493, D493, R237, U29, R333, D466, L189, D634, R976, U934, R597, U62, L800, U229, R625, D927, L629, D334, L727, U4, R716, U20, L284, U655, R486, U883, R194, U49, L845, D960, R304, D811, L38, U114, R477, D318, L308, U445, L26, D44, R750, D12, R85, D146, R353, U715, R294, D595, L954, U267, L927, U383, L392, D866, L195, U487, L959, U630, R528, D482, R932, D541, L658, D171, L964, U687, R118, U53, L81, D381, R592, U238, L391, U399, R444, U921, R706, U925, R204, D220, L595, U489, R621, D15, R104, D567, L664, D54, R683, U654, R441, D748, L212, D147, L699, U296, L842, U230, L684, D470, R247, D421, R38, D757, L985, U791, R112, U494, R929, D726, L522, U381, R184, D492, L517, D819, R487, D620, R292, D206, R254, D175, L16, U924, R838, D423, R756, D720, L555, U449, L952, D610, L427, U391, R520, D957, R349, D670, L678, U467, R804, U757, L342, U808, R261, D597, L949, U162, R3, D712, L799, U531, R879, D355, R325, D173, L303, U679, L432, D421, R613, U431, L207, D669, R828, D685, R808, U494, R821, U195, L538, U16, L835, D442, L77, U309, L490, U918, L6, D200, L412, D272, L416, U774, L75, D23, L193, D574, R807, D382, L314, D885, R212, D806, L183, U345, L932, U58, L37, U471, R345, U678, R283, U644, L559, U892, L26, D358, L652, D606, L251, U791, L980, D718, L14, D367, R997, D812, R504, D474, L531, U708, R660, U253, L86, D491, R971, U608, L166, U659, R167, U92, L600, U20, R28, U852, R972, D409, L719, D634, R787, D796, L546, D857, L987, U111, L916, D108, R537, U931, R308, U385, L258, D171, R797, U641, R798, D723, R600, D710, R436, U587, R16, D564, L14, D651, R709, D587, R626, U270, R802, U937, R31, U518, L187, D738, R562, D238, R272, D403, R788, D859, L704, D621, L547, D737, L958, U311, L927",
    "L1007, U199, L531, D379, L313, U768, L87, U879, R659, U307, L551, D964, L725, D393, R239, D454, R664, U402, R100, D62, R53, D503, R918, U998, L843, D142, R561, U461, R723, D915, L217, D126, L673, U171, R131, U518, R298, U99, L852, D799, L159, U161, R569, D802, L391, D553, L839, U954, R502, U351, R851, D11, L243, D774, L642, U613, R376, U867, L357, D887, L184, D298, R406, U912, R900, D348, L779, U494, R240, D712, R849, D684, R475, D449, L94, U630, L770, D426, L304, D869, R740, D377, R435, D719, L815, D211, R391, U484, R350, U599, R57, U210, R95, U500, L947, D649, R615, D404, L953, D468, R380, U215, R82, D872, R150, D347, L700, D450, L90, U803, L593, U296, R408, U667, R407, U725, R197, U269, R115, D758, R558, U62, L519, U308, R259, U869, L846, U3, R592, D357, R633, D909, L826, U165, L190, D821, L525, U404, R63, D214, R265, U74, L715, U461, L840, D647, R782, D655, R72, D601, L435, U549, L108, U687, R836, D975, L972, U813, R258, U703, R90, D438, R434, D818, R184, D886, R271, U31, L506, U395, L274, U455, R699, U889, L162, U771, R752, U317, R267, D959, R473, U58, R552, U51, R637, D726, R713, D530, L209, D824, R275, D207, R357, D373, L169, U880, L636, U409, R67, D740, R225, D272, R114, U970, R51, U230, R859, U820, L979, D153, R16, D883, L542, U806, L523, D752, L712, U55, L739, U746, R910, D873, R108, D558, L54, D619, L444, U941, R613, U478, L839, D910, R426, D614, L622, U928, L65, D644, L208, U971, L939, U874, R827, U672, L620, U140, L493, D637, L767, U831, R874, U468, R648, U714, R294, D606, L375, D962, L105, D919, L486, D771, L827, D196, L408, U217, L960, D633, L850, U805, L188, U566, L884, D212, L677, D204, R257, D409, R309, D783, L773, D588, L302, U129, L550, U919, L482, U563, R290, U690, R586, D460, L771, D63, R451, D591, L861, D598, L432, U818, L182",
];

interface Diff {
    x: number,
    y: number,
}

interface Point {
    x: number,
    y: number,
}

enum Direction {
    Vertical = "vertical",
    Horizontal = "horizontal",
}

interface Segment {
    p1: Point,
    p2: Point,
    direction: Direction,
}

const startPoint = { x: 0, y: 0 }

let parseLine = (line: string): Array<Diff> => {
    return line.split(",").map(move => {
        move = move.trim()
        const distance = parseInt(move.substr(1), 10)
        let x = 0
        let y = 0
        switch (move[0]) {
            case 'U':
                y = distance
                break
            case "R":
                x = distance
                break
            case 'D':
                y = -distance
                break
            case 'L':
                x = -distance
                break
        }

        return { x, y }
    })
}

const calcNextPoint = (from: Point, diff: Diff): Point => ({
    x: from.x + diff.x,
    y: from.y + diff.y,
})

const newSegment = (point: Point, diff: Diff): Segment => {
    return {
        p1: point,
        p2: calcNextPoint(point, diff),
        direction: (diff.x === 0 ? Direction.Vertical : Direction.Horizontal),
    }
}

const toSegments = (diffs: Array<Diff>): Array<Segment> => {
    let point: Point = startPoint
    let segments: Array<Segment> = []

    for (const diff of diffs) {
        const segment = newSegment(point, diff)
        segments.push(segment)
        point = { ...segment.p2 }
    }

    return segments
}

const isHorizontal = (segm: Segment): boolean => segm.direction === Direction.Horizontal

const inRange = (what: number, [start, end]: [number, number]): boolean => {
    if (start < end) {
        return start < what && what < end
    } else {
        return end < what && what < start
    }
}

const intersectOneWay = (segm1: Segment, segm2: Segment): Point | null => {
    if (isHorizontal(segm1) && !isHorizontal(segm2)
        && inRange(segm1.p1.y, [segm2.p1.y, segm2.p2.y])
        && inRange(segm2.p1.x, [segm1.p1.x, segm1.p2.x])) {
        return { x: segm2.p1.x, y: segm1.p1.y }
    }

    return null
}

const intersection = (segm1: Segment, segm2: Segment): Point | null => {
    return intersectOneWay(segm1, segm2) || intersectOneWay(segm2, segm1)
}

const manhattanDistance = (point1: Point, point2: Point): number => {
    return Math.abs(point2.x - point1.x) + Math.abs(point2.y - point1.y)
}
const manhattanDistanceFromStart = (point: Point) => manhattanDistance(startPoint, point)

const segmentLength = (segm: Segment): number => manhattanDistance(segm.p1, segm.p2)

const aoc_03_01 = () => {
    const segments0 = toSegments(parseLine(input03[0]))
    const segments1 = toSegments(parseLine(input03[1]))

    const intersections: Array<Point> = []

    for (const segm0 of segments0) {
        for (const segm1 of segments1) {
            const intersect = intersection(segm0, segm1)
            if (intersect) {
                intersections.push(intersect)
            }
        }
    }

    return Math.min(...intersections.map(manhattanDistanceFromStart))
}

const aoc_03_02 = (): number => {
    const segments0 = toSegments(parseLine(input03[0]))
    const segments1 = toSegments(parseLine(input03[1]))

    let lengths: Array<number> = []

    let segm0Length = 0;
    for (const segm0 of segments0) {
        let segm1Length = 0;
        for (const segm1 of segments1) {
            const intersect = intersection(segm0, segm1)
            if (intersect) {
                const sumLengh = segm0Length
                    + segm1Length
                    + manhattanDistance(segm0.p1, intersect)
                    + manhattanDistance(segm1.p1, intersect)
                lengths.push(sumLengh)
            }
            segm1Length += segmentLength(segm1)
        }
        segm0Length += segmentLength(segm0)
    }

    return Math.min(...lengths)
}

console.log(aoc_03_01())
console.log(aoc_03_02())
