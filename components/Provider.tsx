'use client'

import { ClientSideSuspense, LiveblocksProvider } from "@liveblocks/react"
import { ReactNode } from "react"
import Loader from "./Loader"

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <LiveblocksProvider authEndpoint="/api/liveblocks-auth" >
            <ClientSideSuspense fallback={<Loader/>}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    )
}

export default Provider