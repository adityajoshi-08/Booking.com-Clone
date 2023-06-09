import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const [destination, setDestination] = React.useState("");

    const [date, setDate] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
    ]);

    const [openDate, setOpenDate] = React.useState(false)

    const [openOptions, setOpenOptions] = React.useState(false)
    const [options, setOptions] = React.useState({
        "adult":1,
        "children":0,
        "room":1
    })

    const navigate = useNavigate();

    function handleOption(name, opertaion) {
        setOptions(prev => {
            return {
                ...prev,
                [name]: opertaion === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

    function handleSearch() {
        navigate("/hotels", {state:{destination, date, options}})
    }

    

  return (
    <div className='header'>
        <div className="headerContainer">
        <div className="headerListContainer">
            <div className="headerList">

                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>

                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>

                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>

                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>

                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
                
            </div>
        </div>
       

            <h1 className="headerTitle">
                A lifetime of discounts? It's <span className='genius'>Genius</span>.
            </h1>

            <p className="headerDescription">
                Get rewarded for your travels - unlock instant savings of 10% or more with a free account
            </p>
            <button className="headerButton">Sign In / Register</button>

            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className='headerIcon' />
                    <input type="text" 
                        placeholder='Where are you going?' 
                        className='headerSearchInput' 
                        onChange={e => setDestination(e.target.value)}
                        />
                    
                </div>

                <div className="headerSearchItem">
                    <FontAwesomeIcon onClick={() => {setOpenDate(!openDate)}} icon={faCalendarDays} className='headerIcon' />
                    <span onClick={() => {setOpenDate(!openDate)}} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")}`} to {`${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                    {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    minDate={new Date()}
                />}
                </div>

                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} onClick={() => {setOpenOptions(!openOptions)}} className='headerIcon' />
                    <span className="headerSearchText" onClick={() => {setOpenOptions(!openOptions)}}>{`${options.adult} adult(s) • ${options.children} children • ${options.room} room(s)`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adults</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Rooms</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" disabled={options.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>
                        }
                </div>

                <div className="headerSearchItem">
                    <button className="headerButton" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
