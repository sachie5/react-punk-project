# Punk API Project

This project is to build a website using React and SCSS, with information from the Punk API.

## Table of Contents

1. About
2. Requirements
3. Components and Containers
4. Key Code

## 1. About:
This simple website displays all beers included in the Punk API database. It also provides functionality that allows the results to be filtered by a search term or by the three categories of:

* High Alcohol ( ABV > 6%)
* Classic Range (first brewed before 2010)
* High Acidity (ph lower than 4)

You can also click on individual beers to see more regarding flavours, pairings and other extra information.

## 2. Requirements

The project requirements were:
  1. Built entirely in React
  2. Repository on GitHub
  3. Use the PunkAPI

## 3. Components and Containers

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

## 4. Key Code 

getBeers function = acquires data from the PunkAPI. The url only shows a maximum amount of data so used looping to store all the data in an array name beersData. This ensures that the filters apply to all the beers in the database.

ABV and Brewed before data are parameters in the API so these are used as parameters in the function.
  
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




