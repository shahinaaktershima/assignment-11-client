import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Card from "./Card";



const Jobs = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
         fetch('https://job-project-server.vercel.app/jobs')
         .then(res=>res.json())
         .then(data=>setJobs(data))
    },[])
    const handleJobs=(jobtype)=>{
       
            const filteredJobs=jobs.filter(job=>job.type===jobtype)
            setJobs(filteredJobs)
        }
    return (
        <div className="my-6">
            
            <Tabs className='space-y-3'>
        <TabList className='grid grid-cols-5   gap-5'>
          <Tab className='btn'>All Jobs</Tab>
          <Tab className='btn' onClick={() => handleJobs("Remote Job")}>remote job</Tab>
          <Tab className='btn' onClick={() => handleJobs("Hybrid")}>Hybrid Jobs</Tab>
          <Tab className='btn' onClick={() => handleJobs("Onsite Job")}>Onsite Jobs</Tab>
          <Tab className='btn' onClick={() => handleJobs("Part Time")}>Part-Time Jobs</Tab>
          </TabList>
          <TabPanel className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5'>
       
        
       {
           jobs.map(job=><Card key={job._id} job={job} ></Card>)
       }

      </TabPanel>
      <TabPanel className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 '>
        
        {
            jobs.map(job=><Card key={job._id} job={job} ></Card>)
        }
       </TabPanel>
       <TabPanel  className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 '>
        
        
        {
            jobs.map(job=><Card key={job._id} job={job} ></Card>)
        }
       </TabPanel>
       <TabPanel className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 '>
        
         {
            jobs.map(job=><Card key={job._id} job={job} ></Card>)
        }
       </TabPanel>
       <TabPanel className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 '>
        
         {
            jobs.map(job=><Card key={job._id} job={job} ></Card>)
        }
       </TabPanel>
          </Tabs>
        </div>
    );
};

export default Jobs;