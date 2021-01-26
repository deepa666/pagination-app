import React, {Component} from 'react'
import axios from 'axios'
import './App.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
images:[],
          }
        }
        componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/photos/?_start=0&_limit=5')
        }

    render() {
        return (
            <div className="mainpage">
             <h1>Pagination App</h1> 
             <button>Previous</button>
             <button>Next</button>
            </div>

        )
    }}
