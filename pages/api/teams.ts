// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Team } from '../../types/types'

type Response = {
    teams: Array<Team>
}

// REF: https://teamcolorcodes.com/aston-villa-fc-color-codes/
const TEAM_COLOR_MAP: { [key in number]: string[] } = {
    // Arsenal
    1: ["#EF0107", "#063672"],
    // Aston Villa
    2: ["#95BFE5", "#670E36"],
    // Brentford: https://encycolorpedia.com/teams/football/efl-championship/brentford-f-c
    3: ["#e30613", "#140e0c"],
    // Brighton
    4: ["#0057B8", "#FFCD00"],
    // Burnley
    5: ["#6C1D45", "#99D6EA"],
    // Chelsea
    6: ["#034694", "#FFFFFF"],
    // Crystal Palace
    7: ["#1B458F", "#C4122E"],
    // Everton
    8: ["#003399", "#FFFFFF"],
    // Leicester
    9: ["#003090", "#FDBE11"],
    // Leeds
    10: ["#FFFFFF", "#FFCD00"],
    // Liverpool
    11: ["#C8102E", "#00B2A9"],
    // Man City
    12: ["#6CABDD", "#FFFFFF"],
    // Man Utd
    13: ["#DA291C", "#FBE122"],
    // Newcastle
    14: ["#241F20", "#FFFFFF"],
    // Norwich
    15: ["#FFF200", "#00A650"],
    // Southampton
    16: ["#D71920", "#130C0E"],
    // Spurs
    17: ["#FFFFFF", "#132257"],
    // Watford
    18: ["#FBEE23", "#ED2127"],
    // West Ham
    19: ["#7A263A", "#1BB1E7"],
    // Wolves
    20: ["#FDB913", "#231F20"],
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const response = await fetch(
    "https://fantasy.premierleague.com/api/bootstrap-static/"
  )
  const obj = await response.json() as Response
  const teams = obj.teams.map((team: Team) => {
    const { id, short_name, name } = team
    return { id, short_name, name, color: TEAM_COLOR_MAP[id] || '#FFFFFF' }
  })
  res.status(200).json({ teams });
}
