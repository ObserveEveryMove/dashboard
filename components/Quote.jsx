


import React from "react"
import quotes from "../quotes.json"
import { connect } from "react-redux";


class QuoteGenerator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quotes: [],
            quote: {},
            colors: ["green", "lightBlue", "dodgerBlue", "lightGreen", "gray", "gold", "orange", "seaGreen", "red","tomato","violet","mediumSeaGreen"],
            color: {}
        }
        this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount() {
        this.setState({
            ...this.state,
            quotes,
        })

        setTimeout(() => {
            this.handleClick()
        }, 1);

    }


    handleClick() {
        let random = Math.floor(Math.random() * this.state.quotes.length)
        let colorPick = Math.floor(Math.random() * this.state.colors.length)
       
        this.setState({
            ...this.state,
            color: this.state.colors[colorPick],
            quote: this.state.quotes[random],

        })
    }

    render() {
        // console.log(quotes)
        return (
          
            <div className="qcontainer" >

                <div className="qcard" style={!this.props.nightMode?{backgroundColor: this.props.color4 }:null}>
                    <h2 className={!this.props.nightMode?"qquote" : "nightText"}>
                        {this.state.quote.quoteText}
                    </h2>


                    <div className="qauthor">

                        {(this.state.quote.quoteAuthor && <p className={this.props.nightMode?"nightText":null}>Created by: </p>)}


                        <h3 className={!this.props.nightMode?"qauthorName":"nightText"}>
                            {this.state.quote.quoteAuthor}
                        </h3>
                    </div>
                   
                        {/* <button className="qbutton logInBtn" onClick={this.handleClick}>New Quote</button> */}
                  
                </div>

  <button className="qbutton logInBtn" onClick={this.handleClick}>New Quote</button>


            </div>
    
        )
    }



}






const mapStateToProps = ({ login }) => {
    
    return {

        nightMode: login.nightMode,
        color4: login.color4,

    }
}



export default connect(mapStateToProps,null)(QuoteGenerator);
