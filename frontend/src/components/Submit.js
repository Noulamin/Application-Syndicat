import * as React from 'react'
import Button from '@mui/material/Button';


const Submit = () => {
    return (
        <div className="mt-4">
            <Button
                variant="contained"
                type="submit"
                className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">create
                account</Button>
        </div>
    )
}

export default Submit