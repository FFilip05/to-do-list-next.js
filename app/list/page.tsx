
import  List  from "../components/list"
import { ListT } from "@/types";

async function getData(){
  const res = await fetch("http://localhost:3000/api/list");
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
  return res.json()
}
export default async function Page() {
    const data = getData();
    return (
    <div>
      <h1>These are all your lists/ This is your board</h1>
      <p>11 </p>
     <div>
      
    </div>
    </div>)
  }