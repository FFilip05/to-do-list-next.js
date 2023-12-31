import type { ListT } from "@/types"
export default function List({
    params,
  }: {
    params: ListT
  }) {
    return (
    <div className="list">
        <div className="header">
          <h1>{params.name}</h1>
        <p>{params.status}</p>
        </div>
        </div>
)
  }