import PropTypes from 'prop-types'

function User({name, surname, isLoggedIn, age, friends, address}){

    if(!isLoggedIn){
        return <div>You dont access your account!</div>
    }
    return(
      <>
     
    {/* <h1>
        {isLoggedIn ? `${name} ${surname} (${age})`:
         "You dont access your account!"} 
         </h1> */}

         <h1>{`${name} ${surname} ${age}`}</h1>

         {address.title} {address.zip}
        <br />
        <br />
        {
          friends && friends.map((friend =>{
                return <div key={friend.id}>{friend.name} {friend.age}</div>
            }))
        }
         </>
    )
}


function User ({name, surname, isLoggedIn, age, friends, address}){
    if(!isLoggedIn){
        return <div>You dont access your account!</div>
    }

    return(
        <>
         <h1>{`${name}, ${surname}, ${age}, ${isLoggedIn}, ${address}`}</h1>
         {address.title} {address.zip}
         <br />
         <br />

         {
           friends && friends.map((friend, index => {
            return <div key={index}>{friend.name} {friend.age}</div>
           }))
         }
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType(
        [
            PropTypes.string, PropTypes.number
        ]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })

}



User.defaultProps = {
    name: "Nameless",
    isLoggedIn: false
}



export default User