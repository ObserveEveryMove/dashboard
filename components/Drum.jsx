


import React from "react"

import DrumPad from "./drumComps/DrumPad"

import Heater from "./drumComps/Heater"
import Slide from "./drumComps/Slide"
import Bank from ".//drumComps/Bank"

import sounds from "../data"





class Drum extends React.Component {

   constructor() {
      super()
      this.state = {
         volume: .5,
         power: true,
         bank: true,
         heater: false,
         soundsArr: Object.keys(sounds),
         rando: "cymbal1",
         sound: "",
      }



      this.handleClick = this.handleClick.bind(this)
      this.handlePower = this.handlePower.bind(this)
      this.handleVolume = this.handleVolume.bind(this)
      this.handleBank = this.handleBank.bind(this)
      this.handleHeater = this.handleHeater.bind(this)
   }

   componentDidMount() {
      window.addEventListener("keypress", e => {
         let button = document.getElementById(e.key.toUpperCase())

         if (button) {
            const sound = button.dataset.sounds
            let audio = new Audio(sounds[sound].audioSrc.default)
            audio.volume = this.state.volume
            audio.play()
         }
      })
   }

   componentWillUnmount() {
      window.removeEventListener('keypress', e => {
         let button = document.getElementById(e.key.toUpperCase())
         if (button) {
            const sound = button.dataset.sounds
            let audio = new Audio(sounds[sound].audioSrc.default)
            audio.volume = this.state.volume
            audio.play()
         }
      })
   }


   handleClick(e) {

      let { dataset } = e.target
    
      const sound = dataset.sounds
      let audio = new Audio(sounds[sound].audioSrc.default)
      audio.volume = this.state.volume
      audio.play()
      this.setState({
         heater: false,
         sound: sound,
      })

   }

   handlePower() {
      this.setState({
         power: !this.state.power,
      })
   }

   handleVolume(e) {
      let { name, value } = e.target
      this.setState({
         ...this.state,
         [name]: value / 100
      })
   }
   handleBank() {
      this.setState({
         bank: !this.state.bank
      })
   }


   handleHeater(e) {
      let random = Math.floor(Math.random() * 16)


      this.setState({
         ...this.state,
         rando: this.state.soundsArr[random],
         heater: true,

      })
      let { dataset } = e.target
      const sound = dataset.sounds
      let audio = new Audio(sounds[sound].audioSrc.default)
      audio.volume = this.state.volume
      audio.play()

      console.log(sound)
      console.log(dataset)
   }


   render() {

      console.log()
      return (
        <div className="drum">
         <div className="drumOuter">


               {this.state.heater && <div> <h2>Sound: {this.state.rando}</h2></div>}

               {!this.state.heater && <div><h2>Sound: {this.state.sound}</h2></div>}
               
               <div id="drum-machine">

                  <div >
                     <DrumPad
                        handleClick={this.handleClick}
                        bank={this.state.bank}
                        random={this.state.random}
                        soundsArr={this.state.soundsArr}

                     />
                  </div>

                  
                  <div className="mx">
                     <div className="my">
                       
                        <Heater
                           handleHeater={this.handleHeater}
                           rando={this.state.rando}
                        />
                        <Slide
                           handleVolume={this.handleVolume}
                           volume={this.state.volume}
                        />
                        <Bank
                           handleBank={this.handleBank} />


                     </div>
                  </div>

               </div>
          
         </div>
         </div>
      )
   }
}

export default Drum