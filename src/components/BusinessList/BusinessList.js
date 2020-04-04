import React, { Component } from "react";
import './BusinessList.css';
import Business from '../Business/Business';

const businesses = [
  
];

class BusinessList extends Component {
  callback(one){

  }
  render() {
    return (
    <div className="BusinessList">
  {
    this.props.businesses.map(function(val){ 
            return <Business business={val}/>; 
        })
  }
</div>
    );
  }
}

export default BusinessList;
