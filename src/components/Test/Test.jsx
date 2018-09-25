import React, { Component } from 'react'

class Test extends Component {
    state = {
        title : '',
        body: ''
    }
    componentDidMount(){
        // console.log('component [Did Mount...]')
        fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                body: data.body
            }))
            console.log(this.state.title)
    }

    // componentWillMount() {
    //     console.log('component [Will Mount] trigard');
        
    // }
    // componentDidUpdate() {
    //     console.log('component [Did Update] trigard')
    // }
    // componentWillUpdate() {
    //     console.log('component [Will Update] trigard')
    // }
    // componentWillReceiveProps(prevProps, prevState){
    //     //For React 17 we have to add UNSAFE_componentWillReciveProsp(){}
    //     console.log('component [Will Recive Props] trigard')
    // }

    // static getDerivedStateFromProps(nextProps, nextState){
    //     return {
    //         test : 'newTest'
    //     }
    // }
    // getSnapshotBeforeUpdate(nextProps, nextState){
    //     console.log('[getSnapShotBeforeUpdate] trigard')
    // }

  render() {
      const { title, body } = this.state
    return (
      <div>
        <h1>Test Component</h1>
        <h3>Title: {title}</h3>
        <p>Body : {body}</p>
      </div>
    )
  }
}
export default Test