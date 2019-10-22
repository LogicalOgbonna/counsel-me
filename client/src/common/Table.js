import React from "react";

export function ResultTable({ subjects, name, withGrade }) {
  return (
    <React.Fragment>
      <h3 className=" text-center"> {name}</h3>
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
  console.log(data)
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4">
        <h3 className=" text-center">
        {" "}
        <strong>
        <span className="text-bold">Total Point: </span>
        {data.totalPoint}</strong>
      </h3>
        </div>
        <div className="col-md-4">
        <h3 className=" text-center">
        {" "}
        <strong>
        <span className="text-bold">Average Point: </span>
        {data.averagePoint}</strong>
      </h3>
        </div>
        <div className="col-md-4">
        <h3 className=" text-center">
        {" "}
        <strong>
        <span className="text-bold">Percentage: </span>
        {data.averagePoint * 10}%</strong>
      </h3>
        </div>
      </div>
      
      {/* </label> */}
        <h3 className=" text-center mb-2 mt-2">
        {" "}
      <strong>
        <span className="text-bold">Area: </span>
        {data.area}
      </strong>
      </h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Grade</th>
            {/* <th scope="col">Definition</th> */}
          </tr>
        </thead>
        <tbody>
          {data.course &&
            data.course.length &&
            data.courses.map((res, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td className="text-capitalize">{res.code}</td>
                <td className="text-capitalize">{res.grade}</td>
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
      <h3 className=" text-center">
        <span className="text-bold">Definition: </span>
        {data.definition}
      </h3>
    </React.Fragment>
  );
}

export function GenericTable({ data, name, type }) {
  const coursesTable = (
    <React.Fragment>
      <h3 className=" text-center">{name}</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length ? (
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
      <h3 className=" text-center">{name}</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            {/* <th scope="col">Name</th> */}
            <th scope="col">Reg No</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length ? (
            data.map((data, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  {/* <td className="text-capitalize">{data.name}</td> */}
                  <td className="">{data.regNo}</td>
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

export const SpecializationTable = ({ name, data }) => (
  <React.Fragment>
    <h3 className=" text-center">{name}</h3>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Courses</th>
          {/* <th scope="col">Role</th> */}
        </tr>
      </thead>
      <tbody>
        {data && data.length ? (
          data.map((data, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td className="text-capitalize">{data.name}</td>
                <td className="">
                  {data &&
                    data.courses.map(course => (
                      <div key={course.name}>
                        {" "}
                        <p>
                          {course.name}, ({course.code})
                        </p>
                        {/* <p>Code: {course.code}</p> */}
                        {/* <br /> */}
                      </div>
                    ))}
                </td>
                {/* <td className="text-capitalize">
                  {data.admin ? "Admin" : "User"}
                </td> */}
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
