export type Inventory = Array<
  { name: string, quantity: number, category: string }
>

export function organizeInventory(inventory: Inventory): object {
  const organizedInventory = {};
  inventory.forEach((toy) => {
    if (!organizedInventory[toy.category]) organizedInventory[toy.category] = {};
    
    if (!organizedInventory[toy.category][toy.name]) organizedInventory[toy.category][toy.name] = toy.quantity;
    else organizedInventory[toy.category][toy.name] += toy.quantity; 
  })
  return organizedInventory
}