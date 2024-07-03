import { toast } from "sonner";
import { useEffect, useState } from "react";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { createViewerToken } from "@/action/token";

export const useViewerToken = (hostdIdentity: string) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [identity, setIdentity] = useState("");

  useEffect(() => {
    const createToken = async () => {
      try {
        const viewerToken = await createViewerToken(hostdIdentity);
        setToken(viewerToken);

        const decoderToken = jwtDecode(viewerToken) as JwtPayload & {
          name?: string;
        };
        const name = decoderToken.name;
        const identity = decoderToken.sub;

        if (name) {
          setName(name);
        }

        if (identity) {
          setIdentity(identity);
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      }
    };

    createToken();
  }, [hostdIdentity]);

  return {
    token,
    name,
    identity,
  };
};
