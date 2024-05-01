import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Container, Grid } from '@mui/material';
import JobCard from './Components/Jobcard';
import Loader from './Components/Loader';
import { fetchJobs } from './Actions/jobActions';
import { spacing } from '@mui/system';
function App() {
  const dispatch = useDispatch();


  //code using event listener

  // useEffect(() => {
  //   dispatch(fetchJobs(10, 0)); // Fetch initial jobs when component mounts
  // }, [dispatch]);

  // const handleScroll = () => {
  //   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  //   const bottomScrollPosition = scrollTop + clientHeight;
  //   const scrollThreshold = scrollHeight - 250; 

  //   if (bottomScrollPosition >= scrollThreshold) {
  //     loadMoreJobs();
  //   }
  // };

  // const loadMoreJobs = useCallback(() => {
  //   if (!loading) {
  //     dispatch(fetchJobs(10, jobs.length)); // Fetch more jobs when scrolled to bottom
  //   }
  // }, [dispatch, loading, jobs.length]);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [handleScroll]);

  const { loading, jobs, error } = useSelector(state => state.jobs);
  const intersectionObserverRef = useRef();
  const lastRef = useRef()

  const handleIntersection = useCallback((entries) => {
    entries.forEach(entry => {
      console.log(jobs.length)
      if (entry.isIntersecting && !loading) {
        dispatch(fetchJobs(10, jobs.length));
      }
    });
  }, [jobs.length, loading, dispatch]);

  useEffect(() => {
    // Initialize Intersection Observer when component mounts
    intersectionObserverRef.current = new IntersectionObserver(
      handleIntersection,
      { threshold: 0.01 }
    );

    // Start observing the last element
    intersectionObserverRef.current.observe(lastRef.current);

    return () => {
      // Cleanup Intersection Observer when component unmounts
      intersectionObserverRef.current.disconnect();
    };
  }, [handleIntersection]);




  return (
    <div className="App">
      <Container>
        <Typography sx={{ mt: 2 }} variant="h4" align="center" gutterBottom>Job Listings</Typography>
        <Grid container spacing={4}>
          {/*Filters to be added */}
          {jobs.map((job, index) => {
            return (
              <Grid key={index} item xs={12} md={4}>
                <JobCard index={index} job={job} charactersLimit={100} />
              </Grid>
            )
          })}
        </Grid>
        <div style={{ height: "30px" }} ref={lastRef}></div>
        {loading && <Loader />}
      </Container>

    </div>
  );
}

export default App;
