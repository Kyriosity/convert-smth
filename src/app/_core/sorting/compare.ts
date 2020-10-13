enum Bubble {
    down = -1,
    equ = 0,
    up = 1
}

export interface Charity {
    thx4(subsribed: boolean): string
    thx4(money: number): string
}

class GoodPeople implements Charity {
    thx4(subsribed: boolean): string
    thx4(money: number): string
    thx4(money: any) { return 'thank u' }
}

export interface ICompare {
    whirl(that: any, to: any): Bubble
}

export class Compare implements ICompare {
    whirl(that: any, to: any) {
        if (!that)
            return !to ? Bubble.equ : this.leftNone()
        if (!to)
            return this.rightNone()

        if (typeof that === 'number')
            return this.compareNum(that, to)
        if (typeof that == 'string')
            return this.compareTxt(that, to)

        return undefined
    }

    protected leftNone = () => Bubble.down
    protected rightNone = () => Bubble.up

    protected compareNum = (a: number, b: number) => a === b ? Bubble.equ :
        a < b ? Bubble.down : Bubble.up

    protected compareTxt = (a: string, b: string) => (a < b ? -1 : 1)

    protected compareDate = (a: Date, b: Date) => a === b ? Bubble.equ :
        a < b ? Bubble.down : Bubble.up

    protected compareBool = (a: boolean, b: boolean) => a === b ? Bubble.equ :
        (a ? Bubble.up : Bubble.down)
}