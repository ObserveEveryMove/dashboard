import React from "react"

class MagicEightBall extends React.Component {
    constructor() {
        super()
        this.state = {
            answers: ["Maybe Later", "Try again", "Fo Sho!!!", "Not Today Junior", "Wait for IT!", "Not looking Good", "looking good", "Epic FAIL!", "Not today", "It IS Possible", "Without a doubt", "Differnt kind of bird", "Anything's possible"],
            buttonTxt: "8",
            isAsk: false,

        }
        this.handleAsk = this.handleAsk.bind(this)
    }
    handleAsk() {
        let random = Math.floor(Math.random() * this.state.answers.length)
        this.setState({
            ...this.state,
            buttonTxt: this.state.answers[random],
            isAsk: true,
        })
        setTimeout(()=>{
            this.setState({
                ...this.state,
                isAsk: false,
            })
        },700)
    }
    render() {
        return (
            <div className="magic">

                <div className="ball">
                    & <div>
                        <button className={this.state.isAsk?"askBtnClicked": this.state.buttonTxt==="8"?"eightBtn":"askBtn"} onClick={this.handleAsk
                        }>{this.state.isAsk? "8":this.state.buttonTxt}</button>
                    </div>

                </div>
            </div>
        )
    }
}
export default MagicEightBall