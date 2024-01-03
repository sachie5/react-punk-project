# Punk API Project

My project is to build a website using React based on the PunkAPI.

## Table of Contents

1. Requirements
2. Components and Containers
3. Key Code

## 1. Requirements

The project requirements were:
  1. Built entirely in React
  2. Repository on GitHub
  3. Use the PunkAPI

## 2. Components and Containers

The containers in this project are:
* NavBar - stores search and filters. 
* BeerInfo - stores individual beer information.
* Main - main body of the website

The components in this project are:
* CardList - maps to create card for each beer
* Card - individual card HTML for each beer
* FilterItem - each checkbox filter HTML
* FilterList - stores variety of FilterItem depending on desired filter in a form
* SearchBox - search filter by name component

## 3. Key Code 

* getBeers function = acquires data from the PunkAPI. The url only shows a maximum amount of data so used looping to store all the data in an array name beersData. This ensures that the filters apply to all the beers in the database.

  * ABV and Brewed before data are parameters in the API so these are used as parameters in the function.
  
    const getBeers = async (abv: number, date: string) => {
        const beersData: Beer[] = [];
        for (let pageNo = 1; pageNo < 11; pageNo++) {
            const url = `https://api.punkapi.com/v2/beers?brewed_before=${date}&abv_gt=${abv}&page=${pageNo}`;
            const res = await fetch(url);
            const data: Beer[] = await res.json();
            ; beersData.push(...data);
        }
        setBeers(beersData);
    };




