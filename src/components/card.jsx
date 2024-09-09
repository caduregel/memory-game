import '../styles/card.css'

function Card({ id, name, image, setClicked }) {

  return (
    <div onClick={() => { setClicked(id) }} className='card-container'>
      <img src={image} alt={"card: " + id} />
      <p>{name}</p>
    </div>
  )
}

export default Card