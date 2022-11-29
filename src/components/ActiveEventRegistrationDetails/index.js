import './index.css'

const registrationStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const renderInitialData = () => (
    <div className="eventRegistration-container">
      <p className="text-data">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="eventRegistration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="registerImage"
        alt="yet to register"
      />
      <p className="text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="btn">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="eventRegistration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="registeredImage"
        alt="registered"
      />
      <h1 className="text">You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div className="eventRegistration-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="registeredClosedImage"
        alt="registrations closed"
      />
      <h1 className="text">Registrations Are Closed Now!</h1>
      <p className="text">
        Stay tuned. We will reopen <br /> the registrations soon!
      </p>
    </div>
  )

  const renderEventRegistrationStatus = () => {
    switch (eventStatus) {
      case registrationStatusConstants.registered:
        return renderRegistered()
      case registrationStatusConstants.yetToRegister:
        return renderYetToRegister()
      case registrationStatusConstants.registrationClosed:
        return renderRegistrationClosed()
      default:
        return renderInitialData()
    }
  }

  return (
    <div className="registration-details">
      {renderEventRegistrationStatus()}
    </div>
  )
}
export default ActiveEventRegistrationDetails
