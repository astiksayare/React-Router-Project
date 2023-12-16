
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {

    const [data, setData] = useState ([]);
    const {userName} = useParams();

    useEffect(() => {

        fetch(`https://api.github.com/users/${userName}`)

        .then((response) => {
            return response.json();
        })

        .then((data) => {
            setData(data);
        })

        .catch((error) => {
            console.log(error + ". Please check the url again.");
        })

    }, []);

    return (
        <div 
        className="bg-gray-600 text-white text-3xl flex flex-col gap-4 justify-center items-center"
        >
        <h1 className="mt-4">Github Name: {data.name}</h1>
        <img className="mb-4" src={data.avatar_url} alt="Github Profile" width={250} />
        </div>
    )
}

export default User;