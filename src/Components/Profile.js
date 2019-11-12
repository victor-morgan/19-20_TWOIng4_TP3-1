import React, { Component } from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fond: "white"
        }
    }

    handleClick = (e) => {
        if (this.state.fond === "blue") {
            this.setState({
                
                fond: "white"
            })
        } else {
            this.setState({
                fond: "blue"
            })
        }
    }

    render() {
        return(
            <div class="box-profile" style={{backgroundColor: this.state.fond}}>
                <img src={this.props.photo} alt="photo_profile"/>
                <div class="box-profile-description">

                    <a>{this.props.prenom}
                    </a>
                    <a>{this.props.nom}
                    </a>
                    <a>{this.props.date}
                    </a>

                </div>
                <div class="box-profile-style">
                    <button id="style" onClick={this.handleClick}> Change style </button>
                     
                
                </div>
            </div>
        );
    }
}

export default Profile;