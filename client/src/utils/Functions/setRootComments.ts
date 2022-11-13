export function setRootComments(arr: any): any{
    return arr.filter((elem: any) => elem.parent===null)
}