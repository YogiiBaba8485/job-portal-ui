import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'



const App = () => {


 const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "₹1,80,000",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "₹3,20,000",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "10 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "₹2,40,000",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "₹1,60,000",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "₹3,50,000",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "₹2,10,000",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "₹2,80,000",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    company: "Nvidia",
    datePosted: "1 week ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "₹4,00,000",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    company: "OpenAI",
    datePosted: "2 days ago",
    post: "ML Research Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "₹4,50,000",
    location: "Remote, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/spacex.com",
    company: "SpaceX",
    datePosted: "5 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "₹2,50,000",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    company: "Spotify",
    datePosted: "8 days ago",
    post: "Frontend Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "₹1,40,000",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    datePosted: "1 week ago",
    post: "Mobile App Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "₹2,20,000",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    company: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Cloud Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "₹2,70,000",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    datePosted: "12 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "₹1,20,000",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/sap.com",
    company: "SAP",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "₹1,90,000",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/cisco.com",
    company: "Cisco",
    datePosted: "2 weeks ago",
    post: "Network Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "₹85,000",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/ibm/ibm_PNG19658.png",
    company: "IBM",
    datePosted: "3 days ago",
    post: "AI Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "₹1,70,000",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/intel.com",
    company: "Intel",
    datePosted: "5 days ago",
    post: "Hardware Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "₹3,10,000",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amd.com",
    company: "AMD",
    datePosted: "1 week ago",
    post: "Chip Design Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "₹3,60,000",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/stripe.com",
    company: "Stripe",
    datePosted: "2 days ago",
    post: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "₹4,20,000",
    location: "Remote, India"
  }
];

  console.log(jobs);
  return (
    <div className='parent'>
      {jobs.map(function(elem){
        return <Card company={elem.company} post={elem.post} datePosted={elem.datePosted} tag1={elem.tag1}
        tag2={elem.tag2} brandLogo={elem.brandLogo} pay={elem.pay} location={elem.location}/>
      })}
    </div>
    
  )
}

export default App
