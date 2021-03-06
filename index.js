class Driver {
  constructor(name, day) {
    this.name = name;
    this.startDate = new Date(day)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const blocks = this.endingLocation.vertical - this.beginningLocation.vertical
    const avenues = (eastWest.indexOf(this.endingLocation.horizontal) + 1) - (eastWest.indexOf(this.beginningLocation.horizontal) + 1)

    return blocks + avenues
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}


let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];