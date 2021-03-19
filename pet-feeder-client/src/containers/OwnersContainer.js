import React, { Component } from 'react'
import OwnerList from '../components/OwnerList'



class OwnersContainer extends Component {

    state = {
        owners: [],
        loading: true
    }

    componentDidMount(){
        fetch("http://localhost:3001/owners", {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(ownersJson => {
            console.log("ownerJson", ownersJson)
            this.setState({
                owners: ownersJson,
                loading: false
            })
        })

    }

    render(){
        return(
            <section className="max-w-2xl w-10/12 mx-auto mt-20">
                {this.state.loading ? "loading spinner" : <OwnerList owners={this.state.owners} /> }
            </section>
        )
    }

}

export default OwnersContainer