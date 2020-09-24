export enum Sort {
    Down = -1,
    Equ = 0,
    Up = 1,
}

export abstract class BubbleExt {
    undefined: Sort 
    undefinedBoth?: Sort = Sort.Equ

    outOfRange: Sort.Up
}

function test() {
    let bubble: BubbleExt = { undefined: Sort.Down }
}
