  import "./payment.css";

 export const Payment = ({Details})=>{
     console.log(Details);
     return(
         <div id="box" style={{background: Details.backcolor}}>
            <nav>
              <h4>{Details.date} </h4>
              <img src={Details.Image} alt="" />
            </nav>
             <button>Case Study</button>
             <h1>{Details.name}</h1>
             <h1>{Details.payment}</h1>
              <div id="arrow">
                  <h4>{Details.details}</h4>
                  <h1 id="arr">→</h1>
              </div>
         </div>
     )
 }