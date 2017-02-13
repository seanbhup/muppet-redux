import React, {Component} from "react";
import {connect} from "react-redux";
import SelectMuppet from "../actions/SelectMuppet.js";
import {bindActionCreators} from "redux";


class MuppetList extends Component{
    render(){
        var muppetsArray = [];
        this.props.muppets.map((muppets, index)=>{
            muppetsArray.push(
                <h1
                    key={muppets.name}
                    onClick={()=>{this.props.selectMuppet(muppets.name)}}
                >
                    {muppets.name+"'"}s species is {muppets.species}
                </h1>
            )
        });
        return(
            <div>
                {muppetsArray}
            </div>
        );
    };
};

function mapStateToProps(state){
    return {
        muppets: state.muppets
    }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectMuppet: SelectMuppet
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MuppetList);
