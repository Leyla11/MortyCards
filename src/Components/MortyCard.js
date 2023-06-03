const MortyCard = (props) => {
  return (
    <div className='MortyCard'>
    <img src={props.elemento.imagen} alt="personajes" />
    <h2>{props.elemento.nombre}</h2>
    <p>Edad: {props.elemento.edad}</p>
    <p>Aparicion: {props.elemento.fechaAparicion}</p>
    
    </div>

  )
}

export default MortyCard