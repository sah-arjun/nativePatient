import axiosClient, { qs } from "./axiosClient";

interface ShowRelativesPayload {
  userid: string;
  orgid: string;
}

export const patientApi = {
  showRelatives: async (payload: Partial<ShowRelativesPayload>) => {
    const state = await import("@/src/redux/store").then((m) =>
      m.default.getState()
    );
    const { userId, orgId } = state.auth;

    const body = qs.stringify({
      userid: payload.userid ?? userId,
      orgid: payload.orgid ?? orgId,
    });

    const res = await axiosClient.post("/showrelatives", body);
    return res.data;
  },
};
