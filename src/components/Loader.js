import React from 'react';
import GifLoader from 'react-gif-loader'
import loadingGif from '../img/Loading_icon.gif'
import styled from 'styled-components';

const MyDiv = styled.div`
background-color : #fff;


`

const Loader = () => {
    return (<MyDiv>
        <GifLoader
        loading={true}
        imageSrc={loadingGif}

        />
        </MyDiv>  );
}
 
export default Loader;