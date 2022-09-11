// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Team = { id: number; name: string; short_name: string };
type Data = {
    teams: Array<Team>
}
type ResTeam = { id: number; name: string };
type Response = {
    teams: Array<ResTeam>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const response = await fetch(
    "https://fantasy.premierleague.com/api/bootstrap-static/"
  )
  const obj = await response.json() as Data
  const teams = obj.teams.map((team: Team) => {
    const { id, short_name, name } = team
    return { id, short_name, name }
  })
  res.status(200).json({ teams });
}
