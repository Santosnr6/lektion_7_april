import './bookingForm.css';

function BookingForm({
    handleTravelClass, handleTickets, handleTitle, handleFirstName, handleLastName, handleApproved, handleSubmit
}) {
  return (
    <div className="form-wrapper">
        <h1>Åka tåg</h1>
        <form onSubmit={ handleSubmit }>
            <div className="form-group-radio">
                <input onChange={ handleTravelClass } value="1a klass" name="class" id="firstClass" type="radio" />
                <label htmlFor="firstClass">1:a klass</label>
            </div>
            <div className="form-group-radio">
                <input onChange={ handleTravelClass } value="2a klass" name="class" id="secondClass" type="radio" />
                <label htmlFor="secondClass">2:a klass</label>
            </div>

            <div className="form-group">
                <label htmlFor="tickets">Antal biljetter</label>
                <select onChange={ handleTickets } name="tickets" id="tickets">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="title">Titel</label>
                <select onChange={ handleTitle } name="title" id="title">
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Else">Else</option>
                </select>
            </div>
            <div className="form-group-span-four">
                <label htmlFor="firstName">Förnamn</label>
                <input onChange={ handleFirstName } id="firstName" type="text" />            
            </div>
            <div className="form-group-span-four">
                <label htmlFor="lastName">Efternamn</label>
                <input onChange={ handleLastName } id="lastName" type="text" />
            </div>
            <div className="form-group-checkbox">
                <input onChange={ handleApproved } id="approve" type="checkbox" />
                <label htmlFor="approve">Godkänner villkoren</label>
            </div>
            <div className="form-group-button">
                <input value="Boka biljetter" type="submit" />
            </div>
            
        </form>
    </div>
  )
}

export default BookingForm;
