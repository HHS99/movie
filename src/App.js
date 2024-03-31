import PropTypes from 'prop-types';

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h5>{rating}/5.0</h5>
      <img src={image} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    rating: 5.0,
    image: 'https://i.namu.wiki/i/PMQCUWKYrw8HkdzjcuXR6bviYrG4VkwbSdVlDXuOm6_KbwU-uyxNeFPft4ZyXtr43yy-m3AASaT5aJB-mk9ift14Gs0DsFwxziVpn9ks42qQvO24SyR2okgUxQTrMjZgsABD99ACUiMhqcdq8S8_Yg.webp'
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    rating: 3.0,
    image: 'https://i.namu.wiki/i/okL4sKqvG4SrDUMVsra9lFkPD8RbOWQKzILoyDmBq8Y5EsaI-F-ChMRAXzCNfaF0fjKnotGG8JF11fJB83D9GS-l5sKtjEOA-HSMGjx8Knjjh23pD1nv4AxJU3XUKhXCjejqhFabWAPWxttF7Cnwfg.webp'
  }
];

function renderFood(dish) {
  return (<Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />)
}

function App() {
    return (
      <div>
        {foodILike.map(renderFood)}
      </div>
    )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;
