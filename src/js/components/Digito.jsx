export const Digito = ({value}) => {

    return (
         <div className="col-md-1 col-sm-1 my-5">
        <div className="card h-100 bg-dark border border-danger">
          <div className="card-body">
            <h1 className="card-title text-light justify-content-center p-5"> {value} </h1>
          </div>
        </div>
      </div>
    );
};