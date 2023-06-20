import { useSession, signIn, signOut } from "next-auth/react";
import SendSMSForm from './sendSMSForm';
import C2BPayment from "./c2bForm";
import B2CForm from "./b2cForm";

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100vh',
          }}

        >
          <h1>Hello, {session.user.name}!</h1> <br />
          <SendSMSForm /><br></br>
          <C2BPayment /><br></br>
          <B2CForm /><br></br>

          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    )
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  )
}