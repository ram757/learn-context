import React, { useState, useEffect } from 'react';
import { ThemeContextProvider } from '../../contexts/ThemeContext';
import Image from '../../components/Image';
import API from '../../services/API';

const ParentContainer = (props) => {
  const filters = new Set(['name', 'email', 'phone', 'username', 'website']);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await API.postFake({ zip: 12345 });
        setUserData(data.contact);
      } catch (e) {
        alert(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>Hello it's the Parent!</div>
      <div>
        {Object.keys(userData)
          .filter((d) => filters.has(d))
          .map((key) => {
            return (
              <div key={key}>
                <span>{key}</span>
                <span>{userData[key]}</span>
              </div>
            );
          })}
      </div>
      <ThemeContextProvider>
        <Image />
      </ThemeContextProvider>
    </div>
  );
};

export default ParentContainer;
