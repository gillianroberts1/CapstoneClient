import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const GroupWalkieForm = ({ onCreate }) => {
    const [stateGroupWalkies, setStateGroupWalkies] = useState({
        name: "",
        date: "",
        location: "",
        distance: 0,
        duration: 0,
    });

    // const handleChange = (event) => {
    //     let propertyName = event.target.name;
    //     let copiedGroupWalkie = { ...stateGroupWalkies };
    //     copiedGroupWalkie[propertyName] =
    //      event.target.value === "datetime-local"
    //      ? event.target.value : event.target.value;

    //     setStateGroupWalkies(copiedGroupWalkie);
    // };
    
    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedGroupWalkie = { ...stateGroupWalkies };
        copiedGroupWalkie[propertyName] = event.target.value;
        setStateGroupWalkies(copiedGroupWalkie);
    };


    const handleSubmit =  (event) => {
        event.preventDefault()
        onCreate(stateGroupWalkies);
     
        

        // onCreate(stateGroupWalkies);
        // handlePost();
    };

    const handleLocation = function (event) {
        // const index = parseInt(event.target.value)
        // const selectedLocation =location[parseInt(event.target.value)];
        const selectedLocation = event.target.value
        let copiedLocation = { ...stateGroupWalkies };
        copiedLocation['location'] = selectedLocation
        setStateGroupWalkies(copiedLocation)

    }

    // const handleLocation = function (event) {
    //     const selectLocation = event.target.value;
    //     setStateGroupWalkies((prevState) => ({
    //         ...prevState,
    //         location: selectLocation,
    //     }))

    //     // console.log(stateGroupWalkies);

    // };
   


    const locations = [
        "Kelvingrove",
        "Botanic Gardens",
        "Riverview Park",
        "Hyndford Glen Park",
        "Queens Park",
        "Pollok Country Park",
        "Roughholm Park",
        "Newlands Park",
        "Glasgow Green",
        "Alexandra Park",
        "Victoria Park",
        "Rogart Street Park",
        "Barrowland Park",
        "Springburn Park",
        "Ruchill Park",
        "Kelvin Meadows Park",
        "Summerston Park",
        "Eglinton Country Park"
       
      ];

      const locationNodes = locations.map((location, index) => {
        return(
        <option key={index} value={location}>
            {location}
        </option>
        )
        // console.log(location)
        // console.log(index)
        console.log(locationNodes);
      });
      

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Walk Name</label>

                <input type="text" name='name' placeholder='Enter walk name...'  onChange={handleChange} />

                <label htmlFor="date">Select date and time</label>
                <input type="datetime-local" name="date"  onChange={handleChange} />

                <label htmlFor="location">Location</label>
                <select name="location" id="location" value={stateGroupWalkies.location}  onChange={handleLocation}>
                   
                        <option value="select-location">
                           Select a Location
                        </option>
                    
                    {locationNodes}
                     
                       
                </select>

                <label htmlFor="distance">Distance (km)</label>
                <input type="number" min="1" max="60" name="distance" value={stateGroupWalkies.distance} onChange={handleChange} />

                <label htmlFor="duration">Duration (mins)</label>
                <input type="number" min="1" max="60" name="duration" value={stateGroupWalkies.duration} onChange={handleChange} />

                <input type="submit" value="Create New Meet" />
            </form>
        </div>
    );
};
// }

export default GroupWalkieForm;
