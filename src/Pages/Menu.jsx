import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Menu() {
  return (
    <>
      <Header />
      <div className='menu-poster'>
        <span className='menu-text'>MENU</span>
      </div>
      <div className='menus'>
      <div className='menu'>
        <div className='menu-container'>
        <h3>ENTRANTES</h3>
        <ul className='menu-info'>
            <li>Guacamole con Chips</li>
            <li>Sopes de Pollo</li>
            <li>Crema de Aguacate</li>
            <li>Taquitos de pescado al chipotle</li>
        </ul>
        </div>
        <div className='menu-container'>
        <h3>PLATO FUERTE</h3>
        <ul className='menu-info-main'>
            <li>Chile en nogada</li>
            <li>Tacos al pastor</li>
            <li>Torta ahogada</li>
            <li>Pescado zarandeado</li>
        </ul>
        </div>
        <div className='menu-container'>
        <h3>POSTRES</h3>
        <ul className='menu-info-main'>
            <li>Arroz con leche</li>
            <li>Flan de la casa</li>
            <li>Gelatina de horchata</li>
            <li>Helado de nogada</li>
        </ul>
        </div>
        </div>
        <span className='price'>PVP: 24€</span>
      </div>
      <Footer />
    </>
  )
}

export default Menu