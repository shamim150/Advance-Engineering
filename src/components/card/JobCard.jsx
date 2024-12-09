/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export const JobCard = ({ job }) => {


  const navigate = useNavigate();


  return (
    <div className="bg-white w-[350px] shadow-md rounded-lg p-4 border">
      <h3 className="text-lg font-bold">{job?.job_title}</h3>
      <p>
        <strong>Designation:</strong> {job?.designation}
      </p>
      <p>
        <strong>Location:</strong> {job?.location}
      </p>
      <p>
        <strong>Salary:</strong> {job?.salary_range}
      </p>
      <p>
        <strong>Vacancies:</strong> {job?.vacancy}
      </p>
      <button
        onClick={() => navigate(`/carrier/${job?._id}`)}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        View Details
      </button>
    </div>
  );
};
