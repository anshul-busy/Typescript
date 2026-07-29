

import "./styles/CardDashboard.css"


type info = {
heading:string,
num:string,
bottom:string
bgColor:string,
textcolor:string
}



const CardDashboard = ({heading,num,bottom,bgColor,textcolor}:info) => {
  return (
<div>

    <div className="container-p">
  
      <div className="p-box" style={{ backgroundColor: bgColor ,color:textcolor}}>
        <div className="head">
          <h2>{heading}</h2>
          <div className="btn-arrow">
            <h1>{num}</h1>
            <button>→</button>
          </div>
          <p>{bottom}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardDashboard