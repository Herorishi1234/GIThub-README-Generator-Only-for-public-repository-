import React, { useState } from "react";

import Header from "./components/Header";
import MessageBox from "./components/MessageBox";
import RepoForm from "./components/RepoForm";
import ErrorBox from "./components/ErrorBox";
import RepoInfo from "./components/RepoInfo";
import ReadmeDisplay from "./components/ReadmeDisplay";
import Instructions from "./components/Instructions";
import Features from "./components/Features";
import Footer from "./components/Footer";


function App2() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [readme, setReadme] = useState("");
  const [error, setError] = useState("");
  const [repoInfo, setRepoInfo] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!repoUrl.trim()) {
      setError("Please enter a github repository");
      return;
    }

    // if successfully entered valid Url we will clean previous things
    setError("");
    setReadme("");
    setRepoInfo(null);
    setLoading(true);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
      const response = await fetch(
        `${backendUrl}/api/generate-readme`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ repoUrl: repoUrl.trim() }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setReadme(data.readme);
        setRepoInfo(data.repository);
        setError("");
      } else {
        setError(data.error || "Failed to generate README");
        setReadme("");
        setRepoInfo(null);
      }
    } catch (err) {
      console.log("Error: ", err);
      setError(
        "Failed to connect to the server. Make sure the backend is running. "
      );
      setReadme("");
      setRepoInfo(null);
    } finally {
      setLoading(false);
    }
  };

  // so this function will copy the generated readme to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(readme)
      .then(() => setMessage("README copied!"))
      .catch(() => setMessage("Copy Failed"));
    setTimeout(() => setMessage(""), 3000);
  };

  const downloadReadme = () => {
    const element = document.createELement("a");
    const file = new Blob([readme], { type: "text/markdown" });
    element.href = URL.createObjectURL(file);
    element.download = "Readme.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 font-sans">
      <MessageBox message={message} />
      <Header />
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <RepoForm {...{ repoUrl, setRepoUrl, handleSubmit, loading }} />
        <ErrorBox error={error} />
        <RepoInfo repoInfo={repoInfo} />
        <ReadmeDisplay {...{ readme, copyToClipboard, downloadReadme }} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <Instructions />
          <Features />
        </div>
      </main>
     <Footer/>
    </div>
  );
}

export default App2;
