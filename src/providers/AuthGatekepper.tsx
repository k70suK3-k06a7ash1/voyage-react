import { PropsWithChildren, use } from "react";
import { AuthSession } from "../contexts/AuthSession";
import { Effect, Match } from "effect";
import { getSupanaseSessionProgram } from "../effects/getSupanaseSessionProgram";
import { Session } from "@supabase/supabase-js";
// import { Input } from "../components/Input";
import AuthForm from "../objects/Form";

export function AuthGatekepper({ children }: PropsWithChildren) {
  const session = use(Effect.runPromise(getSupanaseSessionProgram));

  const match = Match.type<Session | null>().pipe(
    Match.when(Match.null, (_) => (
      <>
        <AuthForm />
      </>
    )),
    Match.orElse((session) => (
      <AuthSession value={session}>{children}</AuthSession>
    ))
  );

  return match(session);
}