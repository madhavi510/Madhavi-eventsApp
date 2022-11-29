// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onGetEventRegisteredStatus, isActive} = props
  const {id, registrationStatus, imageUrl, name, location} = eventDetails

  const onClickedEvent = () => {
    onGetEventRegisteredStatus(id, registrationStatus)
  }
  const eventClass = isActive ? 'activeClass' : 'nonActiveClass'
  return (
    <li className="eventItemsList">
      <button type="button" className={eventClass} onClick={onClickedEvent}>
        <img src={imageUrl} className="event-img" alt="event" />
      </button>
      <p className="eventName">{name}</p>
      <p className="place">{location}</p>
    </li>
  )
}
export default EventItem
