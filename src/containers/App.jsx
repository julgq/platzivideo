// Para usar los hooks:
import React, { useState, useEffect } from 'react';
//import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';


const API = 'http://localhost:3000/initialState'

const App = () => {
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1>Loading...</h1> : (
        <div className="App">
            <Header />
            <Search />
            {initialState.mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        {initialState.mylist.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>
            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {initialState.originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
}


// con hooks:
/*
const App = () => {

    // inicializar el estado, videos es la variable que almacena el valor 
    // y setVideos es una función para actualizar el estado
    // El Hook useState nos devuelve un array con dos elementos: la primera posición es el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor.
    const [videos, setVideos] = useState([]);

    // useEffect para llamar a un API externo y actualizar el estado
    useEffect(() => {
        fetch('http://localhost:3000/initialState').then(response => response.json()).then(data => setVideos(data))
    }, []);

    //console.log(videos)


    return (
        <div className="App">
            <Header />
            <Search />
            {videos.mylist.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        {initialState.mylist.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {
                        videos.trends.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
};

// sin hooks:
/*
const App = () => (
    <div className="App">
        <Header />
        <Search />
        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem />
            </Carousel>
        </Categories>
        <Categories title="Originales de Platzi Video">
            <Carousel>
                <CarouselItem />
            </Carousel>
        </Categories>
        <Footer />
    </div>
);
*/

export default App;