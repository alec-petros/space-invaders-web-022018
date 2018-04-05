let shipId = 0

class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.id = shipId++
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    if (crew.length) {
      this.docked = false
    } else {
      this.docked = true
    }
    this.phasersCharge = 'uncharged'
    this.crew = crew
    this.crew.forEach(member => {
      member.currentShip = this
    })
  }
}
