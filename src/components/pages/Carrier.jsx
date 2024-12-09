import React, { useEffect, useState } from "react";
import { JobCard } from "../card/JobCard";

const Carrier = () => {
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
      const response = await fetch("https://advanced-engineering-admin.vercel.app/api/v1/carrier");
      const data = await response.json();
      setJobs(data?.data || []);
    };
  
    useEffect(() => {
      fetchJobs();
    }, []);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Join Our Team</h1>
          <p className="mt-4 text-lg">
            Discover exciting career opportunities and be a part of our journey.
          </p>
        </div>
      </header>
      <section className="container mx-auto px-4 py-16">
        {/* <h2 className="text-2xl font-bold text-center mb-8">Current Openings</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs?.map((job) => (
          <JobCard key={job?._id} job={job} />
        ))}
      </div>
      </section>
    </div>
  );
};

export default Carrier;
