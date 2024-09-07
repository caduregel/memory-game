function Card({ id, name, image, setClicked }) {

  return (
    <div onClick={() => { setClicked(id) }}>
      <p>{name}</p>
      <p>{image}</p>
    </div>
  )
}

export default Card