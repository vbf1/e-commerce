import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import { EAppRoutes } from "../../config/routes";

export default function AuthContainer({ children }: PropsWithChildren) {
  const { replace } = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      replace(EAppRoutes.SIGN_IN);
    }
  }, [session.status, replace]);

  return children;
}
