import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { setFilter } from '../Actions/jobActions';



const RoleOptions = ["frontend", "ios", "backend", "android", "tech lead"]
const ExperienceOptions = Array(10).fill(0).map((ele, ind) => String(ind + 1));
const LocationOptions = ["delhi ncr", "mumbai", "bangalore", "hyderabad", "remote", "chennai"];
const minPayOptions = Array(8).fill(0).map((ele, ind) => ind * 10 + "L");

const Filters = () => {
    const dispatch = useDispatch();
    const { jobs } = useSelector(state => state.jobs);

    const [filters, setFilters] = useState({
        role: [],
        experience: null,
        location: [],
        remote: null,
        minpay: null
    });

    useEffect(() => {
        dispatch(setFilter(filters));
    }, [filters, dispatch, jobs.length]);
    
    const handleChange = (filterType) => (event, value) => {
        if (filterType === "role" || filterType === "location") {
            setFilters(prevFilters => ({
                ...prevFilters,
                [filterType]: [...value]
            }));
        } else {
            setFilters(prevFilters => ({
                ...prevFilters,
                [filterType]: value
            }));
        }
    }


    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginBottom: "30px" }}>
            <Autocomplete
                sx={{ minWidth: "19%" }}
                multiple
                id="tags-outlined"
                options={RoleOptions}
                getOptionLabel={(option) => option}
                value={filters.role}
                onChange={handleChange('role')}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Roles"
                        placeholder="Roles"
                    />
                )}
            />
            <Autocomplete
                sx={{ minWidth: "19%" }}
                id="tags-outlined"
                options={ExperienceOptions}
                getOptionLabel={(option) => option}
                value={filters.experience}
                onChange={handleChange('experience')}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Minimum Experience"
                        placeholder="Minimum Experience"
                    />
                )}
            />
            <Autocomplete
                sx={{ minWidth: "19%" }}
                multiple
                id="tags-outlined"
                options={LocationOptions}
                getOptionLabel={(option) => option}
                value={filters.location}
                onChange={handleChange('location')}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Location"
                        placeholder="Location"
                    />
                )}
            />
            <Autocomplete
                sx={{ minWidth: "19%" }}
                id="tags-outlined"
                options={["remote", "on-site"]}
                getOptionLabel={(option) => option}
                value={filters.remote}
                onChange={handleChange('remote')}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Remote"
                        placeholder="Remote"
                    />
                )}
            />
            <Autocomplete
                sx={{ minWidth: "19%" }}
                id="tags-outlined"
                options={minPayOptions}
                getOptionLabel={(option) => option}
                value={filters.minpay}
                onChange={handleChange('minpay')}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Minimum Base Pay"
                        placeholder="Min Base Pay"
                    />
                )}
            />
        </div>
    );
}

export default Filters;


