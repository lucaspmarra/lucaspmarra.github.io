import localPtBR from "@/i18n/pt-BR.json";
import axios from "axios";

const TOLGEE_API_URL =
  import.meta.env.VITE_TOLGEE_API_URL || "https://app.tolgee.io";
const TOLGEE_PROJECT_ID = import.meta.env.VITE_TOLGEE_PROJECT_ID;
const TOLGEE_API_KEY = import.meta.env.VITE_TOLGEE_API_KEY;

if (!TOLGEE_PROJECT_ID || !TOLGEE_API_KEY) {
  console.error(
    "Tolgee configuration is missing. Please check your environment variables."
  );
}

const tolgeeService = {
  async getTranslations(languages) {
    const instance = axios.create({
      baseURL: TOLGEE_API_URL,
      headers: {
        Accept: "application/json",
        "X-API-Key": TOLGEE_API_KEY,
      },
    });

    try {
      const response = await instance.get(
        `/v2/projects/${TOLGEE_PROJECT_ID}/translations/${languages.join(",")}`,
        {
          params: {
            structureDelimiter: ".",
          },
        }
      );

      return { ...response.data, "pt-BR": localPtBR };
    } catch (error) {
      console.error("Erro ao carregar traduções:", error);
      return { "pt-BR": localPtBR };
    }
  },
};

export default tolgeeService;
