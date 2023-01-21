// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Team } from '../../types/types'

type Response = {
    teams: Team[]
}

// REF: https://teamcolorcodes.com/aston-villa-fc-color-codes/
const TEAM_COLOR_MAP: { [key in string]: string[] } = {
    // Arsenal
    'Arsenal': ["#EF0107", "#063672"],
    // Aston Villa
    'Aston Villa': ["#95BFE5", "#670E36"],
    // Brentford: https://encycolorpedia.com/teams/football/efl-championship/brentford-f-c
    'Brentford': ["#e30613", "#140e0c"],
    // Brighton
    'Brighton': ["#0057B8", "#FFCD00"],
    // Burnley
    'Burnley': ["#6C1D45", "#99D6EA"],
    // Chelsea
    'Chelsea': ["#034694", "#FFFFFF"],
    // Crystal Palace
    'Crystal Palace': ["#1B458F", "#C4122E"],
    // Everton
    'Everton': ["#003399", "#FFFFFF"],
    // Leicester
    'Leicester': ["#003090", "#FDBE11"],
    // Leeds
    'Leeds': ["#FFFFFF", "#FFCD00"],
    // Liverpool
    'Liverpool': ["#C8102E", "#00B2A9"],
    // Man City
    'Man City': ["#6CABDD", "#FFFFFF"],
    // Man Utd
    'Man Utd': ["#DA291C", "#FBE122"],
    // Newcastle
    'Newcastle': ["#241F20", "#FFFFFF"],
    // Norwich
    'Norwich': ["#FFF200", "#00A650"],
    // Southampton
    'Southampton': ["#D71920", "#130C0E"],
    // Spurs
    'Spurs': ["#FFFFFF", "#132257"],
    // Watford
    'Watford': ["#FBEE23", "#ED2127"],
    // West Ham
    'West Ham': ["#7A263A", "#1BB1E7"],
    // Wolves
    'Wolves': ["#FDB913", "#231F20"],
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
    return { id, short_name, name, color: TEAM_COLOR_MAP[name] || ['#FF0000', 'FFFFFF'] }
  })
  res.status(200).json({ teams });
}
