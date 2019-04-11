import React, { Component } from 'react'

class Filter extends Component {
  render() {
    const { todos } = this.props;
    console.log("filter props",todos)
    return (
      <div>
        <button>All</button>
        <button>Finished</button>
        <button>Incomplete</button>
      </div>
    )
  }
}


export default Filter
