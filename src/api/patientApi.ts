import axiosClient, { qs } from "./axiosClient";

interface ShowRelativesPayload {
  userid: string;
  orgid: string;
}

export const patientApi = {
  showRelatives: async (payload: ShowRelativesPayload) => {
    // Convert payload to x-www-form-urlencoded
    const formBody = qs.stringify(payload);

    const response = await axiosClient.post("/showrelatives", formBody);
    return response.data;
  },
};
