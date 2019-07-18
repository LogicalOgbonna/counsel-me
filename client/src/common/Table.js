import React from "react";

export function ResultTable({ subjects, name, withGrade }) {
  return (
    <React.Fragment>
      <h3 className="text-muted text-center"> {name}</h3>
      <table className="table table-bordered">
        <thead>
          {withGrade ? (
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course Code</th>
              <th scope="col">Grade</th>
            </tr>
          ) : (
            <tr>
              <th scope="col">#</th>
              <th scope="col">Subject</th>
            </tr>
          )}
        </thead>
        <tbody>
          {subjects.length ? (
            subjects.map((data, index) => {
              if (withGrade)
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.name}</td>
                    <td>{data.grade.toUpperCase()}</td>
                  </tr>
                );
              else
                return (
                  <tr key={index + 1}>
                    <th scope="row">{index}</th>
                    <td>{data}</td>
                  </tr>
                );
            })
          ) : withGrade ? (
            <tr>
              <th scope="row">No Data</th>
              <td>No Data</td>
              <td>No Data</td>
            </tr>
          ) : (
            <tr>
              <th scope="row">No Data</th>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export function WorkTable({ data, notRiasec, name }) {
  return (
    <React.Fragment>
      <h3 className="text-muted text-center">
        {" "}
        <span className="text-bold">Area: </span>
        {data.area}
      </h3>
      {/* </label> */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course</th>
            <th scope="col">Code</th>
            {/* <th scope="col">Definition</th> */}
          </tr>
        </thead>
        <tbody>
          {data.course &&
            data.course.length &&
            data.course.map((res, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td className="text-capitalize">{res.name}</td>
                <td className="text-capitalize">{res.code}</td>
              </tr>
            ))}
          {/* <td>{data.definition}</td> */}
          {/* // : (
          //   <tr>
          //     <th scope="row">No Data</th>
          //     <td>No Data</td>
          //     <td>No Data</td>
          //     <td>No Data</td>
          //   </tr>
          // ) */}
        </tbody>
      </table>
      <h3 className="text-muted text-center">
        <span className="text-bold">Definition: </span>
        {data.definition}
      </h3>
    </React.Fragment>
  );
}

export function GenericTable({ data, name, type }) {
  const coursesTable = (
    <React.Fragment>
      <h3 className="text-muted text-center">{name}</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((data, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="text-capitalize">{data.name}</td>
                  <td className="text-capitalize">{data.code}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th scope="row" />
              <td>No Data</td>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
  );

  const userTable = (
    <React.Fragment>
      <h3 className="text-muted text-center">{name}</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? (
            data.map((data, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="text-capitalize">{data.name}</td>
                  <td className="">{data.email}</td>
                  <td className="text-capitalize">
                    {data.admin ? "Admin" : "User"}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th scope="row" />
              <td>No Data</td>
              <td>No Data</td>
              <td>No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
  );
  switch (type) {
    case "courses":
      return coursesTable;
    case "user":
      return userTable;
    default:
      return "";
  }
}
