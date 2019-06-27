import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, IconButton, Button, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Procject 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}></CardTitle>
                        <CardText>My portofolio created using Reactjs</CardText>
                        <CardActions border style={{ textAlign: 'center' }}>
                            <Button colored href="https://github.com/FrankDaRabbit/Portfolio">Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Procject 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png) center / cover' }}></CardTitle>
                        <CardText>Rock paper scissors game using HTML/CSS and Javascript</CardText>
                        <CardActions border style={{ textAlign: 'center' }}>
                            <Button colored href="https://github.com/FrankDaRabbit/Portfolio">Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Procject 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png) center / cover' }}></CardTitle>
                        <CardText>Simple card flipping game using HTML/CSS and Javascript</CardText>
                        <CardActions border style={{ textAlign: 'center' }}>
                            <Button colored href="https://github.com/FrankDaRabbit/Card-flipping-game">Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Procject 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png) center / cover' }}></CardTitle>
                        <CardText>App for calculating monthly budget</CardText>
                        <CardActions border style={{ textAlign: 'center' }}>
                            <Button colored href="https://github.com/FrankDaRabbit/Budget-App">Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Procject 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png) center / cover' }}></CardTitle>
                        <CardText>Food app with recipes using API</CardText>
                        <CardActions border style={{ textAlign: 'center' }}>
                            <Button colored href="https://github.com/FrankDaRabbit/Food-app-updated-">Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Procject 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png) center / cover' }}></CardTitle>
                        <CardText>Laptop store using Nodejs</CardText>
                        <CardActions border style={{ textAlign: 'center' }}>
                            <Button colored href="https://github.com/FrankDaRabbit/Laoptop-Nodejs">Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: 'black' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{ fontWeight: 'bold', fontSize: '18px' }}>React</Tab>
                    <Tab style={{ fontWeight: 'bold', fontSize: '18px' }}>Javascript</Tab>
                    <Tab style={{ fontWeight: 'bold', fontSize: '18px' }}>Nodejs</Tab>


                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;