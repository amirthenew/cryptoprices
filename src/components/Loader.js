import React from 'react';
// import GifLoader from 'react-gif-loader'
// import loadingGif from '../img/Loading_icon.gif'
import styles from '../components/Loader.module.css'


const Loader = () => {
    return (<div className={styles.loading}>
<h1>

loading . . .</h1> 
        </div>  );
}
 
export default Loader;



// <GifLoader
// loading={true}
// imageSrc={loadingGif}
// className={styles.loading}

// />