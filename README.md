## Food Call
Food Call provides the Augsburg University campus a way to give and receive leftover or unwanted food.  WIP

## Inspiration
Inspired by the MIT Media Lab FoodCam as shown in this Vox video about food waste.
https://www.vox.com/videos/2017/5/9/15594598/food-waste-dumbest-environmental 

## How it Works
Users can post information about leftover/unwanted food (e.g. title, image, location, description).  Food Call notifies users by email, tweets, and website.

## Features
- Users can sign up to receive an email with any new post or post leftover/unwanted food for others
- Food posts allow uploading of an image along with other basic information 
  - title
  - description
  - location
  - posted by
  - date/time
- Food Call is sent via Twitter, to subscribed users via email, and to the website.

TODO:
- [X] finish Sign Up Form
- [X] finish Food Call cards
- [X] fix Food Call cards metadata styling
- [ ] fix image src paths once know where/how storing images
- [ ] Select authentication (AWS-based vs Firebase vs oauth)
- [ ] select backend/database for storing food posts
- [ ] Figure out how long to keep posts on main page (max # displayed vs time period) and how to do auto-purge
- [ ] Research auto-tweets (Twitter API)