const formatDate = (date: Date) => {
  const month = date.getUTCMonth() + 1
  const day = date.getUTCDate()
  const year = date.getUTCFullYear()

  return `${day}.${month}.${year}`
}

export default formatDate
