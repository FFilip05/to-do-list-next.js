export default function List({
    params,
  }: {
    params: { name: string,tags: string[], createdAt: string, status: boolean, isClosed: boolean, assignedUsers: String[] }
  }) {
    return (
    <div className="list">
        <div className="header"><h1>{params.name}</h1>
        <p>{params.status}</p></div></div>
)
  }