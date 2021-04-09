import {React, useState} from 'react';
import { transport } from 'carbon-footprint';
const emission = 1 * transport.fossilFueledCar;

function FootprintQuiz() {
    const [meters, setMeters] = useState(0)
    const submitForm = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={submitForm}> 
                <label>
                    Miles You've Traveled This Week
                    <input type="number" value={meters} onChange={(e)=>setMeters(e.target.value)}/>
                </label>
                <input type="submit"/>
            </form>
            {meters}
        </div>
    )
}

export default FootprintQuiz;