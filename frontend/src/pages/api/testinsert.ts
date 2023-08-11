import type { NextApiRequest, NextApiResponse } from 'next';
import supabase from '../../utils/supabaseConfig';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const newUser = { address: '0xB68918211aD90462FbCf75b77a30bF76515422CE', isWorldcoinVerified: true };

    const { data, error } = await supabase.from('users').insert([newUser]);

    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}