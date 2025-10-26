import { useEffect, useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function OwnerReposModal({ repos, owner, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const style = {
    content: { backgroundColor: "#242424" },
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={style}>
      <h2>{owner}'s Repositories</h2>
      <button onClick={onClose}>Close</button>
      <div className="repo-parent-container">
        {repos.map((repo, index) => (
          <div className="repo-container" key={index}>
            <a href={repo.html_url}>
              <h2>Repo Name: {repo.name}</h2>
            </a>
            <p>Stars: {repo.stargazers_count ?? "No stars yet!"}</p>
            <p>Primary Language: {repo.language ?? "No language listed"}</p>
          </div>
        ))}
      </div>
    </ReactModal>
  );
}

export default OwnerReposModal;
