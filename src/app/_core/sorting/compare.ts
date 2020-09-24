
export interface ICompare {
    whirl(a, b): SortBubble
}

export class Comparer implements ICompare {
    private numProps = []
    private txtProps = []
    private boolProps = []

// TODO: PARAMETRISE FOR RETURN !!!
    
    whirl(a: any, b: any): SortBubble { //ToDo: TYPE DESCRIPTION ???
        if (!a)
            return !b ? SortBubble.Equals : SortBubble.LeftNone
        if (!b)
            return SortBubble.RightNone

        return null
    }
}

const compareNum = (a: number, b: number) => a === b ? SortBubble.Equals :
    a < b ? SortBubble.Lesser : SortBubble.Greater

const compareTxt = (a: string, b: string) => (a < b ? -1 : 1)

const compareDate = (a: Date, b: Date) => a === b ? SortBubble.Equals :
    a < b ? SortBubble.Lesser : SortBubble.Greater

const compareBool = (a: boolean, b: boolean): number => a === b ? SortBubble.Equals :
    (a ? SortBubble.Greater : SortBubble.Lesser)