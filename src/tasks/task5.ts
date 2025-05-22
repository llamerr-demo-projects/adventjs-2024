export type Shoe = {
    type: 'I' | 'R'
    size: number
}
  
export function organizeShoes(shoes: Shoe[]): number[] {
    const processing: Record<number, number> = {};
    const result: number[] = [];
    shoes.forEach(({type, size}) => {
      if (!processing[size]) processing[size] = 0;
      if (type == 'R') {
        if (processing[size] < 0) result.push(size);
        processing[size]++;
      } else {
        if (processing[size] > 0) result.push(size);
        processing[size]--;
      }
    })
    return result;
}