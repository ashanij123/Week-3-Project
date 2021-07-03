# Week 3 Assignment: Life Tracker

Submitted by: **Ashani Jewell**

Deployed Application: [Lifetracker Deployed Site](ADD_LINK_HERE)

## Application Features

### Core Features

- [x] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [x] If the user is logged in, it should display a **Sign Out** button. 
  - [x] If no user is logged in, it should display **Login** and **Register** buttons
  - [x] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [x] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [x] **Login Page:** A form that allows users to login with email and password.
- [x] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [x] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [x] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [x] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [x] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [x] The detailed activity page should display a feed of all previous tracked activities.
- [x] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [x] The activity tracked should be given a unique id for easy lookup.


  * [Table Schema](life-tracker-schema.sql) 

### Stretch Features

Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. (🚫 Remove this paragraph after adding walkthrough video)

<iframe 
src="https://www.loom.com/share/e6536189538f4a6faf9651eaaeaee9e7" frameborder="0" 
webkitallowfullscreen mozallowfullscreen allowfullscreen 
style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
</iframe>

<iframe 
src="https://www.loom.com/share/c02f3e4a3d464713a836c6fd1d8875f6" frameborder="0" 
webkitallowfullscreen mozallowfullscreen allowfullscreen 
style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
</iframe>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

One lab that helped me tremendously through navigating through the signin, signout and register components was the student store lab. This lab helps me to gain a better understanding of all the steps needed to make the authorization functions work and creating middleware components can help ensure that the data one user puts onto a page remains with only that user. This lab also gave me another opportunity to understand routes and models.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time I would try to make the Exercise Cards look a little better. I tried to focus first on the flexbox, which would put the box in a row format instead of the column format that it is now. Also, I would also try to do another activity since I think starting the first activity was probably the hardest part, so creating another wouldn't be that hard when using the same formatting.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

When doing the project demos I think my explanation as to why certain things, like the Exercise card and resetting the user wasn't working, went well and helped me to decode my errors after the demos were over. Something that didn't go as planned was the fact that I was getting "unathorization” error when trying to create the exercise card which I thought I had solved before demos. One thing that I saw my peers do that I thought was cool was the sleep activity that took the times a user went to sleep and woke up, and calculated the total hours slept.

### Open-source libraries used

- w3schools
- stackoverflow
- youtube
- github

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

I would like to give a huge shoutout to my group for such a kind and welcoming set of people. These people are Leonel and Henry!! They really believe in motto no man left behind.