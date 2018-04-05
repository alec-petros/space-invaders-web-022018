let crewId = 0

class CrewMember {
  constructor(position) {
    this.position = position
    this.id = crewId++
    this.currentShip = 'Looking for a Rig'
  }
  engageWarpDrive() {
    if (this.currentShip !== 'Looking for a Rig' && this.position === 'Pilot') {
      this.currentShip.warpDrive = 'engaged'
    } else {
      console.log("warp drive no effect")
      return 'had no effect'
    }
  }
  setsInvisibility() {
    if (this.currentShip !== 'Looking for a Rig' && this.position === 'Defender') {
      this.currentShip.cloaked = true
    } else {
      console.log("invis no effect")
      return 'had no effect'
    }
  }
  chargePhasers() {
    if (this.currentShip !== 'Looking for a Rig' && this.position === 'Gunner') {
      this.currentShip.phasersCharge = 'charged'
    } else {
      console.log("phasers no effect")
      return 'had no effect'
    }

  }
}
