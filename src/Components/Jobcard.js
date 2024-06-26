import React, { useState } from 'react';
import "../../src/App.css";
import { spacing } from '@mui/system';
import { Card, CardContent, Typography, Button } from '@mui/material';



const JobCard = ({ job, charactersLimit, index }) => {
    const [expanded, setExpanded] = useState(false);
    const toggle = () => {
        setExpanded(prev => !prev)
    }
    return (
        <Card sx={{ borderRadius: "20px" }}>
            <CardContent>
                <div className='css-1ewacfc'> <Typography sx={{ fontSize: "9px", fontWeight: 400 }}>⏳ Posted 10 hours ago</Typography>
                </div>
                <Typography variant="h6" >{index + 1}.{job.jobRole.charAt(0).toUpperCase() + job.jobRole.substring(1)} Engineer</Typography>
                <Typography sx={{ fontSize: "11px" }} gutterBottom>{job.location.charAt(0).toUpperCase() + job.location.substring(1)}</Typography>
                <Typography sx={{ fontSize: "1rem" }} gutterBottom>About Company:</Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    {expanded ? job.jobDetailsFromCompany : `${job.jobDetailsFromCompany.slice(0, charactersLimit)}...`}
                    {!expanded && <Button onClick={toggle}>Read more</Button>}
                </Typography>
                <Typography sx={{ fontSize: "0.8rem" }} gutterBottom>Minimum Experience</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>{job.minExp || 0} years</Typography>
                <Button href={job.jdLink} variant="contained" className='easy-apply-button'> ⚡Easy Apply</Button>
                <Button href={job.jdLink} variant="contained" className='referral-button'  > Unlock Referral Asks</Button>
            </CardContent>
        </Card>
    );
};

export default JobCard;