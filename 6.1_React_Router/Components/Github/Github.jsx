import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function Github() {
//   const [data, setData] = useState({});

    let temp = useLoaderData();
    const [data, setData] = useState(temp);
    const [userName, setUserName] = useState("");

//   useEffect(() => {
//     fetch("https://api.github.com/users/HarshSeth11")
//       .then((response) => response.json())
//       .then((response) => setData(response));
//   }, []);

//   useEffect(() => {
//     fetch(`https://api.github.com/users/${userName}`)
//       .then((response) => response.json())
//       .then((response) => data = response);
//   }, [userName]);


    const handleClick = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then((response) => setData(response));

    }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div className="flex flex-col items-center">
        <span>GitHub followers: {data.followers}</span>
        <img
          src={data.avatar_url}
          alt="Git picture"
          width={300}
          className="mt-4 mb-2"
        />
        <h1>{data.name}</h1>
      </div>
      <div className="mt-4">
        <form>
            <input
            className="border border-gray-400 py-1 px-2 mr-2 focus:outline-none w-1/4 text-black"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.currentTarget.value)}
            placeholder="Username"
        />
        <button
            className="bg-blue-500 text-white py-1 px-2 rounded focus:outline-none hover:bg-blue-600 w-1/4"
            onClick={handleClick}
        >
            Submit
        </button>
        </form>
      </div>
    </div>
  );
}

