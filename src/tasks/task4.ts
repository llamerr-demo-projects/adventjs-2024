export function createXmasTree(height: number, ornament: string): string {
    let tree = ''
    for (let i = 0; i < height; i++) {
      tree += ornament.repeat(i*2+1).padStart(height+i, '_').padEnd(height * 2 - 1, '_') + '\n';
    }
    for (let i = 1; i <= 2; i++) {
      tree += '#'.padStart(height, '_').padEnd(height * 2 - 1, '_');
      if (i === 1)  tree += '\n';
    }
    return tree;
}