import Button from "@material-ui/core/Button";

export default function Login(){
    return(
        <div className="container d-flex align-items-center justify-content-center flex-column">
            <h2 className="mb-4">
                The Notebook
            </h2>
            <Button variant="contained" color = "primary" style={{textTransform : "capitalize" }}>
                Sign In with Google
            </Button>

        </div>
    )
}