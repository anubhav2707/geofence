## GeoFence Web app
### Developed as an assignment at CityMall
### Deployed at [vercel](https://geo-fence.vercel.app)

This app is developed in ReactJS. It takes your google login, and saves your device. It then shows your current latitude and longitude.
Location Geo Fencing

[Problem Statement]

Develop a (mobile application using react native/web app which works on mobile browser using react) and roam.ai sdk, which will be used for geo fencing. 


When a user of the mobile application opens the app for the first time, we will ask him to enter his current location. This should be done automatically via GPS.  
If the user doesn’t enter his location, we will show an error message saying “Enter your location to use the app” and will ask him again to enter his current location via GPS.
Once a user enters his location, we will do a geo fence on a 500m radius. This means, if the user goes outside of 500m of this location, we will show him an error message saying “You are out of range”. Once the user comes back in the range, we will show him a success message saying “You are in range”
There should be an option for the user to change his base gsp location as well. 
This data of location should be stored in the backend, can use mongodb and create rest apis. You are open to choose database structure (sql/nosql) everything. Basically user location should be stored in db. 

