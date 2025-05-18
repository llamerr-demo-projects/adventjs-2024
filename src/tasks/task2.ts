export function createFrame(names: string[]): string {
    const frameChar = '*';
    const maxLen = names.reduce((acc, current) => current.length > acc ? current.length : acc, 0);
    
    let frame = frameChar.repeat(maxLen + 4) + '\n';
    names.forEach((name) => frame += `* ${name.padEnd(maxLen, ' ')} *\n`)
    frame += frameChar.repeat(maxLen + 4);
    
    return frame
}