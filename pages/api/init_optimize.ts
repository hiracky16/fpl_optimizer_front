// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Element } from '../../types/types'
type Response = {
    elements: Array<Element>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const response = await fetch(
    `${process.env.BASE_OPTIMIZER_API_URL}/init`
  )
  const obj = await response.json() as Response
  res.status(200).json(obj);
}