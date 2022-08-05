const router = require("express").Router();
const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const { User, Trip } = require("../../models");

// CREATE a trip
router.post("/", async (req, res) => {
  try {
    let finaldata;
    var sloc = "london";
    var eloc = "atlanta";
    var sdate = "2022-11-15";
    var edate = "2022-11-16";
    var method = "CAR";
    console.log("we searching");
    var dummuri;
    const urihotel =
      "https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations";
    const uriairport =
      "https://priceline-com-provider.p.rapidapi.com/v1/flights/locations";
    const uricars =
      "https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/locations";
    let origindata;
    let destindata;
    if (method === "HOTEL") {
      dummuri = urihotel;
    }
    if (method === "AIRPORT") {
      dummuri = uriairport;
    }
    if (method === "CAR") {
      dummuri = uricars;
    }
    if (method === "HOTEL") {
      var options = {
        method: "GET",
        url: dummuri,
        params: { name: sloc, search_type: method },
        headers: {
          "X-RapidAPI-Key":
            "f4b4d02dc6msh7290f78fa18e2c8p1a94f7jsn8cb6126b8807",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      };
    } else {
      var options = {
        method: "GET",
        url: dummuri,
        params: { name: sloc },
        headers: {
          "X-RapidAPI-Key":
            "f4b4d02dc6msh7290f78fa18e2c8p1a94f7jsn8cb6126b8807",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      };
    }
    let startvar = await axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    if (method === "HOTEL") {
      dummuri = urihotel;
    }
    if (method === "AIRPORT") {
      dummuri = uriairport;
    }
    if (method === "CAR") {
      dummuri = uricars;
    }
    if (method === "HOTEL") {
      var options2 = {
        method: "GET",
        url: dummuri,
        params: { name: eloc, search_type: method },
        headers: {
          "X-RapidAPI-Key":
            "f4b4d02dc6msh7290f78fa18e2c8p1a94f7jsn8cb6126b8807",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      };
    } else {
      var options2 = {
        method: "GET",
        url: dummuri,
        params: { name: eloc },
        headers: {
          "X-RapidAPI-Key":
            "f4b4d02dc6msh7290f78fa18e2c8p1a94f7jsn8cb6126b8807",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      };
    }
    let destvar = await axios
      .request(options2)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    if (method == "AIRPORT") {
      var options = {
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v2/flight/roundTrip",
        params: {
          departure_date: sdate + "," + edate,
          adults: "1",
          sid: "iSiX639",
          destination_airport_code: startvar[0].id + "," + destvar[0].id,
          origin_airport_code: destvar[0].id + "," + startvar[0].id,
        },
        headers: {
          "X-RapidAPI-Key":
            "f4b4d02dc6msh7290f78fa18e2c8p1a94f7jsn8cb6126b8807",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      };

      finaldata = await axios
        .request(options)
        .then(function (response) {
          return response.data.getAirFlightRoundTrip.results.air_search_rsp;
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    if (method == "HOTEL") {
      var options = {
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v1/hotels/search",
        params: {
          sort_order: "HDR",
          location_id: destvar[0].cityID,
          date_checkout: edate,
          date_checkin: sdate,
          star_rating_ids: "3.0,3.5,4.0,4.5,5.0",
          rooms_number: "1",
          amenities_ids: "FINTRNT,FBRKFST",
        },
        headers: {
          "X-RapidAPI-Key":
            "f4b4d02dc6msh7290f78fa18e2c8p1a94f7jsn8cb6126b8807",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      };

      finaldata = await axios
        .request(options)
        .then(function (response) {
          hold2data = response.data;
          return hold2data;
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    if (method == "CAR") {
      var options = {
        method: "GET",
        url: "https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/search",
        params: {
          location_pickup: destvar[0].cityID,
          date_time_return: edate + " 13:00:00",
          date_time_pickup: sdate + " 13:00:00",
          location_return: destvar[0].cityID,
        },
        headers: {
          "X-RapidAPI-Key":
            "f4b4d02dc6msh7290f78fa18e2c8p1a94f7jsn8cb6126b8807",
          "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
        },
      };

      finaldata = await axios
        .request(options)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {});
    }

    var object = {
      Price: "1",
      Location: "test2",
      Reviews: "test2",
      Locations: finaldata.returnDateTime,
    };
    const completedtripdata = await Completedtrip.create(object);
    res.status(200).json(completedtripdata);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET all trips
router.get("/", async (req, res) => {
  try {
    const tripdata = await Trip.findAll({
      include: [{ model: Trip }, { model: User }],
    });
    res.status(200).json(tripdata);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single trip
router.get("/:id", async (req, res) => {
  try {
    const tripdata = await Trip.findByPk(req.params.id, {
      include: [{ model: Trip }, { model: User }],
    });
    if (!tripdata) {
      res.status(404).json({ message: "No trip found with that id!" });
      return;
    }
    res.status(200).json(tripdata);
  } catch (err) {
    res.status(500).json(err);
  }
});


// DELETE a Trip
router.delete("/:id", async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tripData) {
      res.status(404).json({ message: "No trip found with that id!" });
      return;
    }

    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
