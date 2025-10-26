import "./RepoCard.css";

function RepoCard({ repo, handleModalOpen }) {
  return (
    <div className="repo-container" key={repo.index}>
      <h2>Name: {repo.name}</h2>
      <p>Stars: {repo.stargazers_count ?? "No stars yet!"}</p>
      <p>Primary Language: {repo.language ?? "No language listed"}</p>
      <p>Owner: {repo.owner.login}</p>
      <a>
        <button onClick={() => handleModalOpen(repo.owner.login)}>
          Show All Owner Repos
        </button>
      </a>
    </div>
  );
}

export default RepoCard;
