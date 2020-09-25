export enum Bubble {
    Down = -1,
    Equ = 0,
    Up = 1,
}

export abstract class Sort {
    readonly equal = Bubble.Equ
    bigger = Bubble.Up
    smaller = Bubble.Down 
    undefinedBoth?: Bubble = Bubble.Equ

    undefinedOne: Bubble

    outOfSameDirBoth: Bubble.Equ
    outOfSameDirOne: Bubble
}

export abstract class InvertedSort extends Sort {

}

function test() {
    let bubble: Sort = { undefined: Bubble.Down }
}
