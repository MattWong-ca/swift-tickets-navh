import type { NextApiRequest, NextApiResponse } from "next";
import supabase from '../../utils/supabaseConfig';

export const config = {
  api: {
    externalResolver: true,
  },
};

export type VerifyReply = {
  code: string;
  detail: string;
};

const verifyEndpoint = `${process.env.NEXT_PUBLIC_WLD_API_BASE_URL}/api/v1/verify/${process.env.NEXT_PUBLIC_WLD_APP_ID}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("Received request to verify credential:\n", req.body);
    const reqBody = {
      nullifier_hash: req.body.nullifier_hash,
      merkle_root: req.body.merkle_root,
      proof: req.body.proof,
      credential_type: req.body.credential_type,
      action: req.body.action,
      signal: req.body.signal,
    };
    console.log("Sending request to World ID /verify endpoint:\n", reqBody);

    const verifyRes = await fetch(verifyEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    const wldResponse = await verifyRes.json();

    if (verifyRes.status == 200) {
      const userAddress = req.body.userAddress;
      console.log(userAddress)
      const { data, error } = await supabase
        .from('users')
        .upsert([{ address: userAddress, isWorldcoinVerified: true }]);

      console.log(
        "Credential verified! This user's nullifier hash is: ",
        wldResponse.nullifier_hash
      );
      console.log(wldResponse);

      res.status(verifyRes.status).send({
        code: "success",
        detail: "This action verified correctly!",
      });

    } else {
      res
        .status(verifyRes.status)
        .send({ code: wldResponse.code, detail: wldResponse.detail });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ code: "error", detail: "An error occurred" });
  }
}