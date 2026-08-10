import { useState, useEffect } from "react";
import axios from "axios";

function PersonCard(props) {
    const { person } = props;

    const [followers, setFollowers] = useState([]);

    const { login, repos_url, followers_url, avatar_url, html_url } = person;

    const getFollowers = async () => {
        try {
            let response = await axios({
                method: "GET",
                url: followers_url,
                headers: {
                    Authorization: ``,
                    Accept: "application/vnd.github+json",
                },
            });
            setFollowers(response.data);
        } catch (e) {}
    };

    useEffect(() => {
        getFollowers();
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "20px",
                border: "2px solid rgba(0,0,0,0.1)",
                padding: "10px",
                borderRadius: "10px",
            }}
        >
            <img src={avatar_url} style={{ height: "100px" }} />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                }}
            >
                <div>
                    <b style={{ fontSize: "20px" }}>{login}</b>
                </div>
                <div>Folowers: {followers.length}</div>
                <button>Github profile</button>
                <button>View Repositories</button>
            </div>
        </div>
    );
}

export default PersonCard;