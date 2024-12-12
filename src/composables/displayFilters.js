export function useDisplayFilters () {
  const capitalize = (value) => {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }

  const time = (timeInSecond) => {
    let partHours = 0
    let partMinutes = 0
    let timeToWork = 0
    let partSeconds = Math.floor(timeInSecond)
    if (partSeconds >= 60) {
      timeToWork = partSeconds / 60
      partMinutes = Math.floor(timeToWork)
      partSeconds = Math.round((timeToWork - partMinutes) * 60)
    }
    if (partMinutes >= 60) {
      timeToWork = partMinutes / 60
      partHours = Math.floor(timeToWork)
      partMinutes = Math.round((timeToWork - partHours) * 60)
    }
    if (partSeconds < 10) partSeconds = '0' + partSeconds
    if (partMinutes < 10) partMinutes = '0' + partMinutes

    let displayTime = partMinutes + ':' + partSeconds
    if (partHours > 0) {
      displayTime = partHours + ':' + displayTime
    }
    return displayTime
  }

  return { capitalize, time }
}
