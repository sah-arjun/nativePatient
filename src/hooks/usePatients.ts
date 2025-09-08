import { useQuery } from "@tanstack/react-query";
import { patientApi } from "../api/patientApi";

export const usePatients = () =>
  useQuery({
    queryKey: ["patients"],
    queryFn: async () => {
      const data = await patientApi.showRelatives({});
      // return the list of relatives
      return data?.response?.list ?? [];
    },
  });
