// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Element } from '../../types/types'
import { GoogleAuth } from 'google-auth-library'
type Response = {
    elements: Array<Element>
}

const url = `${process.env.BASE_OPTIMIZER_API_URL}/init`;
const targetAudience: string = process.env.BASE_OPTIMIZER_API_URL || '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const auth = new GoogleAuth()
  const client = await auth.getIdTokenClient(targetAudience);
  const response = await client.request({url});
  const obj = await response.data as Response
  res.status(200).json(obj);
}
