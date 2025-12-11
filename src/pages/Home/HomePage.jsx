import { lazy } from "react";
import { Suspense } from "react";

const SubscribeLazy = lazy(() => import("../../components/Subscribe"));
const FirstBlock = lazy(()=> import("./blocks/FirstBlock"))
const SecondBlock = lazy(()=> import("./blocks/SecondBlock"))

export default function HomePage(){
    return(
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <FirstBlock/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <SecondBlock/>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <SubscribeLazy />   
            </Suspense>
        </>
    )
}