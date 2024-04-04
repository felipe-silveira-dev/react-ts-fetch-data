import React, { useEffect } from 'react'
import useFetch from './useFetch';
import { useQuery } from '@tanstack/react-query';

const Reddit = () => {
    // const {
    //     data:
    //     posts,
    //     isLoading,
    //     error
    // } = useFetch('https://www.reddit.com/r/bitcoincash.json');

    const { data:
        posts,
        isLoading,
        error,
        isError,
        isSuccess
    } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,   
    });

    function getPosts() {
        return fetch('https://www.reddit.com/r/bitcoincash.json')
            .then(res => res.json())
            .then(json => json.data.children);
    }


    // const [posts, setPosts] = React.useState([]);
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [error, setError] = React.useState(null);

    // useEffect(() => {
    //     fetch('https://www.reddit.com/r/bitcoincash.json')
    //         .then(res => res.json())
    //         .then(json => {
    //             setIsLoading(false);
    //             setPosts(json.data.children);
    //         }).catch(error => {
    //             setIsLoading(false);
    //             setError(error);

    //         })
    // }, []);

    return (
        <div>
            <h1>/r/bitcoincash</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error: {error?.message}</p>}
            {isSuccess && (
                <ul>
                    {posts?.map(post => (
                        <li key={post.data.id}>
                            <a href={`https://www.reddit.com${post.data.permalink}`} target="_blank">
                                {post.data.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Reddit