import React from 'react';
import GifLoader from 'react-gif-loader'
import loadingGif from '../img/Loading_icon.gif'

const Loader = () => {
    return (<div>
        <GifLoader
        loading={true}
        imageSrc={loadingGif}

        />
        </div>  );
}
 
export default Loader;