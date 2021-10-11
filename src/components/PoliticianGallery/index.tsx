import React from 'react';

import PoliticianCard from "../PoliticianCard/index";

interface PolitianGallery {
    //deck: PolitianCard[];
};

interface PolitianGalleryProps {};

const PoliticianGallery = () => {
    return (
        <div>

            <div>
            
                <PoliticianCard />

            </div>

        </div>
    );
};

export default PoliticianGallery;