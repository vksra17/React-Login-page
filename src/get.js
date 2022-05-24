import React from "react";

class Get extends React.Component{
    render(){
        return(
            <>
            <div> text:<span>{this.props.shareInput}</span></div>
            </>
        );
    }
}
export default Get;