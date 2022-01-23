import React , { Component } from 'react';
import { connect } from 'react-redux'
//import { robots } from './robots.js';
import SearchBox from '../component/SearchBox.js';
import CardList from '../component/CardList.js';
import Scroll from '../component/Scroll.js';
import ErrorBoundry from '../component/ErrorBoundry.js';
import './App.css';
import { setSearchField, requestRobots } from '../actions.js'

const mapStateToProps = state => {
        // console.log("state.searchRobots.searchfield >> "+state.searchRobots.searchfield);
        // console.log("state.requestRobots.robots >> "+state.requestRobots.robots);
        // console.log("state.requestRobots.isPending >> "+state.requestRobots.isPending);
        return {
            searchfield : state.searchRobots.searchfield,
             robots: state.requestRobots.robots,
             isPending: state.requestRobots.isPending,
             error: state.requestRobots.error
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
            onRequestRobots: () => dispatch(requestRobots())
        }
    }

class App extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         robots : []
    //     }
    // }




    // onSearchChange = (event) => {
    //     //console.log(event.target.value);
    //     this.setState({searchfield: event.target.value})
    // }

    componentDidMount(){
        // console.log("state.searchRobots >> "+state.searchRobots);
        // console.log("state.requestRobots >> "+state.requestRobots);
        // console.log("state.requestRobots.isPending >> "+state.requestRobots.isPending);
        // console.log("state.searchRobots.searchfield >> "+state.searchRobots.searchfield);
        // console.log("state.requestRobots.robots >> "+state.requestRobots.robots);
        // console.log("state.requestRobots.isPending >> "+state.requestRobots.isPending);
        // console.log("state.searchRobots.searchfield >> "+state.searchRobots.searchfield);
        // console.log("state.requestRobots.robots >> "+state.requestRobots.robots);
        // console.log("state.requestRobots.isPending >> "+state.requestRobots.isPending);
         //console.log("Store props : "+this.props);
        // console.log("Store props searchfield : "+this.props.searchfield);
        //console.log("Store props searchfield : "+this.props.searchfield.searchfield);
        //console.log("Store props store state : "+this.props.store.getState());
        // for(var property in this.props) {
        //     console.log("Property :  "+property + "=" + this.props[property]);
        // }

        // for(var property in this.props.searchfield) {
        //     console.log("Property inside searchfield :  "+property + "=" + this.props.searchfield[property]);
        // }
        //  fetch('https://jsonplaceholder.typicode.com/users')
        //  .then(robots => robots.json())
        //  .then(jsonRobots => this.setState({robots: jsonRobots}));
        this.props.onRequestRobots();
         //.then(jsonRobots => []);
    }

    render(){
        //const { robots } = this.state;
        const { searchfield,  onSearchChange, robots, isPending} = this.props;
        // console.log("In render()");
        // console.log("searchField with capital F : "+searchfield);
        // for(var property in searchfield) {

        //     console.log("Property inside searchField :  "+property + "=" + searchfield[property]);
        // }
        //isPending = false;
        const filteredRobots = robots.filter( robot => {
            return robot.name?.toLowerCase().includes(searchfield.toLowerCase());//
        });
       return isPending ?
             <h1>Loading</h1>
        :
             (
                <div className="tc">
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);