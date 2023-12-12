import PropsFunctional from "./Day4/PropsFunctional";
import PropsFunctionalEx1 from "./Day4/PropsFunctionalEx1";
import ArrowProps from "./Day4/ArrowProps";
import StateClassCom from "./Day4/StateClassCom";
import PropsClass from "./Day4/PropsClass";
export default function App()
{
  return(
    <div>
      <PropsFunctional name="sachin"></PropsFunctional>
    <PropsFunctionalEx1 college="skct" place="cb"/>
    <PropsClass college="skct"/>
    <ArrowProps place="iit"/>
    <StateClassCom/>
    </div>
  )
}
