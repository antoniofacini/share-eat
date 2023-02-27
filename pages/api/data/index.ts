import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData } from '../../../public/mock-data'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({ data: mockData })
  }

  if (req.method === 'POST') {
    return res
      .status(200)
      .json({ body: req.body, message: 'Seus dados foram recebidos com sucesso' })
  }

  return res.status(405).json({ data: 'Method not allowed' })
}
