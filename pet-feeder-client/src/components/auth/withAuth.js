import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions/auth';
import Loader from '../Loader';
import Login from './Login';

function withAuth(PassedInComponent){

    class WrappedComponent extends Component {

        componentDidMount() {
            this.props.dispatchCheckAuth()
        }

        // renderCondition = () => {
        //     const authBool = this.props.authChecked
        //     const userLogged = this.props.loggedIn

        //     console.log(authBool)
            
        //     if(authBool){
        //         if(userLogged){
        //             return <PassedInComponent {...this.props}/>
        //         } else {
        //             return (
        //                 <div>
        //                     <p>Balls</p>
        //                     <Login />
        //                 </div>
        //             )
        //         }
        //     } else {
        //         return <Loader />
        //     }

        // }


        render() {
            //this conditional wasn't working because my authcheck prop was misnamed in mapstate so it didn't see a value from our store state
            if(!this.props.authCheck) { 
                return <Loader />
            } else if(!this.props.loggedIn) {
                return (
                    <div>
                        <p className="text-red-400">Log in to view that page.</p>
                        <Login />
                    </div>
                )} else {
                    return <PassedInComponent {...this.props} />
                }
          }
    }

    const mapStateToProps = ({ //
        auth: { authCheck, loggedIn, currentUser }
      }) => {
        return { authCheck, loggedIn, currentUser };
      };

    //the mapStateToProps above is the same as below but the store state is being destructured as it's passed in.
    //instead of calling state.auth.authCheck we are assigning each to an initial key of auth

    // const mapStateToProps = (state) => {
    //     return { 
    //         authCheck: state.auth.authCheck, 
    //         loggedIn: state.auth.loggedIn, 
    //         currentUser: state.auth.currentUser };
    //   };

    const mapDispatchToProps = (dispatch) => {
        return {
            dispatchCheckAuth: () => dispatch(checkAuth())
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
}

export default withAuth