import { useState } from "react";
const SearchByNameForm = () => {
    const [name, setName] = useState('');
    const [results, setResults] = useState([]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}/api/getResumeByName/${encodeURIComponent(name)}`);
        if (!response.ok) throw new Error('No results found');
        const data = await response.json();
        setResults(data.data);
      } catch (error) {
        setResults([]);
        alert(error.message);
      }
    };
  
    return (
      <div className="p-4 border rounded-md shadow-md w-96 mx-auto mt-10 bg-[#f8f8fa] h-[60vh] overflow-scroll">
        <h2 className="text-xl font-bold mb-4">Search Resumes by Name</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            placeholder="Enter name (e.g., Anurag+Kushwaha)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
          />
          <button type="submit" className=" text-white p-2 w-full bg-[#1d5e6d]">Search</button>
        </form>
        {results.length > 0 && (
          <div className="mt-4 border p-2 space-y-2">
            {results.map((resume, index) => (
              <div key={index} className="border p-2 rounded-md">
                <p>Name: {resume.name}</p>
                <p>Title: {resume.job_title}</p>
                <p>Description: {resume.job_description}</p>
                <p>Company: {resume.job_company}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default SearchByNameForm;