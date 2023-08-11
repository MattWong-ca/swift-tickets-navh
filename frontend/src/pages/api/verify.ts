/*import type { NextApiRequest, NextApiResponse } from "next";
// import supabase from '../../utils/supabaseConfig';

export const config = {
  api: {
    externalResolver: true,
  },
};

export type VerifyReply = {
  code: string;
  detail: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<VerifyReply>
) {
  const hardcodedUserAddress = "0xC67041Fbad0022c720AB2E606D4d6ECC198c57F9"; // Replace with a valid Ethereum address
  const hardcodedVerificationStatus = true; // Replace with true or false based on verification status

  // Simulate a successful verification and update the user's verification status in the database
  try {
    const { data, error } = await supabase
      .from('users')
      .upsert(
        { address: hardcodedUserAddress, isWorldcoinVerified: hardcodedVerificationStatus },
        { onConflict: 'address' }
      );

    if (error) {
      return res.status(500).json({ code: "error", detail: "Database error" });
    }

    return res.status(200).json({ code: "success", detail: "Successfully updated verification status" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ code: "error", detail: "An error occurred" });
  }
}*/


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
      // This is where you should perform backend actions based on the verified credential, such as setting a user as "verified" in a database
      // For this example, we'll just return a 200 response and console.log the verified credential
      console.log(
        "Credential verified! This user's nullifier hash is: ",
        wldResponse.nullifier_hash
      );
      console.log(wldResponse);



      const userAddress = req.body.userAddress;
      console.log(userAddress)
      const { data, error } = await supabase
        .from('users')
        .upsert([{ address: userAddress, isWorldcoinVerified: true }]);

      // const userAddress = req.body.userAddress;
      // const { data, error } = await supabase
      //   .from('users')
      //   .upsert([{ address: "userAddress", isWorldcoinVerified: true }], { onConflict: 'address' });





      res.status(verifyRes.status).send({
        code: "success",
        detail: "This action verified correctly!",
      });
      
    } else {
      // This is where you should handle errors from the World ID /verify endpoint. Usually these errors are due to an invalid credential or a credential that has already been used.
      // For this example, we'll just return the error code and detail from the World ID /verify endpoint.
      res
        .status(verifyRes.status)
        .send({ code: wldResponse.code, detail: wldResponse.detail });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ code: "error", detail: "An error occurred" });
  }
}







/*

import type { NextApiRequest, NextApiResponse } from "next";
// import supabase from '../../utils/supabaseConfig';

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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<VerifyReply>
) {
  //   return new Promise((resolve, reject) => {
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
  fetch(verifyEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  }).then((verifyRes) => {
    verifyRes.json().then((wldResponse) => {
      console.log(
        `Received ${verifyRes.status} response from World ID /verify endpoint:\n`,
        wldResponse
      );
      if (verifyRes.status == 200) {
        // This is where you should perform backend actions based on the verified credential, such as setting a user as "verified" in a database
        // For this example, we'll just return a 200 response and console.log the verified credential
        console.log(
          "Credential verified! This user's nullifier hash is: ",
          wldResponse.nullifier_hash
        );

        // const userAddress = req.body.userAddress;
        // const { data, error } = await supabase
        //   .from('users')
        //   .upsert({ address: userAddress, isWorldcoinVerified: true }, { onConflict: ['address'] });


        res.status(verifyRes.status).send({
          code: "success",
          detail: "This action verified correctly!",
        });
        //   resolve(void 0);
      } else {
        // This is where you should handle errors from the World ID /verify endpoint. Usually these errors are due to an invalid credential or a credential that has already been used.
        // For this example, we'll just return the error code and detail from the World ID /verify endpoint.
        res
          .status(verifyRes.status)
          .send({ code: wldResponse.code, detail: wldResponse.detail });
      }
    });
  });
  //   });
}*/