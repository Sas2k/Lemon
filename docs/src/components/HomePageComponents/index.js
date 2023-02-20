import React from 'react';
import styles from './styles.module.css';

function Code({ code }) {
    return (
        <pre>
            <code className={styles.Codeblock}>
                {code}
            </code>
        </pre>
    );
  }

var component_example = `class MyComponent(Component):
    name = "MyComponent"
    def item(props: dict):
        return f"<div>Hello {props['name']}!</div>"`;

var back_and_front_example = `@app.route("/api")
class api:
    def get(self, req, res):
        res.text = Root.render("<MyComponent name='Alfred'/>")
    def post(self, req, res):
        name = req.json['name']
        orm.insert('Person', [['Names'], [name]])`;

function Codeandtext(props) {
    return (
    <>
        <div className={styles.yellow_block}>
            <div className={styles.textBlock}>
                <h3>Components made easy.</h3>
                <p>Components are isolated elements which have their own properties and states</p>
            </div>
            <Code code={component_example}/>
        </div>
        <div className={styles.green_block}>
            <div className={styles.textBlock}>
                <h3>Backend intertwined with Front-end.</h3>
                <p>the backend is seamlessly connected with the backend, So you can connect to the DB while fixing the UI 🛠</p>
            </div>
            <Code code={back_and_front_example}/>
        </div>
    </>
    );
}

function TutorialAndLinks(props){
    return (
        <>
            <div className={styles.TutorialLinks}>
                <a href="/Lemon/docs/lemon-in-3min"><button className={styles.GetStarted}>Get Started.</button></a>
                <a className={styles.ToTutorial} href="/Lemon/docs/tutorial/intro-to-tutorial">Try the Tutorial →</a>
            </div>
        </>
    );    
}

export default function HomePageComponents(props) {
    return (
        <>
            <div>
                <Codeandtext/>
                <TutorialAndLinks/>
            </div>
        </>
    );
}