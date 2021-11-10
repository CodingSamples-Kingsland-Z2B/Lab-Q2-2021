function Post(props){

    return(
        <div className="Post">
            <img src="./img/blue-origami-bird.png" alt="crane origami"/>
            <p className="description">{props.text}</p>
            <div>
                <span>
                    <small>Author:</small>
                    {props.author}
                </span>
            </div>
        </div>
    )
}

export default Post;