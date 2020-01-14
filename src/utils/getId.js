export default function getId(editedData, lists) {
  if (Object.keys(editedData).length > 0) {
    return editedData.id
  } else if (lists.length > 0) {
    const lastIndex = lists.map(list => list.id).sort((x, y) => x - y)
    return lastIndex[lastIndex.length - 1] + 1
  } else {
    return 1
  }
}
