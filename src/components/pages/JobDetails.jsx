import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id)
  const [job, setJob] = useState(null);

  const fetchJobDetails = async () => {
    const response = await fetch(`https://advanced-engineering-admin.vercel.app/api/v1/carrier/${id}`);
    const data = await response.json();
    setJob(data?.data);
  };

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  if (!job) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">{job?.job_title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6 border space-y-4">
        <p className="">
          <strong>Designation:</strong> {job?.designation}
        </p>
        <p>
          <strong>Description:</strong> {job?.description}
        </p>
        <p>
          <strong>Experience:</strong> {job?.experience}
        </p>
        <p>
          <strong>Education Qualification:</strong> {job?.education_qualification}
        </p>
        <p>
          <strong>Salary Range:</strong> {job?.salary_range}
        </p>
        <p>
          <strong>Location:</strong> {job?.location}
        </p>
        <p>
          <strong>Application Deadline:</strong> {job?.application_deadline}
        </p>
        <p>
          <strong>Benefits:</strong> {job?.benefits}
        </p>
        <p>
          <strong>Contact Information:</strong> {job?.contact_information}
        </p>
        <p>
          <strong>Vacancy:</strong> {job?.vacancy}
        </p>
      </div>
    </div>
  );
};

export default JobDetails;
