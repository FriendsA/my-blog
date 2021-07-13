import { IP } from '../config';

function requestPost(url, body) {
    return fetch(IP + url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    }).then(res => res.json());
}

export default requestPost;