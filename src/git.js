import React, { useEffect, useState} from "react"; 
function GitHubUser({login}){
const [data,setData]=useState();
const [repos,setRepos]=useState([]);
const [loading,setLoading]=useState(false);
const [error,setError] =useState();
useEffect(()=>{
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`).then(data=>data.json()).then(setData).then(()=>setLoading(false)).catch(setError);
},[login]);
useEffect(()=>{
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}/repos`).then(data=>data.json()).then(setRepos).then(()=>setLoading(false)).catch(setError);
},[login]);

if(loading) return <h1>loading...</h1>;
if(error) return <pre>{JSON.stringify(error,null,2)}</pre>
if(!data) return null;
return (
<div>
    <img src={data.avatar_url} alt={data.login} style={{width:200}}/>
    <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
    </div>
    <div>The repositories are:
        <ul>
            {repos.map(i=><li>{i.name}</li>)}
        </ul>
    </div>
</div>
)}
export default function Git(){
    const [lgn,setLogin]=useState("");
    const [id,setId]=useState("");

return <>
<form onSubmit={(e)=>{
e.preventDefault();
setId(lgn);
}}>
<input type="text" value={lgn} onChange={(event)=>setLogin(event.target.value)}/>
<button>
    GET</button></form>
 <GitHubUser login={id}/>
 </>
}