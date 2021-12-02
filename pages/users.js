
//our component recieves props during build time
function Users  ({users}){
    return (
        <>
            List of users
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

//we can fetch data from some source during build time if we attach in export  here
//and that data will be avaibale as props to the component

export default Users

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
    
    //we have to return an object 
    //which must contain props which is again an object
    //the object has any key value pair which is automatically passed as props to our component

    return {
        props:{
            users : data
        }
    }
}
