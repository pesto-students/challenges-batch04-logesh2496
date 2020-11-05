function updateInventory(oldInventory, newInventory) {
  const inventoryObj = {};
  const overAllInventory = [...oldInventory, ...newInventory];
  for (const [quan, item] of overAllInventory) {
    if (inventoryObj[item]) {
      inventoryObj[item] += quan;
    } else {
      inventoryObj[item] = quan;
    }
  }
  const sortedInventory = Object.keys(inventoryObj)
    .sort()
    .map(key => ([parseInt(inventoryObj[key]), key]));
  return sortedInventory;
}

export {
  updateInventory,
};
