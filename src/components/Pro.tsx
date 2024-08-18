import "../style/st.css"
function Pro() {
  const vinland = 
  {
  name: 'Taza - I Have No Enemies',
  imag: 'https://http2.mlstatic.com/D_NQ_NP_2X_992158-MLA74934654150_032024-F.webp',
  precio: '$5000',
  t: '200',
  }
  return (
    <div className="table">
    <h1> {vinland.name} </h1>
    <div className="fot">
    <img src={vinland.imag} width={vinland.t} height={vinland.t}/>
    <div className="tex">
    <h2>Precio{vinland.precio}</h2>
    <h3>
    6 coutas de $1070
    <br></br>
    Llega el lunes
    <br></br>
    Color:Blanco 
    <br></br>
    Stock disponible
    </h3>
    </div>
    </div>
    </div>
  )
}

export default Pro