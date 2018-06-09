import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addGun,removeGun,addGunAsync} from "./index.redux";
const mapStateProps = (state)=>{
    return {num:state}
}
const actionCreators = {addGun,removeGun,addGunAsync}
@connect(mapStateProps,actionCreators)
class App extends React.Component{
     render(){

         return(
             <div>
                 <h1>现在有机枪{this.props.num}把</h1>
                 <button onClick={this.props.addGun}>申请武器</button>
                 <button onClick={this.props.removeGun}>销毁武器</button>
                 <button onClick={this.props.addGunAsync}>拖三天给</button>
             </div>
         )
     }
 }
export default App;
