import './index.css'

const Item = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails
  return (
    <li className="list-item">
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default Item
