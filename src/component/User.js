import React from 'react'
import PropTypes from 'prop-types'  
function User() {
  return (
    <div>
        <form>
    <input type="text"/>
    <button>
        Gönder
    </button>
        </form>
    </div>
  )
}
User.defaultProps = {
    name : "Bilgi Yok",
    salary : "Bilgi Yok",
    departmant : "Bilgi Yok"
}
User.propTypes = {
    name : PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    departmant : PropTypes.string.isRequired
}

export default User