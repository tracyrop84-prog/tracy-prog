import { useEffect, useState } from "react";
import axios from "axios";

function RepositoryList(props) {
    const { isVisible, setIsVisible, repos_url } = props;

    const [repos, setRepos] = useState([]);

    const getRepos = async () => {
        let response = await axios({
            method: "GET",
            url: repos_url,
            headers: {
                Authorization: ``,
                Accept: "application/vnd.github+json",
            },
        });

        console.log(response);
        setRepos(response.data);
    };

    useEffect(() => {
        if (!isVisible) {
            return;
        }
        getRepos();
    }, [isVisible]);

    //conditional rendering
    if (!isVisible) {
        return null;
    }

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    minWidth: "350px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                    maxHeight: "70vh",
                    overflowY: "auto",
                }}
            >
                <h2>
                    Repository List{" "}
                    <button onClick={() => setIsVisible(false)}>Close</button>
                </h2>
                <div>
                    <ol>
                        {repos.map((repo) => (
                            <li key={repo.id}>
                                <div>
                                    <b>{repo.name}</b>
                                </div>
                                <div>
                                    <span>{repo.description}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default RepositoryList;