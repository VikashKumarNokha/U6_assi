  import "./mobile.css" ; 

  export const Mobile = ({Key})=>{
        return (
            <div>
                <h1>Mobile Operating System</h1>
                <ul>
                {
                    Key.map((e)=>(
                        <li className="li">{e}</li>
                    ))
                }
                </ul>
            </div>
        )
  }