import React from 'react'
import "./List.css"
import { useLocation } from 'react-router-dom'
import format from 'date-fns/format';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

export default function List() {
  const location = useLocation();
  console.log(location)

  const [destination] = React.useState(location.state.destination);
  const [date, setDate] = React.useState(location.state.date);
  const [options] = React.useState(location.state.options);
  const [openDate, setOpenDate] = React.useState(false)

  return (
    <div className='listContainer'>
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label htmlFor="">Destination</label>
            <input type="text" placeholder={destination}/>
          </div>
          <div className="lsItem">
            <label htmlFor="">Check-In Date </label>
            <span className='listDateSpan' onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")}`} to {`${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            {openDate && <DateRange 
            className='listDateRange'
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
            />}
          </div>

          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adults
                </span>
                <input min={1} type="number" className="lsOptionInput" placeholder={options.adult}/>
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Children
                </span>
                <input min={0} type="number" className="lsOptionInput" placeholder={options.children}/>
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Room(s)
                </span>
                <input min={1} type="number" className="lsOptionInput" placeholder={options.room}/>
              </div>
            </div>
          </div>
          <button>Search</button>
        </div>
        <div className="listResult">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
        </div>
      </div>
    </div>
  )
}
