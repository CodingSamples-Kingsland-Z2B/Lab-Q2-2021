import Posts from './Posts';

function Input(props) {
    return (
        <main className="Input" >
            <h1>Share Your Thoughts</h1>
            <form>
                <textarea></textarea>
                <button>Post</button>
            </form>
            <h2>Last 3 Posts on your wall</h2>
            <Posts limit="3" />
        </main>
    );
}

export default Input