import { useQuery } from "@tanstack/react-query";
import { patientApi } from "../api/patientApi";

export const usePatients = (userid: string, orgid: string = "614") => {
  return useQuery({
    queryKey: ["patients", userid],
    queryFn: async () => {
      const data = await patientApi.showRelatives({ userid, orgid });
      console.log("Fetched patients:", data);
      // return the actual list
      return data?.response?.list ?? [];
    },
  });
};
