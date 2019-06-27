import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ja from './ja.jpg';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={ja} alt="avatar" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Junior Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | React.js | Javascript | Node.js</p>
                            <div className="social-links">
                                {/* Linkedin*/}
                                <a href="https://www.facebook.com/bojan.vidovic.50" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>
                                {/* Github*/}
                                <a href="https://github.com/FrankDaRabbit" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Freecodecamp*/}
                                <a href="https://www.freecodecamp.org/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>
                                {/* Youtube*/}
                                <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>


                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Landing;