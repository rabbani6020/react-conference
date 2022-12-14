// External Imports
import React from 'react';

// Internal Imports
import Location from '../card/Location';

const Locations = ({ locations }) => {
    return (
        <>
            {locations && (
                <div className='grid grid-cols-1 gap-[24px]'>
                    {locations.map((location, index) => (
                        <div key={index}>
                            <Location location={location} />
                        </div>
                    ))}
                </div>
            )}

        </>

    )
}

export default Locations