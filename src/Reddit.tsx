import React, { useEffect } from 'react'

const Reddit = () => {
    const [posts, setPosts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        fetch('https://www.reddit.com/r/bitcoincash.jsonx')
            .then(res => res.json())
            .then(json => {
                setIsLoading(false);
                setPosts(json.data.children);
            }).catch(error => {
                setIsLoading(false);
                setError(error);
            })
    }, []);

    return (
        <div>
            <h1>/r/bitcoincash</h1>
            {isLoading && <p>Loading...</p>}
            <ul>
                {posts.map(post => (
                    <li key={post.data.id}>
                        <a href={`https://www.reddit.com${post.data.permalink}`} target="_blank">
                            {post.data.title}
                        </a>
                    </li>
                ))}
            </ul>
            {error && <p>Deu ruim: {error.message}</p>}
        </div>
    );
}

export default Reddit