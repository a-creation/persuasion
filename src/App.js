import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="body">
          <div className="title">Persuasion</div>
          <div className="intro">
            Welcome to Persuasion - a social role-playing card game where you try to convince your friends of your beliefs. 
          </div>
          <div className="instructionsandimages">
            
            <div className="instructions">
              <pre></pre>
             <div id="howtoplay">About Persuasion</div>

                In a world of strong polarization, we often find ourselves in conversation with people with different beliefs and values. These conversations might feel uncomfortable or unproductive if we aren't sure how to approach them.

                We've created Persuasion to help players discover and practice how they might approach more polarized conversations through a risk-free, playful game space. Through this game, we hope players will feel comfortable being silly and trying different conversation strategies--good or bad--that they might never otherwise use, and learn more about how different ways of framing views can affect others!

                Keep on reading to learn how to play!

              <pre></pre>
              <div>
                <div id="howtoplay">Players</div>
                This game may be played with any number of players. Players will be organized into different groups of 2-3 for each round. The more players the merrier!
                <pre></pre>
                <div id="howtoplay">Setup</div>
                <ol>
                <li>Print out the Persuasion card deck, and enough Score Sheets for each player.</li>
                
                <li>Shuffle the topic cards deck. Shuffle the role cards deck.</li>
                
                <li>Each player should take 1 Score Sheet and draw 1 card from the Role card deck. Players may look at the card they drew.</li>
                
                <li>Select a card from the Topic card deck, then take a quick survey of all players to check how many players believe each view related to the topic. If more than ⅔ of players hold the same view, discard the Topic card, select a new card, and repeat.</li> 
                
                <li>To begin a round, players will be given 1 minute to find and organize into groups of 2-3. Each group must include at least 1 player with an opposing view.</li>
                
                <li>At the end of each round, if players wish to play again, draw a new Topic card and Role card after shuffling both decks.</li>
                </ol>
                
                <div id="howtoplay">Gameplay</div>

                Groups will be given 5 minutes to discuss their views. Players must follow the instructions on their selected Role card throughout the discussion.
                At the end of the discussion, players will mark down how much the discussion changed their view for each opposing player, on a scale of 1-5.
                To play more rounds, players will discard their used Role card, then draw a new card. Repeat steps 1-4 with the same Topic card.

                <pre></pre>
                <div id="howtoplay">Win State</div>
                At the end of the game, players should calculate their total number of points on their Score Sheet by adding up their scores from each round. The player with the most number of points wins!
                
                <pre></pre>
                <div id="howtoplay">Variations</div>
                <ul>
                  <li>Each player can select and follow 2 Role cards during the discussion.</li>
                  <li>Play a game without selecting Role cards.</li>
                  <li>Create your own topic cards!</li>
                </ul>

                <div id="howtoplay">Discussion Questions</div>
                <ul>
                  <li>What discussion strategies did you initially think would be most effective at convincing other players? What discussion strategies were actually effective?</li>
                  <li>What discussion strategies were most effective in convincing you?</li>
                  <li>How effective were strategies like making up false facts? How might this relate to discussions you might have outside of this workshop?</li>
                  <li>What types of discussion strategies have you encountered outside of this workshop? How effective were they at convincing you?</li>
                  <li>Have you encountered discussions that you felt unsure of how to approach? How do you think you'll be able to approach similar discussions in the future?</li>
                </ul>


                <pre>{"\n"}</pre>

                <div id="howtoplay">Suggested Topic Cards</div>
                <ul>
                  <li>Do aliens exist?</li>
                  <li>Would you choose to live forever?</li>
                  <li>Is capitalism the best system?</li>
                  <li>Does every citizen have a responsibility to vote?</li>
                  <li>Should you always recycle?</li>
                  <li>What would you do given the trolley problem?</li>
                  <li>Would you edit the genes of your child?</li>
                </ul>

                <div id="howtoplay">Suggested Role Cards</div>
                <ul>
                  <li>The Devil's Advocate: argue for a view that you do not believe</li>
                  <li>The Sob Storyteller: argue your view with a sad story and/or appeal to emotion</li>
                  <li>The Conspiracy Theorist: argue your view using made-up facts and evidence</li>
                  <li>The Dictionary: use as many big words as possible</li>
                  <li>The Disagreer: poke as many holes in your opponents' arguments as possible</li>
                  <li>The Agreer: agree and corroborate your opponents' views before expressing your own</li>
                </ul>

              </div>
            </div>


            <div className="images">
              <img src="role1.png" alt="role1" width="250" height="250"/>
              <img src="q1.png" alt="question1" width="250" height="250"/>
              <img src="role2.png" alt="role2" width="250" height="250"/>
              <img src="q2.png" alt="question2" width="250" height="250"/>
              <img src="role3.png" alt="role3" width="250" height="250"/>
              <img src="q4.png" alt="question4" width="250" height="250"/>
            </div>


          </div>
         
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </div>
      </header>
    </div>
  );
}

export default App;
