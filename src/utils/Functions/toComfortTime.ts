export function toComfortTime(time: number): string {
    let date = new Date(time); // create Date object

    return date.toString();
}