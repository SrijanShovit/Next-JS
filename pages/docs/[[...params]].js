//params is just a convention meaning parameters
import {useRouter} from 'next/router'

function Doc(){
    const router = useRouter()
    //params refer to params in file name
    //unlike dynamic routes where id is string params is an array
    //initiallu params is undefined due to pre-rendering feature of Next.js
    //so as a quick fix we can initialise params to be an empty array

    const {params = []} = router.query
    console.log(params)

    if (params.length === 2){
        return (
            <h1>
                Viewing docs for feature {params[0]} and concept {params[1]}
            </h1>
        )
    }else if (params.length === 1){
        return (
            <h1>
                Viewing docs for feature {params[0]}
            </h1>
        )
    }

    //in other cases
    return <h1>Docs home page</h1>
}

export default Doc

//this page will be rendered for all URL segments starting with docs

//it might also happen that we write only docs and not give parameters like docs/1
// then to avoid returning 404 page we can use optional catch all routes by enclosing file name with square brackets 