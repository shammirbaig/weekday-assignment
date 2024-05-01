import { Typography, Container, Grid } from '@mui/material';
import JobCard from './Components/Jobcard';
import { spacing } from '@mui/system';

//dummy data of each job card
const jsonData = `[{
  "jdUid": "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
  "jdLink": "https://weekday.works",
  "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  "maxJdSalary": null,
  "minJdSalary": null,
  "salaryCurrencyCode": null,
  "location": "chennai",
  "minExp": null,
  "maxExp": null,
  "jobRole": "tech lead"
},
{
  "jdUid": "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
  "jdLink": "https://weekday.works",
  "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  "maxJdSalary": null,
  "minJdSalary": null,
  "salaryCurrencyCode": null,
  "location": "chennai",
  "minExp": null,
  "maxExp": null,
  "jobRole": "tech lead"
},
{
  "jdUid": "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
  "jdLink": "https://weekday.works",
  "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  "maxJdSalary": null,
  "minJdSalary": null,
  "salaryCurrencyCode": null,
  "location": "chennai",
  "minExp": null,
  "maxExp": null,
  "jobRole": "tech lead"
},
{
  "jdUid": "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
  "jdLink": "https://weekday.works",
  "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  "maxJdSalary": null,
  "minJdSalary": null,
  "salaryCurrencyCode": null,
  "location": "chennai",
  "minExp": null,
  "maxExp": null,
  "jobRole": "tech lead"
},
{
  "jdUid": "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
  "jdLink": "https://weekday.works",
  "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  "maxJdSalary": null,
  "minJdSalary": null,
  "salaryCurrencyCode": null,
  "location": "chennai",
  "minExp": null,
  "maxExp": null,
  "jobRole": "tech lead"
},
{
  "jdUid": "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
  "jdLink": "https://weekday.works",
  "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  "maxJdSalary": null,
  "minJdSalary": null,
  "salaryCurrencyCode": null,
  "location": "chennai",
  "minExp": null,
  "maxExp": null,
  "jobRole": "tech lead"
},
{
  "jdUid": "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
  "jdLink": "https://weekday.works",
  "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  "maxJdSalary": null,
  "minJdSalary": null,
  "salaryCurrencyCode": null,
  "location": "chennai",
  "minExp": null,
  "maxExp": null,
  "jobRole": "tech lead"
},
{
  "jdUid": "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
  "jdLink": "https://weekday.works",
  "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  "maxJdSalary": null,
  "minJdSalary": null,
  "salaryCurrencyCode": null,
  "location": "chennai",
  "minExp": null,
  "maxExp": null,
  "jobRole": "tech lead"
},
{
  "jdUid": "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
  "jdLink": "https://weekday.works",
  "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  "maxJdSalary": null,
  "minJdSalary": null,
  "salaryCurrencyCode": null,
  "location": "chennai",
  "minExp": null,
  "maxExp": null,
  "jobRole": "tech lead"
},
{
  "jdUid": "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
  "jdLink": "https://weekday.works",
  "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
  "maxJdSalary": null,
  "minJdSalary": null,
  "salaryCurrencyCode": null,
  "location": "chennai",
  "minExp": null,
  "maxExp": null,
  "jobRole": "tech lead"
}
]`;
const jsObject = JSON.parse(jsonData);

function App() {
  return (
    <div className="App">
      <Container>
        <Typography sx={{ mt: 2 }} variant="h4" align="center" gutterBottom>Job Listings</Typography>
        <Grid container spacing={4}>
          {/*Filters to be added */}
          {jsObject.map((job, index) => {
            return (
              <Grid key={index} item xs={12} md={4}>
                <JobCard job={job} charactersLimit={100} />
              </Grid>
            )
          })}
        </Grid>
      </Container>

    </div>
  );
}

export default App;
