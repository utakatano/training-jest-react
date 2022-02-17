export const forEach = (items: number[], callback: (str: number) => void) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}