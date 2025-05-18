export function prepareGifts(gifts: number[]): number[] {
  function unique(value: number, index: number, self: number[]) { 
    return self.indexOf(value) === index;
  }
  return gifts.filter(unique).sort((a,b) => a - b);
}