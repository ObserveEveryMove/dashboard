

const Bank = (props) => {
    return (
        <div>
            
            {/* <input type="range" min="0" max="1" className="toggle" onChange={props.handleBank}></input> */}
            <button onClick={props.handleBank} className="bank" >Bank</button>
        </div>
    )
}

export default Bank