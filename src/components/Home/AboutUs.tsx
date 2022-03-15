import React from "react";
import background from "../../assets/background.png";
import "./About.css";
import { List } from "reactstrap";

interface AboutProps {}

interface AboutState {}

class About extends React.Component<AboutProps, AboutState> {
  constructor(props: AboutProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundImage: `url(${background})` }}>
        <h3
          id="title"
          style={{
            backgroundColor: "#168291",
            color: "white",
            marginBottom: "0",
            padding: "0 .5em 1em .5em",
            borderBottom: "solid 1px black",
            fontFamily: "AboutFont",
          }}
        >
          Disorganized and overwhelmed?
        </h3>

        <div
          style={{
            backgroundColor: "#1CA5B8",
            marginBottom: "0",
            borderBottom: "solid 1px black",
            padding: "0 .5em 1em .5em",
            fontFamily: "monospace",
          }}
        >
          <p>
            Executive Dysfunction is widely associated neurodivergent
            conditions. If you are struggling at 'adulting' and feeling
            overwhelmed in your living space, this is for you.{" "}
          </p>

          <p>
            People with executive dysfunction typically operate off of different
            pillars of motivation than neurotypical people. Those 5 pillars of
            motivation can be simplified in the acronym INCUP. Which stands for:{" "}
          </p>

          <List type="unstyled">
            <ul>
              <li>
                <strong>I</strong> - Interest
              </li>
              <li>
                <strong>N</strong> - Novelty
              </li>
              <li>
                <strong>C</strong> - Challenge
              </li>
              <li>
                <strong>U</strong> - Urgency
              </li>
              <li>
                <strong>P</strong> - Passion
              </li>
            </ul>
          </List>
        </div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            padding: "0 .5em 1em .5em",
            fontFamily: "monospace",
          }}
        >
          <p>
            When I was a kid I remember my mom had written all of the household
            tasks on popcicle sticks and put them in a jar. She would pull out
            one at a time, and then complete that task before moving on to the
            next. When she had pulled all of the sticks and completed all the
            tasks, back they would go in the jar for next time.
          </p>

          <div className="guide">
            <p>
              That's where this idea was born! If I can turn daily tasks in to
              interesting, new and challenging, with a sense of urgency to it;
              Then maybe it can make peoples' lives easier.
              <strong>The steps to get started are outlined below: </strong>{" "}
            </p>
            <List style={{ fontWeight: "bold" }}>
              <ol>
                <li>Add all of your rooms to your house</li>
                <li>Add each chore to the room they belong in</li>
                <li>
                  You can be as descriptive as you'd like on each chore, if you
                  list all the steps now you don't have to think about them
                  later
                </li>
                <li>
                  Add the approximate time that task should take. Be realistic
                  because you'll be racing the clock later on!
                </li>
                <li>
                  Once you're all set up, all you have to do is open the app
                  when you have any amount of free time! Tell the generator how
                  much time you have and specify a room if you'd like. And it
                  will generate you a random chore to do and remind you of the
                  steps and how much time was alloted.
                </li>
                <li>You're all set!</li>
              </ol>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
