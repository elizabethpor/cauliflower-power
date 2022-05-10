import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import RecipeDetail from "./RecipeDetail";

function Recipe({recipe}) {

    const id = recipe.id
    return (
        <ImageListItem key={recipe.id}>
            <ImageListItemBar
            sx={{ background: '#1E3149' }}
                title={recipe.name}
                subtitle={recipe.allergy_code}
                actionIcon={
                    <Link to={`/recipes/${id}`}>
                    <IconButton 
                    sx={{ color: '#C93818' }}
                    aria-label={`info about ${recipe.name}`}
                    >
                    <InfoIcon />
                    </IconButton>
                    </Link>
                }
            />
        </ImageListItem>
    )
};

export default Recipe;