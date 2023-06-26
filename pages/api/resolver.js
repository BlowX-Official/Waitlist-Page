// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default async function handler(req, res) {
  const { method, query, body, headers } = req;
  const token = headers?.authorization;
  const url = query.url;
  const config = {
    method,
    url,
  };
  if (token) {
    config.headers = {
      Authorization: token,
      ContentType: 'application/json',
    };
  }
  if (body) config.data = body;

  try {
    const response = await axios(config);
    res.status(200).json(response.data);
  } catch (error) {
    const { response } = error;
    res.status(response?.status || 500).json(response?.data);
  }
}
