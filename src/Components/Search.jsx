import  { useState } from 'react';
import './Search.css';
import prop1 from '../assets/img001.jpg';
import prop2 from '../assets/img2.jpg';
import prop3 from '../assets/img3.jpg';
import prop4 from '../assets/img4.jpg';
import prop5 from '../assets/img5.png';
import prop6 from '../assets/img6.jpg';
import prop7 from '../assets/img7.jpeg';
import prop8 from '../assets/img8.jpg';

const PropertyList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [properties] = useState([
    { id: 1, name: 'pune', img: prop1 },
    { id: 2, name: 'pune', img: prop2 },
    { id: 3, name: 'banglore', img: prop3 },
    { id: 4, name: 'banglore', img: prop4 },
    { id: 5, name: 'banglore', img: prop5 },
    { id: 6, name: 'banglore', img: prop6 },
    { id: 7, name: 'jaipur', img: prop7 },
    { id: 8, name: 'jaipur', img: prop8 },
    // Add more properties as needed
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='searchdiv'>
      <h2>Search your property here city wise</h2>
      <input type="text" placeholder="Search properties in jaipur , Pune , Banglore" value={searchQuery} onChange={handleSearchChange} />

      {filteredProperties.map(property => (
        <div className="cardnew" key={property.id}>
          <img src={property.img} className="card-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{}</h5>
            <p className="card-text">Some quick example of property in {property.name}.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList