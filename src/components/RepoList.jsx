import { useEffect, useState } from "react";

import RepoCard from "./RepoCard";
import OwnerReposModal from "./OwnerReposModal";

import { getOwnerRepos, getRepos } from "../api";

function RepoList() {
  const [repos, setRepos] = useState([]);
  const [sortByStarsDirection, setSortByStarsDirection] = useState("desc");
  const [modalData, setModalData] = useState({
    isOpen: false,
    owner: "",
    repos: [],
  });

  useEffect(() => {
    getRepos().then((data) => setRepos(data));
  }, []);

  const handleModalOpen = async (owner) => {
    try {
      const response = await getOwnerRepos(owner);
      setModalData({ isOpen: true, owner: owner, repos: response });
    } catch (e) {
      console.error(e);
      alert("Failed to load owner repositories. Please try again later.");
    }
  };

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortByStarsDirection === "desc") {
      return b.stargazers_count - a.stargazers_count;
    } else {
      return a.stargazers_count - b.stargazers_count;
    }
  });

  console.log('log', getRepos())

  return (
    <div>
      <h1>GitHub Repos</h1>
      <button
        onClick={() =>
          setSortByStarsDirection(
            sortByStarsDirection === "desc" ? "asc" : "desc"
          )
        }
      >
        {sortByStarsDirection === "desc"
          ? "Sort by Stars: Descending"
          : "Sort by Stars: Ascending"}
      </button>
      <div className="repo-parent-container">
        {sortedRepos.map((repo, index) => (
          <RepoCard key={index} repo={repo} handleModalOpen={handleModalOpen} />
        ))}
      </div>
      {modalData.isOpen && (
        <OwnerReposModal
          repos={modalData.repos}
          owner={modalData.owner}
          onClose={() => setModalData({ ...modalData, isOpen: false })}
        />
      )}
    </div>
  );
}

export default RepoList;
