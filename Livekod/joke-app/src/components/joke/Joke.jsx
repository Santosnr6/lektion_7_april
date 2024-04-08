import './joke.css';

function Joke({ joke, index }) {
  return (
    <article className="joke">
        <h3>Joke #{ index }</h3>
        <p>
            <em>
                { joke.joke }
            </em>
        </p>
    </article>
  )
}

export default Joke;
