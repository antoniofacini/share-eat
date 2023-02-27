import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData } from '../../../public/mock-data'
import { IData } from '../../../types'

export default function handler(req: NextApiRequest, res: NextApiResponse<IData>) {
  res.status(200).json({ data: mockData })
}
