import React from 'react';

import './App.css';
import './Components/Navbar.css';
import './Components/Comment.css';
import './Components/Profile.css';
import Lea from './images/Lea.jpg';
import Paul from './images/Paul.jpg';
import Pierre from './images/Pierre.jpg';
import Navbar from "./Components/Navbar.js";
import Profile from "./Components/Profile.js";
import Comment from "./Components/Comment.js";




class App extends React.Component{
  constructor(props) {
      super(props);

      this.state = {
        profile : [
          {
            photo: Lea,
            prenom: "Lea",
            nom: "poliakov",
            date: "25/02/1942",
            Comment: "J'AI FAIM QUAND EST CE QU'ON VA AU GREC",
            super: 0
          },
          {
            photo: Paul,
            prenom: "Paul",
            nom: "Pol",
            date: "10/09/1994",
            Comment: "Vive la nature et les arbres oui j'aime les arbres",
            super: 0
          },
          {
            photo: Pierre,
            prenom: "Pierre",
            nom: "LeCailloux",
            date: "01/01/1221",
            Comment: "Bonjour je suis un cailloux je mange des graviers",
            super: 0
          }
        ],
          change: 0
  };
}


handleClick(i){   // pour changer de personnage qd on clique sur la navbar
  this.setState({change: i})
}



handleClickLikes(i){       // pour incrementer les likes
  const profileCopy = this.state.profile.slice();
  profileCopy[i].super++;
  this.setState({profile: profileCopy})
}



  render(){

    return(

      <body class="page">
        <header>
          <nav class="nav">
      
          <Navbar
                  prenom={this.state.profile[0].prenom}
                  onClick={() => this.handleClick(0)}/>
              <Navbar
                  prenom={this.state.profile[1].prenom}
                  onClick={() => this.handleClick(1)}/>
              <Navbar
                  prenom={this.state.profile[2].prenom}
                  onClick={() => this.handleClick(2)}/>
          </nav>
        </header>
        <main>
        <Profile
                photo={this.state.profile[this.state.change].photo}
                prenom={this.state.profile[this.state.change].prenom}
                nom={this.state.profile[this.state.change].nom}
                date={this.state.profile[this.state.change].date} />
           

            <Comment
                Comment={this.state.profile[this.state.change].Comment}
                super={this.state.profile[this.state.change].super}
                onClick={() => this.handleClickLikes(this.state.change)}/>
        </main>
      </body>

    );
  }

}
export default App;