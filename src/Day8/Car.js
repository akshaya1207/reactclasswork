
export default function Car({carName})
{
    if(carName==="JCB")
    {
        throw new Error("JBC is not a car")
    }
    return
(
        <div>
{carName}
        </div>
    )
}