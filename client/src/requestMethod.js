import axios from "axios";

const BASE_URL = "http://localhost:5999/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTA3Y2Q2MTc0NGI0NjQ0ZTRiMDRjZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDIzNDk4NywiZXhwIjoxNjgwNDk0MTg3fQ.PGK4TxZTzMDScchHQtUdAetUhcUIPyACWJ9sbKdUAAM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Beaarer ${TOKEN}` },
});
