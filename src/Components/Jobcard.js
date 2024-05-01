import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';



const JobCard = ({ job, charactersLimit }) => {
    const [expanded, setExpanded] = useState(false);
    const toggle = () => {
        setExpanded(prev => !prev)
    }
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>{job.jobRole}</Typography>
                <Typography variant="subtitle2" gutterBottom>{job.location}</Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    {expanded ? job.jobDetailsFromCompany : `${job.jobDetailsFromCompany.slice(0, charactersLimit)}...`}
                    {!expanded && <Button onClick={toggle}>Read more</Button>}
                </Typography>
                <Typography variant="body2" gutterBottom>{`${job.minExp}Min - ${job.maxExp}Max yrs of Experience`}</Typography>
                <Button href={job.jdLink} variant="contained" style={{ backgroundColor: '#67F0C5' }}>Apply</Button>
            </CardContent>
        </Card>
    );
};

export default JobCard;