export function sum(...x: number[]): number {
    return x.length === 1 ? x[0] : x.pop() + sum(...x);
}