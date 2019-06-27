import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} >
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="http://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }} Bojan Vidovic></h2>
                        <h4 style={{ color: 'black', fontWeight: 'bold' }}>Junior Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <div className="resume-description">
                            <p >My name is Bojan Vidovic and I come from Croatia, Osijek where I first obtained High school diploma in Computer sciences
                                and later obtained my Bachelor’s degree of Electrical Engineering in Informatics. During my studying for
                                both diplomas I have worked with many programming languages and programs like C, C++, C#, Assembler,
                                MySQL and other programming languages for web design like JavaScript, HTML5, Bootstrap and CSS3 in which
                                I have some basic knowledge. I also had two times practical training with each lasting for two months in
                                which I worked on assembling computers, and helping students with solving programming exercises that their
                                teachers gave them. Besides that I have B 22 level in English language and I have basic knowledge of German
                                language (A 22 level). After finishing my Bachelor’s studies I worked many different jobs, but if you would like
                                to check my developer work, please visit my Github profile or my Projects.

                        </p>
                            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                            <h5>Adress</h5>
                            <p>Theresiengasse 40/3, 1180 Wien </p>
                            <h5>Phone</h5>
                            <p>00385 98 928 4562</p>
                            <h5>Email</h5>
                            <p>bojanvidovic1991@gmail.com</p>
                            <h5>Web</h5>
                            <p>My Github.io link</p>
                            <h5>Working Permit</h5>
                            <p>Yes</p>

                            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        </div>

                    </Cell>
                    <Cell className="resume-right-col" col={8} >
                        <h2>Education</h2>


                        <Education
                            startYear={2015}
                            endYear={2017}
                            schoolName="Technische Universität Wien(paused)"
                            schoolDescription="Master studies in Telecommunications"
                        />
                        <Education
                            startYear={2014}
                            endYear={2015}
                            schoolName="Josip Juraj Strossmayer University of Osijek"
                            schoolDescription="Bachelor studies in Electrical Engineering, branch: Informatics"
                        />
                        <Education
                            startYear={2014}
                            endYear={2010}
                            schoolName="Prva Srednja skola Beli Manastir"
                            schoolDescription="Computer Techinician"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={11.2017}
                            endYear={3.2019}
                            jobName="Sports betting worker"
                            jobDescription="Worker in sports betting office"
                        />
                        <Experience
                            startYear={3.2017}
                            endYear={10.2017}
                            jobName="Field Technitian"
                            jobDescription="Field technitian for Internet Provider company"
                        />
                        <Experience
                            startYear={8.2015}
                            endYear={10.2015}
                            jobName="Digsite worker"
                            jobDescription="WOrker on archelogical digsites"
                        />
                        <Experience
                            startYear={7.2014}
                            endYear={10.2014}
                            jobName="Seasonal worker"
                            jobDescription='Worker in "Belje.doo" food company'
                        />
                        <Experience
                            startYear={7.2013}
                            endYear={9.2013}
                            jobName="Seasonal worker"
                            jobDescription='Worker in "Belje.doo" food company'
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;